<!-- 主页 -->
<template>
	<div id="home_box">
		<div id="carousel_view">
			<carouselView :banner-list="bannerImg"></carouselView>
		</div>
		<div id="ecology_view">
			<ecologyView></ecologyView>
		</div>
		<div id="video_view">
			<videoView></videoView>
		</div>
		<div id="tokens_view">
			<tokensView></tokensView>
		</div>
		<div id="nftshop_view">
			<nftshopView></nftshopView>
		</div>
		<div id="partner_view">
			<partnerView></partnerView>
		</div>
		<div id="develop_view">
			<developView></developView>
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import carouselView from "./components/carousel.vue"; //轮播图
import ecologyView from "./components/ecology.vue"; //生态
import videoView from "./components/videos.vue"; //视频
import tokensView from "./components/tokens.vue"; //token
import nftshopView from "./components/nftshop.vue"; //nft
import partnerView from "./components/partner.vue"; //合作商
import developView from "./components/develop.vue"; //规划图片
// 轮播图
// import rotationImg01 from "@/assets/imgs/home/rotationImg01.png";
import rotationImg02 from "@/assets/imgs/home/banner/rotationImg02.png";
import rotationImg03 from "@/assets/imgs/home/banner/rotationImg03.png";
import rotationImg04 from "@/assets/imgs/home/banner/rotationImg04.png";
const bannerImg = reactive({
	img: [
		{
			imgurl: rotationImg03,
		},
		{
			imgurl: rotationImg04,
		},
		{
			imgurl: rotationImg02,
		},
	],
});
</script>

<style lang="less" scoped>
#home_box {
	background-color: @COLOR_Z;
	#carousel_view {
		background-color: @COLOR_Z;
	}
	#ecology_view {
		padding: 2.1rem 0 1.34rem;
		background: linear-gradient(@COLOR_Z, #3b1f56, #1c0f29);
	}
	#video_view {
		padding: 1.34rem 0 0.64rem;
		background: linear-gradient(#1c0f29, #020103, #0e0714);
	}
	#tokens_view {
		padding: 0.64rem 0 2.15rem;
		background: linear-gradient(#0e0714, #2d1842, #592f83);
	}
	#nftshop_view {
		padding: 2.15rem 0 1.88rem;
		background: linear-gradient(#592f83, #534d9a, #19c8e0);
	}
	#partner_view {
		padding: 0 0 1.88rem;
		background-color: #5d358d;
	}
	#develop_view {
		padding: 1.88rem 0 4.38rem;
		background: linear-gradient(#5d358d, #5e3289, #39333f);
	}
}
</style>
