<!-- governance-top -->
<template>
	<div class="governance-top">
		<!-- 背景图 -->
		<div class="governance-bg">
			<el-image :src="governanceBg" class="governance-bg-img" />
		</div>
		<div class="main">
			<div class="governance-top-box">
				<el-image :src="governanceTitle" class="governance-title" />
				<p class="fillet-paragraph-text">
					SimSports is a community and game asset-driven platform, with $Bravo at its core, embodying this concept in practice.
				</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
// import { ref, reactive } from "vue";
import governanceBg from "@/assets/imgs/governance/governance-bg.png";
import governanceTitle from "@/assets/imgs/governance/governance-title.png";
</script>

<style lang="less" scoped>
.governance-top {
	position: relative;
	min-width: 12rem;
	overflow: hidden;
	.governance-bg {
		width: 19.2rem;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		.governance-bg-img {
			.w-h(19.2rem,10.8rem);
		}
	}
	.governance-top-box {
		.w-h(9rem,10.8rem);
		.governance-title {
			margin: 2.6rem 0 0 0.88rem;
			width: 6.58rem;
		}
		.fillet-paragraph-text {
			margin: 0.6rem 0 0 0.88rem;
			width: 5.84rem;
			font-size: 0.2rem;
			line-height: 0.36rem;
		}
	}
}
</style>
