import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; //router

import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";

import { menuItems } from "@/layout/menu-view/index";
import { findPathByKey } from "@/layout/menu-view/menu";

const View: React.FC = () => {
	const { pathname } = useLocation(); //router

	const [breadcrumbList, setBreadcrumbList] = useState<[]>([]); //breadcrumb
	useEffect(() => {
		// 刷新页面获取面包屑路由
		const parentKey = findPathByKey(menuItems, pathname);
		const titlesList: any = parentKey?.map(item => ({
			title: item.label,
		}));
		setBreadcrumbList(titlesList ? titlesList : []);
	}, [pathname]);

	return (
		<>
			<Breadcrumb
				items={[
					{
						title: <HomeOutlined />,
						href: "/",
					},
				]}
			/>
			{breadcrumbList.length > 0 && (
				<>
					<div className="px-2">/</div>
					<Breadcrumb separator=">" items={breadcrumbList} />
				</>
			)}
		</>
	);
};

export default View;
