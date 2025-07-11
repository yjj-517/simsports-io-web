import React from "react";
import { Outlet } from "react-router-dom";

import { layoutStores } from "@/store/index"; //store

import AsideView from "./aside-view";
import HeaderView from "./header-view";
import FooterView from "./footer-view";
import AccountType from "@/layout/header-view/account-view/account-info/account-type/index";

import { accountStores } from "@/store/index"; //store

const View: React.FC = () => {
	const { userState } = accountStores(); //account
	const { layoutMenuState } = layoutStores(); //layout
	return (
		<>
			<div className="w-full flex justify-start relative h-full">
				<div
					className={`${layoutMenuState ? "w-[var(--sm-menu-width)]" : "w-[var(--sm-menu-width-put)]"} hidden fixed z-30 shrink-0 h-screen lg:flex `}
				>
					<AsideView />
				</div>
				<div
					className={`${layoutMenuState ? "w-[calc(100%-var(--sm-menu-width))] lg:ml-[var(--sm-menu-width)]" : "w-[calc(100%-var(--sm-menu-width-put))] lg:ml-[var(--sm-menu-width-put)]"} relative flex-1 ml-0 `}
				>
					<HeaderView />
					<div className="flex-1 flex flex-col w-full min-h-[calc(100vh-var(--sm-header-height))]">
						<main className="flex flex-col min-h-[calc(100vh-var(--sm-footer-height)-var(--sm-header-height))] w-full h-full relative">
							<Outlet />
						</main>
						<FooterView />
					</div>
					{userState && (
						<div className="sticky bottom-0 bg-bgcolor-100 z-20 p-2 w-full flex justify-end items-center md:hidden">
							<AccountType />
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default View;
