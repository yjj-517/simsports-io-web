<!-- header-tab -->
<template>
	<header>
		<!-- 导航栏 -->
		<NavBox />
	</header>
</template>

<script setup lang="ts">
import NavBox from "./nav-box/index.vue";
</script>

<style lang="less" scoped>
header {
	position: fixed;
	top: 0;
	z-index: 999;
	width: 100%;
}
</style>
