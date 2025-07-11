<!-- 主页-发展路线图 -->
<template>
	<div id="roadmap-view" class="main">
		<div class="map-box">
			<div class="map-banner">
				<div v-for="(item, index) in map.arr" :key="index" class="map-one" @click.stop="changMap(item.id)">
					<el-image :src="item.mapImg" class="map-img"> </el-image>
					<el-image v-show="item.id == mapId.obj.id" :src="item.selectImg" class="select-img"> </el-image>
					<el-image v-show="item.id !== mapId.obj.id" :src="item.noselectImg" class="noselect-img"> </el-image>
				</div>
				<div class="map-text">
					<h3>ROAD MAP</h3>
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
.main {
	padding-top: 80px;
	padding-bottom: 100px;
	.map-box {
		height: 1275px;
		position: relative;
		&::before {
			.w-h(1275px,1275px);
			content: "";
			position: absolute;
			inset: 0 0 0 0;
			margin: 0 auto;
			background-color: #1d3f54;
			border-radius: 50%;
			filter: blur(114px);
		}
		.map-banner {
			margin-top: 200px;
			position: absolute;
			inset: 220px 0 0 0;
			.w-h(1275px,720px);
			margin: auto;
			background-image: url("/src/assets/imgs/home/map/rect.png");
			background-repeat: no-repeat;
			.map-one {
				position: absolute;
				cursor: pointer;

				&:nth-child(1) {
					top: -328px;
					left: 420px;
				}
				&:nth-child(2) {
					top: -122px;
					left: 774px;
				}
				&:nth-child(3) {
					top: 250px;
					left: 848px;
				}
				&:nth-child(4) {
					top: 498px;
					left: 420px;
				}
				&:nth-child(5) {
					top: 248px;
					left: -10px;
				}
				&:nth-child(6) {
					top: -122px;
					left: 66px;
				}
				.map-img {
					position: absolute;
					left: 166px;
					.w-h(116px,166px);
				}
				.noselect-img {
					position: absolute;
					left: 85px;
					top: 186px;
					.w-h(267px,184px);
				}
				.select-img {
					position: absolute;
					top: 76px;
					.w-h(438px, 295px);
				}
			}
		}
		.map-text {
			width: 446px;
			position: absolute;
			inset: 140px 0 0 0;
			margin: auto;
			h3 {
				font-size: 42px;
				line-height: 48px;
				text-align: center;
			}
			.map-text-plan {
				margin-top: 30px;
				p {
					font-size: 20px;
					line-height: 28px;
					margin-top: 16px;
				}
			}
		}
	}
}
</style>
