// import Card from "../../Card/Card";
import Act from "../Act";
import { useEffect, useState, useContext } from "react";
import { BandsContext } from "../../../contexts/bandContext";
import { ScheduleContext } from "../../../contexts/scheduleContext";

export default function Slider(props) {
	const { bands, setBands } = useContext(BandsContext);
	const { schedule, setSchedule } = useContext(ScheduleContext);

	const midgard = schedule.Midgard.mon;
	const jotunheim = schedule.Jotunheim.mon;
	const vanaheim = schedule.Vanaheim.mon;

	// const [day, setDay] = useState("monday");
	// const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

	// function filterByDay() {
	// 	switch (props.daySchedule) {
	// 		case "monday":
	// 			props.setMidgardFilter(props.schedule.Midgard.mon);
	// 			props.setJotunFilter(props.schedule.Jotunheim.mon);
	// 			props.setVanaFilter(props.schedule.Vanaheim.mon);
	// 			setDay("monday");
	// 			break;
	// 		case "tuesday":
	// 			props.setMidgardFilter(props.schedule.Midgard.tue);
	// 			props.setJotunFilter(props.schedule.Jotunheim.tue);
	// 			props.setVanaFilter(props.schedule.Vanaheim.tue);
	// 			setDay("tuesday");
	// 			break;
	// 		case "wednesday":
	// 			props.setMidgardFilter(props.schedule.Midgard.wed);
	// 			props.setJotunFilter(props.schedule.Jotunheim.wed);
	// 			props.setVanaFilter(props.schedule.Vanaheim.wed);
	// 			setDay("wednesday");
	// 			break;
	// 		case "thursday":
	// 			props.setMidgardFilter(props.schedule.Midgard.thu);
	// 			props.setJotunFilter(props.schedule.Jotunheim.thu);
	// 			props.setVanaFilter(props.schedule.Vanaheim.thu);
	// 			setDay("thursday");
	// 			break;
	// 		case "friday":
	// 			props.setMidgardFilter(props.schedule.Midgard.fri);
	// 			props.setJotunFilter(props.schedule.Jotunheim.fri);
	// 			props.setVanaFilter(props.schedule.Vanaheim.fri);
	// 			setDay("friday");
	// 			break;
	// 		case "saturday":
	// 			props.setMidgardFilter(props.schedule.Midgard.sat);
	// 			props.setJotunFilter(props.schedule.Jotunheim.sat);
	// 			props.setVanaFilter(props.schedule.Vanaheim.sat);
	// 			setDay("saturday");
	// 			break;
	// 		case "sunday":
	// 			props.setMidgardFilter(props.schedule.Midgard.sun);
	// 			props.setJotunFilter(props.schedule.Jotunheim.sun);
	// 			props.setVanaFilter(props.schedule.Vanaheim.sun);
	// 			setDay("sunday");
	// 			break;
	// 		default:
	// 			console.log("no match");
	// 	}
	// }

	return (
		<div id="slider">
			<section className="act__wrapper">
				<h3 className="scene">Midgard</h3>
				<div className="act_container">
					{midgard.map((a) => (
						<Act {...a} />
					))}
				</div>
			</section>
			<section className="act__wrapper">
				<h3 className="scene">Jotunheim</h3>
				<div className="act_container">
					{jotunheim.map((a) => (
						<Act {...a} />
					))}
				</div>
			</section>
			<section className="act__wrapper">
				<h3 className="scene">Vanaheim</h3>
				<div className="act_container">
					{vanaheim.map((a) => (
						<Act {...a} />
					))}
				</div>
			</section>
		</div>
	);
}
