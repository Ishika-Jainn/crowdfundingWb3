import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), nodePolyfills()],
  define: {
    "process.env": {},
  },
  build: {
    target: "esnext", // 👈 allows native BigInt
  },
  optimizeDeps: {
    esbuildOptions: {
      target: "esnext", // 👈 ensures deps like thirdweb keep BigInt
    },
  },
});

