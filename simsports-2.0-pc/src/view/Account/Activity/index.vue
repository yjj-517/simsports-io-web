<!-- 交易记录 -->
<template>
	<div class="collected_box">
		<div id="table_box" v-loading="tableData.loadingState" element-loading-background="rgba(0, 0, 0, 0.5)">
			<el-table
				v-el-table-infinite-scroll="loadMore"
				:data="tableData.recordObj.list"
				style="width: 96%; margin: auto; overflow: auto; height: 8rem"
				:header-cell-style="{
					background: '#000',
					color: '#fff',
					'text-align': 'center',
					'border-color': '#999',
					'font-size': '0.26rem',
				}"
				:cell-style="{
					background: '#000',
					color: '#969696',
					'text-align': 'center',
					'font-size': '0.26rem',
					'border-color': '#999',
				}"
			>
				<el-table-column prop="record_type" label="Transaction Type">
					<template #default="scope">
						<span v-if="scope.row.record_type == 1">Mint</span>
						<span v-else-if="scope.row.record_type == 2">Transfer</span>
						<span v-else-if="scope.row.record_type == 3">Burn</span>
						<span v-else>{{ scope.row.record_type }}</span>
					</template>
				</el-table-column>
				<el-table-column prop="from_addr" label="From">
					<template #default="scope">
						<el-tooltip>
							<template #content>{{ scope.row.from_addr }} </template>
							<span style="cursor: pointer">
								{{ scope.row.from_addr.substr(0, 5) + "......" + scope.row.from_addr.substr(-6) }}
							</span>
						</el-tooltip>
					</template>
				</el-table-column>
				<el-table-column prop="to_addr" label="To">
					<template #default="scope">
						<el-tooltip>
							<template #content>{{ scope.row.to_addr }} </template>
							<span style="cursor: pointer">
								{{ scope.row.to_addr.substr(0, 5) + "......" + scope.row.to_addr.substr(-6) }}
							</span>
						</el-tooltip>
					</template>
				</el-table-column>
				<el-table-column prop="block_time" label="Time">
					<template #default="scope">
						<span>{{ new Date(parseInt(scope.row.block_time) * 1000).toLocaleString() }}</span>
					</template>
				</el-table-column>
			</el-table>
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive, onMounted, watch } from "vue";
import { getTxRecords } from "@/http/api"; //接口
import { useStores } from "@/store/index"; //store
import { default as vElTableInfiniteScroll } from "el-table-infinite-scroll"; //table触底加载
import { ElMessage } from "element-plus"; //element 提示器

const useStore = useStores(); //用户信息
const tableData = reactive({
	loadingState: false, //loading
	recordObj: {
		list: [] as any[], //交易记录
		pagination: {
			current: 1,
			page_size: 1,
			total: 1,
		}, //分页数据
	},
	pagination: {
		chain_id: "", //链
		from_or_to: "", //账户
		current: 1, //当前页
		page_size: 10, //每页条数
		state: false, //触底请求
	},
});
// 获取交易纪律
const getActivity = () => {
	if (useStore.walletState) {
		tableData.loadingState = true;
		tableData.pagination.chain_id = useStore.walletIfon.chainId;
		tableData.pagination.from_or_to = useStore.walletIfon.address;
		getTxRecords(tableData.pagination).then((res: any) => {
			if (res.code == 0) {
				tableData.recordObj.pagination = res.data.pagination;
				const { current, page_size, total } = tableData.recordObj.pagination;
				if (current * page_size < total) {
					tableData.pagination.state = true;
				} else {
					tableData.pagination.state = false;
				}
				tableData.recordObj.list.push(...res.data.list);
			} else {
				ElMessage.error(res.message);
			}
			tableData.loadingState = false;
		});
	}
};
// 触底加载
const loadMore = () => {
	if (tableData.pagination.state) {
		tableData.pagination.current += 1;
		getActivity();
	}
};
onMounted(() => {
	// 挂载时
	getActivity();
});
// 监听账号和网络修改
watch([() => useStore.walletState, () => useStore.walletIfon.address, () => useStore.walletIfon.chainId], () => {
	tableData.recordObj.list = [];
	getActivity();
});
</script>
