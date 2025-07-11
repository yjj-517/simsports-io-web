<!-- home-游戏机角色 -->
<template>
	<div id="game-view" class="game-box">
		<h2>SIMDUNK</h2>
		<p class="game-text">
			SimDunk is a street basketball game with core 3v3 real-time competition. It crafts a virtual basketball world infused with
			street culture and hip-hop flair. Players use NFT characters for PVP and more, earning $Dunk tokens to enhance player NFTs
			quickly. This readies them for esports or boosts earnings through the NFT marketplace.
		</p>
		<div class="video-box">
			<div v-if="videoplay.state" class="video-img" @click.stop="videoplay.state = false">
				<van-image width="100%" :src="videoImg" class="video-show-img" />
				<van-image :src="videoPlay" class="video-play-icon" />
			</div>
			<video v-if="!videoplay.state" class="video-play" controls controlslist="nodownload" :autoplay="!videoplay.state">
				<source :src="videoUrl" type="video/mp4" />
			</video>
		</div>
		<div class="game-people">
			<div class="game-people-img">
				<van-swipe class="my-swipe" :autoplay="3000" :show-indicators="false">
					<van-swipe-item v-for="item in banner.arr" :key="item.id">
						<van-image width="14rem" :src="item.imgurl" class="game-role" />
					</van-swipe-item>
				</van-swipe>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

import videoImg from "@/assets/imgs/home/game/video-img.png";
import videoPlay from "@/assets/imgs/home/game/video-play.png";
import videoUrl from "@/assets/video/video.mp4"; //视频地址
import gameRole01 from "@/assets/imgs/home/game/game-role01.png";
import gameRole02 from "@/assets/imgs/home/game/game-role02.png";
import gameRole03 from "@/assets/imgs/home/game/game-role03.png";
import gameRole04 from "@/assets/imgs/home/game/game-role04.png";
import gameRole05 from "@/assets/imgs/home/game/game-role05.png";

const videoplay = reactive({
	state: true, //图片显示状态和自动播放状态
});
// 轮播角色
const banner = reactive({
	arr: [
		{
			id: 1,
			imgurl: gameRole01,
		},
		{
			id: 2,
			imgurl: gameRole02,
		},
		{
			id: 3,
			imgurl: gameRole03,
		},
		{
			id: 4,
			imgurl: gameRole04,
		},
		{
			id: 5,
			imgurl: gameRole05,
		},
	],
});
</script>

<style lang="less" scoped>
.game-box {
	padding-top: 5rem;
	h2 {
		font-size: 1.75rem;
		text-align: center;
	}
	.game-text {
		margin: 1rem auto;
		line-height: 1.1rem;
		text-align: center;
		width: 80%;
	}
	.video-box {
		margin-top: 1rem;
		.mixin-flex (column,center,center,nowrap);
		.video-img {
			width: 80%;
			cursor: pointer;
			position: relative;
			.video-play-icon {
				position: absolute;
				left: 0;
				right: 0;
				top: 0;
				bottom: 0;
				margin: auto;
				.w-h(5rem,5rem);
			}
		}
		.video-play {
			width: 80%;
		}
	}
	.game-people {
		height: 23rem;
		background-image: url("/src/assets/imgs/home/game/game-banner.png");
		background-repeat: repeat-x;
		background-size: auto 100%;
		.game-people-img {
			background-image: url("/src/assets/imgs/home/game/game-banner-ray.png");
			background-repeat: repeat-x;
			background-size: auto 100%;
			background-position: center center;
			.my-swipe {
				width: 14rem;
				padding-top: 4rem;
				margin: 0 auto;
			}
		}
	}
}
</style>
