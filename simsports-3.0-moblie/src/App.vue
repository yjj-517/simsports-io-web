<!-- app.vue -->
<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>
<script setup lang="ts">
// 修改vnat语言
import { Locale } from "vant";
import enUS from "vant/es/locale/lang/en-US";
Locale.use("en-US", enUS);
</script>
<style lang="less">
#app {
	background-color: @COLOR_H;
	font-size: 0.75rem;
}
</style>
