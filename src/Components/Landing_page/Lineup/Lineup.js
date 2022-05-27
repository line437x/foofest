import { Link } from "react-router-dom";
import { useContext } from "react";
import { BandsContext } from "../../../contexts/bandContext";
import { v4 as uuidv4 } from "uuid";

export default function Lineup() {
	const { bands } = useContext(BandsContext);

	return (
		<div id="lineup_container">
			<div className="lineup">
				{bands.map((m) => {
					return (
						<p key={uuidv4()}>
							{m.name}
							<span>&#183;</span>
						</p>
					);
				})}
			</div>

			<button className="secondary" id="schedule_btn">
				<Link className="link" to="/lineup">
					⤱
				</Link>
			</button>
		</div>
	);
}
