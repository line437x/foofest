export const getBands = async () => {
	const data = await fetch("https://foofest-bananas.herokuapp.com/bands");
	const bands = await data.json();

	// const cleanedBands = addMood(bands);
	// console.log("Ny Genre ", cleanedBands);
	// return await bands;
};

export const addMood = (bands) => {
	// Mapping over the fetched list of bands
	const newBandArr = bands.map((band) => {
		const bandCopy = { ...band };

		// Check what genre each band has. Give a mood key:value pair depending on the genre
		switch (bandCopy.genre) {
			case "Alternative Rock":
			case "Alternative Metal":
			case "Hypertrash":
			case "Heavy Metal":
			case "Rock":
			case "Hard Rock":
			case "Grunge":
			case "Hardcore Punk":
			case "Metal":
				bandCopy.mood = "Goatmarket";
				break;
			case "Soul":
			case "Latin":
			case "Reggae":
			case "Blues":
			case "World":
			case "Jazz":
			case "Funk":
				bandCopy.mood = "Hips don't lie";
				break;
			case "Rap":
			case "Pop":
			case "Hip Hop":
			case "Electronic":
				bandCopy.mood = "P3's Ensemble";
				break;
			case "Country":
			case "Folk":
			case "Classical":
				bandCopy.mood = "Beethoven og Cowboys";
				break;
			case "Stage And Screen":
			case "Non Music":
				bandCopy.mood = "Shhh";
				break;
			default:
				console.log(bandCopy);
		}

		return bandCopy;
	});

	return newBandArr;

	//* For getting array of unique genres
	// bands.forEach((band) => {
	// 	genres.push(band.genre);
	// });
	// const uniqueGenres = [...new Set(genres)];
	// console.log(uniqueGenres);
};

//? Genres:
//todo  Gedemarkedet
//* - Alternative Rock, Alternative Metal, Hypertrash, Rock, Heavy Metal, Hard Rock, Grunge, Hardcore Punk, Metal

//todo  Hofter lyver ikke
//! - Soul, Latin, Raggae, Blues, World, Jazz, Funk

//todo P3's Ensemble
//? - Rap, Pop, Hip Hop, Electronic,

//todo  Bethoven og Cowboys
//* Country, Folk, Classical

//todo  Shhhh
//! Stage and Screen, Non Music
