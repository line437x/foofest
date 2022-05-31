import { Routes, Route } from "react-router-dom";
import "./main.scss";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Landing from "./Components/Landing_page/Landing";
import Lineup from "./Components/Landing_page/Lineup/Lineup";
import Schedule from "./Components/Schedule/Schedule";
import PlayingNow from "./Components/Playing_now/Playing_now";
import FestivalMap from "./Components/Festival_map/FestivalMap";
import SpecificArtist from "./Components/Specific_artist/Specific_artist";

import { addMood } from "./Utils/data";
import { useEffect, useContext } from "react";
import { BandsContext } from "./contexts/bandContext";
import { ScheduleContext } from "./contexts/scheduleContext";
import { v4 as uuidv4 } from "uuid";

function App() {
	const { bands, setBands } = useContext(BandsContext);
	const { schedule, setSchedule } = useContext(ScheduleContext);

	// const [event, setEvent] = useState(false);

	useEffect(() => {
		const getBands = async () => {
			const data = await fetch("https://foofest-bananas.herokuapp.com/bands");
			const bandsJson = await data.json();

			const cleanedBands = await addMood(bandsJson);
			const addedId = cleanedBands.map((band) => {
				return { ...band, id: uuidv4() };
			});

			setBands(addedId);
		};

		getBands();
	}, []);

	useEffect(() => {
		const fetchSchedule = async () => {
			const json = await fetch("https://foofest-bananas.herokuapp.com/schedule");
			const data = await json.json();

			setSchedule(data);
		};
		fetchSchedule();

		// setInterval(() => {
		// }, 10000);
	}, []);

	return (
		<div id="app">
			<Header></Header>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/lineup" element={<Lineup />} />
				<Route path="/schedule" element={<Schedule />} />
				<Route path="/playing" element={<PlayingNow />} />
				<Route path="/festivalmap" element={<FestivalMap />} />
				<Route path="/artist" element={<SpecificArtist />}>
					<Route path=":artistid" element={<SpecificArtist />} />
				</Route>
			</Routes>
			<Footer></Footer>
		</div>
	);
}

export default App;
