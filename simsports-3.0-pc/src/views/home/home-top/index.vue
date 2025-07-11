<!-- 首页logo图展示 -->
<template>
	<div id="top-view" class="top-box">
		<div class="dunk-banner"></div>
		<div class="main">
			<div class="bottom-color">
				<div class="bottom-color-heavy color-a"></div>
				<div class="bottom-color-heavy color-b"></div>
				<div class="bottom-color-heavy color-c"></div>
			</div>
			<div class="top-conter">
				<div class="logo-box">
					<el-image :src="logoName" class="logo-name" />
					<p class="logo-text">THE FUTURE OF WEB3 E-SPORTS GAMING</p>

					<!-- <div class="logo-img">
						<el-image :src="logoImg" class="logo-img-icon" />
						<el-image :src="logoImgName" class="logo-img-name" />
					</div> -->
					<!-- 	<p class="nft-address">
						<span>NFT:</span>
						<span>
							{{ nft.address.substr(0, 7) + "......" + nft.address.substr(-12) }}
						</span>
						<button class="copy-box" @click.stop="copyNftAddr">
							<el-image :src="copyIcon" class="copy-icon" />
						</button> 
					</p>-->
				</div>
				<div class="people-box">
					<!-- <div class="pople-text">
						<p>Built on community and ownership</p>
						<p>Play by mainstream econom</p>
					</div> -->
					<el-image :src="peopleImg" class="people-img" />
					<el-image :src="ball01" class="ball01" />
					<!-- <el-image :src="ball02" class="ball02" /> -->
					<el-image :src="ball03" class="ball03" />
					<el-image :src="ball04" class="ball04" />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
// import { reactive } from "vue";
import logoName from "@/assets/imgs/home/top/logo-name.png";
// import logoImg from "@/assets/imgs/home/top/logo-img.png";
// import logoImgName from "@/assets/imgs/home/top/logo-img-name.png";
// import copyIcon from "@/assets/imgs/home/top/copy-icon.png";
import peopleImg from "@/assets/imgs/home/top/people-img.png";
import ball01 from "@/assets/imgs/home/top/ball01.png";
// import ball02 from "@/assets/imgs/home/top/ball02.png";
import ball03 from "@/assets/imgs/home/top/ball03.png";
import ball04 from "@/assets/imgs/home/top/ball04.png";

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
	padding-top: 90px;
	.dunk-banner {
		position: absolute;
		left: 0;
		right: 0;
		top: 500px;
		margin: auto;
		height: 188px;
		background-image: url("/src/assets/imgs/home/top/background.png");
		background-repeat: repeat-x;
		z-index: 1;
	}
	.main {
		.bottom-color {
			.bottom-color-heavy {
				position: relative;
				&::before {
					content: "";
					position: absolute;
					border-radius: 50%;
				}
			}
			.color-a::before {
				.w-h(619px,619px);
				background-color: #331d59;
				inset: 90px 0 0 -10px;
				filter: blur(125px);
			}
			.color-b::before {
				.w-h(570px,570px);
				background-color: #424c1e;
				inset: 295px 0 0 380px;
				filter: blur(82px);
			}
			.color-c::before {
				.w-h(619px,619px);
				background-color: #41164c;
				top: 322px;
				right: -300px;
				filter: blur(160px);
			}
		}
		.top-conter {
			position: relative;
			z-index: 99;
			.logo-box {
				text-align: center;
				.logo-name {
					width: 1200px;
				}
				.logo-text {
					line-height: 50px;
					font-size: 30px;
				}
				.logo-img {
					margin-top: 28px;
					.mixin-flex (row,flex-start, center, nowrap);
					.logo-img-icon {
						.w-h(89px,92px);
					}
					.logo-img-name {
						margin-left: 30px;
						.w-h(524px, 83px);
					}
				}
				.nft-address {
					margin-top: 50px;
					font-size: 20px;
					height: 30px;
					.mixin-flex (row,flex-start, center, nowrap);
					.copy-box {
						margin-left: 16px;
						.copy-icon {
							.w-h(28px, 26px);
							vertical-align: middle;
						}
					}
				}
			}
			.people-box {
				height: 534px;
				position: relative;
				margin-top: 100px;
				.pople-text {
					line-height: 30px;
					font-size: 20px;
					position: absolute;
					top: 440px;
					left: 120px;
				}
				.people-img {
					position: absolute;
					top: -140px;
					left: 386px;
					width: 600px;
					// .w-h(450px,600px);
				}
				.ball01 {
					position: absolute;
					top: 319px;
					left: 179px;
					.w-h(67px,66px);
				}
				.ball02 {
					position: absolute;
					top: -202px;
					right: 274px;
					.w-h(145px,122px);
				}
				.ball03 {
					position: absolute;
					top: 131px;
					right: 312px;
					.w-h(40px,41px);
				}
				.ball04 {
					position: absolute;
					top: 35px;
					right: 127px;
					.w-h(89px,89px);
				}
			}
		}
	}
}
</style>
