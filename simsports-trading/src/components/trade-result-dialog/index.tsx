// <!-- mint-success-dialog -->
import React from "react";
import ModalView from "@/components/modal-view/index";

import AnimationView from "./animation-view/index";
import FailedView from "./failed-view/index";
import ShowView from "./show-view/index";
interface ViewProps {
	onClose: () => void;
	tradeShowData: any;
}
const View: React.FC<ViewProps> = ({ onClose, tradeShowData }) => {
	return (
		<ModalView onClose={onClose} width="820px" closable={true}>
			{tradeShowData.state === 0 ? (
				<AnimationView />
			) : tradeShowData.state === 1 ? (
				<ShowView tradeShowData={tradeShowData} />
			) : (
				<FailedView tradeShowData={tradeShowData} />
			)}
		</ModalView>
	);
};

export default View;
