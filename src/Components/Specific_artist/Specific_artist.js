import pic from "../../img/place_3.jpg";
export default function SpecificArtist() {
	return (
		<div id="specific_artist">
			<div id="band_text" className="grid">
				<div className="desciption">
					<h1>A Perfect Circle</h1>
					<p>
						A Perfect Circle is an American rock supergroup formed in 1999 by guitarist Billy Howerdel and Tool vocalist Maynard James Keenan. A Perfect Circle has released four studio albums, the first three during the early 2000s: Mer de Noms, their debut album in 2000, and followed up by Thirteenth Step in 2003; then in 2004, Emotive—an album of radically re-worked cover songs. Shortly after Emotive's release, the band went on hiatus; Keenan returned to Tool and started up solo work under the
						band name Puscifer. and Howerdel released a solo album, Keep Telling Myself It's Alright, under the moniker Ashes Divide. Band activity was sporadic in the following years; the band reformed in 2010, and played live shows on and off between 2010 and 2013, but fell into inactivity after the release of their greatest hits album, Three Sixty, and a live album box set, A Perfect Circle Live: Featuring Stone and Echo in late 2013. The band reformed in 2017 to record a fourth album, Eat
						the Elephant, which was released on April 20, 2018.
					</p>

					<div className="band_info">
						<div>
							<h4>Band members:</h4>
							<p>Maynard James</p>
							<p>Keenan Billy</p>
							<p>James Iha</p>
							<p>Matt McJunkies</p>
							<p>Jeff Friedl</p>
						</div>
						<div>
							<h4>Genre:</h4>
							<p>Alternative Rock</p>
							<h4>Playing:</h4>
							<p>20:30 at Midgard</p>
						</div>
					</div>
				</div>
			</div>
			<div id="player_container" className="grid">
				<img src={pic} alt="" />
				<iframe src="https://open.spotify.com/embed/artist/4DFhHyjvGYa9wxdHUjtDkc?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
			</div>
		</div>
	);
}
