import { Link } from "react-router-dom";
export default function Sidebar() {
	return (
		<div id="sidebar">
			<Link className="link" to="/festivalmap">
				<button className="secondary">Find stages on map</button>
			</Link>
		</div>
	);
}
