import { useState } from "react";
export default function Navigation(props) {
	const [day, setDay] = useState("monday");
	const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

	function filterByDay() {
		switch (props.daySchedule) {
			case "monday":
				props.setMidgardFilter(props.schedule.Midgard.mon);
				props.setJotunFilter(props.schedule.Jotunheim.mon);
				props.setVanaFilter(props.schedule.Vanaheim.mon);
				setDay("monday");
				break;
			case "tuesday":
				props.setMidgardFilter(props.schedule.Midgard.tue);
				props.setJotunFilter(props.schedule.Jotunheim.tue);
				props.setVanaFilter(props.schedule.Vanaheim.tue);
				setDay("tuesday");
				break;
			case "wednesday":
				props.setMidgardFilter(props.schedule.Midgard.wed);
				props.setJotunFilter(props.schedule.Jotunheim.wed);
				props.setVanaFilter(props.schedule.Vanaheim.wed);
				setDay("wednesday");
				break;
			case "thursday":
				props.setMidgardFilter(props.schedule.Midgard.thu);
				props.setJotunFilter(props.schedule.Jotunheim.thu);
				props.setVanaFilter(props.schedule.Vanaheim.thu);
				setDay("thursday");
				break;
			case "friday":
				props.setMidgardFilter(props.schedule.Midgard.fri);
				props.setJotunFilter(props.schedule.Jotunheim.fri);
				props.setVanaFilter(props.schedule.Vanaheim.fri);
				setDay("friday");
				break;
			case "saturday":
				props.setMidgardFilter(props.schedule.Midgard.sat);
				props.setJotunFilter(props.schedule.Jotunheim.sat);
				props.setVanaFilter(props.schedule.Vanaheim.sat);
				setDay("saturday");
				break;
			case "sunday":
				props.setMidgardFilter(props.schedule.Midgard.sun);
				props.setJotunFilter(props.schedule.Jotunheim.sun);
				props.setVanaFilter(props.schedule.Vanaheim.sun);
				setDay("sunday");
				break;
			default:
				console.log("no match");
		}
	}
	return (
		<nav id="filter_container" className="grid">
			<ul id="day_filter">
				<li>Monday</li>
				<li>Tuesday</li>
				<li>Wedensday</li>
				<li>Thursday</li>
				<li>Friday</li>
				<li>Saturday</li>
				<li>Sunday</li>
			</ul>
		</nav>
	);
}
