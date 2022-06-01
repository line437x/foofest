import { Link } from "react-router-dom";
import { useContext } from "react";
import { BandsContext } from "../../../contexts/bandContext";
import { v4 as uuidv4 } from "uuid";
import Button from "../../Buttons/Button";

export default function Lineup() {
	const { bands } = useContext(BandsContext);

	return (
		<div id="lineup_container">
			<Button></Button>
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
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-arrows-fullscreen"
						viewBox="0 0 16 16"
					>
						<path
							fill-rule="evenodd"
							d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"
						/>
					</svg>
				</Link>
			</button>
		</div>
	);
}
