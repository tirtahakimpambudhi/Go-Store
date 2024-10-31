// /// <reference types="vitest" />
// import process from "node:process";
// import { defineConfig, loadEnv } from "vite";
// import react from "@vitejs/plugin-react";
//
// // https://vitejs.dev/config/
// // eslint-disable-next-line no-unused-vars
// export default defineConfig(({ _, mode }) => {
//   const env = { ...process.env, ...loadEnv(mode, process.cwd(), "") };
//   const port = parseInt(env.VITE_PORT) || 5173;
//   const host = env.VITE_HOST || "localhost";
//
//   return {
//     plugins: [react()],
//     test: {
//       environment: "jsdom",
//       setupFiles: "./tests/setupTests.js",
//       coverage: {
//         provider: "v8",
//         reporter: ["text", "json", "html"],
//       },
//     },
//     define: {
//       ...Object.keys(env).reduce((prev, key) => {
//         const sanitizedKey = key.replace(/[^a-zA-Z0-9_]/g, "_");
//
//         prev[`process.env.${sanitizedKey}`] = JSON.stringify(env[key]);
//
//         return prev;
//       }, {}),
//     },
//     server: {
//       port,
//       host,
//     },
//   };
// });
/// <reference types="vitest" />
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  base: "Go-Store",
  plugins: [
    react(),
    svgr({
      // svgr options: https://react-svgr.com/docs/options/
      svgrOptions: {
        exportType: "default",
        ref: true,
        svgo: false,
        titleProp: true,
      },
      include: "**/*.svg",
    }),
  ],
  test: {
    environment: "jsdom",
    setupFiles: "./tests/setupTests.js",
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
    },
  },
});
