import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { ScheduleContext } from "../../contexts/scheduleContext";

export default function Card(probs) {
	const { schedule, setSchedule } = useContext(ScheduleContext);
	// console.log(probs);
	const [logos, setLogos] = useState([]);

	useEffect(() => {
		if (probs.logo.startsWith("http")) {
			setLogos(probs.logo);
		} else {
			setLogos(`https://foofest-bananas.herokuapp.com/logos/${probs.logo}`);
		}
	}, []);

	// console.log(Object.values(probs.schedule));
	// console.log(probs);

	return (
		<div className="card">
			<Link className="link" to={`/artist/${probs.id}`} state={{ logos: { logos } }}>
				<h4>{probs.name}</h4>
				<img src={logos} alt={probs.name} />
				<p>Kl. {probs.start}</p>
				<p>Mood: {probs.mood}</p>
			</Link>
		</div>
	);
}
