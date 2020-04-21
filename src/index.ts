const fs = require("fs");

const dataJson = fs.readFileSync("data.json", 'UTF-8');
const geoJson = fs.readFileSync("geo.json", 'UTF-8');

let isValidJSON = (data: string) => {
    if ((String(data).length === 0)) {
        return `The length of the Object is ${String(data).length}`;
    }
    try {
        let _data = JSON.parse(data);     
        if (_data && typeof _data === "object" && (_data instanceof Array)) {
            // To Do: Call the functions to return data.json
            return `Parsed the JSON file:`;
        }
    } catch (e) {
      return `You've got an Error: ${e}`;
    }
    return `The file you have added is ot a valid JSON file`;
};
