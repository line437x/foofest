import { Link } from "react-router-dom";

// import pic from "../../img/place_2.jpg";

export default function Card(probs) {
	return (
		<div className="card">
			<Link className="link" to="/artist">
				<h4>{probs.name}</h4>
				<img src={probs.logo} alt={probs.name} />
				<p>Kl. {probs.start}</p>
				<p>Mood: {probs.mood}</p>
			</Link>
		</div>
	);
}
