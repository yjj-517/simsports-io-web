import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
//
import { resolve } from "path";

// https://vitejs.dev/config/
export default ({ mode }) => {
	const viteEnv = loadEnv(mode, process.cwd());
	return defineConfig({
		plugins: [vue()],
		base: viteEnv.VITE_BASE_PATH, //读取静态文件路径
		resolve: {
			alias: {
				"@": resolve("./src"), // 引入文件设置
			},
		},
		// 跨域配置
		server: {
			host: "0.0.0.0", //设置地址：http://localhost
			open: true, //启动项目自动弹出浏览器
			port: parseInt(viteEnv.VITE_PORT), //启动端口
			cors: true, // 允许跨域
			proxy: {
				"/api": {
					target: "https://dev-api.simsports.io", //本地开发实际请求地址
					changeOrigin: true,
					rewrite: path => path.replace(/^\/api/, ""),
				},
			},
		},
		css: {
			preprocessorOptions: {
				// less配置
				less: {
					charset: false,
					additionalData: "@import './src/assets/style/global.less';", //注意@import一定有空格
				},
			},
		},
		build: {
			outDir: "dist",
			// 构建后是否生成 sourcemap 文件
			sourcemap: false,
			// 块大小警告大小限制(kb)
			chunkSizeWarningLimit: 1500,
			// esbuild 打包更快，但是不能去除 console.log，去除 console 使用 terser 模式
			// minify: "esbuild",
			/** Vite 2.6.x 以上需要配置 minify: "terser", terserOptions 才能生效 */
			minify: "terser",
			/** 在打包代码时移除 console.log、debugger 和 注释 */
			terserOptions: {
				//打包后移除console和注释
				compress: {
					drop_console: false,
					drop_debugger: true,
					pure_funcs: ["console.log"],
				},
				format: {
					/** 删除注释 */
					comments: false,
				},
			},
			/** 打包后静态资源目录 */
			assetsDir: "static",
			rollupOptions: {
				output: {
					// 分解大块js,
					manualChunks(id) {
						if (id.includes("node_modules")) {
							return id.toString().split("node_modules/")[1].split("/")[0].toString();
						}
					},
					// 用于从入口点创建的块的打包输出格式[name]表示文件名,[hash]表示该文件内容hash值
					entryFileNames: "static/js/[name].[hash].js",
					// 用于命名代码拆分时创建的共享块的输出命名
					chunkFileNames: "static/js/[name].[hash].js",
					// 用于输出静态资源的命名，[ext]表示文件扩展名
					assetFileNames: "static/[ext]/[name].[hash].[ext]",
				},
			},
		},
	});
};
