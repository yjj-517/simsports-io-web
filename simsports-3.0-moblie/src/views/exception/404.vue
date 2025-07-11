<!-- 404 -->
<template>
	<div class="exception-box">
		<div class="exception-box-center">
			<van-image :src="errorImg" class="error-img" />
			<el-image :src="errorImg" class="error-img" />
			<p class="found-text">Page not found</p>
			<p class="error-text">The page you are looking for doesn’t exist or another error occurred</p>
		</div>
	</div>
</template>

<script setup lang="ts">
// import { ref, reactive } from "vue";
import errorImg from "@/assets/imgs/exception/404.png";
</script>

<style lang="less" scoped>
.exception-box {
	min-height: calc(100vh - 12rem);
	position: relative;
	&::before {
		.w-h(15rem,15rem);
		content: "";
		position: absolute;
		inset: 0 0 0 0;
		margin: auto;
		background-color: #1d3f54;
		border-radius: 50%;
		filter: blur(3.6rem);
	}
	.exception-box-center {
		position: absolute;
		inset: 0 0 0 0;
		margin: auto;
		.mixin-flex (column,center,center,nowrap);
		.error-img {
			margin: 0 1rem;
		}
		p {
			text-align: center;
		}
		.found-text {
			font-size: 3rem;
			line-height: 3.75rem;
			margin-top: 2.5rem;
		}
		.error-text {
			font-size: 1.75rem;
			line-height: 1.8rem;
			color: #7f7f7f;
			margin-top: 1.25rem;
		}
	}
}
</style>
