import Act from "../../Schedule/Act";

export default function NextArtist(props) {
	console.log(props);
	return (
		<div id="next_artist">
			{props.playingNext.map((act) => {
				return <Act act={act.act} start={act.start} end={act.end} />;
			})}
		</div>
	);
}
