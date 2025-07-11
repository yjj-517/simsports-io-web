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
#app {
	min-width: 75rem;
	margin: 0 auto;
	overflow: hidden;
}
// 公共占位的样式
.main {
	width: 75rem;
	margin: 0 auto;
}
</style>
