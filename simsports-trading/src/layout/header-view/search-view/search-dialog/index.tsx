// search-dialog
import React, { useState, useEffect } from "react";

import { getAssetCollections } from "@/http/modules/layout";

import IconSearch from "@/assets/imgs/common/icon-search.svg?react";
import IconLoading from "@/assets/imgs/common/icon-loading.svg?react";

const View: React.FC = () => {
	const [inputValue, setInputValue] = useState<string>(""); //search-text
	const [showData] = useState([
		{
			titlt: "GAMES",
			type: "games",
			arr: [],
		},
		{
			titlt: "COLLECTIONS",
			type: "collections",
			arr: [],
		},
		{
			titlt: "TOKENS",
			type: "tokens",
			arr: [],
		},
	]);
	const onSearch = () => {
		const obj = {
			name: "",
		};
		getAssetCollections(obj).then((res: any) => {
			console.log(res);
		});
	};
	useEffect(() => {
		onSearch();
	}, []);
	return (
		<>
			<div className="min-h-[50vh]">
				<div className="flex justify-center items-center border-2 rounded-lg border-text-100 gap-2 min-h-[40px] max-w-[580px] px-4">
					<IconSearch className="size-[24px] min-w-[24px]" />
					<input
						type="text"
						value={inputValue}
						onChange={e => setInputValue(e.target.value)}
						className="bg-bgcolor-900 focus:outline-none flex-1 min-w-0"
					/>
					<IconLoading className="size-[24px] min-w-[24px] animate-spin-slow-1" />
				</div>
				<div className="mt-5 flex flex-col gap-3 trove-scrollbar">
					{showData.map((item: any, index) => {
						return (
							<div key={index}>
								{item.arr.length > 0 ? (
									<>
										<p className="text-text-100">{item.titlt}</p>
										<div className="mt-3 flex flex-col gap-3">
											{item.arr.map((t: any, i: React.Key | null | undefined) => {
												return (
													<div
														key={i}
														className="flex items-center gap-5 px-2 py-1.5 rounded-lg cursor-pointer hover:bg-bgcolor-100"
													>
														<img src={t.imgurl} className="size-[50px] rounded-md" />
														<p className="">{t.text}</p>
													</div>
												);
											})}
										</div>
									</>
								) : (
									<></>
								)}
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default View;
