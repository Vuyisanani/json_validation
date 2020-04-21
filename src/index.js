var fs = require("fs");
var dataJson = fs.readFileSync("data.json", 'UTF-8');
var geoJson = fs.readFileSync("geo.json", 'UTF-8');
var isValidJSON = function (data) {
    if ((String(data).length === 0)) {
        return "The length of the Object is " + String(data).length;
    }
    try {
        var _data = JSON.parse(data);
        if (_data && typeof _data === "object" && !(_data instanceof Array)) {
            // To Do: Call the functions to return data.json
            // Convert Degress to Radians
            var degToRads_1 = function (deg) {
                return deg * Math.PI / 180;
            };
            var splitGeo_1 = function (geoData) {
                return geoData.split(",");
            };
            var eucledianDistance_1 = function (lat1, lon1, lat2, lon2) {
                lat1 = degToRads_1(lat1);
                lat2 = degToRads_1(lat2);
                lon1 = degToRads_1(lon1);
                lon2 = degToRads_1(lon2);
                var earthRadius = 6371; // in km's
                var dx = (lon2 - lon1) * Math.cos((lat1 + lat2) / 2);
                var dy = (lat2 - lat1);
                var distance = Math.sqrt(dx * dx + dy * dy) * earthRadius;
                console.log('distance', distance);
                return distance;
            };
            var nearestGeo_1 = function (latitude, longitude) {
                var mindif = 99999;
                var closest = 0;
                geoJson.forEach(function (elem, index) {
                    var tesdata = splitGeo_1(elem.geo);
                    var dif = eucledianDistance_1(latitude, longitude, +tesdata[0], +tesdata[1]);
                    console.log('diff', dif);
                    if (dif < mindif) {
                        closest = index;
                        mindif = dif;
                    }
                });
                var closestLocation = (geoJson[closest]);
                console.table(dataJson);
                return closestLocation;
            };
            geoJson.forEach(function (element, index) {
                nearestGeo_1(10, 40); // Testing Data
            });
            return "Parsed the JSON file:";
        }
    }
    catch (e) {
        return "You've got an Error: " + e;
    }
    return "The file you have added is not a valid JSON file";
};
console.log(isValidJSON(geoJson));
