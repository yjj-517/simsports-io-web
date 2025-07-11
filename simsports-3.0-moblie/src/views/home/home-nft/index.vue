<!-- home-社区角色 -->
<template>
	<div id="nft-view" class="nft-box">
		<!-- <h2>
			<van-image width="2.1rem" :src="roleLogo" class="role-logo" />
			<span>GENESIS DR!P</span>
		</h2> -->
		<div class="nft-role-box">
			<div class="banner-box" :style="roleData.obj.transforms">
				<div v-for="(item, index) in role.arr" :key="index" class="role-img-box">
					<van-image width="17.5rem" :src="item.roleBackdrop" class="role-backdrop-img" />
					<van-image width="3.6rem" :src="item.position" class="position-img" />
					<van-image width="12rem" :src="item.role" class="role-img" />
					<p class="role-name-text">{{ item.name }}</p>
					<p class="role-name-text">{{ item.titile }}</p>
					<p class="role-text">{{ item.text }}</p>
				</div>
			</div>
		</div>
		<div class="icon-box">
			<van-image width="6.91rem" :src="changeLeft" class="change-icon" @click="changeRoleleft" />
			<van-image width="6.91rem" :src="changeRight" class="change-icon" @click="changeRoleright" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
// import roleLogo from "@/assets/imgs/home/nft/role-logo.png";
import roleSr from "@/assets/imgs/home/nft/role-sr.png";
import roleSsr from "@/assets/imgs/home/nft/role-ssr.png";
import role01 from "@/assets/imgs/home/nft/role01.png";
import role02 from "@/assets/imgs/home/nft/role02.png";
import role03 from "@/assets/imgs/home/nft/role03.png";

import roleBackdrop01 from "@/assets/imgs/home/nft/role-backdrop01.png";
import roleBackdrop02 from "@/assets/imgs/home/nft/role-backdrop02.png";
import roleBackdrop03 from "@/assets/imgs/home/nft/role-backdrop03.png";

import changeLeft from "@/assets/imgs/home/nft/change-left.png";
import changeRight from "@/assets/imgs/home/nft/change-right.png";

// 轮播游戏场景
const role = reactive({
	arr: [
		{
			id: 1,
			role: role01,
			position: roleSr,
			roleBackdrop: roleBackdrop01,
			name: "The Colossus",
			titile: "Balam",
			text: "Balan the Giant was born in a remote and mysterious tribe in South America. It is said that the people here carry the blood of ancient giants, and villagers generally possess towering physiques that surpass ordinary humans. ",
			sign: "FORTITUDE",
		},
		{
			id: 2,
			role: role02,
			position: roleSr,
			roleBackdrop: roleBackdrop02,
			name: "The Sweet Sauce",
			titile: "Effy",
			text: "Effy was born into an ordinary African American family in the impoverished neighborhood of Brooklyn. Her father was an experienced DJ in the SimDunk League. Efi, who had been exposed to hip-hop culture from a young age, constantly fantasized about achieving victory on the SimDunk's court.",
			sign: "UNITY",
		},
		{
			id: 3,
			role: role03,
			position: roleSsr,
			roleBackdrop: roleBackdrop03,
			name: "The  Sniper",
			titile: "Gunnar",
			text: "Gunnar, a sniper who struck fear into the hearts of enemies on the battlefield, had his eyesight injured during an enemy ambush while on a mission. With the aid of cutting-edge cybernetic technology, he received mechanical ocular implants, awakening his talents on the SimDunk court. Just like a sniper, he possesses an uncanny and deadly accuracy in his three-point shots.",
			sign: "MANEUVER",
		},
	],
});
// 移动图片数据
const roleData = reactive({
	obj: {
		id: 2,
		transforms: "",
	},
});
// 移动图片
const changeRoleleft = () => {
	if (roleData.obj.id == 1) {
		roleData.obj.id = 1;
	} else if (roleData.obj.id == 2) {
		roleData.obj.transforms = "transform:translateX(18rem); transition:transform 0.5s ease-in-out;";
		roleData.obj.id = 1;
	} else if (roleData.obj.id == 3) {
		roleData.obj.transforms = "transform:translateX(0); transition:transform 0.5s ease-in-out;";
		roleData.obj.id = 2;
	}
};
const changeRoleright = () => {
	if (roleData.obj.id == 1) {
		roleData.obj.transforms = "transform:translateX(0);transition:transform 0.5s ease-in-out;";
		roleData.obj.id = 2;
	} else if (roleData.obj.id == 2) {
		roleData.obj.transforms = "transform:translateX(-18rem); transition:transform 0.5s ease-in-out;";
		roleData.obj.id = 3;
	} else if (roleData.obj.id == 3) {
		roleData.obj.id = 3;
	}
};
</script>

<style lang="less" scoped>
.nft-box {
	padding-top: 1rem;
	h2 {
		text-align: center;
		font-size: 1.75rem;
		font-family: Arial-BoldMT;
		line-height: 3rem;
		.role-logo {
			margin-right: 1rem;
			vertical-align: -0.4rem;
		}
	}
	.nft-role-box {
		width: 100vw;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 2.34rem;
		.banner-box {
			.mixin-flex (row,space-between,flex-start,nowrap);
			width: 58.14rem;
			.role-img-box {
				width: 17.5rem;
				margin: 0 1rem;
				position: relative;
				.role-backdrop-img {
					border-radius: 0.63rem 1.88rem 0.63rem 1.88rem;
					overflow: hidden;
				}
				.position-img {
					position: absolute;
					top: 0.6rem;
					left: 1rem;
				}
				.role-img {
					position: absolute;
					top: 1.2rem;
					left: 2.4rem;
				}
				.role-name-text {
					margin-top: 1.47rem;
					text-align: center;
					font-size: 1rem;
					&:nth-of-type(2) {
						margin-top: 0.8rem;
					}
				}
				.role-text {
					margin-top: 0.8rem;
					line-height: 1.13rem;
					text-align: center;
				}
			}
		}
	}
	.icon-box {
		text-align: center;
		margin-top: 1.5rem;
		.mixin-flex (row,center,center,nowrap);
		.change-icon {
			margin: 0 2rem;
		}
	}
}
</style>
