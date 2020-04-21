const fs = require("fs");

let dataJson = fs.readFileSync("data.json", 'UTF-8');
let geoJson = fs.readFileSync("geo.json", 'UTF-8');

let isValidJSON = (data: string) => {
	if ((String(data).length === 0)) {
		return `The length of the Object is ${String(data).length}`;
	}
	try {
		let _data = JSON.parse(data);
		if (_data && typeof _data === "object" && !(_data instanceof Array)) {
			// To Do: Call the functions to return data.json
			// Convert Degress to Radians
			let degToRads = (deg: any) => {
				return deg * Math.PI / 180;
			}

			let splitGeo = (geoData: string) => {
				return geoData.split(",");
			}

			let eucledianDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
				lat1 = degToRads(lat1);
				lat2 = degToRads(lat2);
				lon1 = degToRads(lon1);
				lon2 = degToRads(lon2);
				var earthRadius = 6371; // in km's
				var dx = (lon2 - lon1) * Math.cos((lat1 + lat2) / 2);
				var dy = (lat2 - lat1);
				var distance = Math.sqrt(dx * dx + dy * dy) * earthRadius;
				console.log('distance', distance);
				return distance;
			}

			let nearestGeo = (latitude: number, longitude: number) => {
				let mindif = 99999;
				let closest = 0;

				geoJson.forEach((elem: any, index: number) => {

					const tesdata = splitGeo(elem.geo);
					var dif = eucledianDistance(latitude, longitude, +tesdata[0], +tesdata[1]);
					console.log('diff', dif);
					if (dif < mindif) {
						closest = index;
						mindif = dif;
					}
				});
				const closestLocation = (geoJson[closest]);
				console.table(dataJson);
				return closestLocation;
			}
			geoJson.forEach((element: any, index: number) => {
				nearestGeo(10, 40); // Testing Data
			});
			return `Parsed the JSON file:`;
		}
	} catch (e) {
		return `You've got an Error: ${e}`;
	}
	return `The file you have added is not a valid JSON file`;
};
console.log(isValidJSON(geoJson));