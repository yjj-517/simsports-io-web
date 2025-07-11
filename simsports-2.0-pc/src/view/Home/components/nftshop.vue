<!-- nft展示 -->
<template>
	<div id="container" class="nftshop_box">
		<div class="nft_box">
			<div class="carousel_box">
				<carousel-3d
					:autoplay="true"
					:autoplay-timeout="2000"
					:perspective="40"
					:display="5"
					:animation-speed="1000"
					:controls-visible="false"
					:controls-height="60"
					:border="0"
					:space="carouselImg.obj.spaceWidth"
					:width="carouselImg.obj.screenWidth"
					:height="carouselImg.obj.bannerHeight"
				>
					<slide v-for="(item, i) in imgs.arr" :key="i" :index="i">
						<img ref="rotationImg" :src="item" class="img_box" />
					</slide>
				</carousel-3d>
			</div>
			<el-image :src="lineback" class="lineback" />
		</div>
		<div class="click_box">
			<el-image :src="clickRight" class="clickLeft" />
			<!-- href="/nft/market" -->
			<el-link class="click_box_text" :underline="false">MARKETPLACE</el-link>
			<el-image :src="clickLeft" class="clickLeft" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, Ref } from "vue";

import nft01 from "@/assets/imgs/home/nft/nft01.png";
import nft02 from "@/assets/imgs/home/nft/nft02.png";
import nft03 from "@/assets/imgs/home/nft/nft03.png";
import nft04 from "@/assets/imgs/home/nft/nft04.png";
import nft05 from "@/assets/imgs/home/nft/nft05.png";
import nft06 from "@/assets/imgs/home/nft/nft06.png";
import nft07 from "@/assets/imgs/home/nft/nft07.png";
import nft08 from "@/assets/imgs/home/nft/nft08.png";
import nft09 from "@/assets/imgs/home/nft/nft09.png";
import nft10 from "@/assets/imgs/home/nft/nft10.png";
import nft11 from "@/assets/imgs/home/nft/nft11.png";
import lineback from "@/assets/imgs/home/lineback.png";
import clickLeft from "@/assets/imgs/home/clickLeft.png";
import clickRight from "@/assets/imgs/home/clickRight.png";
const rotationImg: Ref<HTMLDivElement[]> = ref([]);
const imgs = reactive({
	arr: [nft07, nft01, nft06, nft02, nft08, nft03, nft09, nft04, nft11, nft05, nft10],
});
const carouselImg = reactive({
	obj: {
		screenWidth: 350, //轮播图宽
		bannerHeight: 350, //轮播图高
		spaceWidth: 260, //可视距离
	},
});
// 获取img图片的高度
const getScreen = () => {
	if (rotationImg.value) {
		carouselImg.obj.screenWidth = rotationImg.value[0].clientHeight;
		carouselImg.obj.bannerHeight = rotationImg.value[0].clientHeight;
		carouselImg.obj.spaceWidth = (rotationImg.value[0].clientHeight * 26) / 35;
	}
	// window.onresize = () => {
	// 	carouselImg.obj.screenWidth = rotationImg.value[0].clientHeight;
	// 	carouselImg.obj.bannerHeight = rotationImg.value[0].clientHeight;
	// 	carouselImg.obj.spaceWidth = (rotationImg.value[0].clientHeight * 26) / 35;
	// };
};
onMounted(() => {
	getScreen();
});
</script>

<style lang="less" scoped>
.nftshop_box {
	.nft_box {
		width: 13.58rem;
		margin: 0 auto;
		position: relative;
		.lineback {
			.w-h(13.58rem,0.88rem);
			position: absolute;
			top: 2.6rem;
			left: 0;
		}
		.carousel_box {
			margin: 0 auto;
			width: 72%;
			.carousel-3d-container {
				z-index: 2;
			}
			.carousel-3d-slide {
				background-color: rgba(#fff, 0);
			}
			.img_box {
				.w-h(3.5rem,3.5rem);
				border-radius: 0.2rem;
			}
		}
	}
}
.click_box {
	margin-top: 1rem;
	.mixin-flex(row,center,center,nowrap);
	.clickLeft {
		.w-h(2.29rem,0.47rem);
	}
	.click_box_text {
		width: 3.2rem;
		line-height: 0.7rem;
		background-color: rgba(@COLOR_F, 0.2);
		font-size: 0.26rem;
		font-weight: bold;
		border-radius: 0.35rem;
		margin: 0 0.4rem;
		color: @COLOR_F;
		border: 0.02rem solid rgba(#00c1dd, 0.5);
		&:hover {
			background-color: rgba(@COLOR_F, 0.3);
			border: 0.02rem solid rgba(#00c1dd, 1);
		}
	}
}
</style>
