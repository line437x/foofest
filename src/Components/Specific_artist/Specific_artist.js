import { useParams, useLocation } from "react-router-dom";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { BandsContext } from "../../contexts/bandContext";
// import { ScheduleContext } from "../../contexts/scheduleContext";
import Button from "../Buttons/Button";

export default function SpecificArtist() {
	const location = useLocation();
	const { logos } = location.state;

	const { bands } = useContext(BandsContext);
	// const { schedule, setSchedule } = useContext(ScheduleContext);
	const params = useParams();

	const band = bands.filter((band) => {
		return band.id === params.artistid;
	})[0];

	return (
		<div id="specific_artist">
			<div id="band_text" className="grid">
				<Button></Button>
				<div className="desciption">
					<h1>{band.name}</h1>
					<p>{band.bio}</p>

					<div className="band_info">
						<div>
							<h4>Band members:</h4>
							{band.members.map((m) => {
								return <p key={uuidv4()}>{m}</p>;
							})}
						</div>
						<div>
							<h4>Genre:</h4>
							<p>{band.genre}</p>
							<h4>Playing:</h4>
							<p>20:30 at Midgard</p>
						</div>
					</div>
				</div>
			</div>
			<div id="player_container" className="grid">
				<img src={logos.logos} alt="" />
				<iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DX0SM0LYsmbMT?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
			</div>
		</div>
	);
}
