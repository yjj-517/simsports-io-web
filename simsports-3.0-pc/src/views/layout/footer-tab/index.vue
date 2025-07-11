<!-- 底部 -->
<template>
	<footer class="main">
		<div class="footer-top">
			<div class="footer-left">
				<el-link :underline="false" href="/home">
					<el-image :src="logoImg" class="logo-img" />
				</el-link>
				<div class="medium-box">
					<el-link v-for="(item, index) in terraceArr.medium" :key="index" :underline="false" :href="item.url" target="_blank">
						<el-image :src="item.img" class="medium-img" />
					</el-link>
				</div>
			</div>
			<div class="footer-right">
				<el-link
					v-for="(item, index) in terraceArr.router"
					:key="index"
					:href="item.url"
					:underline="false"
					@click.stop="goRouter(item.id)"
				>
					{{ item.name }}
				</el-link>
			</div>
		</div>
		<p class="footer-bottom">
			<span>© Copyright 2023 SimSports</span>
			<el-link href="/privacypolicy" :underline="false">Privacy Policy</el-link>
			<span>All Rights Reserved</span>
		</p>
	</footer>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import logoImg from "@/assets/imgs/layout/logo-img.png";

import discordImg from "@/assets/imgs/layout/discord-img.png";
import twitterImg from "@/assets/imgs/layout/twitter-img.png";
import mIng from "@/assets/imgs/layout/m-img.png";
// import tImg from "@/assets/imgs/layout/t-img.png";

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

const terraceArr = reactive({
	medium: [
		{
			url: "https://twitter.com/SimSportsClub",
			img: twitterImg,
		},
		{
			url: "https://discord.gg/simsports",
			img: discordImg,
		},
		{
			url: " https://mirror.xyz/0x7941b572b56489D41422b9a446bB59552B021De6",
			img: mIng,
		},
		// {
		// 	url: "https://twitter.com/SimSportsClub",
		// 	img: tImg,
		// },
	],
	router: [
		{
			id: "simsports-view",
			name: "SIMSPORTS",
			url: "",
		},
		{
			id: "nft-view",
			name: "NFT",
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
	],
});
</script>

<style lang="less" scoped>
footer {
	width: 510px;
	.footer-top {
		.mixin-flex (row,space-between, flex-start, nowrap);
		.footer-left {
			.logo-img {
				.w-h(296px,83px);
			}
			.medium-box {
				margin-top: 20px;
				.mixin-flex (row,space-evenly,flex-start, nowrap);
				.el-link {
					&:nth-of-type(1) {
						.medium-img {
							width: 36px;
						}
					}
					&:nth-of-type(2) {
						.medium-img {
							width: 44px;
						}
					}
					&:nth-of-type(3) {
						.medium-img {
							width: 28px;
						}
					}
				}
			}
		}
		.footer-right {
			.mixin-flex (column,flex-start,flex-start, nowrap);
			.el-link {
				line-height: 24px;
				color: @COLOR_B;
				margin-bottom: 16px;
				:hover {
					color: @COLOR_L;
				}
			}
		}
	}
	.footer-bottom {
		// margin: 20px 300px;
		text-align: center;
		padding-bottom: 26px;
		color: #989898;
		.mixin-flex (row,space-between, flex-start, nowrap);
		.el-link {
			font-size: 16px;
			color: #989898;
			:hover {
				color: @COLOR_L;
			}
		}
	}
}
</style>
