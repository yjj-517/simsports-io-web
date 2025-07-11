<!-- download-game -->
<template>
	<div class="download-game">
		<el-image :src="gameDownImg" class="game-down-img" />
		<div class="download-box">
			<el-image :src="googlePlay" class="google-play" @click.stop="downloadGame('googlePlay')" />
			<el-image :src="iosPlay" class="ios-play" @click.stop="downloadGame('iosPlay')" />
		</div>
	</div>
</template>

<script setup lang="ts">
import gameDownImg from "@/assets/imgs/downloadgame/game-down-img.png";
import googlePlay from "@/assets/imgs/downloadgame/google-play02.png";
import iosPlay from "@/assets/imgs/downloadgame/ios-play02.png";

import { downloadGameData } from "@/utils/medialink"; //共用链接
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
.download-game {
	position: fixed;
	top: 20%;
	right: 0.05rem;
	z-index: 100;
	.game-down-img {
		width: 1.8rem;
	}
	.download-box {
		position: absolute;
		width: 1.5rem;
		left: 50%;
		transform: translateX(-50%);
		bottom: 0.15rem;
		.mixin-flex (column,center,center,nowrap);
		.google-play {
			cursor: pointer;
		}
		.ios-play {
			margin-top: 0.08rem;
			cursor: pointer;
		}
	}
}
</style>
