import { useRef, useState } from "react";

const useTimePeriods = () => {
	const [timePeriods, setTimePeriods] = useState<number[]>();
	const dateChangingTimer = useRef<NodeJS.Timeout | null>(null);

	const changeTimePeriods = (
		fromTimePeriod: number[] | undefined,
		toTimePeriod: number[]
	) => {
		dateChangingTimer.current && clearTimeout(dateChangingTimer.current);
		if (!toTimePeriod.length) return;
		if (!fromTimePeriod) {
			setTimePeriods([toTimePeriod[0], toTimePeriod[1]]);
		} else {
			if (
				fromTimePeriod[0] === toTimePeriod[0] &&
				fromTimePeriod[1] === toTimePeriod[1]
			) {
				return;
			}
			const newTimePeriod = [fromTimePeriod[0], fromTimePeriod[1]];
			if (fromTimePeriod[0] < toTimePeriod[0]) {
				newTimePeriod[0] = fromTimePeriod[0] + 1;
			} else if (fromTimePeriod[0] > toTimePeriod[0]) {
				newTimePeriod[0] = fromTimePeriod[0] - 1;
			}
			if (fromTimePeriod[1] < toTimePeriod[1]) {
				newTimePeriod[1] = fromTimePeriod[1] + 1;
			} else if (fromTimePeriod[1] > toTimePeriod[1]) {
				newTimePeriod[1] = fromTimePeriod[1] - 1;
			}
			setTimePeriods(newTimePeriod);
			dateChangingTimer.current = setTimeout(() => {
				changeTimePeriods(newTimePeriod, toTimePeriod);
			}, 35);
		}
	};

	return { timePeriods, changeTimePeriods };
};

export default useTimePeriods;
