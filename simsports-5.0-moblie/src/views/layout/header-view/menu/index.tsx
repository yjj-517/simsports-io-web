// menu
import React, { useState } from "react";
import styles from "./index.module.less";
import { NavLink } from "react-router-dom";

import { Image, Popup } from "antd-mobile";
import { RightOutline } from "antd-mobile-icons";

import { importantLink } from "@/utils/medialink";

import iconMenu from "@/assets/imgs/layout/icon-menu.svg";
import simsportsImgWhite from "@/assets/imgs/logo/simsports-img-white.svg";
import iconPlayLink from "@/assets/imgs/layout/icon-play-link.png";
const View: React.FC = () => {
	const [visible, setVisible] = useState<boolean>(false); //遮罩弹窗
	// 路由导航
	const routerList = {
		upperRouter: [
			{
				name: "Home",
				path: "/home",
			},
			{
				name: "Game",
				path: "/game",
			},
			{
				name: "Build",
				path: "/build",
			},
			{
				name: "Governance",
				path: "/governance",
			},
		],
	};
	return (
		<>
			<div className={styles.menuBox}>
				<Image
					src={iconMenu}
					fit="contain"
					className={styles.iconMenu}
					onClick={() => {
						setVisible(true);
					}}
				/>
				<Popup
					visible={visible}
					onMaskClick={() => {
						setVisible(false);
					}}
					position="right"
					bodyStyle={{ backgroundColor: "#000" }}
				>
					<div className={styles.popupMenuBox}>
						<div className={styles.menuTitle}>
							<RightOutline
								className={styles.iconImg}
								onClick={() => {
									setVisible(false);
								}}
							/>
							<Image src={simsportsImgWhite} fit="contain" className={styles.simsportsImgWhite} />
						</div>
						<div className={`dividing-line ${styles.dividingLine01}`}></div>
						<div className={styles.menuListBox}>
							{routerList.upperRouter.map((item, index) => {
								return (
									<div key={index} className={styles.routerLinkBox}>
										<NavLink
											className={styles.navLink}
											to={item.path}
											onClick={() => {
												setVisible(false);
											}}
										>
											{item.name}
										</NavLink>
									</div>
								);
							})}
						</div>
						<div className={`dividing-line ${styles.dividingLine01}`}></div>
						<button className={`fillet-diamond-button ${styles.applink}`}>
							<a
								href={importantLink.appOfficialSite}
								target="_blank"
								rel="nofollow noopener noreferrer"
								className={styles.linkPlay}
							>
								<span>Start Playing</span>
								<Image src={iconPlayLink} className={styles.linkImg} />
							</a>
						</button>
					</div>
				</Popup>
			</div>
		</>
	);
};

export default View;
