<!-- governance-token -->
<template>
	<div class="main governance-token">
		<h2 class="fillet-h2-title">$Bravo Token</h2>
		<p class="fillet-paragraph-text">
			Players can earn $bravo through gaming and participate in governing the SimSports platform, engaging in the development of
			gaming infrastructure and exploring a variety of gaming experiences available on SimSports.
		</p>
		<div class="governance-token-box">
			<div class="token-box-left">
				<h3 class="fillet-h3-title">$Bravo is for the Web3 Sports Economy.</h3>
				<div class="box-list">
					<p v-for="(item, index) in tokenData.list" :key="index" class="fillet-paragraph-text02">{{ item.text }}</p>
				</div>
			</div>
			<div class="token-box-right">
				<el-image :src="governanceGroup" class="governance-group" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import governanceGroup from "@/assets/imgs/governance/governance-group.png";
const tokenData = reactive({
	list: [
		{
			text: "E-Sports has enter a new generation in Web3 through games, events, metaverse and decentralized ID.",
		},
		{
			text: "The possibilities for blockchain impact on E- Sports are so endless that they can’ t possibly all be predicted yet.",
		},
		{
			text: "$Bravo is a token made to support the future, controlled and built on by the community.",
		},
		{
			text: "It will serve as a decentralized protocol laver for blockchain consensus, Web3 gaming creation, and community- led initiatives that drive ESports into the age of metaverse.",
		},
	],
});
</script>

<style lang="less" scoped>
.governance-token {
	padding: 1.8rem 0 0.96rem 0;
	.fillet-h2-title {
		text-align: left;
	}
	.fillet-paragraph-text {
		margin-top: 0.16rem;
		width: 11.52rem;
	}
	.governance-token-box {
		margin-top: 1.58rem;
		.mixin-flex (row,space-between,flex-start,nowrap);
		.token-box-left {
			width: 5.2rem;
			.fillet-h3-title {
				margin-top: 0.32rem;
				font-size: 0.2rem;
			}
			.box-list {
				.fillet-paragraph-text02 {
					margin-top: 0.24rem;
				}
			}
		}
		.token-box-right {
			.governance-group {
				width: 6rem;
			}
		}
	}
}
</style>
