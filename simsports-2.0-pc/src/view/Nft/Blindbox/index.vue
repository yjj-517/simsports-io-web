<!-- 盲盒 -->
<template>
	<routerView></routerView>
	<div id="container" v-loading="blindboxList.loadingState" class="blind_box" element-loading-background="rgba(0, 0, 0, 0.8)">
		<div class="box_left">
			<el-image :src="blindBox" class="blindBox" />
			<p class="price_text">
				<span>Price: </span>
				<span>{{ blindboxList.SPlayerNFT.m_price }} ETH</span>
			</p>
		</div>
		<div class="box_right">
			<p class="box_title">End of blind box sale</p>
			<p class="time_box">
				<span>{{ blindboxList.countdown.days }}Days</span>
				<span>{{ blindboxList.countdown.hours }}Hours</span>
				<span>{{ blindboxList.countdown.minutes }}Minutes</span>
				<span>{{ blindboxList.countdown.seconds }}Seconds</span>
			</p>
			<p class="question_box">
				<el-image :src="questionIcon" class="questionIcon" />
				<span>How to play</span>
			</p>
			<div class="text_box" style="margin-top: 0.28rem">
				<p class="text_box_name">Purchased Quantity/Total Issuance</p>
				<p class="text_box_num">8888/15000</p>
			</div>
			<div class="text_box" style="margin-top: 0.48rem">
				<p class="text_box_name">Total value of blind boxes sold</p>
				<p class="text_box_num">124,0000 $SC</p>
			</div>
			<div class="mint_box">
				<button @click.stop="goMint">MINT</button>
			</div>
		</div>
	</div>
	<blinddialogView v-if="dialog.state" :dialog="dialog"></blinddialogView>
</template>

<script setup lang="ts">
import { reactive, onMounted, onBeforeUnmount } from "vue";
import routerView from "../index.vue"; //router导航
import blindBox from "@/assets/imgs/nft/blindBox.png";
import questionIcon from "@/assets/imgs/nft/questionIcon.png";
import blinddialogView from "./blinddialog.vue"; //弹窗;
import { ElMessage } from "element-plus"; //element 提示器
import { getSplayer } from "@/http/api"; //接口
import { SPlayerNFTAddr } from "@/ethers/SPlayerNFT/index"; //合约
import { getRemainingTime } from "@/units/countdown"; //倒计时
import { ethers } from "ethers"; //引入ethers.js
import { useStores } from "@/store/index"; //store

const useStore = useStores(); //用户信息
const dialog = reactive<any>({
	state: false, //弹窗状态
});
const blindboxList: any = reactive({
	loadingState: false, //loading
	timerId: null, //定时器
	countdown: {
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	},
	//合约详情
	SPlayerNFT: {},
});
const getBindbox = async () => {
	blindboxList.loadingState = true;
	getSplayer(SPlayerNFTAddr).then((res: any) => {
		if (res.code == 0) {
			res.data.m_price = ethers.formatUnits(res.data.m_price, 18);
			blindboxList.SPlayerNFT = res.data;
			blindboxList.timerId = setInterval(() => {
				// 倒计时
				const result = getRemainingTime(res.data.record_at, res.data.mint_time_end);
				blindboxList.countdown = result;
			}, 1000);
			blindboxList.loadingState = false;
		} else {
			ElMessage.error(res.message);
		}
	});
};
// 点击mint按钮
const goMint = async () => {
	if (useStore.walletState) {
		// 判断当前时间是否可以mint
		if (blindboxList.SPlayerNFT.mint_open) {
			// 判断当前的网络
			if (useStore.walletIfon.chainId == 97) {
				dialog.state = true;
			} else {
				ElMessage.error("请切换至BNB测试网");
			}
		} else {
			ElMessage.error("当前时间不可Mint!");
		}
	} else {
		await useStore.onBalance(); //判断链接钱包并查询钱包信息
	}
};
// 判断是否连接钱包
onMounted(() => {
	// 挂载时
	getBindbox();
});
onBeforeUnmount(() => {
	// 销毁时清除定时器
	clearInterval(blindboxList.timerId);
});
</script>

<style lang="less" scoped>
.blind_box {
	padding: 0.4rem 0;
	.mixin-flex (row, space-between, flex-start, nowrap);
	.box_left {
		.blindBox {
			.w-h(4.56rem,6.26rem);
		}
		.price_text {
			margin-top: 0.2rem;
			text-align: center;
			span {
				&:nth-child(1) {
					font-size: 0.36rem;
					font-weight: bold;
					color: @COLOR_L;
				}
				&:nth-child(2) {
					font-size: 0.24rem;
					font-weight: bold;
				}
			}
		}
	}
	.box_right {
		text-align: center;
		.box_title {
			margin-top: 0.2rem;
			font-size: 0.5rem;
			color: @COLOR_L;
		}
		.time_box {
			margin-top: 0.15rem;
			font-size: 0.3rem;
			span {
				margin-right: 0.1rem;
			}
		}
		.question_box {
			margin-top: 0.2rem;
			.questionIcon {
				.w-h(0.4rem,0.4rem);
				margin-right: 0.12rem;
				vertical-align: -0.1rem;
			}
			span {
				font-size: 0.24rem;
				color: #b3b3b3;
			}
		}
		.text_box {
			width: 6.46rem;
			border: 0.02rem solid @COLOR_L;
			border-radius: 0.1rem;
			.text_box_name {
				font-size: 0.36rem;
				line-height: 0.38rem;
				margin-top: 0.3rem;
			}
			.text_box_num {
				font-size: 0.28rem;
				line-height: 0.3rem;
				margin: 0.26rem 0 0.18rem;
			}
		}
		.mint_box {
			margin-top: 0.26rem;
			button {
				display: inline-block;
				background-color: @COLOR_L;
				color: @COLOR_Z;
				font-size: 0.4rem;
				line-height: 0.58rem;
				font-weight: bold;
				padding: 0 0.6rem;
				border-radius: 0.4rem;
				&:hover {
					opacity: 0.8;
				}
			}
		}
	}
}
</style>
