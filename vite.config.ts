import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import packageJson from "./package.json";
// Build-time metadata
const appVersion = packageJson.version;
const buildTime = new Date().toISOString();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // 👈 Tailwind v4 plugin
  ],
   define: {
    __APP_VERSION__: JSON.stringify(appVersion),
    __BUILD_TIME__: JSON.stringify(buildTime)
  }
});
