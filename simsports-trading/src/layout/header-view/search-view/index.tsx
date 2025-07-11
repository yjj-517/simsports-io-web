// search-view
import React, { useState } from "react";

import ModalView from "@/components/modal-view/index";
import SearchDialog from "./search-dialog/index";

import IconSearch from "@/assets/imgs/common/icon-search.svg?react";

const View: React.FC = () => {
	const [showModal, setShowModal] = useState(false);

	const toggleModal = () => {
		setShowModal(!showModal);
	};

	return (
		<>
			<div
				className="w-full max-w-[360px] min-w-[56px] px-4 py-2 rounded-lg flex items-center bg-bgcolor-400 gap-1 text-text-100 overflow-hidden cursor-pointer"
				onClick={() => {
					toggleModal();
				}}
			>
				<IconSearch className="size-[24px] min-w-[24px]" />
				<span className="truncate">Search Games or Collection</span>
			</div>
			{showModal && (
				<ModalView onClose={toggleModal} width="800px" closable={true}>
					<SearchDialog />
				</ModalView>
			)}
		</>
	);
};

export default View;
