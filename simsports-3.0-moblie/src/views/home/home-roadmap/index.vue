<!-- home-路线路 -->
<template>
	<div id="roadmap-view" class="map-box">
		<h2>ROAD MAP</h2>
		<div class="map-box-background">
			<div class="map-banner">
				<div v-for="(item, index) in map.arr" :key="index" class="map-one" @click.stop="changMap(item.id)">
					<van-image width="2.38rem" :src="item.mapImg" class="map-img" />
					<van-image v-show="item.id == mapId.obj.id" width="8.88rem" :src="item.selectImg" class="select-img" />
					<van-image v-show="item.id !== mapId.obj.id" width="5.41rem" :src="item.noselectImg" class="noselect-img" />
				</div>
				<div class="map-text">
					<h3>{{ mapId.obj.yera }}</h3>
					<div class="map-text-plan">
						<p v-for="(item, index) in mapId.obj.plan" :key="index">&bull; {{ item.text }}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from "vue";

import selectGreen from "@/assets/imgs/home/map/select-green.png";
import noselectGgreen from "@/assets/imgs/home/map/noselect-green.png";
import selectPurple from "@/assets/imgs/home/map/select-purple.png";
import noselectPurple from "@/assets/imgs/home/map/noselect-purple.png";

import mapImga from "@/assets/imgs/home/map/map-imga.png";
import mapImgb from "@/assets/imgs/home/map/map-imgb.png";
import mapImgc from "@/assets/imgs/home/map/map-imgc.png";
import mapImgd from "@/assets/imgs/home/map/map-imgd.png";
import mapImge from "@/assets/imgs/home/map/map-imge.png";
import mapImgf from "@/assets/imgs/home/map/map-imgf.png";

// 路线路数据
const map = reactive({
	arr: [
		{
			id: 1,
			yera: "2023 Q3",
			mapImg: mapImgb,
			selectImg: selectGreen,
			noselectImg: noselectGgreen,
			plan: [
				{
					text: "Completion of SimDunk game development",
				},
				{
					text: "Initiation of closed testing for the SimDunk project",
				},
			],
		},
		{
			id: 2,
			yera: "2023 Q4",
			mapImg: mapImgc,
			selectImg: selectPurple,
			noselectImg: noselectPurple,
			plan: [
				{
					text: "Commencement of SimDunk Genesis NFT sales",
				},
				{
					text: "Release of SimDunk game beta version",
				},
			],
		},
		{
			id: 3,
			yera: "2024 Q1",
			mapImg: mapImgd,
			selectImg: selectGreen,
			noselectImg: noselectGgreen,
			plan: [
				{
					text: "Official launch of SimDunk",
				},
				{
					text: 'Launch of the global esports alliance "SimDunk"',
				},
			],
		},
		{
			id: 4,
			yera: "2024 Q2",
			mapImg: mapImge,
			selectImg: selectPurple,
			noselectImg: noselectPurple,
			plan: [
				{
					text: "Initiation of development and testing for the second game, SimSoccer",
				},
			],
		},
		{
			id: 5,
			yera: "2024 Q3",
			mapImg: mapImgf,
			selectImg: selectGreen,
			noselectImg: noselectGgreen,
			plan: [
				{
					text: "Completion of development and testing for the second game, SimSocce",
				},
			],
		},
		{
			id: 6,
			yera: "2024 Q4",
			mapImg: mapImga,
			selectImg: selectPurple,
			noselectImg: noselectPurple,
			plan: [
				{
					text: "Introduction of the second GameFi game for internal testing and NFT sales Development, testing, and launch of the three core features of the gaming platform",
				},
			],
		},
	],
});
// 初始展示数据
const mapId = reactive({
	obj: {
		id: 1,
		yera: null,
		mapImg: null,
		selectImg: null,
		noselectImg: null,
		plan: [
			{
				text: null,
			},
		],
	},
});
// 切换路线路
const changMap = (num: number) => {
	map.arr.forEach((item: any) => {
		if (num == item.id) {
			mapId.obj = item;
		}
	});
};
onMounted(() => {
	changMap(1); //监听路线图变化
});
</script>

<style lang="less" scoped>
.map-box {
	padding-top: 2.5rem;
	margin-bottom: 5rem;
	h2 {
		font-family: Arial-BoldMT;
		font-size: 1.75rem;
		text-align: center;
	}
	.map-banner {
		margin: 8rem auto 0;
		.w-h(24rem,22.4rem);
		background-image: url("/src/assets/imgs/home/map/rect.png");
		background-repeat: no-repeat;
		background-size: cover;
		position: relative;
		&::before {
			.w-h(22rem,22rem);
			content: "";
			position: absolute;
			inset: 0 0 0 0;
			margin: auto;
			background-color: #1d3f54;
			border-radius: 50%;
			filter: blur(3rem);
		}
		.map-one {
			position: absolute;
			cursor: pointer;
			width: 8.88rem;
			z-index: 10;
			&:nth-child(1) {
				top: -4.2rem;
				left: -0.3rem;
			}
			&:nth-child(2) {
				top: -5.96rem;
				left: 7.5rem;
			}
			&:nth-child(3) {
				top: -4.2rem;
				left: 15.4rem;
			}
			&:nth-child(4) {
				bottom: 7.7rem;
				left: -0.3rem;
			}
			&:nth-child(5) {
				bottom: 5.3rem;
				left: 7.5rem;
			}
			&:nth-child(6) {
				bottom: 7.7rem;
				left: 15.4rem;
			}
			.map-img {
				position: absolute;
				left: 3.28rem;
			}
			.noselect-img {
				position: absolute;
				top: 3.78rem;
				left: 1.75rem;
			}
			.select-img {
				position: absolute;
				top: 1.6rem;
			}
		}
		.map-text {
			position: relative;
			width: 19.56rem;
			text-align: center;
			padding-top: 4rem;
			margin: 0 auto;
			h3 {
				font-size: 1.2rem;
			}
			.map-text-plan {
				margin-top: 1.6rem;
				p {
					margin-top: 0.6rem;
					line-height: 1.13rem;
					text-align: left;
				}
			}
		}
	}
}
</style>
