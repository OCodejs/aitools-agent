import { defineAgent } from "eve";

export default defineAgent({
  model: "google/gemini-2.5-flash-lite",
  modelOptions: {
    providerOptions: {
      gateway: { zeroDataRetention: true },
    },
  },
});
