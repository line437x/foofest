import { useContext } from "react";
import { useEffect, useState } from "react";
import { ScheduleContext } from "../../contexts/scheduleContext";

import { getBands, addMood } from "../../Utils/data";

import Banner from "../Banner/Banner";
import Navigation from "./Navigation/Navigation";
import Slider from "./Slider/Slider";

export default function Schedule({ bands, schedule }) {
	return (
		<div>
			<Banner banner="SCHEDULE"></Banner>
			<Navigation></Navigation>
			<Slider bands={bands} schedule={schedule}></Slider>
		</div>
	);
}
