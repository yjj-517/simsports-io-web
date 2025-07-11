// modal-view
import React, { ReactNode, useEffect } from "react";

interface ViewProps {
	children: ReactNode;
	onClose: () => void;
	width?: string;
	closable?: boolean;
}
import IconClose from "@/assets/imgs/common/icon-close.svg?react";
const View: React.FC<ViewProps> = ({ children, onClose, width, closable }: ViewProps) => {
	// value=位置 children=子组件 onClose=关闭遮罩层 closable-关闭按钮
	const handleChildClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		event.stopPropagation(); // 阻止事件冒泡到父元素（遮罩层）上
	};
	useEffect(() => {
		//监听滚动条事件
		if (document.body && document.body.style) {
			if (document.body.style.overflow === "hidden") {
				return;
			}
			document.body.style.overflow = "hidden"; // 禁用页面滚动
		}
		return () => {
			document.body.style.overflow = ""; // 恢复页面滚动
		};
	}, []);

	return (
		<div className="flex items-center justify-center fixed top-0 left-0 w-screen h-screen bg-black/80 z-50" onClick={onClose}>
			<div
				className="w-full bg-[#151C1D] px-5 py-9 mx-5 md:mx-8 lg:mx-16 flex flex-col flex-1 relative shadow-xl rounded-lg border-2 border-bgcolor-200  max-h-[70vh] trove-scrollbar"
				style={{ maxWidth: width }}
				onClick={handleChildClick}
			>
				{closable ? (
					<button className="absolute top-2 right-2 p-2 bg-bgcolor-100 rounded-full" onClick={onClose}>
						<IconClose className="size-3" />
					</button>
				) : (
					<></>
				)}
				{children}
			</div>
		</div>
	);
};

export default View;
