import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./main.scss";
import Header from "./Components/Header/Header";
import Landing from "./Components/Landing_page/Landing";
import Lineup from "./Components/Landing_page/Lineup/Lineup";
import Schedule from "./Components/Schedule/Schedule";
import PlayingNow from "./Components/Playing_now/Playing_now";
import SpecificArtist from "./Components/Specific_artist/Specific_artist";

import { getBands, addMood } from "./Utils/data";
import { useEffect, useState, useContext } from "react";
import { BandsContext } from "./contexts/bandContext";
import { ScheduleContext } from "./contexts/scheduleContext";
import { v4 as uuidv4 } from "uuid";

import { ScheduleProvider } from "./contexts/scheduleContext";

function App() {
	const { bands, setBands } = useContext(BandsContext);
	const { schedule, setSchedule } = useContext(ScheduleContext);

	// const [bands, setBands] = useState([]);
	// const [schedule, setSchedule] = useState([]);
	const [event, setEvent] = useState(false);

	useEffect(() => {
		const getBands = async () => {
			const data = await fetch("https://foofest-bananas.herokuapp.com/bands");
			const bandsJson = await data.json();

			const cleanedBands = await addMood(bandsJson);
			const addedId = cleanedBands.map((band) => {
				return { ...band, id: uuidv4() };
			});

			setBands(addedId);

			// console.log(bands);
		};

		getBands();
	}, []);

	useEffect(() => {
		const fetchSchedule = async () => {
			const json = await fetch("https://foofest-bananas.herokuapp.com/schedule");
			const data = await json.json();

			setSchedule(data);

			// console.log("scheduledata:", data);
		};
		fetchSchedule();

		// setInterval(() => {
		// }, 10000);
	}, []);
	// console.log("Bands ", bands);
	// console.log("Schedule ", schedule);
	// getBands();

	return (
		<div id="app">
			<Header></Header>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/lineup" element={<Lineup />} />
				<Route path="/schedule" element={<Schedule />} />
				<Route path="/playing" element={<PlayingNow />} />
				<Route path="/artist" element={<SpecificArtist />}>
					<Route path=":artistid" element={<SpecificArtist />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
