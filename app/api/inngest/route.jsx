import { serve } from "inngest/next";
import { inngestServer } from "@/inngest/server";
import { helloWorld, GenerateVideoData } from "@/inngest/functions";

export const runtime = "edge"; // Use Edge Runtime

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    helloWorld,
    GenerateVideoData,
    /* your functions will be passed here later! */
  ],
});
