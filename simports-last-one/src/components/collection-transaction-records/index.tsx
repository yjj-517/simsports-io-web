// <!-- transaction-records -->
import React from "react";

import ModalView from "@/components/pop-ups/modal-view/index";

import AnimationView from "./animation-view/index";
import SuccessView from "./success-view/index";
import FailedView from "./failed-view/index";

interface ViewProps {
	onClose: () => void; //修改弹窗状态
	tradeShowData: any; //交易数据
}
const View: React.FC<ViewProps> = ({ onClose, tradeShowData }: ViewProps) => {
	return (
		<ModalView onClose={onClose} width="640px" closable={true}>
			{tradeShowData.state === 0 ? (
				<AnimationView />
			) : tradeShowData.state === 1 ? (
				<SuccessView tradeShowData={tradeShowData} />
			) : (
				<FailedView tradeShowData={tradeShowData} />
			)}
		</ModalView>
	);
};

export default View;
