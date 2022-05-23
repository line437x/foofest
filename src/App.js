import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./main.scss";
import Header from "./Components/Header/Header";
import Landing from "./Components/Landing_page/Landing";
import Lineup from "./Components/Landing_page/Lineup/Lineup";
import Schedule from "./Components/Schedule/Schedule";
import PlayingNow from "./Components/Playing_now/Playing_now";
import SpecificArtist from "./Components/Specific_artist/Specific_artist";

import { getBands, addMood } from "./Utils/data";
import { useEffect, useState } from "react";

import { ScheduleProvider } from "./contexts/scheduleContext";

function App() {
	const [bands, setBands] = useState([]);
	const [schedule, setSchedule] = useState([]);
	const [event, setEvent] = useState(false);

	useEffect(() => {
		const getBands = async () => {
			const data = await fetch("https://foofest-bananas.herokuapp.com/bands");
			const bandsJson = await data.json();

			const cleanedBands = await addMood(bandsJson);

			setBands(cleanedBands);

			// console.log(bands);
		};

		getBands();
	}, [schedule]);

	useEffect(() => {
		const fetchSchedule = async () => {
			const json = await fetch("https://foofest-bananas.herokuapp.com/schedule");
			const data = await json.json();

			setSchedule(data);
		};

		setInterval(() => {
			fetchSchedule();
		}, 10000);
	}, []);
	// console.log("Bands ", bands);
	// console.log("Schedule ", schedule);
	// getBands();

	return (
		<div id="app">
			<Header></Header>
			{/* <ScheduleProvider> */}
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/lineup" element={<Lineup />} />
				<Route path="/schedule" element={<Schedule bands={bands} schedule={schedule} />} />
				<Route path="/playing" element={<PlayingNow />} />
				<Route path="/artist" element={<SpecificArtist />} />
			</Routes>
			{/* </ScheduleProvider> */}
		</div>
	);
}

export default App;
