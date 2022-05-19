import { Link } from "react-router-dom";

export default function Header() {
	return (
		<nav className="header">
			<Link className="link" to="/">
				<h1>FOOFEST</h1>
			</Link>
			<span></span>
			<p className="date">21.06.2022 - 26.06.2022</p>
		</nav>
	);
}
