// header-view
import React from "react";
import AccountView from "./account-view/index";
import MenuView from "./menu-view/index";
// import SearchView from "./search-view/index";

const View: React.FC = () => {
	return (
		<>
			<div className="sticky top-0 h-[var(--sm-header-height)] bg-bgcolor-100 z-30 border-b-2 border-bgcolor-200 flex justify-between items-center gap-3 px-5 md:px-8 lg:px-16">
				<MenuView />
				<div>{/* <SearchView /> */}</div>
				<AccountView />
			</div>
		</>
	);
};

export default View;
