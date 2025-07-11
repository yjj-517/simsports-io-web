/**
 * menu菜单 - 根据path寻找上一级的key
 * @param path==key
 * @param menuItems
 * @returns
 */
// 遍历menu=>返回父级
export const findParentKey = (items: any[], key: string, path: string[] = []): string[] | null => {
	for (const item of items) {
		if (item.key === key) {
			// Found the key, return the path without the current item's key
			return path;
		}
		if (item.children) {
			// If the current item has children, recursively search the children
			const foundPath = findParentKey(item.children, key, [...path, item.key]);
			if (foundPath) {
				// If a path is found in the children, return it
				return foundPath;
			}
		}
	}
	// If the key is not found, return null
	return null;
};
// 遍历menu=>返回父级+子级
export const findPathByKey = (items: any[], key: string, path: any[] = []): any[] | null => {
	for (const item of items) {
		if (item.key === key) {
			return [...path, item];
		}
		if (item.children) {
			const foundPath = findPathByKey(item.children, key, [...path, item]);
			if (foundPath) {
				return foundPath;
			}
		}
	}
	return null;
};
