import Map from "../../img/map.png";
import Banner from "../Banner/Banner";
import Button from "../Buttons/Button";

export default function FestivalMap() {
	return (
		<div className="festival_map_container">
			<Banner banner="FESTIVAL MAP"></Banner>
			<Button />
			<div className="map_text">
				<p>
					At FOOFEST Festival we have 6 areas. 5 camping sites and 1 stage area. Dont know where to
					find your camping site? We have created a map for you, that hopefully will solve that
					problem.
				</p>
			</div>
			<figure>
				<img className="map" src={Map} alt="Festival Map" />
			</figure>
		</div>
	);
}
