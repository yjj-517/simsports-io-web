<!-- 项目生态展示 -->
<template>
	<div id="container" class="ecology_box">
		<div class="ecology_main">
			<div v-for="(item, index) in ecology.arr" :key="index" class="ecology_main_text">
				<el-image :src="ecologyIcon" class="ecologyIcon" />
				<div class="ecology_main_flex">
					<div class="flex_img" @mouseover="mouseOver(index)" @mouseleave="mouseLeave(index)">
						<el-image :style="item.transforms" :src="item.imgUrl" class="ecologyImg" />
						<div class="flex_text" :style="item.transforms">{{ item.text }}</div>
					</div>
					<p>{{ item.title }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import ecologyIcon from "@/assets/imgs/home/ecologyIcon.png";
import ecologyImg01 from "@/assets/imgs/home/ecologyImg01.png";
import ecologyImg02 from "@/assets/imgs/home/ecologyImg02.png";
import ecologyImg03 from "@/assets/imgs/home/ecologyImg03.png";
// 生态图
const ecology = reactive({
	arr: [
		{
			transforms: "", //动画
			title: "SPORTS GAME",
			imgUrl: ecologyImg01,
			text: "SimSports is a decentralized gaming ecosystem for real-time sports games that uses NFTs, GameFi, and AI to offer innovative gameplay. It is built on a stable $SSC community economic cycle and provides a highly scalable Sports-to-Earn game mode. Various Sports-GameFi projects offer a unique gaming experience to both WEB2 and WEB3 users.",
		},
		{
			transforms: "", //动画
			title: "MARKETPLACE",
			imgUrl: ecologyImg02,
			text: "In SimSports, NFTs connect the community and sports games, providing personalized and gamified experiences. The Marketplace uses $SSC as the base currency and rewards active users with $SSC airdrops.",
		},
		{
			transforms: "", //动画
			title: "GOVERNANCE",
			imgUrl: ecologyImg03,
			text: "SimSports DAO is managed by DAO SBT Token holders, $SSC stakers, and equity pass holders to oversee project development. It is the beacon of the GameFi ecosystem and a pioneer in Web3.0 gaming, making it a rising unicorn in sports gaming.",
		},
	],
});
// 鼠标划入
const mouseOver = (index: any) => {
	ecology.arr[index].transforms = "transform:translateY(-3.72rem); transition:transform 0.5s ease-in-out;";
};
// 鼠标划出
const mouseLeave = (index: any) => {
	ecology.arr[index].transforms = "transform:translateY(0); transition:transform 0.5s ease-in-out;";
};
</script>

<style lang="less" scoped>
.ecology_box {
	.ecology_main {
		display: flex;
		width: 14.4rem;
		.ecology_main_text {
			margin: 0 0.22rem;
			position: relative;
			.ecologyIcon {
				.w-h(4.32rem,4.96rem);
			}
			.ecology_main_flex {
				position: absolute;
				top: 0.53rem;
				left: 0.3rem;
				.flex_img {
					.w-h(3.72rem,3.72rem);
					overflow: hidden;
					border-radius: 0.4rem;
					.ecologyImg {
						.w-h(3.72rem,3.72rem);
					}
					.flex_text {
						padding: 0.2rem;
						.w-h(3.32rem,3.32rem);
						font-size: 0.2rem;
						line-height: 0.3rem;
						.mixin-flex(row,center,center,nowrap);
						background-color: @COLOR_Z;
						text-align: center;
					}
				}
				p {
					margin-top: 0.2rem;
					font-size: 0.32rem;
					color: #502a75;
					font-weight: bold;
					text-align: center;
				}
			}
		}
	}
}
</style>
