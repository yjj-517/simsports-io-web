// menu-view
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { layoutStores } from "@/store/index"; //store
import { simdunkEventsData } from "@/views/events/simdunk/components/events"; //events
// import { simdunkEsportsData } from "@/views/esports/simdunk/components/events"; //esports

import IconGame from "@/assets/imgs/layout/menu/icon-game.svg?react";
import IconMint from "@/assets/imgs/layout/menu/icon-mint.svg?react";
// import IconEsport from "@/assets/imgs/layout/menu/icon-esport.svg?react";
import IconEvents from "@/assets/imgs/layout/menu/icon-events.svg?react";
import IconQuests from "@/assets/imgs/layout/menu/icon-quests.svg?react";
import IconMarketplace from "@/assets/imgs/layout/menu/icon-marketplace.svg?react";
import IconArrowPulldown from "@/assets/imgs/layout/common/icon-arrow-pulldown.svg?react";
import IconSimdunk from "@/assets/imgs/logo/simdunk-logo.png";
const View: React.FC = () => {
	const location = useLocation(); // router
	const navigate = useNavigate(); //路由跳转
	const { layoutMenuState, setLayoutMenuState, setDrawerMenuState } = layoutStores(); //layout
	// router-list
	const [routerList, setRouterList] = useState([
		{
			title: "SimDunk",
			name: "",
			path: "/simdunk",
			icon: <IconGame />,
			state: false, //router-高亮
			show: false, //router-展开
		},
		{
			title: "Mint",
			name: "",
			path: "/mint",
			icon: <IconMint />,
			state: false,
			show: false,
			children: [
				{
					title: "Chrono Cube",
					name: "",
					path: "/mint/simdunk-chrono-cube",
					icon: IconSimdunk,
				},
				{
					title: "Energy Tuner R",
					name: "",
					path: "/mint/energy-tuner-r",
					icon: IconSimdunk,
				},
				{
					title: "Simdunk Alpha2 Player Nft",
					name: "",
					path: "/mint/simdunk-alpha2-player-nft",
					icon: IconSimdunk,
				},
				// {
				// 	title: "Energy Tuner M",
				// 	name: "",
				// 	path: "/mint/energy-tuner-m",
				// 	icon: IconSimdunk,
				// },
			],
		},
		// {
		// 	title: "E-sports",
		// 	name: "",
		// 	path: "/e-sports",
		// 	icon: <IconEsport />,
		// 	state: false,
		// 	show: false,
		// 	children: [],
		// },
		{
			title: "Events",
			name: "",
			path: "/events",
			icon: <IconEvents />,
			state: false,
			show: false,
			children: [],
		},
		{
			title: "Quests",
			name: "",
			path: "/quests",
			icon: <IconQuests />,
			state: false,
			show: false,
		},
		{
			title: "Marketplace",
			name: "",
			path: "/marketplace",
			icon: <IconMarketplace />,
			state: false,
			show: false,
		},
	]);
	// 获取路由
	const upRouterList = () => {
		const updatedRouterList = routerList.map(route => {
			// if (route.path === "/e-sports" && route.children) {
			// 	return {
			// 		...route,
			// 		children: [
			// 			...route.children,
			// 			{
			// 				title: "SimDunk: ",
			// 				name: simdunkEsportsData[0].title,
			// 				path: simdunkEsportsData[0].path,
			// 				icon: IconSimdunk,
			// 			},
			// 		],
			// 	};
			// } else
			if (route.path === "/events" && route.children) {
				return {
					...route,
					children: [
						...route.children,
						{
							title: "SimDunk: ",
							name: simdunkEventsData[0].title,
							path: "/events/simdunk",
							icon: IconSimdunk,
						},
					],
				};
			} else {
				return route;
			}
		});
		setRouterList(updatedRouterList);
	};
	useEffect(() => {
		upRouterList();
	}, []);
	// go-router
	const goRouter = (item: any) => {
		if (item.children) {
			setLayoutMenuState(true);
			// router-展开
			setRouterList(prevRouterList =>
				prevRouterList.map(i => {
					if (item.path === i.path && i.show === false) {
						return { ...i, show: true };
					} else {
						return { ...i, show: false };
					}
				}),
			);
		} else {
			// 跳转
			navigate(item.path);
			setDrawerMenuState(false);
		}
	};
	// 处理路由高亮
	const routerId = () => {
		const pathname = location.pathname.substring(location.pathname.indexOf("/") + 1);
		setRouterList(prevRouterList =>
			prevRouterList.map(item => {
				if (item.path === "/" + pathname) {
					return { ...item, state: true };
				} else {
					return { ...item, state: false };
				}
			}),
		);
	};
	useEffect(() => {
		routerId();
	}, [location.pathname]);
	// 处理menu收起时children收起
	const menuState = () => {
		if (layoutMenuState === false) {
			const updatadRouterList = routerList.map(item => {
				return {
					...item,
					show: false,
				};
			});
			setRouterList(updatadRouterList);
		}
	};
	useEffect(() => {
		menuState();
	}, [layoutMenuState]);
	return (
		<>
			<div className="trove-scrollbar flex-1 flex flex-col gap-4 mt-4">
				{routerList.map((item, index) => {
					return (
						<div key={index} className="cursor-pointer">
							<div
								className={`${item.state ? "bg-bgcolor-300" : ""} flex justify-between items-center h-10 rounded-lg hover:underline`}
								onClick={() => {
									goRouter(item);
								}}
							>
								<div className="flex">
									<div className={`${item.state || item.show ? "text-primary" : ""} w-[38px] flex justify-center items-center`}>
										{item.icon}
									</div>
									{layoutMenuState ? <div className="ml-2.5 font-bold">{item.title}</div> : <></>}
								</div>
								{layoutMenuState ? (
									<>
										{item.children && (
											<div>
												<IconArrowPulldown className={` ${item.show ? "rotate-180" : "rotate-0"} transition-transform `} />
											</div>
										)}
									</>
								) : (
									<></>
								)}
							</div>
							{item.show ? (
								<>
									{item.children ? (
										<>
											{item.children.map((childItem, childIndex) => {
												return (
													<div
														key={childIndex}
														className="flex items-center mt-4 hover:underline"
														onClick={() => goRouter(childItem)}
													>
														<img className="ml-1 w-[22px]" src={childItem.icon} />
														<div className="ml-2.5">
															<span>{childItem.title}</span>
															<span className="text-sm text-text-100">{childItem.name}</span>
														</div>
													</div>
												);
											})}
										</>
									) : null}
								</>
							) : null}
						</div>
					);
				})}
			</div>
		</>
	);
};

export default View;
