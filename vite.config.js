
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // /mean my production start from this path#
  base:
    command === "build"
      ? "/react-node-ai-platform/"
      : "/",
}));