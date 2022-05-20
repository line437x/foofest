export default function Banner(probs) {
	return (
		<div id="banner">
			<div class="marquee">
				<div>
					<span>{probs.banner}</span>
					<span>{probs.banner}</span>
				</div>
			</div>
		</div>
	);
}
