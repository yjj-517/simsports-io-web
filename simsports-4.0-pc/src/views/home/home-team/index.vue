<!-- home-team -->
<template>
	<div id="home-team" class="main">
		<h3>Together, we become a powerful force driving community development, defining the new future of Web3 esports gaming.</h3>
		<h2>
			<span>TEAM IN WEB3</span>
			<el-image :src="teamIcon" class="team-icon" />
		</h2>
		<div id="team-transform" class="team-box">
			<el-image
				v-for="(item, index) in teamData.arr"
				:key="index"
				:src="item.imgurl"
				class="team-people"
				:class="{ active: item.state }"
				@click.stop="changecloseup(index)"
			/>
		</div>
		<div class="team-closeup">
			<el-image :src="teamData.obj.closeupImg" class="closeup-img" />
			<div class="team-closeup-box">
				<p class="closeup-name">{{ teamData.obj.name }}</p>
				<div class="closeup-text">
					<p>{{ teamData.obj.text }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive, onMounted, onUnmounted } from "vue";
import teamIcon from "@/assets/imgs/home/team/team-icon.png";
import teamPeople01 from "@/assets/imgs/home/team/team-people01.png";
import teamPeople02 from "@/assets/imgs/home/team/team-people02.png";
import teamPeople03 from "@/assets/imgs/home/team/team-people03.png";
import teamPeople04 from "@/assets/imgs/home/team/team-people04.png";
import teamPeople05 from "@/assets/imgs/home/team/team-people05.png";

import teamCloseup01 from "@/assets/imgs/home/team/team-closeup01.png";
import teamCloseup02 from "@/assets/imgs/home/team/team-closeup02.png";
import teamCloseup03 from "@/assets/imgs/home/team/team-closeup03.png";
import teamCloseup04 from "@/assets/imgs/home/team/team-closeup04.png";
import teamCloseup05 from "@/assets/imgs/home/team/team-closeup05.png";

// team数据
const teamData: any = reactive({
	timer: null, // 定时器
	obj: {
		imgurl: null,
		closeupImg: null,
		name: "",
		text: "",
		state: false,
	},
	arr: [
		{
			imgurl: teamPeople01,
			closeupImg: teamCloseup01,
			name: "Wico",
			text: "SimSports Founding Member.",
			state: false,
		},
		{
			imgurl: teamPeople02,
			closeupImg: teamCloseup02,
			name: "Jin",
			text: "SimSports Founding Member, famous mobile gaming industry investor and couch.",
			state: false,
		},
		{
			imgurl: teamPeople03,
			closeupImg: teamCloseup03,
			name: "Corvo",
			text: " SimSports Game System creator.",
			state: false,
		},
		{
			imgurl: teamPeople04,
			closeupImg: teamCloseup04,
			name: "Parker",
			text: "SimSports Global Web3 & Games partner network operation, Crypto & MM tech profession.",
			state: false,
		},
		{
			imgurl: teamPeople05,
			closeupImg: teamCloseup05,
			name: "Luke",
			text: "SimSports global games publishing, former publishing director of several mobile game companies.",
			state: false,
		},
	],
});
// 修改展示数据
const changecloseup = (num: any) => {
	teamData.arr.map((item: any, index: any) => {
		if (num == index) {
			teamData.obj = item;
		}
	});
};
// 监听可视距离触发动画
const handleScroll = () => {
	const targetElement = document.getElementById("team-transform");
	if (targetElement) {
		const targetElementPosition = targetElement.getBoundingClientRect().top; //当前元素距离可视屏幕的高度
		const scrollPosition = document.body.clientHeight / 2; //当前可视屏幕的高度
		if (scrollPosition >= targetElementPosition) {
			// 触发动画效果
			if (!teamData.timer) {
				let index = 0;
				teamData.arr[index].state = true;
				teamData.timer = setInterval(() => {
					if (index >= teamData.arr.length - 1) {
						index = 0;
						clearInterval(teamData.timer);
						return;
					}
					// 获取当前组数据
					const currentGroup = teamData.arr[index + 1];
					currentGroup.state = true;
					// 增加索引，用于切换到下一组数据
					index++;
				}, 100);
			}
		}
	}
};
onMounted(() => {
	window.addEventListener("scroll", handleScroll);
	changecloseup(0);
});

onUnmounted(() => {
	clearInterval(teamData.timer);
	teamData.timer = null;
	window.addEventListener("scroll", handleScroll);
});
</script>

<style lang="less" scoped>
.main {
	h3 {
		font-size: 2.25rem;
		width: 40rem;
		text-align: center;
		margin: 10rem auto 0;
		line-height: 3.38rem;
	}
	h2 {
		margin-top: 4rem;
		font-size: 4.34rem;
		color: @COLOR_L;
		.mixin-flex (row,center,center,nowrap);
		.team-icon {
			margin: 0.8rem 0 0 1.2rem;
			width: 3.5rem;
		}
	}
	.team-box {
		overflow: hidden;
		position: relative;
		height: 37rem;
		width: 55rem;
		// background-color: red;
		margin: 8rem auto 0;
		.team-people {
			position: absolute;
			width: 12.5rem;
			transition: transform 0.3s ease;
			bottom: -33rem;
			cursor: pointer;
			&:nth-of-type(1) {
				&.active {
					transform: translateY(-37rem);
				}
			}
			&:nth-of-type(2) {
				left: 10rem;
				&.active {
					transform: translateY(-33rem);
				}
			}
			&:nth-of-type(3) {
				left: 20.8rem;
				&.active {
					transform: translateY(-37rem);
				}
			}
			&:nth-of-type(4) {
				left: 31rem;
				&.active {
					transform: translateY(-33rem);
				}
			}
			&:nth-of-type(5) {
				left: 41.7rem;
				&.active {
					transform: translateY(-37rem);
				}
			}
			&:nth-of-type(6) {
				left: 52.4rem;
				&.active {
					transform: translateY(-33rem);
				}
			}
		}
	}
	.team-closeup {
		margin-top: 4.44rem;
		.mixin-flex (row,center,center,nowrap);
		.closeup-img {
			left: 4rem;
			width: 14rem;
		}
		.team-closeup-box {
			.closeup-name {
				margin-left: 5rem;
				font-size: 2.25rem;
				font-weight: bold;
			}
			.closeup-text {
				width: 46rem;
				height: 10.7rem;
				background-color: rgb(#fff, 0.5);
				border-radius: 2rem;
				p {
					padding: 1.5rem 4.7rem;
					font-size: 1.3rem;
					line-height: 1.8rem;
				}
			}
		}
	}
}
</style>
