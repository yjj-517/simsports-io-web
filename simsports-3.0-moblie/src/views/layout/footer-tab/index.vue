<!-- footer -->
<template>
	<footer>
		<button @click="goRouter('top-view')"><van-image width="15.78rem" :src="logoImg" class="logo-img" /></button>
		<div class="medium-box">
			<button v-for="(item, index) in terraceArr.medium" :key="index" @click="goRouters(item.url)">
				<van-image :src="item.img" class="medium-img" />
			</button>
		</div>
		<div class="footer-router">
			<button v-for="(item, index) in terraceArr.router" :key="index" @click.stop="goRouter(item.id)">{{ item.name }}</button>
		</div>
		<button class="privacypolicy-link" @click.stop="goRouter('/privacypolicy')">Privacy Policy</button>
		<p class="footer-text">© Copyright 2023 SimSports All Rights Reserved</p>
	</footer>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import logoImg from "@/assets/imgs/layout/logo-img.png";
import twitterImg from "@/assets/imgs/layout/twitter-img.png";
// import tImg from "@/assets/imgs/layout/t-img.png";
import discordImg from "@/assets/imgs/layout/discord-img.png";
import mIng from "@/assets/imgs/layout/m-img.png";
import { useRouter } from "vue-router"; //路由
const router = useRouter(); //路由
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
// 外部路由跳转
const goRouters = (link: string) => {
	window.open(link, "_blank");
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
	if (i == "/privacypolicy") {
		router.push({
			path: "/privacypolicy",
		});
	} else {
		props.routerFunction(i);
	}
};
</script>

<style lang="less" scoped>
footer {
	.mixin-flex (column,center,center,nowrap);
	.medium-box {
		margin-top: 1rem;
		.mixin-flex (row,center,center,nowrap);
		button {
			margin: 0 1rem;
			&:nth-of-type(1) {
				.medium-img {
					width: 1.4rem;
				}
			}
			&:nth-of-type(2) {
				.medium-img {
					width: 1.8rem;
				}
			}
			&:nth-of-type(3) {
				.medium-img {
					width: 1.2rem;
				}
			}
		}
	}
	.footer-router {
		.mixin-flex (row,space-between,center,nowrap);
		margin-top: 1.5rem;
		button {
			margin: 0 0.8rem;
		}
	}
	.privacypolicy-link {
		line-height: 2rem;
		color: @COLOR_F;
	}
	.footer-text {
		margin-bottom: 2rem;
		color: @COLOR_F;
	}
}
</style>
