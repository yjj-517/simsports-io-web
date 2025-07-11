<!-- 主页-游戏场景 -->
<template>
	<div id="simsports-view" class="main">
		<div class="bottom-color"></div>
		<div class="simsports-box">
			<h2>ABOUT US</h2>
			<h3>SIMSPORTS</h3>
			<div class="banner-box">
				<el-carousel indicator-position="none" arrow="never" height="448px">
					<el-carousel-item v-for="item in banner.arr" :key="item.id">
						<el-image :src="item.imgurl" class="simsports-img" />
					</el-carousel-item>
				</el-carousel>
				<div class="simsports-text">
					<p>
						SimSports is next generation web3 esports and gaming platform built on community governance and ownership of gaming
						assets.
					</p>
					<p>
						Using Web3 and AI, SimSports provides developers an integrated platform for both Web3 economy and game development
						tools, blending Web2 playability with innovative gameplay, delivering a potent new player experience.
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import simsportsImg from "@/assets/imgs/home/simsports/simsports-img.png";
// 轮播游戏场景
const banner = reactive({
	arr: [
		{
			id: 1,
			imgurl: simsportsImg,
		},
	],
});
</script>

<style lang="less" scoped>
.main {
	padding-top: 120px;
	.bottom-color {
		position: relative;
		&::before {
			.w-h(566px,566px);
			content: "";
			position: absolute;
			inset: 0 0 0 -120px;
			background-color: #0c3d53;
			border-radius: 50%;
			filter: blur(113px);
		}
	}
	.simsports-box {
		position: relative;
		h2,
		h3 {
			text-align: center;
		}
		h2 {
			font-size: 48px;
		}
		h3 {
			margin-top: 32px;
			font-size: 24px;
		}
		.banner-box {
			.w-h(1370px,380px);
			margin: 200px auto 0;
			background-image: url("/src/assets/imgs/home/simsports/banner-yellow.png");
			background-repeat: no-repeat;
			.mixin-flex (row,space-between, flex-start, nowrap);
			.el-carousel {
				width: 967px;
				margin: -174px 0 0 -30px;
				.simsports-img {
					width: 967px;
				}
			}
			.simsports-text {
				width: 390px;
				margin: 26px 22px 0 0;
				font-size: 18px;
				line-height: 24px;
				color: #000;
				p:nth-child(2) {
					margin-top: 20px;
				}
			}
		}
	}
}
</style>
