const getPointStyle = (
	index: number,
	totalPoints: number,
	activeIndex: number,
	circleElem: HTMLDivElement | null
) => {
	const circleUl = circleElem?.querySelector("ul");
	const circleLiList = circleElem?.querySelectorAll("li");
	const circleWidth = circleElem?.getBoundingClientRect().width;

	if (!circleWidth || !circleLiList || !circleUl) return;

	const startDeg = 60;
	const radius = circleWidth / 2;

	const sliceDeg = totalPoints ? 360 / totalPoints : 0;
	const deg = totalPoints ? (index * 360) / totalPoints + startDeg : 0;
	const degRad = (deg * Math.PI) / 180;
	let x = radius * Math.cos(degRad);
	let y = radius * Math.sin(degRad);

	circleUl.style.rotate = `${activeIndex * sliceDeg}deg`;
	circleLiList.forEach((el) => {
		el.style.rotate = `-${activeIndex * sliceDeg}deg`;
	});

	if (deg >= 0 && deg <= 90) {
		x = Math.abs(x);
		y = -Math.abs(y);
	} else if (deg >= 90 && deg < 180) {
		x = -Math.abs(x);
		y = -Math.abs(y);
	} else if (deg >= 180 && deg < 270) {
		x = -Math.abs(x);
		y = Math.abs(y);
	} else {
		x = Math.abs(x);
		y = Math.abs(y);
	}

	return { top: y + "px", left: x + "px" };
};

export default getPointStyle;
