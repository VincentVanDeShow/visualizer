import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  if (command === "serve") {
    return {
      plugins: [
        vue({
          reactivityTransform: true,
          template: {
            compilerOptions: {
              // treat all tags with a dash as custom elements
              isCustomElement: (tag) => tag.includes("-"),
            },
          },
        }),
      ],
      base: "/",
      resolve: {
        alias: {
          "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
      },
    };
  } else {
    // command === 'build'
    return {
      plugins: [
        vue({
          reactivityTransform: true,
          template: {
            compilerOptions: {
              // treat all tags with a dash as custom elements
              isCustomElement: (tag) => tag.includes("-"),
            },
          },
        }),
      ],
      base: "/visualizer/",
      resolve: {
        alias: {
          "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
      },
    };
  }
});
