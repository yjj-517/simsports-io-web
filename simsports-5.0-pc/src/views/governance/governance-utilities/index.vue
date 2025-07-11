<!-- governance-utilities -->
<template>
	<div class="governance-utilities main">
		<h2 class="fillet-h2-title">$Bravo Utilities</h2>
		<div class="governance-utilities-box">
			<div v-for="(item, index) in utilitiesData.list" :key="index" class="list-box">
				<el-image :src="item.imgUrl" class="utilities-list-img" />
				<div class="list-text">
					<h3 class="list-text-title">{{ item.title }}</h3>
					<div class="list-text-box">
						<p v-for="(t, i) in item.text" :key="i" class="fillet-paragraph-text02">{{ t }}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

import utilitiesBravo01 from "@/assets/imgs/governance/utilities-bravo01.png";
import utilitiesBravo02 from "@/assets/imgs/governance/utilities-bravo02.png";
import utilitiesBravo03 from "@/assets/imgs/governance/utilities-bravo03.png";
import utilitiesBravo04 from "@/assets/imgs/governance/utilities-bravo04.png";
// 展示数据
const utilitiesData = reactive({
	list: [
		{
			title: "Governance Platform",
			imgUrl: utilitiesBravo01,
			text: [
				"Utilizing a Token voting platform to initiate proposals and cast votes, with execution carried out by the SimSports team, for the governance of the gaming platform.",
				"Areas of governance include: the allocation of investment funds, pricing of infrastructure services, selection of game partners, and development of platform-related features, among others.",
			],
		},
		{
			title: "Game Operations",
			imgUrl: utilitiesBravo02,
			text: [
				"Earn fee from SimSports NFT marketplace and Token Exchange.",
				"Conducting airdrop activities to attract players across games on the platform.",
				"Providing special gameplay rewards within the games.",
			],
		},
		{
			title: "Enhancing the Gaming Experience",
			imgUrl: utilitiesBravo03,
			text: [
				"Using NFTs and Tokens in the LaunchPad for purchasing various games.",
				"Acquiring NFTs and Tokens on exchanges for different games, as well as covering transaction gas and fees.",
				"Use on Fans driven ESports events.",
			],
		},
		{
			title: "Participation in Infrastructure Development",
			imgUrl: utilitiesBravo04,
			text: [
				"Addressing the requirements and maintenance rewards for constructing a distributed server node network for the gaming platform.",
			],
		},
	],
});
</script>

<style lang="less" scoped>
.governance-utilities {
	padding: 0.8rem 0;
	.fillet-h2-title {
		text-align: left;
	}
	.governance-utilities-box {
		margin-top: 0.8rem;
		.mixin-flex (row,space-between,flex-start,wrap);
		.list-box {
			position: relative;
			.w-h(5.8rem,3.68rem);
			margin-top: 0.4rem;
			.utilities-list-img {
				position: absolute;
				width: 5.8rem;
				.w-h(5.8rem,3.68rem);
			}
			.list-text {
				position: relative;
				margin: 0.48rem 0.48rem 0 0.48rem;
				.list-text-title {
					font-size: 0.24rem;
					line-height: 0.28rem;
				}
				.list-text-box {
					p {
						margin-top: 0.28rem;
					}
				}
			}
		}
	}
}
</style>
