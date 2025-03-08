import { Inngest } from "inngest";

// Create a client to send and receive events
export const inngest = new Inngest({
  id: "auralis",
  // Only enable in server environment
  middleware: typeof window === "undefined" ? [] : undefined,
  isProduction: process.env.NODE_ENV === "production",
  schemas: {
    // Optional: Add schemas for type-safe events
  },
});
