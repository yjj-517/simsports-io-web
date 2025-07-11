<!-- game-simdunk -->
<template>
	<SimdunkCarousel />
	<SimdunkIntroduce />
	<!-- <SimdunkPalyer /> -->
	<SimdunkPalyerMenu />
	<SimdunkEarn />
</template>

<script setup lang="ts">
// import { ref, reactive } from "vue";
import SimdunkCarousel from "./simdunk-carousel/index.vue";
import SimdunkIntroduce from "./simdunk-introduce/index.vue";
// import SimdunkPalyer from "./simdunk-palyer/index.vue";
import SimdunkPalyerMenu from "./simdunk-palyer-menu/index.vue";
import SimdunkEarn from "./simdunk-earn/index.vue";
</script>

<style lang="less" scoped></style>
