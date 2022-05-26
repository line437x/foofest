import Map from "../../img/map.png";
import Banner from "../Banner/Banner";

export default function FestivalMap() {
	return (
		<div className="festival_map_container">
			<Banner banner="FESTIVAL MAP"></Banner>
			<button className="back">
				<a href="javascript:history.back()">← Go Back</a>
			</button>
			<figure>
				<img className="map" src={Map} alt="Festival Map" />
			</figure>
		</div>
	);
}
