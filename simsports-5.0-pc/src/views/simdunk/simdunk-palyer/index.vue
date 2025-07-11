<!-- simdunk-palyer -->
<template>
	<div class="simdunk-palyer">
		<!-- 背景图 -->
		<div class="simdunk-bg">
			<el-image :src="palyerData.initialPalyer.palyerBgImg" class="palyer-bg-img" />
		</div>
		<div class="main">
			<h2 class="fillet-h2-title">SimDunk Alpha Player Profile</h2>
			<div class="simdunk-palyer-list">
				<div v-for="(item, index) in palyerData.list" :key="index" class="simdunk-palyer-list-box">
					<el-image
						:src="item.palyerHeadImg"
						class="palyer-head-img"
						:class="item.state ? 'active' : ''"
						@click="changePalyer(index)"
					/>
				</div>
			</div>
			<button v-if="link.str" class="fillet-diamond-button" @click.stop="goRouter(link.str)">VIEW MORE</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from "vue";
import palyerBgImgSr from "@/assets/imgs/simdunk/palyer/palyer-bg-img-sr.png";
import palyerHeadSr from "@/assets/imgs/simdunk/palyer/palyer-head-sr.png";
// import palyerBgImgR from "@/assets/imgs/simdunk/palyer/palyer-bg-img-r.png";
// import palyerHeadR from "@/assets/imgs/simdunk/palyer/palyer-head-r.png";
import router from "@/router"; //router
const goRouter = (link: string) => {
	router.push(link); //路由跳转
};
const link = reactive({ str: "" }); //按钮跳转至/mint
// 展示数据
const palyerData = reactive({
	list: [
		{
			palyerBgImg: palyerBgImgSr,
			palyerHeadImg: palyerHeadSr,
			text: "SR",
			state: false,
		},
		// {
		// 	palyerBgImg: palyerBgImgR,
		// 	palyerHeadImg: palyerHeadR,
		// 	text: "R",
		// 	state: false,
		// },
	],
	// 初始展示
	initialPalyer: {
		palyerBgImg: "",
		palyerHeadImg: "",
		text: "SR",
	},
});
// 点击事件
const changePalyer = (num: any) => {
	palyerData.list.forEach((item: any, index: any) => {
		if (num == index) {
			item.state = true;
			palyerData.initialPalyer = item;
		} else {
			item.state = false;
		}
	});
};
onMounted(() => {
	changePalyer(0);
});
</script>

<style lang="less" scoped>
.simdunk-palyer {
	position: relative;
	min-width: 12rem;
	height: 10.8rem;
	overflow: hidden;
	.simdunk-bg {
		width: 19.2rem;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		.palyer-bg-img {
			.w-h(19.2rem,10.8rem);
		}
	}
	.main {
		.fillet-h2-title {
			margin-top: 0.8rem;
			text-align: left;
		}
		.simdunk-palyer-list {
			margin-top: 0.48rem;
			.mixin-flex (row,flex-start,center,nowrap);
			.simdunk-palyer-list-box {
				margin-right: 0.24rem;
				.palyer-head-img {
					cursor: pointer;
					width: 0.72rem;
					transition: transform 1s ease;
					&.active {
						transform: scale(1.2);
						opacity: 1;
					}
				}
			}
		}
		.fillet-diamond-button {
			margin: 5.8rem 0 0 1.3rem;
			.w-h(2.6rem,0.68rem);
			font-size: 0.32rem;
			clip-path: polygon(0.26rem 0, 100% 0, 100% calc(100% - 0.26rem), calc(100% - 0.26rem) 100%, 0 100%, 0 0.26rem);
		}
	}
}
</style>
