// mask-view 遮罩层
import React, { ReactNode, useEffect } from "react";

interface ViewProps {
	children: ReactNode;
	onClose: () => void;
	width?: string;
	closable?: boolean;
}

const View: React.FC<ViewProps> = ({ children, onClose, width }: ViewProps) => {
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
		<div
			className="fixed top-0 left-0 w-screen h-screen z-999 flex items-center justify-center bg-black/60 backdrop-blur-lg"
			onClick={onClose}
		>
			<div
				className="w-full max-h-full mx-5 md:mx-8 lg:mx-16 flex flex-col flex-1 trove-scrollbar relative"
				style={{ maxWidth: width }}
				onClick={handleChildClick}
			>
				{children}
			</div>
		</div>
	);
};

export default React.memo(View);
