<!-- home-团队 -->
<template>
	<div id="team-view" class="team-box">
		<h2>TEAM</h2>
		<div class="team-box-img">
			<div class="team-people-img" :style="{ backgroundColor: teamId.obj.backColor }">
				<div class="banner-color" :style="{ backgroundColor: teamId.obj.eclosionColor }"></div>
				<van-image width="11.44rem" :src="teamId.obj.headimg" class="team-img" />
				<van-image width="8.34rem" :src="elliptic" class="elliptic-img" />
			</div>
			<div class="team-text">
				<p>{{ teamId.obj.name }}</p>
				<p>{{ teamId.obj.position }}</p>
				<p>{{ teamId.obj.profile }}</p>
			</div>
		</div>
		<div class="team-box-change">
			<div
				v-for="(item, index) in team.arr"
				:key="index"
				class="team-people-head"
				:style="{ backgroundColor: item.backColor }"
				:class="teamId.obj.id == item.id ? 'important' : ''"
				@click="changeTeam(item.id)"
			>
				<van-image width="5rem" :src="item.headimg" class="head-img" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from "vue";
import teamImg from "@/assets/imgs/home/team/team-img.png";
import elliptic from "@/assets/imgs/home/team/elliptic.png";
// 初始展示数据
const teamId = reactive({
	obj: {
		id: 1,
		name: null,
		position: null,
		profile: null,
		headimg: "",
		backColor: "#faa52b", //背景色
		eclosionColor: "#ffe665", //羽化色
	},
});
// 团队数据
const team = reactive({
	arr: [
		{
			id: 1,
			name: "Game Producer",
			position: "1",
			profile: "World-renowned sports game producer with 15 years  of ecperience in game production.",
			headimg: teamImg,
			backColor: "#faa52b",
			eclosionColor: "#ffe665",
		},
		{
			id: 2,
			name: "Game Producer",
			position: "2",
			profile: "World-renowned sports game producer with 15 years  of ecperience in game production.",
			headimg: teamImg,
			backColor: "#e8dfc2",
			eclosionColor: "#fffff",
		},
		{
			id: 3,
			name: "Game Producer",
			position: "3",
			profile: "World-renowned sports game producer with 15 years  of ecperience in game production.",
			headimg: teamImg,
			backColor: "#bbc51c",
			eclosionColor: "#fffb90",
		},
		{
			id: 4,
			name: "Game Producer",
			position: "4",
			profile: "World-renowned sports game producer with 15 years  of ecperience in game production.",
			headimg: teamImg,
			backColor: "#57edf4 ",
			eclosionColor: "#e9ffff",
		},
		{
			id: 5,
			name: "Game Producer",
			position: "5",
			profile: "World-renowned sports game producer with 15 years  of ecperience in game production.",
			headimg: teamImg,
			backColor: "#6736da",
			eclosionColor: "#bf6dfb",
		},
		{
			id: 6,
			name: "Game Producer",
			position: "6",
			profile: "World-renowned sports game producer with 15 years  of ecperience in game production.",
			headimg: teamImg,
			backColor: "#4ff093",
			eclosionColor: "#5bfcda",
		},
	],
});

const changeTeam = (num: any) => {
	team.arr.forEach((item: any) => {
		if (num == item.id) {
			teamId.obj = item;
		}
	});
};

onMounted(() => {
	changeTeam(4); //监听团队变化
});
</script>

<style lang="less" scoped>
.team-box {
	padding: 7.5rem 0 4rem;
	h2 {
		text-align: center;
		font-size: 1.75rem;
		font-family: Arial-BoldMT;
	}
	.team-box-img {
		width: 19.4rem;
		margin: 1.94rem auto 0;
		.team-people-img {
			.w-h(19.34rem,22.47rem);
			border-radius: 0.63rem 1.88rem 0.63rem 1.88rem;
			position: relative;
			.banner-color {
				.w-h(12.5rem,12.5rem);
				border-radius: 50%;
				filter: blur(2rem);
				position: absolute;
				left: 0;
				right: 0;
				top: 0;
				bottom: 0;
				margin: auto;
			}
			.team-img {
				margin: 2.72rem 0 0 3.1rem;
			}
			.elliptic-img {
				opacity: 0.6;
				margin: -1rem 0 0 6.16rem;
			}
		}
		.team-text {
			margin-top: 0.9rem;
			font-size: 1rem;
			p:nth-child(2) {
				margin-top: 0.5rem;
			}
			p:nth-child(3) {
				margin-top: 0.78rem;
				font-size: 0.75rem;
				line-height: 1.1rem;
			}
		}
	}
	.team-box-change {
		margin: 0.8rem auto 0;
		min-width: 22.6rem;
		max-width: 28rem;
		.mixin-flex (row,space-evenly,center,nowrap);
		.team-people-head {
			.w-h(3.75rem,3.75rem);
			border-radius: 0.6rem;
			opacity: 0.5;
			overflow: hidden;
			cursor: pointer;
			&.important {
				opacity: 1;
			}
			.head-img {
				margin: 0.2rem 0 0 -1rem;
			}
		}
	}
}
</style>
