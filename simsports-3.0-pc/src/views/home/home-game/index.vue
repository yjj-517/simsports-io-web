<!--主页-游戏角色 -->
<template>
	<div id="game-view">
		<div class="game-banner">
			<div class="main">
				<div class="left">
					<el-image :src="gameLogo" class="game-img" />
					<el-carousel indicator-position="none" arrow="never" height="594px">
						<el-carousel-item v-for="item in banner.arr" :key="item.id">
							<el-image :src="item.imgurl" class="game-role" />
						</el-carousel-item>
					</el-carousel>
				</div>
				<div class="right">
					<h3>SIMDUNK</h3>
					<div class="rloe-text">
						<p>
							SimDunk is a street basketball game with core 3v3 real-time competition. It crafts a virtual basketball world
							infused with street culture and hip-hop flair. Players use NFT characters for PVP and more, earning $Dunk tokens to
							enhance player NFTs quickly. This readies them for esports or boosts earnings through the NFT marketplace.
						</p>
					</div>
					<div class="video-box">
						<div v-if="videoplay.state" class="video-img" @click.stop="videoplay.state = false">
							<el-image :src="videoImg" class="video-show-img" />
							<el-image :src="videoPlay" class="video-play-icon" />
						</div>
						<video v-if="!videoplay.state" class="video-play" controls controlslist="nodownload" :autoplay="!videoplay.state">
							<source :src="videoUrl" type="video/mp4" />
						</video>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import gameLogo from "@/assets/imgs/home/game/game-logo.png";
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
#game-view {
	padding-top: 100px;
}
.game-banner {
	background-image: url("/src/assets/imgs/home/game/game-banner.png");
	background-repeat: repeat-x;
}
.main {
	.mixin-flex (row,space-between, flex-start, nowrap);
	background-image: url("/src/assets/imgs/home/game/game-banner-ray.png");
	background-repeat: no-repeat;
	height: 740px;
	.left {
		margin: 30px 0 0 42px;
		.game-img {
			.w-h(307px,56px);
		}
		.el-carousel {
			width: 450px;
			margin: 50px 0 0 140px;
			.game-role {
				// width: 333px;
				width: 450px;
			}
		}
	}
	.right {
		width: 620px;
		margin: 30px 40px 0 0;
		h3 {
			font-size: 28px;
		}
		.rloe-text {
			margin-top: 40px;
			line-height: 24px;
			p:nth-child(2) {
				margin-top: 20px;
			}
		}
		.video-box {
			margin-top: 90px;
			position: relative;
			.w-h(617px,339px);
			.video-img {
				cursor: pointer;
				.video-show-img {
					.w-h(617px,339px);
					border-radius: 10px;
				}
				.video-play-icon {
					.w-h(125px, 125px);
					position: absolute;
					left: 0;
					right: 0;
					top: 0;
					bottom: 0;
					margin: auto;
				}
			}

			.video-play {
				.w-h(617px,339px);
			}
		}
	}
}
</style>
