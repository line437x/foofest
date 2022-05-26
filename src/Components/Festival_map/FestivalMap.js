import Map from "../../img/map.png";
import Banner from "../Banner/Banner";

export default function FestivalMap() {
	return (
		<div className="festival_map_container">
			<Banner banner="FESTIVAL MAP"></Banner>
			{/* <h1>Festival Map</h1> */}
			<figure>
				<img className="map" src={Map} alt="Festival Map" />
			</figure>
		</div>
	);
}
