<!-- home-顶部 -->
<template>
	<div id="top-view" class="top-box">
		<div class="dunk-banner"></div>
		<div class="main">
			<van-image width="21.1rem" :src="logoName" class="logo-name" />
			<p class="logo-text">THE FUTURE OF WEB3 E-SPORTS GAMING</p>
			<!-- <div class="logo-img">
				<van-image width="2.88rem" :src="logoImg" class="logo-img-icon" />
				<van-image width="16.38rem" :src="logoImgName" class="logo-img-name" />
			</div> -->
			<div class="people-box">
				<van-image width="22rem" :src="peopleImg" class="people-img" />
				<van-image width="2rem" :src="ball01" class="ball01" />
				<van-image width="1.28rem" :src="ball03" class="ball03" />
			</div>
			<!-- <p class="nft-address">
				<span>NFT:</span>
				<span>
					{{ nft.address.substr(0, 7) + "......" + nft.address.substr(-12) }}
				</span>
				<button class="copy-box" @click.stop="copyNftAddr">
					<van-image width="0.88rem" :src="copyIcon" class="copy-icon" />
				</button>
			</p> -->
		</div>
	</div>
</template>

<script setup lang="ts">
// import { reactive } from "vue";
import logoName from "@/assets/imgs/home/top/logo-name.png";
// import logoImg from "@/assets/imgs/home/top/logo-img.png";
// import logoImgName from "@/assets/imgs/home/top/logo-img-name.png";
import peopleImg from "@/assets/imgs/home/top/people-img.png";
import ball01 from "@/assets/imgs/home/top/ball01.png";
import ball03 from "@/assets/imgs/home/top/ball03.png";
// import copyIcon from "@/assets/imgs/home/top/copy-icon.png";

// const nft = reactive<any>({
// 	address: "0x7E50ed32F6eA78de6f4709B8104eA788F4dF7B7C", //合约地址
// });
// // 复制nft地址
// const copyNftAddr = () => {
// 	navigator.clipboard.writeText(nft.address);
// };
</script>

<style lang="less" scoped>
.top-box {
	position: relative;
	padding-top: 2.5rem;
	.dunk-banner {
		position: absolute;
		left: 0;
		top: 19rem;
		height: 6rem;
		width: 100vw;
		background-image: url("/src/assets/imgs/home/top/background.png");
		background-repeat: repeat-x;
		background-size: auto 100%;
	}
	.main {
		padding-top: 1.38rem;
		position: relative;
		.mixin-flex (column,center,center,nowrap);
		.logo-text {
			line-height: 3rem;
			font-size: 1rem;
			position: relative;
		}
		&::before {
			.w-h(22rem,22rem);
			content: "";
			position: absolute;
			inset: 0 0 0 0;
			background-color: #331d59;
			border-radius: 50%;
			filter: blur(3rem);
		}

		.logo-img {
			margin-top: 0.88rem;
			.mixin-flex (row,flex-start,center,nowrap);
			.logo-img-icon {
				margin-right: 0.9rem;
			}
		}
		.people-box {
			position: relative;
			&::before {
				.w-h(22rem,22rem);
				content: "";
				position: absolute;
				inset: 0 0 0 0;
				margin: auto;
				background-color: #424c1e;
				border-radius: 50%;
				filter: blur(3rem);
			}
			.ball01 {
				position: absolute;
				top: 24.4rem;
				left: 0;
			}
			.ball03 {
				position: absolute;
				top: 18rem;
			}
		}
		.nft-address {
			margin-top: 4rem;
			height: 2rem;
			z-index: 10;
			.copy-icon {
				margin-left: 1rem;
				vertical-align: -0.1rem;
			}
		}
	}
}
</style>
