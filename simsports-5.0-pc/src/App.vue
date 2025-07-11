<!-- app.vue -->
<template>
	<div id="app">
		<el-config-provider :locale="locale">
			<router-view></router-view>
		</el-config-provider>
	</div>
</template>
<script setup lang="ts">
import { ref } from "vue";
// 导入 Element Plus 语言包
// import zh_CN from "element-plus/dist/locale/zh-cn.mjs";
import en_US from "element-plus/dist/locale/en.mjs";
const locale = ref(en_US);
</script>
<style lang="less">
@import url("@/assets/style/common.less");
//
#app {
	min-width: 12rem;
	background-color: @COLOR_BC;
	font-size: 0.16rem;
}
// 公共占位的样式
.main {
	width: 12rem;
	margin: 0 auto;
	position: relative;
}
</style>
