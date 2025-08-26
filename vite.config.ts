import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import { fileURLToPath, URL } from "node:url"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      // "@/..." 별칭(있으면 유지)
      { find: "@", replacement: fileURLToPath(new URL("./src", import.meta.url)) },
      //  Radix 임포트에 잘못 붙은 버전 접미사를 모두 제거
      { find: /@radix-ui\/react-([a-z-]+)@\d+\.\d+\.\d+/, replacement: "@radix-ui/react-$1" }
    ]
  },
  build: { outDir: "dist" }
})
