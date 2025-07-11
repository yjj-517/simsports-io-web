<!-- 奖杯动画 -->
<template>
	<div class="gif-animation"></div>
</template>

<style lang="less" scoped>
.gif-animation {
	.w-h(100%,100%);
	background-image: url("/src/assets/imgs/Openscreen/cup/E_cup_loop_00000.png");
	background-size: cover;
	animation: gif-animation 2s infinite;
}

@keyframes gif-animation {
	0% {
		background-image: url("/src/assets/imgs/Openscreen/cup/E_cup_loop_00000.png");
	}
	50% {
		background-image: url("/src/assets/imgs/Openscreen/cup/E_cup_loop_00000.png");
	}
	55% {
		background-image: url("/src/assets/imgs/Openscreen/cup/E_cup_loop_00002.png");
	}
	60% {
		background-image: url("/src/assets/imgs/Openscreen/cup/E_cup_loop_00004.png");
	}
	65% {
		background-image: url("/src/assets/imgs/Openscreen/cup/E_cup_loop_00006.png");
	}
	70% {
		background-image: url("/src/assets/imgs/Openscreen/cup/E_cup_loop_00008.png");
	}
	75% {
		background-image: url("/src/assets/imgs/Openscreen/cup/E_cup_loop_00010.png");
	}
	80% {
		background-image: url("/src/assets/imgs/Openscreen/cup/E_cup_loop_00012.png");
	}
	85% {
		background-image: url("/src/assets/imgs/Openscreen/cup/E_cup_loop_00014.png");
	}
	90% {
		background-image: url("/src/assets/imgs/Openscreen/cup/E_cup_loop_00016.png");
	}
	95% {
		background-image: url("/src/assets/imgs/Openscreen/cup/E_cup_loop_00018.png");
	}
	97.5% {
		background-image: url("/src/assets/imgs/Openscreen/cup/E_cup_loop_00019.png");
	}
	100% {
		background-image: url("/src/assets/imgs/Openscreen/cup/E_cup_loop_00021.png");
	}
}
</style>
