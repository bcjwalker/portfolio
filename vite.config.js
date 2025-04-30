import * as path from "path";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const ReactCompilerConfig = { /* ... */ };
//import autoprefixer from 'autoprefixer'
// vite.config.js / vite.config.ts

// https://vitejs.dev/config/
export default defineConfig({
	base: "/portfolio",
	css: {
		transformer: 'lightningcss'
	},
	
	build: {
		cssMinify: 'lightningcss',
		emptyOutDir: true, // also necessary
	},
	
	plugins: [react({
        babel: {
          plugins: [
            ["babel-plugin-react-compiler", ReactCompilerConfig],
          ],
        },
      }
	)],
	
	resolve: {
		alias: {
			"@assets": path.resolve(__dirname, "./src/assets"),
		},
	},

	define: {
		// By default, Vite doesn't include shims for NodeJS/
		// necessary for segment analytics lib to work
		global: {},
	}
})
