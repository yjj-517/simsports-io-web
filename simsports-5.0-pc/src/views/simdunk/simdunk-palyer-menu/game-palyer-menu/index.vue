<!-- game-palyer-menu  -->
<template>
	<div class="game-palyer-menu">
		<!-- 背景图 -->
		<div class="game-palyer-menu-bg">
			<el-image :src="tabBg" class="tab-bg" />
		</div>
		<div class="main">
			<div class="game-palyer-menu-list">
				<div
					v-for="(item, index) in palyerMenuData.list"
					:key="index"
					class="list-box"
					:class="item.notavailable ? 'list-box-important-no' : 'list-box-important'"
					@click.stop="changePalyer(item)"
				>
					<el-image :src="item.gameplayerSelectionbar" class="gameplayer-selectionbar" />
					<el-image v-if="item.notavailable" :src="item.notavailable" class="notavailable-img" />
					<el-image v-if="item.iconTarrow" :src="item.iconTarrow" class="icon-tarrow" />
					<el-image :src="item.rectangleImg" class="rectangle-img" />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import tabBg from "@/assets/imgs/simdunk/game/game-tab/tab-bg.png";
import iconTarrow from "@/assets/imgs/simdunk/game/game-tab/icon-tarrow.png";
import iconPlayerNotavailableyet from "@/assets/imgs/simdunk/game/game-tab/icon-player-notavailableyet.png";
import rectangleBottomImg from "@/assets/imgs/simdunk/game/game-tab/rectangle-bottom-img.png";
import rectangleTopImg from "@/assets/imgs/simdunk/game/game-tab/rectangle-top-img.png";

import gameplayerSelectionbarUr from "@/assets/imgs/simdunk/game/game-tab/game-player-selectionbar-ur.png";
import gameplayerSelectionbarSsr from "@/assets/imgs/simdunk/game/game-tab/game-player-selectionbar-ssr.png";
import gameplayerSelectionbarSr from "@/assets/imgs/simdunk/game/game-tab/game-player-selectionbar-sr.png";
import gameplayerSelectionbarR from "@/assets/imgs/simdunk/game/game-tab/game-player-selectionbar-r.png";
import gameplayerSelectionbarN from "@/assets/imgs/simdunk/game/game-tab/game-player-selectionbar-n.png";
// 接受父组件数据
const props = defineProps({
	exhibitData: {
		type: Object,
		default: () => {},
	},
});
const exhibitData = reactive(props.exhibitData);
// 点击切换组件-并修改type数据
const changePalyer = (item: any) => {
	if (item.iconTarrow) {
		exhibitData.display = false;
		exhibitData.playerType = item.type;
	}
};
// 展示数据
const palyerMenuData = reactive({
	list: [
		{
			type: "UR",
			gameplayerSelectionbar: gameplayerSelectionbarUr, //TAB
			rectangleImg: rectangleBottomImg, //遮罩层
			notavailable: iconPlayerNotavailableyet, //是否有数据-无
			iconTarrow: "", //是否有数据-有
		},
		{
			type: "SSR",
			gameplayerSelectionbar: gameplayerSelectionbarSsr,
			rectangleImg: rectangleTopImg,
			notavailable: "",
			iconTarrow: iconTarrow,
		},
		{
			type: "SR",
			gameplayerSelectionbar: gameplayerSelectionbarSr,
			rectangleImg: rectangleBottomImg,
			notavailable: "",
			iconTarrow: iconTarrow,
		},
		{
			type: "R",
			gameplayerSelectionbar: gameplayerSelectionbarR,
			rectangleImg: rectangleTopImg,
			notavailable: "",
			iconTarrow: iconTarrow,
		},
		{
			type: "N",
			gameplayerSelectionbar: gameplayerSelectionbarN,
			rectangleImg: rectangleBottomImg,
			notavailable: "",
			iconTarrow: iconTarrow,
		},
	],
});
</script>

<style lang="less" scoped>
.game-palyer-menu {
	position: relative;
	min-width: 12rem;
	height: 10.8rem;
	overflow: hidden;
	.game-palyer-menu-bg {
		width: 19.2rem;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		.tab-bg {
			.w-h(19.2rem,10.8rem);
			opacity: 0.15;
		}
	}
	.main {
		.game-palyer-menu-list {
			margin-top: 1rem;
			.mixin-flex (row,space-between,center,nowrap);
			.list-box {
				position: relative;
				width: 2rem;
				height: 8.8rem;
				cursor: pointer;
				.gameplayer-selectionbar {
					width: 2rem;
				}
				.notavailable-img {
					width: 1.48rem;
					position: absolute;
					left: 50%;
					transform: translateX(-50%);
				}
				.icon-tarrow {
					width: 1.04rem;
					position: absolute;
					left: 50%;
					transform: translateX(-50%);
					opacity: 0;
				}
				.rectangle-img {
					position: absolute;
					top: 0;
					left: 0;
					width: 2rem;
				}
				&:nth-of-type(2n + 1) {
					.notavailable-img {
						top: 1.4rem;
					}
					.icon-tarrow {
						bottom: 1.4rem;
						@keyframes listarrow_ani {
							0% {
								bottom: 3rem;
								opacity: 0;
							}
							100% {
								bottom: 1.4rem;
								opacity: 1;
							}
						}
					}
				}
				&:nth-of-type(2n) {
					.notavailable-img {
						bottom: 1.4rem;
					}
					.icon-tarrow {
						top: 1.8rem;
						transform: translateX(-50%) rotate(180deg);
						@keyframes listarrow_anis {
							0% {
								top: 3.4rem;
								opacity: 0;
							}
							100% {
								top: 1.8rem;
								opacity: 1;
							}
						}
					}
				}
				&.list-box-important {
					&:hover {
						.rectangle-img {
							display: none;
						}
						&:nth-of-type(2n + 1) {
							.icon-tarrow {
								animation: listarrow_ani 0.5s forwards;
							}
						}
						&:nth-of-type(2n) {
							.icon-tarrow {
								animation: listarrow_anis 0.5s forwards;
							}
						}
					}
				}
				&.list-box-important-no {
					&:hover {
						.rectangle-img {
							opacity: 0.3;
						}
					}
				}
			}
		}
	}
}
</style>
