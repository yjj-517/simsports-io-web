import { defineStore } from "pinia";
export const globalStores = defineStore("global", {
	persist: {
		enabled: true, //开启数据持久化
		strategies: [
			{
				key: "global", //给一个要保存的名称
				storage: sessionStorage, //sessionStorage / localStorage 存储方式
			},
		],
	},
	state: () => {
		return {
			language: localStorage.getItem("language") || "en_US", //语言
		};
	},
	getters: {},
	actions: {
		changeLang(lang: any) {
			this.language = lang;
			localStorage.setItem("language", lang);
		},
	},
});
