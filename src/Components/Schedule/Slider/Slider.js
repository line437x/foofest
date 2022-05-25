import Card from "../../Card/Card";
import Act from "../Act";
import { v4 as uuidv4 } from "uuid";
// import { useContext } from "react";
import { useEffect, useState, useContext } from "react";
import { BandsContext } from "../../../contexts/bandContext";
import { ScheduleContext } from "../../../contexts/scheduleContext";

export default function Slider() {
	const { bands, setBands } = useContext(BandsContext);
	const { schedule, setSchedule } = useContext(ScheduleContext);

	const midgard = schedule.Midgard.mon;
	const jotunheim = schedule.Jotunheim.mon;
	const vanaheim = schedule.Vanaheim.mon;

	// console.log("scene: midgard", midgard);
	// console.log("scene: jotunheim", jotunheim);
	// console.log("scene: vanaheim", vanaheim);
	// console.log("kunstner:", midgard.act);

	return (
		<div id="slider">
			<h3 className="scene">Midgard</h3>
			<div className="act_container">
				{midgard.map((a) => (
					<Act {...a} />
				))}
			</div>
			<h3 className="scene">Jotunheim</h3>
			<div className="act_container">
				{jotunheim.map((a) => (
					<Act {...a} />
				))}
			</div>
			<h3 className="scene">Vanaheim</h3>
			<div className="act_container">
				{vanaheim.map((a) => (
					<Act {...a} />
				))}
			</div>
		</div>
	);
}
