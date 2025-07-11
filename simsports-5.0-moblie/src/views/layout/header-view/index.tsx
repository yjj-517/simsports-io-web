// header
import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.less";

import simsportsImg from "@/assets/imgs/logo/simsports-img.svg";
import MenuView from "./menu/index";

import { Image } from "antd-mobile";

const View: React.FC = () => {
	return (
		<>
			<header className={styles.headerBox}>
				<div className={`main ${styles.headerBoxMain}`}>
					<Link to="/home">
						<Image src={simsportsImg} fit="contain" className={styles.simsportsImg} />
					</Link>
					<div className={styles.headerRight}>
						<MenuView />
					</div>
				</div>
			</header>
		</>
	);
};

export default View;
