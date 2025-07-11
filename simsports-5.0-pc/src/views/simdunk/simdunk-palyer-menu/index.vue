<!-- simdunk-game -->
<template>
	<GamePalyerMenu v-if="exhibitData.display" :exhibit-data="exhibitData"></GamePalyerMenu>
	<GamePalyer v-else :exhibit-data="exhibitData" :palyer-data="palyerData.obj"></GamePalyer>
</template>

<script setup lang="ts">
import { reactive, watch } from "vue";
import GamePalyerMenu from "./game-palyer-menu/index.vue";
import GamePalyer from "./game-palyer/index.vue";

import { urPlayerDate, ssrPlayerDate, srPlayerDate, rPlayerDate, nPlayerDate } from "./simdunkpalyer"; //simdunkpalyer数据
// 展示数据
const exhibitData = reactive({
	display: true, //显示数据
	playerType: "", //player类型
});
// palyer数据
const palyerData = reactive({
	obj: {},
});
// 修改palyer数据
const changPalyerData = () => {
	if (exhibitData.playerType === "UR") {
		palyerData.obj = urPlayerDate;
	} else if (exhibitData.playerType === "SSR") {
		palyerData.obj = ssrPlayerDate;
	} else if (exhibitData.playerType === "SR") {
		palyerData.obj = srPlayerDate;
	} else if (exhibitData.playerType === "R") {
		palyerData.obj = rPlayerDate;
	} else if (exhibitData.playerType === "N") {
		palyerData.obj = nPlayerDate;
	}
};
watch([() => exhibitData.playerType], async () => {
	await changPalyerData();
});
</script>

<style lang="less" scoped></style>
