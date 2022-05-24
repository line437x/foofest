import { useEffect, useState, useContext } from "react";
import { ScheduleContext } from "../../contexts/scheduleContext";
import { BandsContext } from "../../contexts/bandContext";

// import { getBands, addMood } from "../../Utils/data";

import Banner from "../Banner/Banner";
import Navigation from "./Navigation/Navigation";
import Slider from "./Slider/Slider";

export default function Schedule() {
	// const { bands, setBands } = useContext(BandsContext);
	// const { schedule, setSchedule } = useContext(ScheduleContext);

	return (
		<div>
			<Banner banner="SCHEDULE"></Banner>
			<Navigation></Navigation>
			<Slider></Slider>
		</div>
	);
}
