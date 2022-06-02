import { Link } from "react-router-dom";
import { useEffect, useState, useContext, useRef } from "react";
import { BandsContext } from "../../contexts/bandContext";
import { act } from "react-dom/test-utils";

export default function Act(props) {
	const { bands } = useContext(BandsContext);
	const [bandId, setBandId] = useState("");
	const [logos, setLogos] = useState([]);

	useEffect(() => {
		// Find the acts that matches with a band name
		const result = bands.filter((b) => b.name === props.act);
		// If that act not is undefined, set the id and logo
		if (result.length !== 0) {
			setBandId(result[0].id);
			getLogos(result[0]);
		}
	}, []);

	// Find and set the logo for the band
	function getLogos(band) {
		// If the bands logo resource is a "http" set the logo with that
		if (band.logo.startsWith("http")) {
			setLogos(band.logo);
		} else {
			// If the bands logo resource is not a "http" set the logo by using another endpoint
			setLogos(`https://foofest-bananas.herokuapp.com/logos/${band.logo}`);
		}
	}

	return (
		<div className="artist">
			<Link className="link" to={`/artist/${bandId}`} state={{ logos: { logos } }}>
				<article>
					<h4>{props.act}</h4>
					<p>
						{props.start}-{props.end}
					</p>
					{/* <a href="">Show details</a> */}
				</article>
			</Link>
		</div>
	);
}
