<!-- footer -->
<template>
	<footer class="main">
		<div class="footer-logo">
			<el-link :underline="false" href="/home">
				<el-image :src="simsportsLogo" class="simsports-logo" />
			</el-link>
			<div class="medium-box">
				<el-link v-for="(item, index) in terraceArr.medium" :key="index" :underline="false" :href="item.url" target="_blank">
					<el-image :src="item.img" class="medium-img" />
					<span class="medium-text">{{ item.text }}</span>
				</el-link>
			</div>
		</div>
		<p class="footer-bottom">
			<el-link
				class="download-link"
				:underline="false"
				href="https://download.simsports.io/web/Privacy_Policy.pdf"
				target="_blank"
			>
				Privacy Policy
			</el-link>
			<el-link
				class="download-link"
				:underline="false"
				href="http://download.simsports.io/web/Terms_and_Conditions.pdf"
				target="_blank"
			>
				Terms and Conditions
			</el-link>
			<span>© Copyright 2023 SimSports. All Rights Reserved.</span>
		</p>
	</footer>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import simsportsLogo from "@/assets/imgs/layout/simsports-logo.png";
import discordImg from "@/assets/imgs/layout/discord-img.png";
import twitterImg from "@/assets/imgs/layout/twitter-img.png";
import mIng from "@/assets/imgs/layout/m-img.png";
const terraceArr = reactive({
	medium: [
		{
			url: "https://twitter.com/SimSportsClub",
			img: twitterImg,
			text: "Follow the Twitter",
		},
		{
			url: "https://discord.gg/simsports",
			img: discordImg,
			text: "Join the Discord",
		},
		{
			url: " https://mirror.xyz/0x7941b572b56489D41422b9a446bB59552B021De6",
			img: mIng,
			text: "Subscribe the Mirror",
		},
	],
});
</script>

<style lang="less" scoped>
.main {
	margin-top: 12rem;
	.footer-logo {
		.mixin-flex (row,flex-start,center,nowrap);
		.simsports-logo {
			width: 12.875rem;
			margin-left: 3.25rem;
		}
		.medium-box {
			.mixin-flex (row,flex-start,center,nowrap);
			margin-left: 3.5rem;
			.el-link {
				font-size: 1.2rem;
				color: @COLOR_B;
				background-color: rgb(#fff, 0.5);
				height: 3rem;
				margin-left: 2rem;
				padding: 0 2rem;
				border-radius: 1.2rem;
				.medium-img {
					width: 1.8rem;
				}
				&:nth-of-type(3) {
					.medium-img {
						width: 1rem;
					}
				}
				.medium-text {
					margin-left: 1rem;
				}
			}
		}
	}
	.footer-bottom {
		margin: 6rem 0 0;
		text-align: center;
		padding-bottom: 4.5rem;
		.download-link {
			font-size: 1rem;
			color: @COLOR_B;
			margin: 0 1rem;
			&:hover {
				color: @COLOR_L;
			}
		}
		span {
			margin: 0 1rem;
		}
	}
}
</style>
