// <!-- success-dialog-->
import React from "react";
import ModalView from "@/components/modal-view/index";
import SimsportsLogo from "@/assets/imgs/logo/simsports-logo.svg?react";
interface ViewProps {
	onClose: () => void;
}
const View: React.FC<ViewProps> = ({ onClose }) => {
	return (
		<ModalView onClose={onClose} width="480px" closable={true}>
			<div className="flex flex-col justify-center items-center ">
				<SimsportsLogo className="w-[64px] h-auto text-primary" />
				<p className="text-center max-w-[340px] py-10">
					Thank you for submitting your registration.Your participation in the event has been recorded. Best of luck!
				</p>
			</div>
		</ModalView>
	);
};

export default View;
