<!-- home-游戏场景 -->
<template>
	<div id="simsports-view" class="simsports-box">
		<h1>ABOUT US</h1>
		<h2>SIMSPORTS CLUB</h2>
		<div class="banner-box">
			<van-swipe class="my-swipe" :autoplay="3000" :show-indicators="false" :loop="false">
				<van-swipe-item v-for="item in banner.arr" :key="item.id">
					<van-image width="20rem" :src="item.imgurl" class="simsports-img" />
				</van-swipe-item>
			</van-swipe>
			<div class="banner-text">
				<p>
					SimSports is next generation web3 esports and gaming platform built on community governance and ownership of gaming
					assets.
				</p>
				<p>
					Using Web3 and AI, SimSports provides developers an integrated platform for both Web3 economy and game development
					tools, blending Web2 playability with innovative gameplay, delivering a potent new player experience.
				</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import simsportsImg from "@/assets/imgs/home/simsports/simsports-img.png";
// 轮播游戏场景
const banner = reactive({
	arr: [
		{
			id: 1,
			imgurl: simsportsImg,
		},
		{
			id: 2,
			imgurl: simsportsImg,
		},
	],
});
</script>

<style lang="less" scoped>
.simsports-box {
	padding-top: 4rem;
	position: relative;
	&::before {
		.w-h(18rem,18rem);
		content: "";
		position: absolute;
		inset: 0 0 0 0;
		margin: 0 auto;
		background-color: #1d3f54;
		border-radius: 50%;
		filter: blur(4rem);
	}
	h1,
	h2 {
		font-family: Arial-BoldMT;
		text-align: center;
		position: relative;
	}
	h1 {
		font-size: 1.75rem;
	}
	h2 {
		margin-top: 1rem;
		font-size: 0.94rem;
	}
	.banner-box {
		.w-h(21.2rem,23.2rem);
		margin: 6.3rem auto 0;
		background-image: url("/src/assets/imgs/home/simsports/banner-yellow.png");
		background-repeat: no-repeat;
		background-size: cover;
		.my-swipe {
			width: 21.78rem;
			inset: -4rem 0 0 -0.5rem;
		}
		.banner-text {
			margin: -2rem 1rem 0;
			p {
				line-height: 1.13rem;
				color: #000000;
				&:nth-child(2) {
					margin-top: 1rem;
				}
			}
		}
	}
}
</style>
