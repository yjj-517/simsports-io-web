<!-- 404 -->
<template>
	<div class="exception-box">
		<el-image :src="exceptionImg" class="exception-img" />
		<h2 class="fillet-h2-title">Page not found</h2>
		<p class="fillet-paragraph-text">The page you are looking for doesn’t exist or another error occurred</p>
	</div>
</template>

<script setup lang="ts">
import exceptionImg from "@/assets/imgs/exception/exception.svg";
</script>

<style lang="less" scoped>
.exception-box {
	height: calc(100vh - 2.48rem);
	.mixin-flex (column,center,center,nowrap);
	.exception-img {
		width: 1.4rem;
	}
	.fillet-h2-title {
		margin-top: 0.48rem;
	}
	.fillet-paragraph-text {
		margin: 0.2rem 0.32rem 0;
		text-align: center;
	}
}
</style>
