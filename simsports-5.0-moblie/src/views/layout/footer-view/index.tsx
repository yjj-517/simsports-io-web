// footer
import React, { useState } from "react";
import styles from "./index.module.less";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; //router

import simsportsImg from "@/assets/imgs/logo/simsports-img.svg";
import iconPlayLink from "@/assets/imgs/layout/icon-play-link.png";

import { Image } from "antd-mobile";
import { userCommunityData, userInformationData, importantLink } from "@/utils/medialink";

const View: React.FC = () => {
	const navigate = useNavigate(); //路由跳转
	// 底部链接
	const [footerLink] = useState([
		{
			name: "Build",
			list: [
				{
					name: "Platform Infrastructure",
					link: "/build",
				},
				{
					name: "Apply for Partnership",
					link: "https://forms.gle/M7g2QgX6FS1bHh4k8",
				},
			],
		},
		// {
		// 	name: "Documentation",
		// 	list: whitePaperData,
		// },
	]);

	return (
		<>
			<footer>
				<Link to="/home">
					<Image src={simsportsImg} className={styles.simsportsImg} />
				</Link>
				<div className={styles.footerLinkBox}>
					{footerLink.map((item, index) => {
						return (
							<div className={styles.footerLinkBoxList} key={index}>
								<p className={styles.listTitle}>{item.name}</p>
								<div className={styles.listLinkBox}>
									{item.list.map((t, i) => {
										return (
											<a key={i} className={styles.listLink} href={t.link} target="_blank" rel="nofollow noopener noreferrer">
												{t.name}
											</a>
										);
									})}
								</div>
							</div>
						);
					})}
				</div>
				<div className={styles.applinkBox}>
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
				<div className={styles.communityBox}>
					{userCommunityData.map((item, index) => {
						return (
							<a key={index} href={item.link} target="_blank" rel="nofollow noopener noreferrer">
								<Image src={item.imgurl} className={styles.mediumImg} />
							</a>
						);
					})}
				</div>
				<div className={`dividing-line ${styles.dividingLine01}`}></div>
				<div className={styles.userInformationBox}>
					{userInformationData.map((item, index) => {
						return (
							<p
								key={index}
								className={styles.userInformationLink}
								onClick={() => {
									navigate(item.link);
								}}
							>
								{item.name}
							</p>
						);
					})}
				</div>
				<p className={`fillet-paragraph-text05 ${styles.filletParagraphText05Margin}`}>
					© Copyright 2023 SimSports. All Rights Reserved
				</p>
			</footer>
		</>
	);
};

export default View;
