<!-- build-game-platform -->
<template>
	<div id="build-game-platform-infrastructure" class="build-game-platform">
		<h2 class="fillet-h2-title">Gaming Platform Infrastructure</h2>
		<div class="game-launchpad">
			<el-image :src="platformCard01" class="platform-card01" />
			<div class="platform-text">
				<h3 class="fillet-h3-title">Web3 Game Co-Publish</h3>
				<div class="platform-text-box">
					<p class="fillet-paragraph-text02">Together we will create Web3 games rocking on IOS and Google play.</p>
				</div>
				<div class="platform-text-box">
					<p class="fillet-paragraph-text02">Game Design/Devs Guide</p>
					<p class="fillet-paragraph-text02">
						Guide developers in balancing Web2 and Web3 for game design, NFT creation, and web3 functionality. Create a gaming
						experience Web2 friendly, while integrating fun elements of asset transactions and community-driven play from Web3.
					</p>
				</div>
				<div class="platform-text-box">
					<p class="fillet-paragraph-text02">Crypto level Targeting UA</p>
					<p class="fillet-paragraph-text02">
						With over 100k web3 users’ social media data, and SimSports team over 10 million mobile users data, we deliver web3
						games targeting UA strategy.
					</p>
				</div>
				<div class="platform-text-box">
					<p class="fillet-paragraph-text02">Co-Publish</p>
					<p class="fillet-paragraph-text02">
						By utilizing Proof-of-Play and NFT community gameplay, we funnel web3 gamers who own assets and love web3 games into
						new games, kickstarting new games swiftly.
					</p>
				</div>
			</div>
		</div>
		<div class="game-creation">
			<div v-for="(item, index) in platformData.list" :key="index" class="game-creation-list">
				<div class="list-line">
					<div class="list-line-box"></div>
					<div class="list-line-box"></div>
				</div>
				<div class="game-creation-list-box">
					<h3 class="fillet-h3-title">{{ item.title }}</h3>
					<p v-for="(t, i) in item.text" :key="i" class="fillet-paragraph-text02">{{ t }}</p>
				</div>
			</div>
		</div>
		<div class="game-experience">
			<el-image :src="platformCard03" class="platform-card03" />
			<div class="experience-text">
				<h3 class="fillet-h3-title">Web3 Cross Gaming Experience</h3>
				<p class="fillet-paragraph-text02">
					SimSports offers players a unique cross-games playing experience, where your one game’ NFTs and tokens can be seamlessly
					utilized or trades across other supported games.
				</p>
				<p class="fillet-paragraph-text02">
					This extends the life time for a Web3 game and gamers, also increasing engagements. Web3 cross gaming experience.
				</p>
				<p class="fillet-paragraph-text02">
					To enable cross-games experience, SimSports will also create web2 friendly decentralized NFT marketplace and token
					exchange for each game. The marketplace will be using SimSports liquidity base and technology infrastructure, with KYCs,
					fiat pay, and mobile support.
				</p>
				<p class="fillet-paragraph-text02">
					More over, the NFT marketplace and token exchange will also the new business model for each games with platform
					governance token as trading free.
				</p>
			</div>
		</div>
		<div class="game-network">
			<h3 class="fillet-h3-title">Web3 Gaming Node Network</h3>
			<p class="fillet-paragraph-text02">
				SimSports is pioneering distributed game servers to ensure security and fairness in Web3 gaming. By leveraging a
				dual-consensus mechanism (Proof-of-Work and Proof-of-Play), Token community members establish nodes to form a distributed
				gaming server. This checks and verifies data security while being rewarded with platform Tokens.
			</p>
			<p class="fillet-paragraph-text02">
				SimSports platform also offers the necessary development and operational tools, empowering game creators to utilize
				distributed server clusters and on-chain data processing.
			</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import platformCard01 from "@/assets/imgs/build/build-game-platform/platform-card01.png";
