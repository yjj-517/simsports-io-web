<!-- game-esports -->
<template>
	<div class="game-esports">
		<!-- 背景图 -->
		<div class="esports-bg">
			<el-image :src="esportsData.esportsPeople.imgRwBgUrl" class="esports-bg-img" />
		</div>
		<!-- 黑色背景 -->
		<div class="esports-background"></div>
		<div class="main">
			<h2 class="fillet-h2-title esports-title01">Web3 Esports starts with SimSports</h2>
			<p class="fillet-paragraph-text">Games powered by SimSports through $BRAVO, imagination, and interoperability</p>
			<h2 class="fillet-h2-title esports-title02">In-House Games Plan</h2>
			<div class="esports-list-box">
				<div
					v-for="(item, index) in esportsData.list"
					:key="index"
					class="list-box"
					:class="item.state ? 'active' : ''"
					:style="item.listStyle"
					@click.stop="changeEsportsPeople(index)"
				>
					<el-image :src="item.imgRwLogoUrl" class="esports-rw-logo-img" />
					<p class="esports-rw-text">{{ item.text }}</p>
					<el-image :src="item.imgRwUrl" class="esports-rw-img" />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from "vue";
import esportsRw01 from "@/assets/imgs/game/esports/esports-rw-01.png";
import esportsRw02 from "@/assets/imgs/game/esports/esports-rw-02.png";
import esportsRw03 from "@/assets/imgs/game/esports/esports-rw-03.png";
import esportsRw04 from "@/assets/imgs/game/esports/esports-rw-04.png";
import esportsRw05 from "@/assets/imgs/game/esports/esports-rw-05.png";
import esportsRwBg01 from "@/assets/imgs/game/esports/esports-rw-bg-01.png";
import esportsRwBg02 from "@/assets/imgs/game/esports/esports-rw-bg-02.png";
import esportsRwBg03 from "@/assets/imgs/game/esports/esports-rw-bg-03.png";
import esportsRwBg04 from "@/assets/imgs/game/esports/esports-rw-bg-04.png";
import esportsRwBg05 from "@/assets/imgs/game/esports/esports-rw-bg-05.png";
import esportsRwLogo01 from "@/assets/imgs/game/esports/esports-rw-logo-01.png";
import esportsRwLogo02 from "@/assets/imgs/game/esports/esports-rw-logo-02.png";
import esportsRwLogo03 from "@/assets/imgs/game/esports/esports-rw-logo-03.png";
import esportsRwLogo04 from "@/assets/imgs/game/esports/esports-rw-logo-04.png";
import esportsRwLogo05 from "@/assets/imgs/game/esports/esports-rw-logo-05.png";
// 展示数据
const esportsData = reactive({
	list: [
		{
			imgRwUrl: esportsRw01,
			imgRwBgUrl: esportsRwBg01,
			imgRwLogoUrl: esportsRwLogo01,
			text: "Moba",
			state: false,
			listStyle: "background-image: linear-gradient(to right bottom, #A400CD, #CDA000);",
		},
		{
			imgRwUrl: esportsRw02,
			imgRwBgUrl: esportsRwBg02,
			imgRwLogoUrl: esportsRwLogo02,
			text: "Esports",
			state: false,
			listStyle: "background-image: linear-gradient(to right bottom, #87CD00, #008FCD);",
		},
		{
			imgRwUrl: esportsRw03,
			imgRwBgUrl: esportsRwBg03,
			imgRwLogoUrl: esportsRwLogo03,
			text: "FPS",
			state: false,
			listStyle: "background-image: linear-gradient(to right bottom, #00A8CD, #0039CD);",
		},
		{
			imgRwUrl: esportsRw04,
			imgRwBgUrl: esportsRwBg04,
			imgRwLogoUrl: esportsRwLogo04,
			text: "RTS",
			state: false,
			listStyle: "background-image: linear-gradient(to right bottom, #9800CD, #008FCD);",
		},
		{
			imgRwUrl: esportsRw05,
			imgRwBgUrl: esportsRwBg05,
			imgRwLogoUrl: esportsRwLogo05,
			text: "Other",
			state: false,
			listStyle: "background-image: linear-gradient(to right bottom, #CD00A0, #4200CD);",
		},
	],
	// 初始展示
	esportsPeople: {
		imgRwUrl: "",
		imgRwBgUrl: "",
		imgRwLogoUrl: "",
		state: false,
	},
});
// 点击切换
const changeEsportsPeople = (num: any) => {
	esportsData.esportsPeople = esportsData.list[num];
	esportsData.list.forEach((item: any, index: any) => {
		if (num == index) {
			item.state = true;
		} else {
			item.state = false;
		}
	});
};
onMounted(() => {
	changeEsportsPeople(1);
});
</script>

<style lang="less" scoped>
.game-esports {
	position: relative;
	min-width: 12rem;
	height: 10.8rem;
	overflow: hidden;
	.esports-bg {
		width: 19.2rem;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		.esports-bg-img {
			.w-h(19.2rem,10.8rem);
			opacity: 0.3;
		}
	}
	.esports-background {
		width: 100%;
		height: 4.16rem;
		background-color: #000;
		position: absolute;
		top: 5.28rem;
	}
	.main {
		.esports-title01 {
			margin-top: 0.8rem;
			text-align: left;
		}
		.fillet-paragraph-text {
			margin-top: 0.16rem;
		}
		.esports-title02 {
			margin-top: 1.8rem;
			color: #fff;
			text-align: left;
		}
		.esports-list-box {
			.mixin-flex (row,space-around,flex-start,nowrap);
			margin-top: 1.76rem;
			.list-box {
				.w-h(2.06rem,3.78rem);
				border-radius: 0.4rem;
				position: relative;
				overflow: hidden;
				opacity: 0.3;
				transition:
					transform 1s ease,
					opacity 1s ease,
					box-shadow 1s ease;
				&.active {
					transform: scale(1.2);
					opacity: 1;
					box-shadow: inset 0 0.1rem 0.2rem 0 #d9d9d9;
				}
				.esports-rw-logo-img {
					margin: 0.2rem 0 0 0.2rem;
				}
				.esports-rw-text {
					margin: 0.24rem 0 0 0.2rem;
				}
				.esports-rw-img {
					position: absolute;
					bottom: 0;
				}
			}
		}
	}
}
</style>
