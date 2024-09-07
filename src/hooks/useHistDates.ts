import api from "src/api";
import { HistDate } from "src/types";
import { useState, useEffect } from "react";

const useHistDates = () => {
	const [data, setData] = useState<HistDate[]>([]);

	const getData = async () => {
		const data = await api.histDates.getList();
		if (!data) return;
		setData([...data]);
	};

	useEffect(() => {
		getData();
	}, []);

	return { histDateList: data };
};

export default useHistDates;
