// <!-- total-view -->
import React from "react";

interface ViewProps {
	totalPrice: number; //价格数组
}

const View: React.FC<ViewProps> = ({ totalPrice }: ViewProps) => {
	return (
		<div className="flex flex-col gap-4">
			<div className="flex-between text-xl">
				<p>Total:</p>
				<p className="font-primary font-bold">
					<span>{totalPrice.toFixed(6).replace(/\.?0+$/, "")}</span>
					<span className="text-base">(SUI)</span>
				</p>
			</div>
		</div>
	);
};

export default View;
