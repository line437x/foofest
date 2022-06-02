export default function Navigation(props) {
	function scenePick(e) {
		props.setScene(e.target.innerHTML);
	}

	return (
		<div id="scene_navigation">
			<nav>
				<ul>
					<li onClick={scenePick}>Jotunheim</li>
					<li onClick={scenePick}>Vanaheim</li>
					<li onClick={scenePick}>Midgard</li>
				</ul>
			</nav>
		</div>
	);
}
