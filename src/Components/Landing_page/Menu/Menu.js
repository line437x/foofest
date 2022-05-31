import { Link } from "react-router-dom";
import pic1 from "../../../img/place_2.jpg";
import pic2 from "../../../img/place_2.jpg";
import pic3 from "../../../img/place_3.jpg";

export default function Navigation() {
	return (
		<section className="navigation">
			<nav>
				<ul className="grid">
					<Link className="link" to="/schedule">
						<li>
							{/* <figure>
								<div className="menu_img"></div>
							</figure> */}
							{/* <img src={pic1} alt="billede" /> */}
							<h3>SCHEDULE</h3>
						</li>
					</Link>
					<Link className="link" to="/playing">
						<li>
							<h3>PLAYING NOW</h3>
						</li>
					</Link>
					<Link className="link" to="/festivalmap">
						<li>
							<h3>FESTIVAL MAP</h3>
							{/* <figure>
								<div className="menu_img"></div>
							</figure> */}
							{/* <img src={pic2} alt="billede" /> */}
						</li>
					</Link>
					<a href="https://foofest-booking.netlify.app" target="_blank">
						<li>
							{/* <figure>
							<div className="menu_img"></div>
						</figure> */}
							{/* <img src={pic3} alt="billede" /> */}
							<h3>GET YOUR TICKET HERE</h3>
						</li>
					</a>
				</ul>
			</nav>
		</section>
	);
}
