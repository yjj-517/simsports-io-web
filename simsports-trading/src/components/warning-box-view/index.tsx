// import { ExclamationCircleOutline } from "antd-mobile-icons";

interface ViewProps {
	warningData: string;
}

const View: React.FC<ViewProps> = ({ warningData }: ViewProps) => {
	return (
		<div className="flex text-disabled text-sm ">
			<p>{warningData}</p>
		</div>
	);
};

export default View;
