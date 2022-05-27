import { Link } from "react-router-dom";
import pic1 from "../../../img/place_1.jpg";
import pic2 from "../../../img/place_2.jpg";
import pic3 from "../../../img/place_3.jpg";

export default function Navigation() {
	return (
		<div className="navigation">
			<nav>
				<ul className="grid">
					<li>
						<img src={pic1} alt="billede" />
						<Link className="link" to="/schedule">
							<h3>SCHEDULE</h3>
						</Link>
					</li>
					<li>
						<Link className="link" to="/playing">
							<h3>PLAYING NOW</h3>
						</Link>
					</li>
					<li>
						<Link className="link" to="/festivalmap">
							<h3>FESTIVAL MAP</h3>
						</Link>
						<img src={pic2} alt="billede" />
					</li>
					<li>
						<img src={pic3} alt="billede" />
						<h3>GET YOUR TICKET HERE</h3>
					</li>
				</ul>
			</nav>
		</div>
	);
}
