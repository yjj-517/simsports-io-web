// 将时间戳转为时间
export const formatTimestamp = (timestamp: any) => {
	const date = new Date(timestamp);
	const year = date.getFullYear();
	const month = ("0" + (date.getMonth() + 1)).slice(-2); // 月份从 0 开始，需要加 1，并且保证两位数格式
	const day = ("0" + date.getDate()).slice(-2); // 保证两位数格式
	const hour = ("0" + date.getHours()).slice(-2); // 保证两位数格式
	const minute = ("0" + date.getMinutes()).slice(-2); // 保证两位数格式
	const second = ("0" + date.getSeconds()).slice(-2); // 保证两位数格式

	return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
};
