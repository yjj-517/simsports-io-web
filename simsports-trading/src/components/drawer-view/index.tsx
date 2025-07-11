// drawer-view
import React, { ReactNode, useEffect } from "react";
interface ViewProps {
	value: string;
	children: ReactNode;
	onClose: () => void;
}

const View: React.FC<ViewProps> = ({ value, children, onClose }: ViewProps) => {
	// value=位置 children=子组件 onClose=关闭遮罩层
	// 阻止事件冒泡到父元素（遮罩层）上
	const handleChildClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		event.stopPropagation();
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
			className={`${value === "top" ? "justify-center items-start" : value === "bottom" ? "justify-center items-end" : value === "right" ? "justify-end items-center" : value === "left" ? "justify-start items-center" : ""} flex fixed top-0 left-0 w-screen h-screen bg-black/80 overflow-hidden z-50 `}
			onClick={onClose}
		>
			<div className="relative" onClick={handleChildClick}>
				{children}
			</div>
		</div>
	);
};

export default View;
