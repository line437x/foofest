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
							<p>SCHEDULE</p>
						</Link>
					</li>
					<li>
						<Link className="link" to="/playing">
							<p>PLAYING NOW</p>
						</Link>
					</li>
					<li>
						<p>FESTIVAL MAP</p>
						<img src={pic2} alt="billede" />
					</li>
					<li>
						<img src={pic3} alt="billede" />
						<p>GET YOUR TICKET HERE</p>
					</li>
				</ul>
			</nav>
		</div>
	);
}
