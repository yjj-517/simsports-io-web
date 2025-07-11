// video-modal
import React from "react";

import MaskView from "@/components/pop-ups/mask-view/index"; //弹窗
import IconClose from "@/assets/imgs/common/icon-close.svg?react"; //icon-关闭

interface ViewProps {
	ToggleModal: () => void;
	VideoUrl?: string;
}

const View: React.FC<ViewProps> = ({ ToggleModal, VideoUrl }: ViewProps) => {
	return (
		<>
			{/* 弹窗-video-play */}
			<MaskView onClose={ToggleModal} width="1000px">
				<div className="flex flex-col">
					<button className="pb-4 flex justify-end" onClick={ToggleModal}>
						<IconClose className="size-6 text-gray-400 hover:text-primary" />
					</button>
					<video className="w-full h-auto object-cover" controls autoPlay muted>
						<source src={VideoUrl} />
					</video>
				</div>
			</MaskView>
		</>
	);
};
export default View;
