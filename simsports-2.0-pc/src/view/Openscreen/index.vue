<!-- 开屏页 -->
<template>
	<div class="openscreen_box">
		<div class="openscreen_main">
			<el-image :src="backImg" class="backImg" />
			<el-image :src="routerIcon" class="routerIcon" @click.stop="goRouter" />
			<div class="sport_box">
				<sport></sport>
			</div>
			<div class="laserlight_box">
				<laserlight></laserlight>
			</div>
			<div class="japanese_box">
				<japanese></japanese>
			</div>
			<div class="gamepad_box">
				<gamepad></gamepad>
			</div>
			<div class="billboard_box">
				<billboard></billboard>
			</div>
			<!-- 下面是有触发的动画 -->
			<div class="buttonOn" @click.stop="onOver"></div>
			<el-image :src="buttonLeft" class="buttonLeft" />
			<el-image :src="buttomRight" class="buttomRight" />
			<div class="billiard_box">
				<billiard v-if="animation.obj.sustain"></billiard>
				<billiardIn v-if="animation.obj.appear"></billiardIn>
			</div>
			<div class="coin_box">
				<coin v-if="animation.obj.sustain"></coin>
				<coinIn v-if="animation.obj.appear"></coinIn>
			</div>
			<div class="information_box">
				<information v-if="animation.obj.sustain"></information>
				<informationIn v-if="animation.obj.appear"></informationIn>
			</div>

			<div class="cup_box">
				<cup v-if="animation.obj.sustain"></cup>
				<cupIn v-if="animation.obj.appear"></cupIn>
			</div>

			<div class="informationR_box">
				<informationR v-if="animation.obj.sustain"></informationR>
				<informationRIn v-if="animation.obj.appear"></informationRIn>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router"; //路由

import backImg from "@/assets/imgs/Openscreen/web_bg.png"; //背景图
import routerIcon from "@/assets/imgs/Openscreen/routerIcon.png"; //路由跳转图
import buttonLeft from "@/assets/imgs/Openscreen/buttonLeft.png"; //左边按钮
import buttomRight from "@/assets/imgs/Openscreen/buttomRight.png"; //右边按钮

import sport from "./components/sport.vue"; //运动
import laserlight from "./components/laserlight.vue"; //激光灯
import japanese from "./components/japanese.vue"; //日文
import billboard from "./components/billboard.vue"; //广告牌
import gamepad from "./components/gamepad.vue"; //游戏手柄

import information from "./components/information.vue"; //左侧信息牌
import informationIn from "./components/informationIn.vue"; //左侧信息牌
import billiard from "./components/billiard.vue"; //台球
import billiardIn from "./components/billiardIn.vue"; //台球显示
import coin from "./components/coin.vue"; //金钱
import coinIn from "./components/coinIn.vue"; //金钱
import cup from "./components/cup.vue"; //奖杯
import cupIn from "./components/cupIn.vue"; //奖杯
import informationR from "./components/informationR.vue"; //右侧信息牌
import informationRIn from "./components/informationRIn.vue"; //右侧信息牌

const router = useRouter(); //路由

const animation: any = reactive({
	obj: {
		timerId: null, //定时器
		state: false, //点击状态
		appear: false, //动画出现状态
		sustain: false, //动画持续显示状态
	},
});
// 路由跳转
const goRouter = () => {
	router.push({
		path: "/home",
	});
};
// 点击加载动画
const onOver = () => {
	animation.obj.state = !animation.obj.state;
	if (animation.obj.state) {
		animation.obj.appear = true; //动画展示开启
		if (animation.obj.timerId) {
			clearTimeout(animation.obj.timerId); //清除定时器
		}
		animation.obj.timerId = setTimeout(() => {
			animation.obj.appear = false; //展示关闭
			animation.obj.sustain = true; //持续动画开启
		}, 1000);
	} else {
		if (animation.obj.timerId) {
			clearTimeout(animation.obj.timerId);
		}
		animation.obj.appear = false;
		animation.obj.sustain = false;
	}
};
</script>

<style lang="less" scoped>
.openscreen_box {
	min-height: 100vh;
	width: 100%;
	.mixin-flex(row, center, center, nowrap);
	background-color: #13012b;
	.openscreen_main {
		position: relative;
		.backImg {
			max-width: 19.6rem;
		}
		.buttonOn {
			position: absolute;
			top: 38%;
			left: 17%;
			width: 64%;
			height: 28%;
			z-index: 99;
			cursor: pointer;
		}
		.routerIcon {
			cursor: pointer;
			position: absolute;
			.w-h(1.22rem,0.18rem);
			top: 76%;
			left: 45%;
			opacity: 0.5;
			animation: breathing-light 2s ease-in-out infinite;
			@keyframes breathing-light {
				0% {
					transform: scale(0.95);
					opacity: 0.5;
				}
				50% {
					transform: scale(1);
					opacity: 1;
				}
				100% {
					transform: scale(0.95);
					opacity: 0.5;
				}
			}
		}
		.buttonLeft {
			position: absolute;
			width: 2%;
			top: 38%;
			left: 34.9%;
			animation: breathing-light-right 1s ease-in-out infinite;
		}
		.buttomRight {
			position: absolute;
			width: 2.5%;
			top: 40.2%;
			left: 75.8%;
			animation: breathing-light-right 1s ease-in-out infinite;
			@keyframes breathing-light-right {
				0% {
					transform: scale(0.95);
					opacity: 0.8;
				}
				50% {
					transform: scale(1);
					opacity: 1;
				}
				100% {
					transform: scale(0.95);
					opacity: 0.8;
				}
			}
		}
		.sport_box {
			position: absolute;
			.w-h(13.8%,24.6%);
			top: 8%;
			left: 3%;
		}
		.laserlight_box {
			position: absolute;
			.w-h(13.8%,24.6%);
			top: 10%;
			left: 15%;
		}
		.japanese_box {
			position: absolute;
			.w-h(13.8%,24.6%);
			top: 4%;
			left: 28%;
			opacity: 0.6;
		}
		.gamepad_box {
			position: absolute;
			.w-h(13.8%,24.6%);
			top: 15%;
			left: 28%;
			opacity: 0.4;
		}
		.billboard_box {
			position: absolute;
			.w-h(13.8%,24.6%);
			top: 7%;
			left: 50%;
		}
		.information_box {
			position: absolute;
			.w-h(27.7%,49.3%);
			top: 18%;
			left: 0%;
			.breathing_light_box {
				width: 2.3%;
				height: 2.3%;
				top: 69.5%;
				left: 60%;
			}
		}
		.billiard_box {
			position: absolute;
			.w-h(13.8%,24.6%);
			top: 18.3%;
			left: 40.8%;
			.breathing_light_box {
				width: 4%;
				height: 4%;
				top: 83%;
				left: 48%;
			}
		}
		.coin_box {
			position: absolute;
			.w-h(10.4%,18.5%);
			top: 23.5%;
			left: 65.2%;
			.breathing_light_box {
				width: 6%;
				height: 6%;
				top: 94%;
				left: 48%;
			}
		}
		.cup_box {
			position: absolute;
			.w-h(20.8%,37%);
			top: 54%;
			left: 4.2%;
			.breathing_light_box {
				width: 3%;
				height: 3%;
				top: 12%;
				left: 76%;
			}
		}
		.informationR_box {
			position: absolute;
			.w-h(27.7%,49.3%);
			bottom: 4%;
			right: 0;
			.breathing_light_box {
				width: 2.3%;
				height: 2.3%;
				top: 20%;
				left: 24%;
			}
		}
	}
}
</style>
