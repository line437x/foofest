import Banner from "../Banner/Banner";
import Navigation from "./Navigation/Navigation";
import Slider from "./Slider/Slider";
import Button from "../Buttons/Button";

export default function Schedule() {
	return (
		<div className="schedule">
			<Banner banner="SCHEDULE"></Banner>
			<Navigation></Navigation>
			<Button></Button>
			<Slider></Slider>
		</div>
	);
}
