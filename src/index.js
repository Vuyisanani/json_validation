var fs = require("fs");
var dataJson = fs.readFileSync("data.json", 'UTF-8');
var geoJson = fs.readFileSync("geo.json", 'UTF-8');
// const test = JSON.parse(dataJson);
var isValidJSON = function (data) {
    if ((String(data).length === 0)) {
        return "The length of the Object is " + String(data).length;
    }
    try {
        var _data = JSON.parse(data);
        if (_data && typeof _data === "object" && (_data instanceof Array)) {
            console.table(_data);
            return "Parsed the JSON file:";
        }
    }
    catch (e) {
        return "You've got an Error: " + e;
    }
    return "The file you have added is ot a valid JSON file";
};
console.log(isValidJSON(geoJson));
// let distance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
// 	if ((lat1 == lat2) && (lon1 == lon2)) {
// 		return 0;
// 	}
// 	else {
// 		let dist = Math.sqrt((lat2 - lat1)**2 + (lon2 - lon1)**2)
// 		return dist;
// 	}
// }
// console.log('distance: ', distance(1, 4, 3, 4));
// let res = function(num1: number, num2: number) {
//     let dist = Math.sqrt((num1)**2 - (num2)**2);
// }
