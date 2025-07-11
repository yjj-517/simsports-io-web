<!-- game-top -->
<template>
	<div class="game-top">
		<!-- 背景图 -->
		<div class="game-bg">
			<el-image :src="gameBgImg" class="game-bg-img" />
		</div>
		<div class="main">
			<div class="game-logo-box">
				<el-image :src="gameLogo" class="game-logo" />
				<div class="game-link-box">
					<button class="fillet-diamond-button-trumpet" @click.stop="goRouter('/game/simdunk')">VIEW GAME</button>
					<p class="fillet-paragraph-text02">
						3v3 real-time street basketball with NFT characters in a virtual world. Earn $Dunk coins, level up, join esports
						events, and trade NFTs for profits.
					</p>
				</div>
			</div>
			<div class="game-people-box">
				<div
					v-for="(item, index) in topData.list"
					:key="index"
					class="game-people-img"
					:class="item.state ? 'active' : ''"
					@click.stop="changeBoxScale(index)"
				>
					<el-image :src="item.imgUrl" class="game-rw-img" />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from "vue";
import gameLogo from "@/assets/imgs/logo/game-logo.png";
import gameBgImg from "@/assets/imgs/game/top/game-bg-img.png";
import gameRw01 from "@/assets/imgs/game/top/game-rw01.png";
import gameRw02 from "@/assets/imgs/game/top/game-rw02.png";
import gameRw03 from "@/assets/imgs/game/top/game-rw03.png";
import router from "@/router"; //router
const goRouter = (link: string) => {
	router.push(link); //路由跳转
};

// 展示数据
const topData = reactive({
	list: [
		{
			imgUrl: gameRw01,
			state: false,
		},
		{
			imgUrl: gameRw02,
			state: false,
		},
		{
			imgUrl: gameRw03,
			state: false,
		},
	],
});
// 点击改变图片大小
const changeBoxScale = (num: any) => {
	topData.list.forEach((item: any, index: any) => {
		if (num == index) {
			item.state = true;
		} else {
			item.state = false;
		}
	});
};
onMounted(() => {
	changeBoxScale(1);
});
</script>

<style lang="less" scoped>
.game-top {
	position: relative;
	min-width: 12rem;
	height: 10.8rem;
	overflow: hidden;
	.game-bg {
		width: 19.2rem;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		.game-bg-img {
			.w-h(19.2rem,10.8rem);
		}
	}
	.main {
		padding-top: 1.12rem;
		.game-logo-box {
			.mixin-flex (row,space-between,flex-start,nowrap);
			.game-logo {
				width: 3.6rem;
			}
			.game-link-box {
				width: 3.84rem;
				margin: 1.28rem 0.32rem 0 0;
				.mixin-flex (column,center,center,nowrap);
				.fillet-diamond-button-trumpet {
					font-size: 0.24rem;
					font-weight: bold;
					.w-h(2rem,0.54rem);
					clip-path: polygon(0.18rem 0, 100% 0, 100% calc(100% - 0.18rem), calc(100% - 0.18rem) 100%, 0 100%, 0 0.18rem);
				}
				.fillet-paragraph-text02 {
					margin-top: 0.16rem;
					text-align: center;
				}
			}
		}
		.game-people-box {
			margin-top: 1rem;
			.mixin-flex (row,flex-end,flex-start,nowrap);
			.game-people-img {
				margin: 0 0.18rem;
				transition: transform 1s ease;
				&.active {
					transform: scale(1.2);
					opacity: 1;
				}
				.game-rw-img {
					width: 2.58rem;
				}
			}
		}
	}
}
</style>
