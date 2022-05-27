import { useState } from "react";
export default function Navigation(props) {
	function filterByDay(e) {
		const searchQuery = e.target.innerHTML.toLowerCase();
		switch (searchQuery) {
			case "monday":
				props.setDay("mon");
				break;
			case "tuesday":
				props.setDay("tue");
				break;
			case "wedensday":
				props.setDay("wed");
				break;
			case "thursday":
				props.setDay("thu");
				break;
			case "friday":
				props.setDay("fri");
				break;
			case "saturday":
				props.setDay("sat");
				break;
			case "sunday":
				props.setDay("sun");
				break;
			default:
				console.log("no match");
		}
	}
	return (
		<nav id="filter_container" className="grid">
			<ul id="day_filter">
				<li onClick={filterByDay} className={props.day === "mon" ? "filter_active" : ""}>
					Monday
				</li>
				<li onClick={filterByDay} className={props.day === "tue" ? "filter_active" : ""}>
					Tuesday
				</li>
				<li onClick={filterByDay} className={props.day === "wed" ? "filter_active" : ""}>
					Wedensday
				</li>
				<li onClick={filterByDay} className={props.day === "thu" ? "filter_active" : ""}>
					Thursday
				</li>
				<li onClick={filterByDay} className={props.day === "fri" ? "filter_active" : ""}>
					Friday
				</li>
				<li onClick={filterByDay} className={props.day === "sat" ? "filter_active" : ""}>
					Saturday
				</li>
				<li onClick={filterByDay} className={props.day === "sun" ? "filter_active" : ""}>
					Sunday
				</li>
			</ul>
		</nav>
	);
}
