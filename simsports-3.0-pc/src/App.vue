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
// import zh_CN from "element-plus/lib/locale/lang/zh-cn";
import en_US from "element-plus/lib/locale/lang/en";
const locale = ref(en_US);
</script>
<style lang="less">
#app {
	// max-width: 1920px;
	min-width: 1440px;
	margin: 0 auto;
	overflow: hidden;
}
// 公共占位的样式
.main {
	width: 1440px;
	margin: 0 auto;
}
</style>
