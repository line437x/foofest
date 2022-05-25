import Card from "../../Card/Card";
import { useContext } from "react";
import { BandsContext } from "../../../contexts/bandContext";

export default function NextArtist() {
	const { bands, setBands } = useContext(BandsContext);
	return (
		<div id="next_artist">
			<Card className="card" {...bands[1]}></Card>
			<Card className="card" {...bands[2]}></Card>
		</div>
	);
}
