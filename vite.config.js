import * as path from "path";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
//import autoprefixer from 'autoprefixer'
// vite.config.js / vite.config.ts

// https://vitejs.dev/config/
export default defineConfig({
	css: {
		transformer: 'lightningcss'
	},
	build: {
		cssMinify: 'lightningcss'
	},
	plugins: [react()],
	// Remove pre-processors, replaced with LightningCSS
    //preprocessorOptions: {
    //  scss: {
    //    api: 'modern-compiler' // or "modern"
    //  }
    //},
	//postcss: {
    //  plugins: [
    //    autoprefixer({}) // add options if needed
    //  ],
    //}
	resolve: {
		alias: {
			"@assets": path.resolve(__dirname, "src/assets"),
		},
	},

	define: {
		// By default, Vite doesn't include shims for NodeJS/
		// necessary for segment analytics lib to work
		global: {},
	}
})
