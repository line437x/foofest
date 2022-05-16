import "./main.scss";
import "./App.css";
import { getBands, addMood } from "./Utils/data";

import { useEffect, useState } from "react";

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

			console.log(bands);
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

	return <div className="App"></div>;
}

export default App;
