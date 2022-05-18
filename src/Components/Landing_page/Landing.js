import Header from "../Header/Header";
import Navigation from "./Menu/Menu";
import Lineup from "./Lineup/Lineup";

export default function LandingPage() {
	return (
		<div>
			<Header></Header>
			<div id="content">
				<Navigation className="navigation"></Navigation>
				<Lineup className="lineup"></Lineup>
			</div>
		</div>
	);
}
