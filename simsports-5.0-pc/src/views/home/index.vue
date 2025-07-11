<!-- home -->
<template>
	<div id="home-box">
		<HomeTop />
		<HomeBuildVideo />
		<HomeBuild />
		<HomeGovernance />
		<HomePartners />
		<HomeTeam />
	</div>
	<DownloadGame></DownloadGame>
</template>

<script setup lang="ts">
import HomeTop from "./home-top/index.vue"; //top
import HomeBuild from "./home-build/index.vue"; //build
import HomeBuildVideo from "./home-build-video/index.vue"; //build-video
import HomeGovernance from "./home-governance/index.vue"; //governance
import HomePartners from "./home-partners/index.vue"; //partners
import HomeTeam from "./home-team/index.vue"; //TEAM
import DownloadGame from "@/components/download-game/index.vue"; //download-game
</script>

<style lang="less">
#home-box {
	width: 100%;
	font-size: 0.83333vw !important; /* 自适应 16px */
	// font-size: 0.78125vw !important; /* 自适应 15px */
	overflow-x: hidden;
	h2#home-titele {
		font-family: Quantico;
		color: @COLOR_THEME;
		font-size: 6.5em;
		line-height: 1em;
	}
}
</style>
