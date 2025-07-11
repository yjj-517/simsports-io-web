<!-- simdunk-carousel -->
<template>
	<div class="simdunk-carousel main">
		<div class="carousel-box">
			<el-carousel arrow="never" height="6.76rem">
				<el-carousel-item v-for="(item, index) in carouselData.bannerImg" :key="index">
					<el-image :src="item.imgurl" class="rotation-img" />
				</el-carousel-item>
			</el-carousel>
		</div>
		<div class="carousel-download">
			<div class="carousel-download-left">
				<div v-for="(item, index) in carouselData.simdunkData" :key="index" class="download-list">
					<p>{{ item.title }}</p>
					<div class="download-text">
						<span v-if="item.text" class="download-text-box">{{ item.text }}</span>
						<el-image v-for="(t, i) in item.iconImg" :key="i" :src="t" class="icon-img" />
					</div>
				</div>
			</div>
			<!--  -->
			<div v-if="downloadGameData.gameLink" class="carousel-download-right carousel-download-img">
				<el-image :src="googlePlay" class="google-play download-play" @click.stop="downloadGame('googlePlay')" />
				<el-image :src="iosPlay" class="download-play" @click.stop="downloadGame('iosPlay')" />
			</div>
			<div v-else class="carousel-download-right">
				<button class="download-button open-soon">Opening Soon</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import googlePlay from "@/assets/imgs/downloadgame/google-play.png";
import iosPlay from "@/assets/imgs/downloadgame/ios-play.png";

import { downloadGameData } from "@/utils/medialink"; //共用链接

import simdunkBanner01 from "@/assets/imgs/simdunk/carousel/simdunk-banner01.png";
import simdunkBanner02 from "@/assets/imgs/simdunk/carousel/simdunk-banner02.png";
import simdunkBanner03 from "@/assets/imgs/simdunk/carousel/simdunk-banner03.png";
import simdunkBanner04 from "@/assets/imgs/simdunk/carousel/simdunk-banner04.png";
import simdunkBanner05 from "@/assets/imgs/simdunk/carousel/simdunk-banner05.png";

import iconWhitelist from "@/assets/imgs/simdunk/carousel/icon-whitelist.png";
import iconMask from "@/assets/imgs/simdunk/carousel/icon-mask.png";
import iconIphone from "@/assets/imgs/simdunk/carousel/icon-iphone.png";
import iconAndroid from "@/assets/imgs/simdunk/carousel/icon-android.png";

const carouselData = reactive({
	// 轮播图
	bannerImg: [
		{
			imgurl: simdunkBanner01,
		},
		{
			imgurl: simdunkBanner02,
		},
		{
			imgurl: simdunkBanner03,
		},
		{
			imgurl: simdunkBanner04,
		},
		{
			imgurl: simdunkBanner05,
		},
	],
	// download数据
	simdunkData: [
		{
			title: "CHAIN(S)",
			text: "",
			iconImg: [iconWhitelist],
		},
		{
			title: "DEVELOPED BY",
			text: "",
			iconImg: [iconMask],
		},
		{
			title: "GAME STATUS",
			text: "Alpha-2",
			iconImg: [],
		},
		{
			title: "PLATFORMS",
			text: "",
			iconImg: [iconIphone, iconAndroid],
		},
		{
			title: "GENRES",
			text: "Esport",
			iconImg: [],
		},
		{
			title: "PLAYER INFO",
			text: "3V3",
			iconImg: [],
		},
		{
			title: "COMPETITIVE FRAMEWORK",
			text: "PVP",
			iconImg: [],
		},
	],
});
// downloadGame
const downloadGame = (os: any) => {
	if (os == "googlePlay") {
		window.open(downloadGameData.googleLink, "_blank");
	} else if (os == "iosPlay") {
		window.open(downloadGameData.iosLink, "_blank");
	}
};
</script>

<style lang="less" scoped>
.simdunk-carousel {
	padding: 1.6rem 0 0.28rem;
	.carousel-box {
		.rotation-img {
			.w-h(12rem,6.76rem);
			border-radius: 0.2rem;
		}
	}
	.carousel-download {
		margin: 0.26rem 0 0 0;
		.mixin-flex (row,space-between,center,nowrap);
		.carousel-download-left {
			margin-left: 0.92rem;
			.download-list {
				.mixin-flex (row,space-between,center,nowrap);
				margin-bottom: 0.14rem;
				font-size: 0.14rem;
				p {
					margin-right: 0.48rem;
				}
				.download-text {
					width: 1rem;
					.mixin-flex (row,flex-start,center,nowrap);
					.download-text-box {
						padding: 0.01rem 0.08rem;
						border: 0.01rem solid #808080;
						border-radius: 0.1rem;
						background-color: rgba(#e6e6e6, 0.35);
					}
					.icon-img {
						width: 0.16rem;
						margin-right: 0.12rem;
					}
				}
			}
		}
		.carousel-download-right {
			&.carousel-download-img {
				margin-right: 0.6rem;
				.mixin-flex (row,center,center,nowrap);
				.google-play {
					margin-right: 0.1rem;
				}
				.download-play {
					width: 2.2rem;
					cursor: pointer;
				}
			}
			.download-button {
				.w-h(2.26rem,0.66rem);
				padding: 0.01rem 0.08rem;
				border: 0.02rem solid #999999;
				border-radius: 0.08rem;
				font-family: Quantico;
				color: @COLOR_F;
				font-size: 0.28rem;
				margin-right: 0.32rem;
				&.open-soon {
					margin-right: 1.6rem;
					background-color: #676767;
				}
			}
		}
	}
}
</style>
