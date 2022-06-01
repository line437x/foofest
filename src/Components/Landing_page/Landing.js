import Navigation from "./Menu/Menu";
import Lineup from "./Lineup/Lineup";
import { useState } from "react";

export default function LandingPage() {
	const [linUpOpen, setLineUpOpen] = useState(false);

	return (
		<div>
			<div id="content">
				<Navigation className="navigation"></Navigation>
				<Lineup className="lineup"></Lineup>
			</div>
		</div>
	);
}
