var fs = require("fs");
var dataJson = fs.readFileSync("data.json", 'UTF-8');
var geoJson = fs.readFileSync("geo.json", 'UTF-8');
var isValidJSON = function (data) {
    if ((String(data).length === 0)) {
        return "The length of the Object is " + String(data).length;
    }
    try {
        var _data = JSON.parse(data);
        if (_data && typeof _data === "object" && (_data instanceof Array)) {
            // To Do: Call the functions to return data.json
            return "Parsed the JSON file:";
        }
    }
    catch (e) {
        return "You've got an Error: " + e;
    }
    return "The file you have added is ot a valid JSON file";
};
