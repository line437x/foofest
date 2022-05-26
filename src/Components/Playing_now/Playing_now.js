import Banner from "../Banner/Banner";
import Navigation from "./Navigation/Navigation";
import Current from "./Current_artist/Current";
import Next from "./Next_artist/Next";
import Sidebar from "./Sidebar/Sidebar";
// import { useContext } from "react";
// import { BandsContext } from "../../contexts/bandContext";

export default function PlayingNow() {
	// const { bands, setBands } = useContext(BandsContext);
	const scene = "Musa";
	return (
		<div id="playing_now">
			<Banner banner="PLAYING NOW"></Banner>
			<Navigation></Navigation>
			<button className="back">
				<a href="javascript:history.back()">← Go Back</a>
			</button>
			<div className="content_container">
				<div className="content">
					<div>
						<h2>Playing now at {scene}</h2>
						<Current></Current>
					</div>
					<div>
						<h2>Coming up next</h2>
						<Next></Next>
					</div>
				</div>
				<Sidebar></Sidebar>
			</div>
		</div>
	);
}
