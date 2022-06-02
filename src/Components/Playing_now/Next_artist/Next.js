import Act from "../../Schedule/Act";
import { v4 as uuidv4 } from "uuid";

export default function NextArtist(props) {
	return (
		<div id="next_artist">
			{props.playingNext.map((act) => {
				return <Act key={uuidv4()} act={act.act} start={act.start} end={act.end} />;
			})}
		</div>
	);
}
