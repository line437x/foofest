import Banner from "../Banner/Banner";
import Button from "../Buttons/Button";
import Navigation from "./Navigation/Navigation";
import Current from "./Current_artist/Current";
import Next from "./Next_artist/Next";
import Sidebar from "./Sidebar/Sidebar";

export default function PlayingNow() {
	const scene = "Musa";
	return (
		<div id="playing_now">
			<Banner banner="PLAYING NOW"></Banner>
			<Navigation></Navigation>
			<Button></Button>
			<div className="content_container">
				<article>
					<h2>{scene}</h2>
					<p>
						Browse the stages and we will make sure that you are always updated on now and whos next
						up
					</p>
				</article>
				<div className="content">
					<div>
						<h2>
							Now playing at <span>{scene}</span>
						</h2>
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
