// account
import React, { useState, useEffect } from "react";
import RouterTab from "@/components/router-tab/index";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import SimdunkTop from "./account-top/index";
import { accountStores } from "@/store/index"; //store
import { getProfile } from "@/http/modules/account"; //接口

const View: React.FC = () => {
	const [accountTabPath] = useState<string>("/account"); //tab
	const location = useLocation();
	const navigate = useNavigate(); //路由跳转
	const [accountTabData] = useState([
		{
			path: "/account/collections",
			title: "Collections",
		},
	]);
	const { editUser } = accountStores(); //account
	const { userState } = accountStores.getState(); //account
	// 获取用户信息
	const getUser = () => {
		getProfile().then((res: any) => {
			if (res.code === 0) {
				editUser(res.data.user_info);
			}
		});
	};
	useEffect(() => {
		getUser();
	}, [location.pathname]);
	useEffect(() => {
		if (userState === false) {
			navigate("/home");
		}
	}, [userState]);
	return (
		<>
			<SimdunkTop />
			<section className="main mt-10">
				<RouterTab routerTabData={accountTabData} routerTabPath={accountTabPath} />
			</section>
			<Outlet />
			<div className="pt-40"></div>
		</>
	);
};

export default View;
