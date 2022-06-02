import Banner from "../Banner/Banner";
import Button from "../Buttons/Button";
import Navigation from "./Navigation/Navigation";
import Current from "./Current_artist/Current";
import Next from "./Next_artist/Next";
import Sidebar from "./Sidebar/Sidebar";
import { useState, useContext, useEffect } from "react";
import { ScheduleContext } from "../../contexts/scheduleContext";

export default function PlayingNow() {
	const [scene, setScene] = useState("Jotunheim");
	const { schedule } = useContext(ScheduleContext);
	const [sceneSchedule, setSceneSchedule] = useState([]);
	const [playingNow, setPlayingNow] = useState({});
	const [playingNext, setPlayingNext] = useState([]);
	const [firstMount, setFirstMount] = useState(true);

	function getPlayingNow(day, time) {
		const daySchedule = sceneSchedule[day];
		daySchedule.map((act) => {
			const actTimeStart = Number(act.start.substring(0, 2));
			const actTimeEnd = Number(act.end.substring(0, 2));
			if (
				(actTimeStart === time && actTimeEnd === time + 2) ||
				(actTimeStart === time - 1 && actTimeEnd === time + 1)
			) {
				setPlayingNow(act);
			}
			return act;
		});
	}
	function getPlayingNext(day) {
		const daySchedule = sceneSchedule[day];
		const indexPlayingNow = daySchedule.indexOf(playingNow);
		const playingNextArr = [daySchedule[indexPlayingNow + 1], daySchedule[indexPlayingNow + 2]];

		setPlayingNext(playingNextArr);
	}

	useEffect(() => {
		function getDaySchedule() {
			const today = new Date().getDay();
			const time = new Date().getHours();
			switch (today) {
				case 1:
					getPlayingNow("mon", time);

					break;
				case 2:
					getPlayingNow("tue", time);

					break;
				case 3:
					getPlayingNow("wed", time);

					break;
				case 4:
					getPlayingNow("thu", time);

					break;
				case 5:
					getPlayingNow("fri", time);

					break;
				case 6:
					getPlayingNow("sat", time);

					break;
				case 7:
					getPlayingNow("sun", time);

					break;

				default:
			}
		}

		if (!firstMount) {
			getDaySchedule();
		} else {
			setFirstMount(false);
		}
	}, [sceneSchedule, firstMount]);

	useEffect(() => {
		function getDaySchedule() {
			const today = new Date().getDay();
			switch (today) {
				case 1:
					getPlayingNext("mon");

					break;
				case 2:
					getPlayingNext("tue");

					break;
				case 3:
					getPlayingNext("wed");

					break;
				case 4:
					getPlayingNext("thu");

					break;
				case 5:
					getPlayingNext("fri");

					break;
				case 6:
					getPlayingNext("sat");

					break;
				case 7:
					getPlayingNext("sun");

					break;

				default:
			}
		}

		if (!firstMount) {
			getDaySchedule();
		} else {
			setFirstMount(false);
		}
	}, [playingNow]);

	useEffect(() => {
		function getSceneSchedule() {
			setSceneSchedule(schedule[scene]);
		}

		getSceneSchedule();
	}, [scene]);

	return (
		<div id="playing_now">
			<Banner banner="PLAYING NOW"></Banner>
			<Navigation setScene={setScene}></Navigation>
			<div className="content_container">
				<section>
					<Button></Button>
					<article>
						<h2>{scene}</h2>
						<p>
							Browse the stages and we will make sure that you are always updated on now and whos
							next up.
						</p>
					</article>
					<div className="content">
						<div>
							<h2>
								Now playing at <span>{scene}</span>
							</h2>
							<Current act={playingNow.act} start={playingNow.start} end={playingNow.end}></Current>
						</div>
						<div>
							<h2>Coming up next</h2>
							<Next playingNext={playingNext}></Next>
						</div>
					</div>
				</section>
				<Sidebar></Sidebar>
			</div>
		</div>
	);
}
