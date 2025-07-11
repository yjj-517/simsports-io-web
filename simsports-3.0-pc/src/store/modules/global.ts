import { defineStore } from "pinia";
export const globalStores = defineStore("global", {
	state: () => {
		return {
			language: localStorage.getItem("language") || "en_US", //语言
		};
	},
	getters: {},
	actions: {
		changeLang(lang: string) {
			this.language = lang;
			localStorage.setItem("language", lang);
		},
	},
	persist: {
		storage: sessionStorage,
		key: "global",
	},
});
