<!-- App.vue -->
<template>
	<div id="app">
		<el-config-provider :locale="locale.obj.lang">
			<router-view></router-view>
		</el-config-provider>
	</div>
</template>

<script setup lang="ts">
import { watch, reactive } from "vue";
// 导入 Element Plus 语言包
import zh_CN from "element-plus/lib/locale/lang/zh-cn";
import en_US from "element-plus/lib/locale/lang/en";
import { globalStores } from "@/store/index"; //store
const globalStore = globalStores();
const langs: any = {
	zh_CN,
	en_US,
};
const locale: any = reactive({
	obj: {
		lang: null,
	},
});
// 改变elementplus语言
const changeLocale = () => {
	const lang = globalStore.language || "en_US";
	locale.obj.lang = langs[lang];
};
watch(
	[() => globalStore.language],
	() => {
		changeLocale();
	},
	{ immediate: true },
);
</script>
<style lang="less">
#app {
	font-family: "Titillium Web", sans-serif;
	color: @COLOR_F;
	background-color: @COLOR_H;
	font-size: 0.16rem;
	body,
	th,
	td,
	input,
	select,
	textarea,
	button {
		font-family: "Titillium Web", sans-serif;
	}
}
</style>
<style lang="less">
// 公共占位的样式
#container {
	width: 14.4rem;
	margin: 0 auto;
}
// 轮播图指示器的样式
.carousel_box {
	.el-carousel__indicator--horizontal .el-carousel__button {
		width: 10px;
		height: 10px;
		background: transparent;
		border: 1px solid #ffffff;
		border-radius: 50%;
		opacity: 0.5;
	}
	.el-carousel__indicator--horizontal.is-active .el-carousel__button {
		width: 10px;
		height: 10px;
		background: #ffffff;
		border-radius: 50%;
		opacity: 1;
	}
}
// 遮罩层公共样式
.el-overlay {
	background: rgba(#fff, 0.2) !important;
	backdrop-filter: blur(0.1rem); //磨砂
}
.my-dialog {
	background-color: rgba(#fff, 0.8) !important;
	border-radius: 0.2rem !important;
	padding: 0.2rem;
	text-align: left !important;
	.el-dialog__header {
		padding: 0 !important;
	}
	.el-dialog__body {
		padding: 0 !important;
	}
	// .el-dialog__title {
	// }
	.my-header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		.closeIcon {
			text-align: right;
			.w-h(0.3rem,0.3rem);
			&:hover {
				opacity: 0.8;
			}
		}
	}
}
// 表格样式
#table_box {
	.el-table {
		background-color: @COLOR_H;
	}
	.el-table .cell {
		line-height: 0.94rem !important;
	}
	.el-table__inner-wrapper::before {
		width: 0;
	}
}
// 登录input框
#login_input {
	.el-input {
		width: 4.3rem;
		height: 0.5rem;
		color: #fff;
	}
	.el-input__wrapper {
		background-color: rgba(#fff, 0.2);
		box-shadow: 0 0 0.02rem 0.02rem rgba(#fff, 0.2) inset !important;
	}
	.el-input__inner {
		line-height: 0.34rem;
		font-size: 0.18rem;
		color: #fff;
	}
	.el-icon {
		padding-top: 0rem;
	}
	/* // 去除边框 */
	.el-input .el-input__wrapper.is-focus {
		box-shadow: 0 0 2px 2px rgba(#fff, 0.2) inset !important;
	}
}
// 表单验证
.el-form {
	.el-form-item {
		margin-bottom: 0rem;
	}
	.el-form-item__error {
		font-size: 0.18rem;
		padding-top: 0rem;
		margin-left: 0.1rem;
	}
}
</style>
