interface Countdown {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
}

export const getRemainingTime = (recordTime: number, mintTimeEnd: number): Countdown => {
	const currentTime = Math.floor(Date.now() / 1000);
	let diff = 0;
	if (recordTime > currentTime) {
		diff = Math.max(0, recordTime - currentTime);
	} else if (mintTimeEnd > currentTime) {
		diff = Math.max(0, mintTimeEnd - currentTime);
	}
	const days = Math.floor(diff / (3600 * 24));
	const hours = Math.floor((diff % (3600 * 24)) / 3600);
	const minutes = Math.floor((diff % 3600) / 60);
	const seconds = Math.floor(diff % 60);
	return { days, hours, minutes, seconds };
};
