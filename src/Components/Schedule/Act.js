import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { ScheduleContext } from "../../contexts/scheduleContext";

export default function Act(props) {
	const { schedule, setSchedule } = useContext(ScheduleContext);

	return (
		<div className="artist">
			{/* <Link className="link" to={`/artist/${probs.id}`}> */}
			<article>
				<h4>{props.act}</h4>
				<p>
					{props.start}-{props.end}
				</p>
			</article>
			{/* </Link> */}
		</div>
	);
}
