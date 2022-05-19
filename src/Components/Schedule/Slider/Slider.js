import Card from "../../Card/Card";

export default function Slider(probs) {
	return (
		<div id="slider">
			<h3 className="scene">{probs.scene}</h3>
			<div id="card_container" className="grid">
				<Card artist="Benny" time="22:00-00:30" mood="P3’s ensamble"></Card>
				<Card></Card>
				<Card></Card>
				<Card></Card>
			</div>
		</div>
	);
}
