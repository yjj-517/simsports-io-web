<!-- header -->
<template>
	<header>
		<div class="main">
			<button @click="goRouter('top-view')"><van-image width="6rem" :src="logoImg" class="background-img" /></button>
			<div class="right-box">
				<div class="lang-box">English</div>
				<van-icon name="wap-nav" class="icon-logo" @click="showRouter = true" />
			</div>
		</div>
		<van-overlay :show="showRouter" @click="showRouter = false">
			<div class="wrapper" @click.stop>
				<div class="router-box">
					<button v-for="(item, index) in routerArr.arr" :key="index" @click.stop="goRouter(item.id)">
						{{ item.name }}
					</button>
					<button v-for="(item, index) in routerArr.whitepaperArr" :key="index" @click.stop="goLink(item.url)">
						{{ item.name }}
					</button>
				</div>
			</div>
		</van-overlay>
	</header>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import logoImg from "@/assets/imgs/layout/logo-img.png";
// 头部遮罩层
const showRouter = ref(false);

// 路由数据
const routerArr = reactive({
	arr: [
		{
			id: "top-view",
			name: "HOME",
		},
		{
			id: "simsports-view",
			name: "SIMSPORTS",
		},
		{
			id: "nft-view",
			name: "GENESIS",
		},
		{
			id: "game-view",
			name: "GAME",
		},
		{
			id: "roadmap-view",
			name: "ROADMAP",
		},
		// {
		// 	id: "team-view",
		// 	name: "TEAM",
		// },
	],
	whitepaperArr: [
		{
			name: "SimSports Whitepaper",
			url: "https://docs.simsports.io/simsports",
		},
		{
			name: "SimDunk Whitepaper",
			url: "https://docs.simsports.io/simdunk",
		},
	],
});
// 外部跳转
const goLink = (router: string) => {
	window.open(router, "_blank");
	showRouter.value = false;
};
// 接收dialog的显示;
const props = defineProps({
	routerFunction: {
		type: Function,
		required: true,
	},
});
// 路由跳转
const goRouter = (i: any) => {
	showRouter.value = false;
	props.routerFunction(i);
};
</script>

<style lang="less" scoped>
header {
	background-image: linear-gradient(to bottom, rgba(#1b1d22, 1), rgba(#1b1d22, 0.2));
	position: fixed;
	left: 0;
	top: 0;
	z-index: 9999;
	width: 100%;
	.main {
		height: 2.5rem;
		.mixin-flex (row,space-between,center,nowrap);
		margin: 0 1rem;
		.right-box {
			.mixin-flex (row,space-between,center,nowrap);
			color: @COLOR_L;
			.lang-box {
				padding: 0.44rem 0.75rem;
				border-radius: 0.72rem;
				border: solid 0.06rem @COLOR_L;
				color: @COLOR_L;
				font-size: 0.56rem;
			}
			.icon-logo {
				font-size: 2rem;
				margin-left: 1.3rem;
				cursor: pointer;
			}
		}
	}
	.wrapper {
		width: 50vw;
		float: right;
		background-color: #000;
		height: 100vh;
		.router-box {
			.mixin-flex (column,flex-start,center,nowrap);
			button {
				width: 80%;
				border-bottom: 0.1rem solid #1b1d22;
				font-size: 1rem;
				line-height: 5rem;
			}
		}
	}
}
</style>
