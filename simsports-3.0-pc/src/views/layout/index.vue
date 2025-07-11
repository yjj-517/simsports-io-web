<!-- 导航栏 -->
<template>
	<HeaderTab :router-function="goRouter"></HeaderTab>
	<router-view></router-view>
	<FooterTab :router-function="goRouter"></FooterTab>
</template>

<script setup lang="ts">
import { nextTick } from "vue";
import HeaderTab from "./header-tab/index.vue";
import FooterTab from "./footer-tab/index.vue";
import { useRouter } from "vue-router";
const router = useRouter();
const goRouter = (routerId: any) => {
	router.push("/home");
	if (routerId) {
		// 在路由导航后，使用 nextTick 将页面滚动到指定位置
		nextTick(() => {
			const targetElement = document.getElementById(routerId);
			if (targetElement) {
				targetElement.scrollIntoView({ behavior: "smooth" });
			}
		});
	}
};
</script>

<style lang="less" scoped></style>
