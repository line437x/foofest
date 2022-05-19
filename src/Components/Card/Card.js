import pic from "../../img/place_2.jpg";

export default function Card(probs) {
	return (
		<div className="card">
			<h4>{probs.artist}</h4>
			<img src={pic} alt="" />
			<p>Kl. {probs.time}</p>
			<p>Mood: {probs.mood}</p>
		</div>
	);
}
