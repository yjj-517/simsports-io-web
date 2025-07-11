<!-- 奖杯展示动画 -->
<template>
	<div class="gif-animation"></div>
</template>

<style lang="less" scoped>
.gif-animation {
	.w-h(100%,100%);
	background-image: url("/src/assets/imgs/Openscreen/cupIn/E_cup_in_00000.png");
	background-size: cover;
	animation: gif-animation 1s infinite;
}

@keyframes gif-animation {
	0% {
		background-image: url("/src/assets/imgs/Openscreen/cupIn/E_cup_in_00000.png");
	}
	4% {
		background-image: url("/src/assets/imgs/Openscreen/cupIn/E_cup_in_00001.png");
	}
	12% {
		background-image: url("/src/assets/imgs/Openscreen/cupIn/E_cup_in_00003.png");
	}
	16% {
		background-image: url("/src/assets/imgs/Openscreen/cupIn/E_cup_in_00004.png");
	}
	24% {
		background-image: url("/src/assets/imgs/Openscreen/cupIn/E_cup_in_00006.png");
	}
	32% {
		background-image: url("/src/assets/imgs/Openscreen/cupIn/E_cup_in_00008.png");
	}
	40% {
		background-image: url("/src/assets/imgs/Openscreen/cupIn/E_cup_in_00010.png");
	}
	48% {
		background-image: url("/src/assets/imgs/Openscreen/cupIn/E_cup_in_00012.png");
	}
	56% {
		background-image: url("/src/assets/imgs/Openscreen/cupIn/E_cup_in_00014.png");
	}
	64% {
		background-image: url("/src/assets/imgs/Openscreen/cupIn/E_cup_in_00016.png");
	}
	72% {
		background-image: url("/src/assets/imgs/Openscreen/cupIn/E_cup_in_00018.png");
	}
	80% {
		background-image: url("/src/assets/imgs/Openscreen/cupIn/E_cup_in_00020.png");
	}
	88% {
		background-image: url("/src/assets/imgs/Openscreen/cupIn/E_cup_in_00022.png");
	}
	100% {
		background-image: url("/src/assets/imgs/Openscreen/cupIn/E_cup_in_00025.png");
	}
}
</style>
