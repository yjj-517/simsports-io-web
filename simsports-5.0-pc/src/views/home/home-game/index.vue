<!-- home-game -->
<template>
	<div id="home-game">
		<h2 id="home-titele">ESPORTS</h2>
		<h2 id="home-titele">GAMES</h2>
		<div class="game-text">
			<el-image :src="arrowImg" class="arrow-img" />
			<p>Esports games have unlimited possibilities in the world of Web3, and are the future of games.</p>
		</div>
		<div class="game-video-box">
			<video class="game-video" autoplay="true" loop muted playsinline>
				<source :src="gameVideo" type="video/mp4" />
			</video>
			<div class="game-video-text">
				<el-image :src="gameLogo" class="game-logo" />
				<div class="text-content">
					<div class="simdunk-box">
						<p>SIMDUNK</p>
						<p>
							3v3 real-time street basketball with NFT characters in a virtual world. Earn $Dunk coins, level up, join esports
							events, and trade NFTs for profits.
						</p>
					</div>
					<button class="fillet-diamond-button-trumpet" @click.stop="goRouter('/game')">View Game</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
// import { ref, reactive } from "vue";
import gameVideo from "@/assets/video/home/game-video.mp4"; //游戏视频
import arrowImg from "@/assets/imgs/home/game/arrow-img.png";
import gameLogo from "@/assets/imgs/logo/game-logo.png";

import router from "@/router"; //router
const goRouter = (link: string) => {
	router.push(link); //路由跳转
};
</script>

<style lang="less" scoped>
#home-game {
	width: 100em;
	#home-titele:nth-of-type(1) {
		color: @COLOR_F;
	}
	.game-text {
		margin-top: 2em;
		.mixin-flex(row,space-between,center,nowrap);
		.arrow-img {
			width: 7.5em;
		}
		p {
			font-size: 2em;
			width: 20em;
			line-height: 1.25em;
			opacity: 0.6;
		}
	}
	.game-video-box {
		margin-top: 5em;
		.w-h(100em,56.25em);
		overflow: hidden;
		border-radius: 2em;
		position: relative;
		.game-video {
			width: 100em;
			position: absolute;
			top: 0;
			left: 0;
		}
		.game-video-text {
			padding: 3em;
			height: 48em;
			position: relative;
			.mixin-flex (column,space-between,flex-start,nowrap);
			.game-logo {
				width: 10em;
			}
			.text-content {
				width: 94em;
				.mixin-flex (row,space-between,center,nowrap);
				.simdunk-box {
					width: 45em;
					p {
						&:nth-of-type(1) {
							font-size: 2em;
							line-height: 1.25em;
							font-weight: bold;
						}
						&:nth-of-type(2) {
							font-size: 1.25em;
							margin-top: 1em;
							line-height: 1.5em;
						}
					}
				}
				.fillet-diamond-button-trumpet {
					font-size: 1.25em;
					.w-h(10em, 2.8em);
					clip-path: polygon(1em 0, 100% 0, 100% calc(100% - 1em), calc(100% - 1em) 100%, 0 100%, 0 1em);
				}
			}
		}
	}
}
</style>
