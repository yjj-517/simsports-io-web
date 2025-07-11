<!-- 代币介绍 -->
<template>
	<div id="container" class="tokens_main">
		<p class="tokens_main_title">WHAT IS $SSC?</p>
		<p class="tokens_main_text">
			$SSC is the unique token which connects every GameFi world in the SimSports community. It includes community equity passes,
			community battle passes, various role and resource NFTs in the game.
		</p>
		<div class="tokens_main_card">
			<div class="card_text">
				<el-image :src="tokenImg" class="tokenImg" />
				<div class="box_text">Trade Tokens</div>
			</div>
			<el-image :src="dropIcon" class="dropIcon" />
			<div class="card_text">
				<el-image :src="tokenImg" class="tokenImg" />
				<div class="box_text">Stake to Earn</div>
			</div>
			<el-image :src="dropIcon" class="dropIcon" />
			<div class="card_text">
				<el-image :src="tokenImg" class="tokenImg" />
				<div class="box_text">DAO</div>
			</div>
		</div>
		<div class="click_box">
			<el-image :src="clickRight" class="clickLeft" />
			<!-- href="/competition" -->
			<el-link class="click_box_text" :underline="false">GO GET $SSC</el-link>
			<el-image :src="clickLeft" class="clickLeft" />
		</div>
	</div>
</template>

<script setup lang="ts">
import dropIcon from "@/assets/imgs/home/dropIcon.png";
import tokenImg from "@/assets/imgs/home/tokenImg.png";
import clickLeft from "@/assets/imgs/home/clickLeft.png";
import clickRight from "@/assets/imgs/home/clickRight.png";
</script>

<style lang="less" scoped>
.tokens_main {
	text-align: center;
	.tokens_main_title {
		font-size: 0.36rem;
		font-weight: bold;
	}
	.tokens_main_text {
		font-size: 0.2rem;
		margin: 0.4rem auto 0;
		width: 6rem;
		line-height: 0.28rem;
	}
	.tokens_main_card {
		margin: 1.1rem auto 0;
		.mixin-flex(row,center,center,nowrap);
		.dropIcon {
			.w-h(2.28rem,0.04rem);
			margin: 0 0.24rem;
		}
		.card_text {
			position: relative;
			.tokenImg {
				.w-h(2.1rem,2.14rem);
			}
			.box_text {
				position: absolute;
				font-size: 0.32rem;
				line-height: 0.4rem;
				width: 0.96rem;
				color: @COLOR_Z;
				font-weight: bold;
				left: 50%;
				top: 50%;
				transform: translate(-50%, -50%);
				height: auto;
			}
		}
	}
	.click_box {
		margin: 0.48rem auto 0;
		.mixin-flex(row,center,center,nowrap);
		.clickLeft {
			.w-h(2.29rem,0.47rem);
		}
		.click_box_text {
			width: 3.2rem;
			line-height: 0.7rem;
			background-color: rgba(@COLOR_F, 0.2);
			font-size: 0.26rem;
			font-weight: bold;
			border-radius: 0.35rem;
			margin: 0 0.4rem;
			color: @COLOR_F;
			border: 0.02rem solid rgba(#00c1dd, 0.5);
			&:hover {
				background-color: rgba(@COLOR_F, 0.3);
				border: 0.02rem solid rgba(#00c1dd, 1);
			}
		}
	}
}
</style>
