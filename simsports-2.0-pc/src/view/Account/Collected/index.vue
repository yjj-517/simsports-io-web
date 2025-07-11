<!-- myNFT -->
<template>
	<div v-loading="nftList.loadingState" class="collected_box" element-loading-background="rgba(0, 0, 0, 0.5)">
		<p class="nftlist_num">
			Items
			<span>{{ nftList.items.length }}</span>
		</p>
		<div class="nftlist_box">
			<Nftbook
				v-for="(item, index) in nftList.items"
				:key="index"
				class="nft_list_box_items"
				:nft-list="item"
				@click.stop="goAssets"
			></Nftbook>
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive, onMounted, watch } from "vue";
import Nftbook from "@/components/Nftbook/index.vue"; //nft卡片
import { useRouter } from "vue-router";
import { getNftDetail } from "@/http/api"; //接口
import { useStores } from "@/store/index"; //store
import { SPlayerNFTAbi } from "@/ethers/SPlayerNFT/index"; //合约
import { ElMessage } from "element-plus"; //element 提示器

const useStore = useStores(); //用户信息
const router = useRouter();

interface NftItem {
	// 在此处添加 nft 项目的属性和类型
	tokenId: null;
}
// nft 列表
const nftList = reactive<{ loadingState: boolean; items: NftItem[] }>({
	loadingState: false,
	items: [],
});
// 获取nft列表
const nftItems = async () => {
	nftList.loadingState = true;
	nftList.items = [];
	if (useStore.walletState) {
		if (useStore.walletIfon.chainId == 97) {
			const contract = await SPlayerNFTAbi(); //构建合约
			contract.items.getTokenIds.map((item: any) => {
				item = item.toString();
				getNftDetail({ token_id: item }).then((res: any) => {
					if (res.code == 0) {
						res.data.token_id = item;
						nftList.items.push(res.data);
					} else {
						ElMessage.error(res.message);
					}
				});
			});
			nftList.loadingState = false;
		} else {
			nftList.loadingState = false;
		}
	}
};
// 跳转至详情页
const goAssets = () => {
	router.push({
		path: "/asset",
		query: {
			type: "sell",
			tokenId: "123",
		},
	});
};

onMounted(() => {
	// 挂载时
	nftItems();
});

// 监听账号和网络修改
watch([() => useStore.walletState, () => useStore.walletIfon.address, () => useStore.walletIfon.chainId], () => {
	nftItems();
});
</script>

<style lang="less" scoped>
.collected_box {
	margin: 0.4rem 0;
	.nftlist_num {
		line-height: 0.4rem;
		font-size: 0.26rem;
		span {
			color: @COLOR_L;
			margin-left: 0.16rem;
		}
	}
	.nftlist_box {
		margin-top: 0.2rem;
		.mixin-flex(row;flex-start;flex-start;wrap);
		.nft_list_box_items {
			margin: 0 0.2rem 0.2rem 0;
		}
	}
}
</style>
