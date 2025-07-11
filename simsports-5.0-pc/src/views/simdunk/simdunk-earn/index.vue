<!-- simdunk-earn -->
<template>
	<div class="main simdunk-earn">
		<h2 class="fillet-h2-title">GAMEPLAY</h2>
		<p class="fillet-paragraph-text02">
			As a real-time sports esports game, SimDunk will gradually introduce various game modes and events centered around PvP core
			gameplay. Players can participate in regular PvP matches and seasonal ladder matches to earn in-game $Dunk coins by holding
			PvP player NFTs.
		</p>
		<div class="earn-list">
			<div v-for="(item, index) in earnData.list" :key="index" class="list-box">
				<el-image :src="earnGroup" class="earn-group" />
				<div class="list-box-text">
					<el-image :src="item.imgurl" class="icon-list-img" />
					<h3 class="fillet-h3-title">{{ item.title }}</h3>
					<p class="fillet-paragraph-text">{{ item.text }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import earnGroup from "@/assets/imgs/simdunk/earn/earn-group.png";
import iconRewards from "@/assets/imgs/simdunk/earn/icon-rewards.png";
import iconStar from "@/assets/imgs/simdunk/earn/icon-star.png";
import iconRound from "@/assets/imgs/simdunk/earn/icon-round.png";

// 展示数据
const earnData = reactive({
	list: [
		{
			title: "Esports Events",
			imgurl: iconRewards,
			text: "As one of the core gameplay modes hosted by SimSports, we regularly hold various types of competitions, providing a platform for all users holding NFT players to showcase their skills. Here, you can compete against top players worldwide, showcasing your skills and strategies. What's more, winning matches also gives you the chance to earn lucrative $Dunk rewards! Join the SimDunk esports world and kickstart your esports journey!",
		},
		{
			title: "Seasonal Ranked Matches",
			imgurl: iconStar,
			text: 'SimDunk\'s ranked matches will be held in a seasonal format, where all players can participate and earn prestigious ranks and in-game rewards. Additionally, players who own NFT characters can join the ranked matches bounty mode by purchasing "Energy Tuner R" NFT. Players earn bounty points based on the outcome of actual matches, and the game system settles rankings daily at UTC 00:00, issuing $Dunk as bounty rewards.',
		},
		{
			title: "NFT Game Staking",
			imgurl: iconRound,
			text: "In SimDunk, NFT players must stake to enter the game. Upon initial staking, all NFT players gain privileges to earn NFT points for a certain period. Players can earn NFT points through matches like 3v3 matches and 11-point matches. The game system settles player points daily and rewards $Dunk as NFT game staking rewards.",
		},
	],
});
</script>

<style lang="less" scoped>
.simdunk-earn {
	padding: 1.2rem 0 0.8rem;
	.fillet-h2-title {
		text-align: left;
	}
	.fillet-paragraph-text02 {
		width: 10.76rem;
		margin: 0.8rem auto 0;
	}
	.earn-list {
		margin-top: 0.64rem;
		.mixin-flex (row,space-between,flex-start,nowrap);
		.list-box {
			.w-h(3.68rem,4.16rem);
			position: relative;
			.earn-group {
				.w-h(3.68rem,4.16rem);
				position: absolute;
			}
			.list-box-text {
				position: relative;
				margin: 0.34rem 0.28rem 0;
				.icon-list-img {
					.w-h(0.48rem,0.48rem);
				}
				.fillet-h3-title {
					font-size: 0.2rem;
					line-height: 0.28rem;
					height: 0.56rem;
					margin-top: 0.16rem;
				}
				.fillet-paragraph-text {
					margin-top: 0.16rem;
					font-size: 0.14rem;
					line-height: 0.2rem;
				}
			}
		}
	}
}
</style>
