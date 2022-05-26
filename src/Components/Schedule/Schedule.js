import Banner from "../Banner/Banner";
import Navigation from "./Navigation/Navigation";
import Slider from "./Slider/Slider";

export default function Schedule() {
	return (
		<div className="schedule">
			<Banner banner="SCHEDULE"></Banner>
			<Navigation></Navigation>
			<Slider></Slider>
		</div>
	);
}
