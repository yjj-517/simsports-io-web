<!-- home -->
<template>
	<div class="home-box">
		<div class="stay-tuned-box">
			<el-image :src="stayTuned" class="stay-tuned" />
		</div>
		<homeTop></homeTop>
		<homeGame></homeGame>
		<homeBuild></homeBuild>
		<homeGovernance></homeGovernance>
		<homeKeypoint></homeKeypoint>
		<homePartners></homePartners>
		<homeTeam></homeTeam>
		<footerTab></footerTab>
	</div>
</template>

<script setup lang="ts">
// import { reactive } from "vue";
import homeTop from "./home-top/index.vue"; //top
import homeGame from "./home-game/index.vue"; //game
import homeBuild from "./home-build/index.vue"; //build
import homeGovernance from "./home-governance/index.vue"; //governance
import homeKeypoint from "./home-keypoint/index.vue"; //keypoint
import homePartners from "./home-partners/index.vue"; //partners
import homeTeam from "./home-team/index.vue"; //TEAM
import footerTab from "@/views/layout/footer-tab/index.vue"; //footer
import stayTuned from "@/assets/imgs/home/stay-tuned.png";
</script>

<style lang="less" scoped>
.home-box {
	background: url("/src/assets/imgs/home/home-background.png") no-repeat;
	background-position: top center; //属性设置背景图像的起始位置。
	background-attachment: fixed;
	.stay-tuned-box {
		position: fixed;
		top: 20%;
		right: 0;
		z-index: 100;
		width: 12.5rem;
		.mixin-flex (column,center,center, nowrap);
		.stay-tuned {
			width: 12.5rem;
		}
	}
}
</style>
