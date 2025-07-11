<!-- home-partners -->
<template>
	<div id="home-partners" class="main">
		<h3>More collaborators and supporters are participating in the construction of our esports gaming metaverse.</h3>
		<h2>
			<span>PARTNERS</span>
			<el-image :src="partnersIcon" class="partners-icon" />
		</h2>
	</div>
	<div class="partners-box">
		<div class="partners-img-list">
			<el-image v-for="item in partnersData.arr" :key="item" :src="item.imgurl" class="partners-img" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import partnersIcon from "@/assets/imgs/home/partners/partners-icon.png";
import wemadeIcon from "@/assets/imgs/home/partners/wemade-icon.png";

// 合作方数据
const partnersData = reactive({
	arr: [
		{
			imgurl: wemadeIcon,
		},
	],
});
</script>

<style lang="less" scoped>
.main {
	margin-top: 4rem;
	background: url("/src/assets/imgs/home/partners/partners-smoke.png") no-repeat;
	h3 {
		padding-top: 5rem;
		font-size: 2.25rem;
		width: 40rem;
		text-align: center;
		margin: 0 auto;
		line-height: 3.38rem;
	}
	h2 {
		margin-top: 4rem;
		font-size: 4.34rem;
		color: @COLOR_L;
		.mixin-flex (row,center,center,nowrap);
		.game-icon {
			margin-left: 1rem;
			width: 3.8rem;
		}
	}
}
.partners-box {
	height: 11rem;
	margin: 8rem auto 0;
	overflow: hidden;
	background-color: #a0a0a0;
	// width: 120rem;
	// position: relative;
	.partners-img-list {
		height: 11rem;
		.mixin-flex (row,center,center,nowrap);
		// position: absolute;
		// left: 0;
		// top: 0;
		// margin: 0;
		// padding: 0;
		// animation: 5s move infinite linear;
		// width: 200%;
		// @keyframes move {
		// 	0% {
		// 		left: 0;
		// 	}
		// 	100% {
		// 		left: -120rem;
		// 	}
		// }
		.partners-img {
			width: 20rem;
		}
	}
}
</style>
