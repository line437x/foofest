import { useEffect, useState } from "react";

import Banner from "../Banner/Banner";
import Navigation from "./Navigation/Navigation";
import Slider from "./Slider/Slider";
import Button from "../Buttons/Button";

export default function Schedule(props) {
	const [day, setDay] = useState("mon");

	let dayPicked = getDay();

	function getDay() {
		let picked;
		switch (day) {
			case "mon":
				picked = "Monday";
				break;
			case "tue":
				picked = "Tuesday";
				break;
			case "wed":
				picked = "Wednesday";
				break;
			case "thu":
				picked = "Thursday";
				break;
			case "fri":
				picked = "Friday";
				break;
			case "sat":
				picked = "Saturday";
				break;
			case "sun":
				picked = "Sunday";
				break;
			default:
				console.log("No Match");
				break;
		}
		return picked;
	}

	return (
		<div className="schedule">
			<Banner banner="SCHEDULE"></Banner>
			<Navigation setDay={setDay} day={day}></Navigation>
			<Button></Button>
			<h2>{dayPicked}</h2>
			<Slider day={day}></Slider>
		</div>
	);
}
