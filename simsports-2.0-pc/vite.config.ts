import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { createHtmlPlugin } from "vite-plugin-html"; //设置index.html-title
// https://vitejs.dev/config/
export default ({ mode }) => {
	const viteEnv = loadEnv(mode, process.cwd());
	return defineConfig({
		plugins: [
			vue(),
			createHtmlPlugin({
				inject: {
					// Inject data into ejs template
					data: {
						title: viteEnv.VITE_BASE_TITLE, //设置index.html-title
					},
				},
			}),
		],
		base: viteEnv.VITE_BASE_PATH,
		resolve: {
			dedupe: ["vue"], //打包删除多余依赖项
			alias: {
				"@": "/src", // 引入文件设置
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
					target: viteEnv.VITE_BASE_API, //实际请求地址
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
	});
};
