"use client";

import React, { useContext, useEffect, useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/configs/firebaseConfig";
import { AuthContext } from "./_context/AuthContext";
import { useConvex } from "convex/react";

function Provider({ children }) {
  const [user, setUser] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const client = useConvex();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      console.log("Firebase user:", firebaseUser);

      if (firebaseUser) {
        // Ensure we have valid data before setting the user
        const validUser = {
          ...firebaseUser,
          email: firebaseUser.email || "",
          displayName: firebaseUser.displayName || "",
          // Ensure photoURL is never an empty string
          photoURL: firebaseUser.photoURL || null,
          pictureURL: firebaseUser.photoURL || null,
        };

        setUser(validUser);

        try {
          // Make sure all required fields are provided
          if (validUser.email && validUser.displayName && validUser.photoURL) {
            const result = await client.mutation("users:CreateNewUser", {
              email: validUser.email,
              name: validUser.displayName,
              pictureURL: validUser.photoURL,
            });
            setUserInfo(result);
          } else {
            console.error(
              "Missing required user information for CreateNewUser"
            );
          }
        } catch (error) {
          console.error("Error creating user:", error);
        }
      } else {
        setUser(null);
        setUserInfo(null);
      }
    });
    return () => unsubscribe();
  }, [client]);

  // Use userInfo if available, otherwise use the user state
  const contextValue = { user: userInfo || user };

  return (
    <div>
      <AuthContext.Provider value={contextValue}>
        <NextThemesProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </NextThemesProvider>
      </AuthContext.Provider>
    </div>
  );
}

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  return context;
};

export default Provider;
