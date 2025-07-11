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
	margin-top: 80px;
	min-height: calc(100vh - 282px);
	position: relative;
	&::before {
		.w-h(240px,240px);
		content: "";
		position: absolute;
		inset: 0 0 0 0;
		margin: auto;
		background-color: #1d3f54;
		border-radius: 50%;
		filter: blur(114px);
	}
	.exception-box-center {
		position: absolute;
		inset: 0 0 0 0;
		margin: auto;
		.mixin-flex (column,center,center,nowrap);
		.error-img {
			max-width: 512px;
		}
		p {
			text-align: center;
		}
		.found-text {
			font-size: 48px;
			line-height: 60px;
			margin-top: 40px;
		}
		.error-text {
			font-size: 28px;
			line-height: 30px;
			color: #7f7f7f;
			margin-top: 20px;
		}
	}
}
</style>
