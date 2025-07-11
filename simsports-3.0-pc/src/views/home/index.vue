<!-- home -->
<template>
	<div>
		<div class="stay-tuned-box">
			<!-- <el-image :src="stayTuned" class="stay-tuned" /> -->
			<el-image :src="gameDown" class="game-down" />
			<el-image :src="httpImg" class="http-img" />
			<el-image :src="download" class="download" @click="downloadGame" />
			<el-image :src="googlepaly" class="google-paly" />
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
import gameDown from "@/assets/imgs/home/game-down.png";
import httpImg from "@/assets/imgs/home/http-img.png";
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
	top: 20%;
	right: 0;
	z-index: 100;
	width: 200px;
	.mixin-flex (column,center,center, nowrap);
	.stay-tuned {
		width: 200px;
	}
	.http-img {
		position: absolute;
		width: 120px;
		top: 50px;
		left: 37px;
	}
	.download {
		position: absolute;
		cursor: pointer;
		width: 160px;
		top: 185px;
		left: 18px;
	}
	.google-paly {
		position: absolute;
		cursor: pointer;
		width: 160px;
		top: 250px;
		left: 18px;
	}
}
</style>
