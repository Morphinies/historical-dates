import { HistDate } from "src/types";
import fakeHistDates from "./fakeHistDates.json";

const getList = async (): Promise<HistDate[] | undefined> => {
	const i = 0; // set i value (from 1 to 5) to check date circle with different length of  history dates
	return fakeHistDates.slice(i);
};

const histDates = {
	getList,
};

export default histDates;
