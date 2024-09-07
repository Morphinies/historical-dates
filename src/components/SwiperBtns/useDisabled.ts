import { useEffect, useState } from "react";
import type { Swiper as SwiperType } from "swiper";

const useDisabled = (swiper: SwiperType) => {
	const [disabled, setDisabled] = useState({
		prev: true,
		next: true,
	});

	const checkAvailable = () => {
		if (swiper.isEnd) {
			setDisabled((p) => ({ ...p, next: true }));
		} else {
			setDisabled((p) => ({ ...p, next: false }));
		}
		if (swiper.isBeginning) {
			setDisabled((p) => ({ ...p, prev: true }));
		} else {
			setDisabled((p) => ({ ...p, prev: false }));
		}
	};

	useEffect(() => {
		checkAvailable();
		swiper.on("slideChange", () => {
			checkAvailable();
		});
		// eslint-disable-next-line
	}, [swiper]);

	return [disabled];
};

export default useDisabled;
