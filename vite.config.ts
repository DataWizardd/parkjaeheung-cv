// vite.config.ts
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import { fileURLToPath, URL } from "node:url"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: fileURLToPath(new URL("./src", import.meta.url)) },
      // scoped (Radix) - '@radix-ui/react-xxx@1.2.3' → '@radix-ui/react-xxx'
      { find: /@radix-ui\/react-([a-z-]+)@\d+\.\d+\.\d+/, replacement: "@radix-ui/react-$1" },
      // unscoped libs - 'pkg@1.2.3' → 'pkg'
      { find: /class-variance-authority@\d+\.\d+\.\d+/, replacement: "class-variance-authority" },
      { find: /tailwind-merge@\d+\.\d+\.\d+/, replacement: "tailwind-merge" },
      { find: /clsx@\d+\.\d+\.\d+/, replacement: "clsx" }
    ]
  },
  build: { outDir: "dist" }
})
