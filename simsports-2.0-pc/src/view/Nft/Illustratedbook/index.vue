<!-- 图鉴 -->
<template>
	<routerView></routerView>
	<div id="container">
		<div class="book_box">
			<!-- 左侧筛选 -->
			<div class="book_box_left">
				<div class="left_title">Filter</div>
				<Select v-for="(item, index) in selectStatus" :key="index" :select-list="item"></Select>
			</div>
			<!-- 右侧展示 -->
			<div class="book_box_right">
				<!-- 头部 -->
				<div class="right_title">
					<!-- 筛选内容 -->
					<div class="right_select_box">
						<!-- 数量 -->
						<p class="nftlist_num">
							Items
							<span>15000</span>
						</p>
						<div v-for="(item, index) in selectArr" :key="index" class="right_select_box_text">
							<span>{{ item.name }}</span>
							<el-icon class="close_icon" @click.stop="item.nameStatus = false"><Close /></el-icon>
						</div>
						<div v-if="selectArr.length > 0" class="right_select_box_text" @click.stop="clearSelectArr">Clear all</div>
					</div>
				</div>
				<!-- 图片展示 -->
				<div class="nftlist_box">
					<Nftbook
						v-for="(item, index) in nftList"
						:key="index"
						class="nft_list_box_item"
						:nft-list="item"
						@click.stop="dialog.bookState = true"
					></Nftbook>
				</div>
			</div>
		</div>
	</div>
	<bookdialogView :dialog="dialog"></bookdialogView>
</template>

<script setup lang="ts">
import { reactive, watchEffect } from "vue";
import routerView from "../index.vue"; //router导航
import Select from "@/components/Select/index.vue"; //筛选框
import Nftbook from "@/components/Nftbook/index.vue"; //nft卡片
import nft01 from "@/assets/imgs/home/nft/nft01.png"; //nft图片
import bookdialogView from "./bookdialog.vue";
const dialog = reactive<any>({
	bookState: false, //弹窗状态
});
// 左侧下拉筛选框数据
const selectStatus = reactive([
	{
		title: "State", //标题
		titleStatus: false, //头部展开状态
		content: [
			{
				name: "All", //内容
				nameStatus: false, //选中状态
			},
			{
				name: "In stock",
				nameStatus: false,
			},
			{
				name: "Auction",
				nameStatus: false,
			},
		],
	},
	{
		title: "Auction",
		titleStatus: false,
		content: [
			{
				name: "1",
				nameStatus: false,
			},
			{
				name: "2",
				nameStatus: false,
			},
			{
				name: "3",
				nameStatus: false,
			},
			{
				name: "4",
				nameStatus: false,
			},
			{
				name: "5 ",
				nameStatus: false,
			},
		],
	},
	{
		title: "Set",
		titleStatus: false,
		content: [
			{
				name: "All",
				nameStatus: false,
			},
			{
				name: "Golden",
				nameStatus: false,
			},
			{
				name: "Galaxy",
				nameStatus: false,
			},
			{
				name: "Berry",
				nameStatus: false,
			},
		],
	},
]);
// 右上方筛选显示
interface Item {
	name: string;
	nameStatus: boolean;
}
const selectArr = reactive<Item[]>([]);
// 一键清除所有选项
const clearSelectArr = () => {
	selectStatus.forEach(status => {
		status.content.forEach(item => {
			item.nameStatus = false;
		});
	});
};

// 图片列表
const nftList = reactive([
	{
		state: false, //是否加入购物车
		imgUrl: nft01,
		name: "SAMMY #000001",
		price: "1.204",
	},
	{
		state: false,
		imgUrl: nft01,
		name: "SAMMY #000002",
		price: "1.204",
	},
	{
		state: false,
		imgUrl: nft01,
		name: "SAMMY #000003",
		price: "1.204",
	},
	{
		state: false,
		imgUrl: nft01,
		name: "SAMMY #000004",
		price: "1.204",
	},
	{
		state: false,
		imgUrl: nft01,
		name: "SAMMY #000005",
		price: "1.204",
	},
	{
		state: false,
		imgUrl: nft01,
		name: "SAMMY #000006",
		price: "1.204",
	},
	{
		state: false,
		imgUrl: nft01,
		name: "SAMMY #000007",
		price: "1.204",
	},
	{
		state: false,
		imgUrl: nft01,
		name: "SAMMY #000008",
		price: "1.204",
	},
	{
		state: false,
		imgUrl: nft01,
		name: "SAMMY #000009",
		price: "1.204",
	},
	{
		state: false,
		imgUrl: nft01,
		name: "SAMMY #000010",
		price: "1.204",
	},
]);
// 监听左侧选择器状态
watchEffect(() => {
	// 遍历所有选项
	selectStatus.forEach(status => {
		status.content.forEach(item => {
			if (item.nameStatus) {
				// 如果选中状态为 true,将该项加入新数组（如果新数组中不存在该项）
				if (!selectArr.includes(item)) {
					selectArr.push(item);
				}
			} else {
				// 如果选中状态为 false,将该项从新数组中移除
				const index = selectArr.indexOf(item);
				if (index !== -1) {
					selectArr.splice(index, 1);
				}
			}
		});
	});
});
</script>

<style lang="less" scoped>
.book_box {
	.mixin-flex (row,space-between, flex-start, nowrap);
	margin-top: 0.24rem;
	.book_box_left {
		.left_title {
			line-height: 0.4rem;
			font-size: 0.22rem;
			font-weight: bold;
		}
	}
	.book_box_right {
		margin-left: 0.6rem;
		// width: 100%;
		.right_title {
			line-height: 0.4rem;
			.right_select_box {
				width: 90%;
				.mixin-flex (row,flex-start, center, wrap);
				.nftlist_num {
					font-size: 0.26rem;
					span {
						color: @COLOR_L;
						margin-left: 0.16rem;
					}
				}
				.right_select_box_text {
					background-color: @COLOR_L;
					color: @COLOR_H;
					border-radius: 0.04rem;
					line-height: 0.3rem;
					padding: 0 0.08rem;
					font-size: 0.16rem;
					font-weight: bold;
					margin: 0.05rem 0.1rem;
					.close_icon {
						margin-left: 0.04rem;
						vertical-align: -0.03rem;
						&:hover {
							opacity: 0.5;
						}
					}
				}
			}
		}
		.nftlist_box {
			.mixin-flex(row;flex-start;flex-start;wrap);
			.nft_list_box_item {
				margin: 0 0.1rem 0.2rem 0;
			}
		}
	}
}
</style>
