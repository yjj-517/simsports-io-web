/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		// fontFamily
		fontFamily: {
			Quantico: "var(--sm-font-family-1)",
			Arial: "var(--sm-font-family-2)",
		},
		// screens
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		extend: {
			// 关键帧
			keyframes: {},
			// 动画
			animation: {
				"spin-slow-1": "spin 1s linear infinite",
				"spin-slow-5": "spin 5s linear infinite",
			},
			// 颜色
			colors: {
				primary: "var(--sm-color-fg-3)", //主色
				regular: "", //常规色
				secondary: "var(--sm-color-fg-4)", //次要色
				disabled: "var(--sm-color-fg-5)", //禁用色
				// text-color
				text: {
					100: "var(--sm-color-text-1)",
					200: "var(--sm-color-text-2)",
					300: "var(--sm-color-text-3)",
				},
				// background-color
				bgcolor: {
					100: "var(--sm-color-bg-1)",
					200: "var(--sm-color-bg-2)",
					300: "var(--sm-color-bg-3)",
					400: "var(--sm-color-bg-4)",
					500: "var(--sm-color-bg-5)",
					600: "var(--sm-color-bg-6)",
					700: "var(--sm-color-bg-7)",
					800: "var(--sm-color-bg-8)",
					900: "var(--sm-color-bg-9)",
					1000: "var(--sm-color-bg-10)",
				},
			},
		},
	},
	plugins: [],
};
