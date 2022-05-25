import Card from "../../Card/Card";
import { useContext } from "react";
import { BandsContext } from "../../../contexts/bandContext";

export default function CurrentArtist() {
	const { bands, setBands } = useContext(BandsContext);
	console.log(bands[0]);
	return (
		<div id="current_artist">
			<Card className="card" {...bands[0]}></Card>
		</div>
	);
}
