<!-- 404 -->
<template>
	<div class="exception-box">
		<div class="exception-box-center">
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
	margin-top: 5rem;
	min-height: calc(100vh - 17.625rem);
	position: relative;
	&::before {
		width: 15rem;
		content: "";
		position: absolute;
		inset: 0 0 0 0;
		margin: auto;
		background-color: #1d3f54;
		border-radius: 50%;
		filter: blur(7.125rem);
	}
	.exception-box-center {
		position: absolute;
		inset: 0 0 0 0;
		margin: auto;
		.mixin-flex (column,center,center,nowrap);
		.error-img {
			max-width: 32rem;
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
			line-height: 1.825rem;
			color: #7f7f7f;
			margin-top: 1.25rem;
		}
	}
}
</style>
