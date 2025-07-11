<!-- 导航栏 -->
<template>
	<HeaderView></HeaderView>
	<div class="main_box"><router-view></router-view></div>
	<FooterView></FooterView>
</template>

<script setup lang="ts">
// import { ref, reactive } from "vue";
import HeaderView from "./HeaderTab/index.vue";
import FooterView from "./FooterTab/index.vue";
</script>

<style lang="less" scoped>
.main_box {
	min-height: calc(100vh - 0.86rem);
}
</style>
