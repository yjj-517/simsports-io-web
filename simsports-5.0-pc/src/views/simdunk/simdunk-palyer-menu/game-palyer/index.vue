<!-- game-palyer  -->
<template>
	<div class="game-palyer">
		<!-- 背景图 -->
		<div class="game-palyer-bg">
			<el-image :src="palyerData.bgImg" class="game-play-bg-img" />
		</div>
		<div class="main">
			<div class="game-palyer-title">
				<el-icon class="icon-left" @click="exhibitData.display = true"><ArrowLeftBold /></el-icon>
				<el-image :src="palyerData.titleImg" class="game-palyer-title-img" />
			</div>
			<!-- one-swiper -->
			<div class="game-palyer-box">
				<Splide ref="palyerSlider" :options="{ ...palyerSettings }" class="game-palyer-swiper">
					<SplideSlide v-for="(item, index) in palyerData.list" :key="index">
						<el-image :src="item.palyerImg" class="game-player-people" />
						<button v-if="item.palyerLink" class="fillet-diamond-button" @click="goLink(item.palyerLink)">ROLE GAMEPLAY</button>
						<button v-else class="fillet-diamond-button-disabled">COMING SOON</button>
					</SplideSlide>
				</Splide>
			</div>
		</div>
		<div class="game-palyer-change" :style="palyerData.backgroundColor">
			<!-- two-swiper -->
			<div class="main game-avatar-box">
				<el-image
					v-if="palyerData.list.length > 1"
					:src="palyerData.changeButton[0]"
					class="icon-change"
					@click="changeCvImg('prev')"
				/>
				<div class="game-avatar-list">
					<div class="game-avatar-swiper-center" :style="{ width: activeSwiper.width }">
						<Splide
							ref="palyerAvatarSlider"
							class="game-avatar-swiper"
							:options="{ ...palyerAvatarSettings, perPage: activeSwiper.swiperNum }"
							@splide:mounted="onSplideMounted"
							@splide:move="onSplideMove"
						>
							<SplideSlide v-for="(item, index) in palyerData.list" :key="index">
								<div class="swiper-box">
									<el-image
										:src="item.palyerAvatarImg"
										class="game-player-img"
										:style="index === activeSwiper.activeNum ? palyerData.active : {}"
									/>
								</div>
							</SplideSlide>
						</Splide>
					</div>
				</div>
				<el-image
					v-if="palyerData.list.length > 1"
					:src="palyerData.changeButton[1]"
					class="icon-change"
					@click="changeCvImg('next')"
				/>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from "vue";
import { Splide as Core, Options } from "@splidejs/splide";
import { Splide, SplideSlide } from "@splidejs/vue-splide"; //vue-splide-swiper组件
import "@splidejs/splide/dist/css/themes/splide-default.min.css"; //vue-splide-swiper组件样式
// 接受父组件数据
const props = defineProps({
	exhibitData: {
		type: Object,
		default: () => {},
	},
	palyerData: {
		type: Object,
		default: () => {},
	},
});
const exhibitData = reactive(props.exhibitData);
// 接收palyer展示数据
const palyerData = reactive(props.palyerData);
// swiper
const palyerSlider = ref<InstanceType<typeof Splide>>(); //Palyer-swiper
const palyerAvatarSlider = ref<InstanceType<typeof Splide>>(); //PalyerAvatar-swiper
const activeSwiper = reactive({
	activeNum: 0, //定义swiper索引
	width: "100%", //定义swiper宽度
	swiperNum: 5, //定义swiper数量显示数量
});
// swiper --vue-splide --Options
const palyerSettings: Options = {
	type: "fade", //轮播动画
	arrows: false, //箭头
	pagination: false, //指示点
	perPage: 1, //一帧显示
	drag: false, //禁止拖动
};
const palyerAvatarSettings: Options = {
	type: "slide",
	arrows: false,
	pagination: false,
	// perPage: activeSwiper.swiperNum,
	perMove: 1, //一次切换一张
	drag: false,
	isNavigation: true, //点击切换
};
// 绑定两个轮播图的光关联
const bindingSplide = () => {
	const thumbsSplide = palyerAvatarSlider.value?.splide;
	if (thumbsSplide) {
		palyerSlider.value?.sync(thumbsSplide);
	}
};
// 监听swiper切换
const onSplideMove = (_splide: any, index: number) => {
	activeSwiper.activeNum = index;
};
// 处理swiper 显示数量--宽度
const onSplideMounted = (splide: Core) => {
	if (splide.length >= 5) {
		activeSwiper.swiperNum = 5;
		activeSwiper.width = "100%";
	} else {
		activeSwiper.swiperNum = splide.length;
		activeSwiper.width = 1.48 * splide.length + "rem";
	}
};
// 切换轮播图按钮
const changeCvImg = (e: any) => {
	if (palyerAvatarSlider.value) {
		e == "prev" ? palyerAvatarSlider.value.go("<") : palyerAvatarSlider.value.go(">");
	}
};
const goLink = (link: any) => {
	window.open(link, "_blank");
};
onMounted(async () => {
	await bindingSplide();
});
</script>

