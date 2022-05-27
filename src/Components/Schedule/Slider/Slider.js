import Act from "../Act";
import { useContext } from "react";
// import { BandsContext } from "../../../contexts/bandContext";
import { ScheduleContext } from "../../../contexts/scheduleContext";
import { v4 as uuidv4 } from "uuid";

export default function Slider(props) {
	// const { bands, setBands } = useContext(BandsContext);
	const { schedule, setSchedule } = useContext(ScheduleContext);

	// console.log(schedule.Midgard);
	const midgard = schedule.Midgard[props.day];
	const jotunheim = schedule.Jotunheim[props.day];
	const vanaheim = schedule.Vanaheim[props.day];

	return (
		<div id="slider">
			<section className="act__wrapper">
				<h3 className="scene">Midgard</h3>
				<div className="act_container">
					{midgard.map((a) => (
						<Act key={uuidv4()} {...a} />
					))}
				</div>
			</section>
			<section className="act__wrapper">
				<h3 className="scene">Jotunheim</h3>
				<div className="act_container">
					{jotunheim.map((a) => (
						<Act key={uuidv4()} {...a} />
					))}
				</div>
			</section>
			<section className="act__wrapper">
				<h3 className="scene">Vanaheim</h3>
				<div className="act_container">
					{vanaheim.map((a) => (
						<Act key={uuidv4()} {...a} />
					))}
				</div>
			</section>
		</div>
	);
}
