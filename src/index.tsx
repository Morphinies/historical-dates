import "swiper/css";
import "swiper/css/pagination";
import "./styles/normalize.scss";
import "./styles/index.scss";

import React from "react";
import ReactDOM from "react-dom/client";
import HistDates from "src/pages/HistDates/HistDates";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<HistDates />
	</React.StrictMode>
);
