<!-- 设置价格 -->
<template>
	<div id="container" class="setprice_box">
		<BackView></BackView>
		<div class="set_price">
			<div class="switch_box">
				<p>Set Price</p>
				<div id="setprice_switch">
					<el-switch v-model="value2" size="large" style="--el-switch-on-color: #333; --el-switch-off-color: #333" />
				</div>
			</div>
			<div class="set_price_text">
				<p class="text_box">Set the maximum price for selling NFT</p>
				<div class="text_box">
					<p class="text_box_name">Select Currency</p>
					<div id="setprice_input">
						<el-input v-model="input2" placeholder="Please input">
							<template #append>ETH</template>
						</el-input>
					</div>
				</div>
				<div class="text_box">
					<p class="text_box_name">Set Price</p>
					<div id="setprice_input">
						<el-input v-model="input2" placeholder="Please input">
							<template #append>ETH</template>
						</el-input>
					</div>
				</div>
			</div>
		</div>
		<div class="set_price">
			<div class="switch_box">
				<p>Auction</p>
				<div id="setprice_switch">
					<el-switch v-model="value2" size="large" style="--el-switch-on-color: #333; --el-switch-off-color: #333" />
				</div>
			</div>
			<div class="set_price_text">
				<p class="text_box">Set the maximum price for selling NFT</p>
				<div class="text_box">
					<p class="text_box_name">Select Currency</p>
					<div id="setprice_input">
						<el-input v-model="input2" placeholder="Please input">
							<template #append>ETH</template>
						</el-input>
					</div>
				</div>
				<div class="text_box">
					<p class="text_box_name">Set Price</p>
					<div id="setprice_input">
						<el-input v-model="input2" placeholder="Please input">
							<template #append>ETH</template>
						</el-input>
					</div>
				</div>
				<div class="text_box">
					<p class="text_box_name">Set Price</p>
					<div id="setprice_input">
						<el-input v-model="input2" placeholder="Please input">
							<template #append>Days</template>
						</el-input>
					</div>
				</div>
			</div>
		</div>
		<div class="sell_input">
			<p class="input_box" @click.stop="dialog.sellState = true">SELL</p>
			<P class="sell_text">Setting up the selling platform will charge a 5% handling fee</P>
		</div>
		<selldialogView :dialog="dialog"></selldialogView>
	</div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import BackView from "@/components/Back/index.vue"; //后退
import selldialogView from "./selldialog.vue";
const dialog = reactive<any>({
	sellState: false, //弹窗状态
});
const input2 = ref("");
const value2 = ref(true);
</script>

<style lang="less" scoped>
.setprice_box {
	.set_price {
		margin-top: 0.8rem;
		color: @COLOR_L;
		.switch_box {
			.mixin-flex (row,flex-star,center,nowrap);
			p {
				font-size: 0.46rem;
				font-weight: bold;
				line-height: 0.6rem;
				margin-right: 0.9rem;
			}
		}
		.set_price_text {
			font-size: 0.26rem;
			color: @COLOR_L;
			line-height: 0.34rem;
			margin-top: 0.6rem;
			.text_box {
				margin-top: 0.32rem;
				.mixin-flex (row,flex-star,center,nowrap);
				.text_box_name {
					width: 2rem;
				}
			}
		}
	}
	.sell_input {
		margin-top: 0.6rem;
		.input_box {
			width: 4.5rem;
			line-height: 0.92rem;
			text-align: center;
			font-size: 0.46rem;
			font-weight: bold;
			background-color: @COLOR_L;
			color: @COLOR_Z;
			border-radius: 1rem;
			&:hover {
				opacity: 0.8;
			}
		}
		.sell_text {
			margin: 0.6rem 0;
			font-size: 0.26rem;
			color: #999;
			font-weight: 600;
		}
	}
}
</style>
<style lang="less">
// switch选择器
#setprice_switch {
	.el-switch--large .el-switch__core {
		min-width: 1rem;
		height: 0.24rem;
	}
	.el-switch--large .el-switch__core .el-switch__action {
		width: 0.38rem;
		height: 0.38rem;
		background-color: #999;
	}
	.el-switch.is-checked .el-switch__core .el-switch__action {
		left: calc(100% - 0.4rem);
	}
}
// input输入框
#setprice_input {
	.el-input {
		width: 3rem;
		height: 0.4rem;
	}
	.el-input__wrapper {
		background-color: #333;
		box-shadow: 0 0 0.02rem 0.02rem #333 inset !important;
	}
	.el-input__inner {
		height: 0.34rem;
		font-size: 0.16rem;
		color: #fff;
	}
	/* // 去除边框 */
	.el-input .el-input__wrapper.is-focus {
		box-shadow: 0 0 2px 2px rgba(#333, 1) inset !important;
	}
	.el-input-group__append {
		background-color: #333;
		box-shadow: 0 0 0.02rem 0.02rem #333 inset !important;
		font-size: 0.18rem;
		padding: 0 0.2rem;
		font-weight: bold;
	}
	.el-icon {
		width: 0.2rem;
	}
}
</style>
