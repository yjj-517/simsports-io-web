<!-- game-milestones -->
<template>
	<div class="main game-milestones">
		<h2 class="fillet-h2-title">MILESTONES</h2>
		<div class="milestones-list">
			<div v-for="(item, index) in milestonesData.list" :key="index" class="list-box">
				<el-image :src="item.listimg" class="milestones-icon" />
				<div class="milestones-list-num">
					<p>{{ item.num }}</p>
					<p>Million</p>
				</div>
				<p class="milestones-list-title">{{ item.title }}</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import iconVolume from "@/assets/imgs/game/milestones/icon-volume.png";
import iconUsers from "@/assets/imgs/game/milestones/icon-users.png";
import iconMonthly from "@/assets/imgs/game/milestones/icon-monthly.png";
import iconPeople from "@/assets/imgs/game/milestones/icon-people.png";
// 展示数据
const milestonesData = reactive({
	list: [
		{
			title: "Volume",
			listimg: iconVolume,
			num: "100+",
		},
		{
			title: "Users",
			listimg: iconUsers,
			num: "800+",
		},
		{
			title: "Monthly Active Users",
			listimg: iconMonthly,
			num: "10+",
		},
		{
			title: "NFT holder",
			listimg: iconPeople,
			num: "19131",
		},
	],
});
</script>

<style lang="less" scoped>
.game-milestones {
	padding: 0.96rem 0 0.8rem;
	.fillet-h2-title {
		text-align: left;
	}
	.milestones-list {
		margin-top: 1.32rem;
		.mixin-flex (row,space-evenly,flex-start,nowrap);
		.list-box {
			.mixin-flex (column,flex-start,center,nowrap);
			.milestones-icon {
				.w-h(0.6rem,0.6rem);
			}
			.milestones-list-num {
				.mixin-flex (row,flex-start,flex-end,nowrap);
				margin-top: 0.32rem;
				p {
					&:nth-of-type(1) {
						font-size: 0.6rem;
						font-weight: bold;
						color: #e6e6e6;
					}
					&:nth-of-type(2) {
						color: #666666;
					}
				}
			}
			.milestones-list-title {
				margin-top: 0.24rem;
				font-weight: bold;
				color: #e6e6e6;
			}
		}
	}
}
</style>
