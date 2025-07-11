<!-- nft详情页 -->
<template>
	<div id="container" class="assets_box">
		<BackView></BackView>
		<div class="nft_box">
			<div class="nft_left">
				<el-image :src="nft01" class="nftFigureImg" />
			</div>
			<div class="nft_right">
				<p class="nft_right_title"><span>SAMMY</span> <span>#00001</span></p>
				<div class="nft_right_text">
					<p class="text_box"><span>Owner</span><span>newG122</span></p>
					<p class="text_box"><span>Contract address</span><span>102.39.356</span></p>
					<p class="text_box"><span>TOKEN ID</span><span>00001</span></p>
					<p class="text_box"><span>Network</span><span>ETH</span></p>
				</div>
			</div>
		</div>
		<!-- 买卖按钮 -->
		<div class="nft_buy_box">
			<BuyView v-if="routerType == 'buy'"></BuyView>
			<SellView v-if="routerType == 'sell'"></SellView>
		</div>
		<div class="galaxy_box">
			<div class="galaxy_box_title">
				<span>GALAXY</span>
				<el-image :src="logoIcon" class="logoIcon" />
			</div>
			<div class="galaxy_box_text">
				You should be able to go here anytime now to see the status of our systems. We will add more over time to give everyone
				better information. Feel free to give us feedback for
			</div>
		</div>
		<div class="record_box">
			<div class="record_box_title">
				<span>Transaction Record</span>
			</div>
			<div id="table_box">
				<el-table
					:data="tableData.obj"
					style="width: 100%"
					:header-cell-style="{
						background: '#ccc',
						'text-align': 'center',
						'border-color': '#000',
						'font-size': '0.26rem',
					}"
					:cell-style="{
						background: '#ccc',
						color: '#969696',
						'text-align': 'center',
						'font-size': '0.26rem',
						'border-color': '#999',
					}"
				>
					<el-table-column prop="address" label="Address" />
					<el-table-column prop="operate" label="Operate" />
					<el-table-column prop="time" label="Time" />
					<el-table-column prop="details" label="Details">
						<template #default="scope">
							<span class="check">{{ scope.row.details }}</span>
						</template>
					</el-table-column>
				</el-table>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, reactive, watchEffect } from "vue";
import nft01 from "@/assets/imgs/home/nft/nft01.png"; //nft图片
import logoIcon from "@/assets/imgs/layout/logoIcon.png"; //logo
import BackView from "@/components/Back/index.vue"; //后退
import BuyView from "./Buy/index.vue";
import SellView from "./Sell/index.vue";
import { useRouter } from "vue-router";
const router = useRouter(); //获取路由
const routerType: any = ref(""); //路由id
watchEffect(() => {
	if (router.currentRoute.value.query) {
		routerType.value = router.currentRoute.value.query.type;
	}
});
const tableData = reactive({
	obj: [
		{
			address: "0x4576*****09856",
			operate: "buy 1.003 SSC",
			time: "2023.01.01 10：02：36",
			details: "Check",
		},
		{
			address: "0x4576*****09856",
			operate: "buy 1.003 SSC",
			time: "2023.01.01 10：02：36",
			details: "Check",
		},
		{
			address: "0x4576*****09856",
			operate: "buy 1.003 SSC",
			time: "2023.01.01 10：02：36",
			details: "Check",
		},
		{
			address: "0x4576*****09856",
			operate: "buy 1.003 SSC",
			time: "2023.01.01 10：02：36",
			details: "Check",
		},
	],
});
</script>

<style lang="less" scoped>
.assets_box {
	.nft_box {
		margin: 0.34rem 0.34rem 0;
		.mixin-flex (row, space-between, flex-start, nowrap);
		.nft_left {
			.nftFigureImg {
				.w-h(4.98rem,4.98rem);
				border-radius: 0.2rem;
			}
		}
		.nft_right {
			width: 7.7rem;
			.nft_right_title {
				font-size: 0.48rem;
				line-height: 0.4rem;
				font-weight: bold;
				span:nth-child(1) {
					margin-right: 0.6rem;
				}
			}
			.nft_right_text {
				margin-top: 0.7rem;
				.text_box {
					font-size: 0.4rem;
					height: 0.4rem;
					.mixin-flex (row, space-between, center, nowrap);
					margin-bottom: 0.4rem;
				}
			}
		}
	}
	.nft_buy_box {
		margin-top: 0.6rem;
	}
	.galaxy_box {
		margin-top: 1rem;
		.galaxy_box_title {
			.mixin-flex (row, flex-start, flex-start, nowrap);
			span {
				font-weight: bold;
				font-size: 0.6rem;
				color: @COLOR_L;
			}
			.logoIcon {
				.w-h(0.28rem,0.28rem);
				margin: 0.08rem 0 0 0.2rem;
			}
		}
		.galaxy_box_text {
			margin-top: 0.4rem;
			font-size: 0.28rem;
			line-height: 0.36rem;
			text-indent: 2em;
		}
	}
	.record_box {
		margin: 0.4rem 0;
		.record_box_title {
			span {
				font-weight: bold;
				font-size: 0.48rem;
				color: @COLOR_L;
			}
		}
		#table_box {
			width: 13rem;
			margin: 0.3rem auto 0;
			.el-table {
				padding: 0 0.28rem;
				border-radius: 0.2rem;
				background-color: #ccc;
				.check {
					color: #5f328c;
				}
			}
		}
	}
}
</style>
