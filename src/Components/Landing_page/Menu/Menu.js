import pic1 from "../../../img/place_1.jpg";
import pic2 from "../../../img/place_2.jpg";
import pic3 from "../../../img/place_3.jpg";

export default function Navigation() {
	return (
		<nav className="navigation">
			<ul className="grid">
				<li>
					<img src={pic1} alt="billede" />
					<p>SCHEDULE</p>
				</li>
				<li>
					<p>PLAYING NOW</p>
				</li>
				<li>
					<p>FESTIVAL MAP</p>
					<img src={pic2} alt="billede" />
				</li>
				<li>
					<img src={pic3} alt="billede" />
					<p>EXPLORE MORE</p>
				</li>
			</ul>
		</nav>
	);
}
