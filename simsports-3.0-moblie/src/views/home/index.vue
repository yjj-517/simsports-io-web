<!-- home -->
<template>
	<div>
		<div class="stay-tuned-box">
			<!-- <van-image width="6rem" :src="stayTuned" class="stay-tuned" /> -->
			<van-image width="8rem" :src="gameDown" class="game-down" />
			<van-image width="6.6rem" :src="download" class="download" @click="downloadGame" />
			<van-image width="6.6rem" :src="googlepaly" class="google-paly" />
			<!-- <van-image width="5rem" :src="httpImg" class="http-img" /> -->
		</div>
		<homeTop></homeTop>
		<homeSimsports></homeSimsports>
		<homeNft></homeNft>
		<homeGame></homeGame>
		<homeRoadmap></homeRoadmap>
		<!-- <homeTeam></homeTeam> -->
	</div>
</template>

<script setup lang="ts">
import homeTop from "./home-top/index.vue"; //logo
import homeSimsports from "./home-simsports/index.vue"; //游戏场景
import homeNft from "./home-nft/index.vue"; //社区角色
import homeGame from "./home-game/index.vue"; //游戏角色
import homeRoadmap from "./home-roadmap/index.vue"; //路线图
// import homeTeam from "./home-team/index.vue"; //团队
// import stayTuned from "@/assets/imgs/home/stay-tuned.png";
// import httpImg from "@/assets/imgs/home/http-img.png";
import gameDown from "@/assets/imgs/home/game-down.png";
import download from "@/assets/imgs/home/download.png";
import googlepaly from "@/assets/imgs/home/google-paly.png";
// game-apk-download
const downloadGame = () => {
	// console.log(123);
	const url = "https://mybucket-web1.s3.ap-southeast-1.amazonaws.com/game/com.metaprophet.simdunk-3009.apk"; // 文件的 URL 地址
	const link = document.createElement("a");
	link.href = url;
	link.setAttribute("download", ""); // 设置文件属性为下载
	document.body.appendChild(link); // 将元素插入到 DOM 中
	link.click(); // 模拟点击下载链接进行下载
	document.body.removeChild(link); // 下载完成后移除元素
};
</script>

<style lang="less" scoped>
.stay-tuned-box {
	position: fixed;
	top: 28%;
	right: 0;
	z-index: 100;
	.mixin-flex (column,center,center, nowrap);
	.download {
		position: absolute;
		top: 2rem;
		left: 0.5rem;
		cursor: pointer;
	}
	.google-paly {
		position: absolute;
		top: 4.5rem;
		left: 0.5rem;
		cursor: pointer;
	}
}
</style>