<style lang="less" scoped>
// 去除vue-splide默认样式
.splide__track--nav > .splide__list > .splide__slide {
	border: none;
}
.splide__track--nav > .splide__list > .splide__slide.is-active {
	border: none;
}
.game-palyer {
	position: relative;
	min-width: 12rem;
	height: 10.8rem;
	overflow: hidden;
	.game-palyer-bg {
		width: 19.2rem;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		.game-play-bg-img {
			.w-h(19.2rem,10.8rem);
			opacity: 0.15;
		}
	}
	.main {
		.game-palyer-title {
			margin-top: 0.64rem;
			.mixin-flex (row,flex-start,center,nowrap);
			.icon-left {
				font-size: 0.28rem;
				cursor: pointer;
			}
			.game-palyer-title-img {
				height: 1.68rem;
			}
		}
		.game-palyer-box {
			margin-top: -0.16rem;
			position: relative;
			width: 12rem;
			.game-palyer-swiper {
				width: 100%;
				.game-player-people {
					width: 12rem;
				}
				.fillet-diamond-button {
					position: absolute;
					bottom: 0.74rem;
					right: 0.76rem;
					.w-h(2.44rem,0.5rem);
					font-size: 0.24rem;
					clip-path: polygon(0.15rem 0, 100% 0, 100% calc(100% - 0.15rem), calc(100% - 0.15rem) 100%, 0 100%, 0 0.15rem);
				}
				.fillet-diamond-button-disabled {
					position: absolute;
					bottom: 0.74rem;
					right: 0.76rem;
					.w-h(2.44rem,0.5rem);
					font-size: 0.24rem;
					clip-path: polygon(0.15rem 0, 100% 0, 100% calc(100% - 0.15rem), calc(100% - 0.15rem) 100%, 0 100%, 0 0.15rem);
				}
			}
		}
	}
	.game-palyer-change {
		height: 1.8rem;
		margin: 0 auto;
		position: relative;
		min-width: 12rem;
		max-width: 19.2rem;
		.mixin-flex (column,center,center,nowrap);
		.game-avatar-box {
			.mixin-flex (row,center,center,nowrap);
			.icon-change {
				.w-h(0.4rem,0.4rem);
				margin: 0 0.38rem;
				cursor: pointer;
			}
			.game-avatar-list {
				width: 7.5rem;
				.mixin-flex (row,center,center,nowrap);
				.game-avatar-swiper-center {
					width: 100%;
					.game-avatar-swiper {
						width: 100%;
						.swiper-box {
							.mixin-flex (row,center,center,nowrap);
							.game-player-img {
								.w-h(0.92rem,0.92rem);
								border: 0.04rem solid #999;
								border-radius: 0.08rem;
								margin: 0 0.25rem;
								cursor: pointer;
								opacity: 0.6;
								&:hover {
									opacity: 1;
								}
							}
						}
					}
				}
			}
		}
	}
}
</style>
