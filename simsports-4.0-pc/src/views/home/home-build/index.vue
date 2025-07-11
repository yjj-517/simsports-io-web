<!-- home-build -->
<template>
	<div id="home-build">
		<div class="main">
			<h3>
				The Web3 gaming platform will offer decentralized tools for developers and provide players with diverse games,asset
				protection, and community governance solutions.
			</h3>
			<h2>
				<span>BUILD</span>
				<el-image :src="buildIcon" class="build-icon" />
			</h2>
			<!-- <button class="build-button">Web3 Game Launchpad</button> -->
			<div class="build-box">
				<el-carousel height="27.375rem" arrow="never">
					<el-carousel-item v-for="(item, index) in buildData.arr" :key="index">
						<div class="carousel-box">
							<div class="carousel-box-left">
								<p>{{ item.name }}</p>
								<p>{{ item.text }}</p>
							</div>
							<el-image :src="item.imgurl" class="carousel-box-img" />
						</div>
					</el-carousel-item>
				</el-carousel>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import buildIcon from "@/assets/imgs/home/build/build-icon.png";
import buildImg01 from "@/assets/imgs/home/build/build-img01.png";
import buildImg02 from "@/assets/imgs/home/build/build-img02.png";
import buildImg03 from "@/assets/imgs/home/build/build-img03.png";
import buildImg04 from "@/assets/imgs/home/build/build-img04.png";
import buildImg05 from "@/assets/imgs/home/build/build-img05.png";
import buildImg06 from "@/assets/imgs/home/build/build-img06.png";

// build数据
const buildData = reactive({
	arr: [
		{
			imgurl: buildImg01,
			name: "Web3 Game Co-Publish",
			text: "Balancing the gaming experience between Web2 and Web3, we aim to bring Web3 gamers who own assets and love gaming into our game through Proof-of-Play and NFT community gameplay. Creating a groundbreaking Web3 game available on the Apple App Store and Google Play.",
		},
		{
			imgurl: buildImg02,
			name: "Web3 Game Creation",
			text: "SimSports will connect NFT brands with game creators to enrich the game with content and engagement. Additionally, by utilizing AI, we aim to enhance the fun of competitive gaming. The incorporation of AI-based features for enhanced gaming abilities will revolutionize the gaming experience.",
		},
		{
			imgurl: buildImg03,
			name: "Web3 Cross Gaming Experience",
			text: " SimSports offers players a unique cross-game gaming experience where NFTs and token assets from one game can seamlessly be used or traded in other supported games. This will introduce new business models for all games.",
		},
		{
			imgurl: buildImg04,
			name: "Web3 Gaming Node Network",
			text: "SimSports is pioneering distributed game servers to ensure security and fairness in Web3 gaming. By leveraging a dual-consensus mechanism (Proof-of-Work and Proof-of-Play), community members establish nodes to form a distributed gaming server network.",
		},
		{
			imgurl: buildImg05,
			name: "Fans Driving E-Sports Events",
			text: "SimSports will drive a new era of esports leagues through a fan-driven economic cycle. The game hosts both online and offline esports tournaments, promoting interactions between fans and collaborating celebrities, enhancing the social gaming experience, and expanding the utility of Web3 gaming assets.",
		},
		{
			imgurl: buildImg06,
			name: "Metaverse and ID system for E-Sports",
			text: "The SimSports Metaverse will be players' second life, where they explore different game worlds together with other players. Meanwhile, a decentralized ID system ensures that players' gaming experiences become their blockchain assets.",
		},
	],
});
</script>

<style lang="less" scoped>
#home-build {
	.main {
		padding-top: 8rem;
		.mixin-flex (column,center,center,nowrap);
		h3 {
			font-size: 2.25rem;
			width: 51.75rem;
			text-align: center;
			line-height: 3.375rem;
		}
		h2 {
			margin-top: 4rem;
			font-size: 4.375rem;
			color: @COLOR_L;
			.mixin-flex (row,center,center,nowrap);
			.build-icon {
				margin-left: 1.25rem;
				width: 3.25rem;
			}
		}
		.build-button {
			font-size: 1.875rem;
			padding: 1.5rem 4rem;
			background-color: #f15a24;
			border-radius: 2rem;
			margin-top: 8.75rem;
		}
	}
	.build-box {
		margin-top: 6rem;
		.el-carousel {
			width: 62.5rem;
			.carousel-box {
				width: 62.5rem;
				height: 27.375rem;
				background-color: rgb(#fff, 0.15);
				border-radius: 2rem;
				.mixin-flex (row,space-between,flex-start,nowrap);
			}
			.carousel-box-left {
				margin: 6rem 0 0 4rem;
				p:nth-of-type(1) {
					font-size: 1.8rem;
					font-weight: bold;
				}
				p:nth-of-type(2) {
					margin-top: 3.125rem;
					font-size: 1.2rem;
					width: 28.75rem;
					line-height: 1.6rem;
				}
			}
			.carousel-box-img {
				width: 18rem;
				margin: 6.375rem 6rem 0 0;
			}
		}
	}
}
</style>
