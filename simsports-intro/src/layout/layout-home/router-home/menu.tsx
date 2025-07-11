export const routerList = [
	{
		name: "SIMSPORTS",
		id: "home-simsports",
	},
	{
		name: "SIMDUNK",
		id: "home-simdunk",
	},
	{
		name: "A3A",
		id: "home-a3a",
	},
	{
		name: "ROADMAP",
		id: "home-roadmap",
	},
	{
		name: "TOKEN ECONOMY",
		id: "home-assets",
	},
	{
		name: "FOUNDER",
		id: "home-founder",
	},
];

// 跳转
export const handleScroll = (id: string) => {
	const targetDiv = document.getElementById(id);
	if (targetDiv) {
		targetDiv.scrollIntoView({
			behavior: "smooth", // 平滑滚动
			block: "start", // 滚动到 div 的顶部
		});
	}
};
