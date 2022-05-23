import Card from "../../Card/Card";

export default function Slider({ bands, schedule }) {
	return (
		<div id="slider">
			<h3 className="scene">{}</h3>
			<div id="card_container" className="grid">
				{bands.map((b) => (
					<Card {...b} bands={bands} schedule={schedule} />
				))}
			</div>
		</div>
	);
}
// {
// 	products.map((p) => <Product {...p} />);
// }
