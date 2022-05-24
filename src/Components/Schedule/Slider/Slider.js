import Card from "../../Card/Card";
import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import { BandsContext } from "../../../contexts/bandContext";
// import { ScheduleContext } from "../../../contexts/scheduleContext";

export default function Slider() {
	const { bands, setBands } = useContext(BandsContext);
	// const { schedule, setSchedule } = useContext(ScheduleContext);
	return (
		<div id="slider">
			<h3 className="scene">{}</h3>
			<div id="card_container" className="grid">
				{bands.map((b) => (
					<Card className="card" key={uuidv4()} id={uuidv4()} {...b} />
				))}
			</div>
		</div>
	);
}