import platformCard03 from "@/assets/imgs/build/build-game-platform/platform-card03.png";
// 展示数据
const platformData = reactive({
	list: [
		{
			title: "Web3 Gaming Metaverse",
			text: [
				"Metaverse is the place for game guild, live steam, and topics discussion.",
				"Players can create a second life in the SimSports Metaverse, where they can discuss gaming experiences with other players, explore new games and video content, and spectate gaming tournaments together.",
				"Based on a decentralized gaming ID domain system and team ID domain system, players can save their gaming achievements as their assets by the blockchain.",
			],
		},
		{
			title: "Web3 Game Creation",
			text: [
				"Integrating Web3 IP makes games great content and engagements:",
				"Web3 IP Licensing: Connects NFT brands with game creators by SimSports IP platform. NFT IP holders can authorize usage of its NFT to game creators, receiving commissions from in-game NFT or token revenue.",
				"We are negotiating partnerships with NFT holders communities include BAYC, Azuki, Doodles, etc.",
			],
		},
		{
			title: "E-Sports Events Driven By Fans",
			text: [
				"SimSports revolutionizes ESports leagues through a fan-driven economy. The game facilitates both online and offline ESports tournaments and collaborates with celebrities for participation.",
				"Players holding NFTs and Tokens can engage in discussions and strategize, fostering interaction between fans and competitors. This enhances the gaming experience, enriches social dynamics, and expands the utility of Web3 game assets.",
			],
		},
	],
});
</script>

<style lang="less" scoped>
.build-game-platform {
	padding-top: 0.96rem;
	.game-launchpad {
		margin-top: 0.8rem;
		position: relative;
		.w-h(12rem,4.88rem);
		.platform-card01 {
			position: absolute;
			width: 12rem;
		}
		.platform-text {
			position: relative;
			margin-left: 0.4rem;
			.fillet-h3-title {
				padding: 0.4rem 0 0;
			}
			.platform-text-box {
				margin-top: 0.2rem;
				.fillet-paragraph-text02 {
					width: 7.4rem;
				}
			}
		}
	}
	.game-creation {
		margin-top: 0.8rem;
		.mixin-flex (row,space-between,flex-start,nowrap);
		.game-creation-list {
			position: relative;
			.w-h(3.82rem,4.54rem);
			&:last-child {
				.list-line {
					display: none;
				}
			}
			.list-line {
				position: absolute;
				top: 50%;
				left: 100%;
				transform: translate(calc(-50% + 0.12rem), -50%);
				.list-line-box {
					.w-h(0.42rem,0.12rem);
					background-image: linear-gradient(233deg, #87cd00 0%, #c9cd00 100%);
					border-radius: 0.06rem;
					margin: 0.12rem 0;
				}
			}
			.game-creation-list-box {
				position: relative;
				.w-h(3.82rem,4.54rem);
				border: 0.02rem solid transparent;
				border-radius: 0.4rem;
				background-clip: padding-box, border-box;
				background-origin: padding-box, border-box;
				background-image: linear-gradient(315deg, rgba(#000000), rgba(#000000)),
					linear-gradient(315deg, rgba(#87cd00, 0.46), rgba(#87cd00, 0));
				.fillet-h3-title {
					font-size: 0.26rem;
					margin: 0.4rem 0 0 0.28rem;
					line-height: 0.42rem;
				}
				.fillet-paragraph-text02 {
					margin: 0.2rem 0.28rem 0;
				}
			}
		}
	}
	.game-experience {
		margin-top: 0.8rem;
		position: relative;
		.w-h(12rem,4.4rem);
		.platform-card03 {
			position: absolute;
			.w-h(12rem,4.4rem);
		}
		.experience-text {
			position: relative;
			margin-left: 4.1rem;
			.fillet-h3-title {
				padding: 0.4rem 0 0.2rem;
			}
			.fillet-paragraph-text02 {
				margin: 0.2rem 0.28rem 0 0;
			}
		}
	}
	.game-network {
		margin: 0.8rem 0 0;
		padding: 0.4rem 1.52rem 0.4rem 0.4rem;
		border: 0.02rem solid transparent;
		border-radius: 0.4rem;
		background-clip: padding-box, border-box;
		background-origin: padding-box, border-box;
		background-image: linear-gradient(315deg, rgba(#000000), rgba(#000000)),
			linear-gradient(315deg, rgba(#87cd00, 0.46), rgba(#87cd00, 0));
		.fillet-paragraph-text02 {
			margin-top: 0.2rem;
		}
	}
}
</style>
