import Card from "../../Card/Card";
import { v4 as uuidv4 } from "uuid";

export default function Slider({ bands, schedule }) {
	return (
		<div id="slider">
			<h3 className="scene">{}</h3>
			<div id="card_container" className="grid">
				{bands.map((b) => (
					<Card key={uuidv4()} id={uuidv4()} {...b} bands={bands} schedule={schedule} />
				))}
			</div>
		</div>
	);
}
