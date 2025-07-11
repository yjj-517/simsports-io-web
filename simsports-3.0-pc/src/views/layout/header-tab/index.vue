<!-- 头部 -->
<template>
	<header>
		<div class="main">
			<el-link :underline="false" href="/home">
				<el-image :src="logoName" class="logo-name" />
			</el-link>
			<div class="router-box">
				<div v-for="(item, index) in routerArr.arr" :key="index" class="router-link">
					<el-link :href="item.url" :underline="false" @click.stop="goRouter(item.id)">
						{{ item.name }}
					</el-link>
				</div>
				<div class="router-link" @mouseenter="linkState = true" @mouseleave="linkState = false">
					<el-link :underline="false">WHITEPAPER</el-link>
					<div v-if="linkState" class="router-link-child">
						<div class="whitepaper-link">
							<el-link v-for="(t, i) in routerArr.whitepaperArr" :key="i" :href="t.url" :underline="false" target="_blank">
								{{ t.name }}
							</el-link>
						</div>
					</div>
				</div>
			</div>
			<div class="head-right">
				<!-- <wallet></wallet> -->
				<changeLang></changeLang>
			</div>
		</div>
	</header>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import changeLang from "./change-lang/index.vue"; //切换语言
// import wallet from "./wallet/index.vue"; //连接账户
import logoName from "@/assets/imgs/layout/logo-img-name.png";
const linkState = ref(false);
// 路由数据
const routerArr = reactive({
	arr: [
		{
			id: "top-view",
			name: "HOME",
			url: "",
		},
		{
			id: "simsports-view",
			name: "SIMSPORTS",
			url: "",
		},
		{
			id: "nft-view",
			name: "GENESIS",
			url: "",
		},
		{
			id: "game-view",
			name: "GAME",
			url: "",
		},
		{
			id: "roadmap-view",
			name: "ROADMAP",
			url: "",
		},
		// {
		// 	id: "team-view",
		// 	name: "TEAM",
		// 	url: "",
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

// 接收dialog的显示;
const props = defineProps({
	routerFunction: {
		type: Function,
		required: true,
	},
});
// 路由跳转
const goRouter = (i: any) => {
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
		height: 80px;
		.mixin-flex (row,space-between,center,nowrap);
		.logo-name {
			margin-left: 40px;
			.w-h(200px,30px);
		}
		.router-box {
			display: flex;
			.router-link {
				position: relative;
				margin: 0 30px;
				.el-link {
					color: #fff;
					font-family: ArialMT;
					&:hover {
						color: @COLOR_L;
					}
				}
				.router-link-child {
					position: absolute;
					left: -50px;
					.whitepaper-link {
						margin-top: 10px;
						border-radius: 16px;
						width: 180px;
						text-align: center;
						background-color: rgba(#1b1d22, 0.4);
						.el-link {
							line-height: 30px;
						}
					}
				}
			}
		}
		.head-right {
			.mixin-flex (row,space-between,center,nowrap);
			margin-right: 42px;
		}
	}
}
</style>
