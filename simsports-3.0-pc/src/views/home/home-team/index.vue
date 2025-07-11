<!-- 首页-团队 -->
<template>
	<div id="team-view" class="main">
		<!-- <div class="bottom-color-a"></div> -->
		<!-- <div class="bottom-color-b"></div> -->
		<div class="center-box">
			<h2>TEAM</h2>
			<div class="team-box">
				<div class="team-box-left">
					<div class="team-people-img" :style="{ backgroundColor: teamId.obj.backColor }">
						<div class="banner-color" :style="{ backgroundColor: teamId.obj.eclosionColor }"></div>
						<el-image :src="teamId.obj.headimg" class="team-img" />
						<el-image :src="elliptic" class="elliptic" />
					</div>
					<div class="team-text">
						<p>{{ teamId.obj.name }}</p>
						<p>{{ teamId.obj.position }}</p>
						<p>{{ teamId.obj.profile }}</p>
					</div>
				</div>
				<div class="team-box-right">
					<div
						v-for="(item, index) in team.arr"
						:key="index"
						class="team-people-head"
						:class="teamId.obj.id == item.id ? 'important' : ''"
						@click.stop="changeTeam(item.id)"
					>
						<div class="head-img" :style="{ backgroundColor: item.backColor }">
							<div class="head-img-banner" :style="{ backgroundColor: item.eclosionColor }"></div>
							<el-image :src="item.headimg" class="team-img" />
						</div>
						<p>{{ item.name }}</p>
						<p>{{ item.position }}</p>
					</div>
				</div>
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
		headimg: null,
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
	changeTeam(1); //监听团队变化
});
</script>

<style lang="less" scoped>
.main {
	padding: 100px 0;
	.bottom-color-a {
		position: relative;
		&::before {
			.w-h(885px,885px);
			content: "";
			position: absolute;
			top: 240px;
			right: -400px;
			background-color: #1d3f54;
			border-radius: 50%;
			filter: blur(180px);
		}
	}
	.bottom-color-b {
		position: relative;
		&::before {
			.w-h(885px,885px);
			content: "";
			position: absolute;
			inset: 600px 0 0 -400px;
			background-color: #1d3f54;
			border-radius: 50%;
			filter: blur(180px);
		}
	}
	.center-box {
		position: relative;
		h2 {
			font-size: 42px;
			text-align: center;
		}
		.team-box {
			margin-top: 70px;
			.mixin-flex (row,space-between, flex-start, nowrap);
			.team-box-left {
				.team-people-img {
					.w-h(378px,470px);
					border-radius: 20px 60px 20px 60px;
					position: relative;
					.banner-color {
						.w-h(240px,240px);
						border-radius: 50%;
						filter: blur(38px);
						position: absolute;
						left: 0;
						right: 0;
						top: 0;
						bottom: 0;
						margin: auto;
					}
					.team-img {
						margin: 18px 0 0 34px;
						.w-h(284px,425px);
						z-index: 10;
					}
					.elliptic {
						.w-h(311px,64px);
						margin: -40px 0 0 40px;
						opacity: 0.5;
					}
				}
				.team-text {
					margin: 34px 0 0 24px;
					p {
						font-size: 26px;
						&:nth-child(2) {
							margin-top: 16px;
						}
						&:nth-child(3) {
							margin-top: 20px;
							font-size: 16px;
							line-height: 24px;
							width: 330px;
						}
					}
				}
			}
			.team-box-right {
				.mixin-flex (row,flex-start, center, wrap);
				margin-left: 32px;
				.team-people-head {
					.w-h(300px,276px);
					border: 3px solid #3b434f;
					border-radius: 20px 60px 20px 20px;
					margin: 20px 16px 30px 0;
					cursor: pointer;
					&.important {
						border-color: #fffd50;
					}
					&:hover {
						transform: scale(1.01);
					}
					.head-img {
						margin: -22px 0 0 -3px;
						.w-h(293px,236px);
						border-radius: 20px 50px 20px 50px;
						position: relative;
						overflow: hidden;
						.head-img-banner {
							.w-h(180px,180px);
							border-radius: 50%;
							filter: blur(32px);
							position: absolute;
							left: 0;
							right: 0;
							top: 0;
							bottom: 0;
							margin: auto;
						}
						.team-img {
							margin: 20px 0 0 -20px;
							.w-h(284px,425px);
						}
					}
					p {
						line-height: 22px;
						margin-left: 20px;
						&:nth-child(2) {
							margin-top: 10px;
						}
					}
				}
			}
		}
	}
}
</style>
