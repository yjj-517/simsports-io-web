<!-- 发展路线图 -->
<template>
	<div id="container" class="develop_main">
		<p class="main_title">ROADMAP</p>
		<div class="develop_img_box">
			<el-image :src="developImg" class="developImg" />
			<div class="box_text box_fix01">
				<div class="text_box">
					<p>{{ develop.arr[0].title }}</p>
					<p>{{ develop.arr[0].text }}</p>
				</div>
				<el-image :src="developIcon" class="developIcon" />
			</div>
			<div class="box_text box_fix02">
				<div class="text_box">
					<p>{{ develop.arr[1].title }}</p>
					<p>{{ develop.arr[1].text }}</p>
				</div>
				<el-image :src="developIcon" class="developIcon" />
			</div>
			<div class="box_text box_fix03">
				<el-image :src="developIcon" class="developIcon" />
				<div class="text_box">
					<p>{{ develop.arr[2].title }}</p>
					<p>{{ develop.arr[2].text }}</p>
				</div>
			</div>
			<div class="box_text box_fix04">
				<el-image :src="developIcon" class="developIcon" />
				<div class="text_box">
					<p>{{ develop.arr[3].title }}</p>
					<p>{{ develop.arr[3].text }}</p>
				</div>
			</div>
			<div class="box_text box_fix05">
				<div class="text_box">
					<p>{{ develop.arr[4].title }}</p>
					<p>{{ develop.arr[4].text }}</p>
				</div>
				<el-image :src="developIcon" class="developIcon" />
			</div>
			<div class="box_text box_fix06">
				<div class="text_box">
					<p>{{ develop.arr[5].title }}</p>
					<p>{{ develop.arr[5].text }}</p>
				</div>
				<el-image :src="developIcon" class="developIcon" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import developImg from "@/assets/imgs/home/developImg.png";
import developIcon from "@/assets/imgs/home/developIcon.png";
// 路线图
const develop = reactive({
	arr: [
		{
			title: "2023 Q2",
			text: 'Launch the Closed Beta Test (CBT) of the game project "SimDunk". Commence the sale of Community Genesis NFTs. Collaborate with leading NFT blue chips and Metaverse communities.',
		},
		{
			title: "2023 Q3",
			text: 'Launch the sale of "SimDunk" Mystery Box NFTs. Launch and operate the GameFi project "SimDunk".',
		},
		{
			title: "2023 Q4",
			text: "Initiate the Community Token $SSC ·Initial DEX Offering (IDO). Commence the Game Battle Pass NFT Airdrop and partial public sale. Launch the Community Token $SSC Staking.",
		},
		{
			title: "2024 Q1",
			text: "List the Community Token $SSC on the Decentralized Exchange (DEX).",
		},
		{
			title: "2024 Q2",
			text: "Launch the Community V2.0 version. List the Community Token $SSC on the Centralized Exchange (CEX).",
		},
		{
			title: "2024Q3",
			text: 'Launch the second GameFi game for closed beta testing and NFT sales. Initiate the global esports league for "SimDunk".',
		},
	],
});
</script>

<style lang="less" scoped>
.develop_main {
	.main_title {
		text-align: center;
		font-weight: bolder;
		font-size: 0.7rem;
	}
	.develop_img_box {
		margin-top: 0.92rem;
		position: relative;
		.developImg {
			.w-h(14.4rem,6rem);
		}
		.box_text {
			position: absolute;
			width: 1.6rem;
			font-size: 0.2rem;
			.developIcon {
				.w-h(0.3rem,0.3rem);
			}
			.text_box {
				p {
					line-height: 0.26rem;
				}
				p:nth-child(2) {
					margin: 0.28rem 0;
					font-size: 0.16rem;
				}
			}
		}
		// 定位
		.box_fix01 {
			bottom: 1.65rem;
			left: 1.27rem;
		}
		.box_fix02 {
			bottom: 3.4rem;
			left: 3.6rem;
		}
		.box_fix05 {
			bottom: 1.3rem;
			left: 9.3rem;
		}
		.box_fix06 {
			bottom: 4.2rem;
			left: 12.6rem;
		}
		.box_fix03 {
			top: 3.3rem;
			left: 5.5rem;
			.developIcon {
				margin-bottom: 0.1rem;
			}
		}
		.box_fix04 {
			top: 1.1rem;
			left: 6.9rem;
			.developIcon {
				margin-bottom: 0.1rem;
			}
		}
	}
}

.develop_box_back {
	height: 4.4rem;
	background: linear-gradient(#4f3a6b, #413350, #39333f);
}
</style>
