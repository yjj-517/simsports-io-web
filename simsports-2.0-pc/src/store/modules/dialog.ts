import { defineStore } from "pinia";
/*
name：一个字符串，必传项，该store的唯一id。
options：一个对象，store的配置项，比如配置store内的数据，修改数据的方法等等。
*/
/*
state和getters属性都主要是数据层面的，并没有具体的业务逻辑代码，它们两个就和我们组件代码中的data数据和computed计算属性一样。
那么，如果我们有业务代码的话，最好就是写在actions属性里面，该属性就和我们组件代码中的methods相似，用来放置一些处理业务逻辑的方法。
actions属性值同样是一个对象，该对象里面也是存储的各种各样的方法，包括同步方法和异步方法。
*/
export const dialogStores = defineStore("dialog", {
	state: () => {
		return {
			onWalletState: false, //未登录钱包页面
		};
	},
	getters: {},
	actions: {},
});
