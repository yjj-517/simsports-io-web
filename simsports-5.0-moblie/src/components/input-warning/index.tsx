// input-warning
import "./index.less";

import { ExclamationCircleOutline } from "antd-mobile-icons";

interface ViewProps {
	state: boolean;
	text: string;
}

const View: React.FC<{ warningData: ViewProps }> = (props: any) => {
	return (
		<div className="input-warning-text-box">
			<ExclamationCircleOutline className="icon-cwts" />
			<p>{props.warningData.text}</p>
		</div>
	);
};

export default View;
