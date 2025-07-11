// modal-view 弹窗
import React, { useEffect } from "react";

import IconClose from "@/assets/imgs/common/icon-close.svg?react";

interface ViewProps {
	children: React.ReactNode; //子组件
	onClose: () => void; //关闭遮罩层
	width?: string; //弹窗最大宽度
	closable?: boolean; //关闭按钮
	title?: string; //标题
}

const View: React.FC<ViewProps> = ({ children, onClose, width, closable, title }: ViewProps) => {
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
			className="fixed top-0 left-0 w-screen h-screen z-999 flex items-center justify-center bg-black/50 backdrop-blur-lg"
			onClick={onClose}
		>
			<div
				className="w-full bg-bgcolor-100 p-4 md:p-6 mx-5 md:mx-8 lg:mx-16 flex flex-col flex-1 relative shadow-xl rounded-lg border-2 border-bgcolor-200  max-h-[80vh] trove-scrollbar"
				style={{ maxWidth: width }}
				onClick={handleChildClick}
			>
				{closable && (
					<div className="flex items-center relative min-h-[30px] md:min-h-[36px]">
						<button className="cursor-pointer absolute top-0 right-0 p-2" onClick={onClose}>
							<IconClose className="size-4 md:size-5 hover:text-primary" />
						</button>

						{title && (
							<p className="text-xl md:text-3xl text-primary font-primary font-bold mr-9">
								{title}
							</p>
						)}
					</div>
				)}
				{children}
			</div>
		</div>
	);
};

export default View;
