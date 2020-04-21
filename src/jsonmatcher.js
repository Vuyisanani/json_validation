var regextJson = '(?<json>(?>\s*(?&object)\s*|\s*(?&array)\s*))';
var regextJsonObject = '(?<object>(?>\{\s*(?>(?&pair)(?>\s*,\s*(?&pair))*)?\s*\}))';
var regextJsonPair = '(?<pair>(?>(?&STRING)\s*:\s*(?&value)))';
var regextJsonArray = '(?<array>(?>\[\s*(?>(?&value)(?>\s*,\s*(?&value))*)?\s*\]))';
var regextJsonValue = '(?<value>(?>true|false|null|(?&STRING)|(?&NUMBER)|(?&object)|(?&array)))';
var regextJsonString = '(?<STRING>(?>"(?>\\(?>["\\\/bfnrt]|u[a-fA-F0-9]{4})|[^"\\\0-\x1F\x7F]+)*"))';
var regextJsonNumber = '(?<NUMBER>(?>-?(?>0|[1-9][0-9]*)(?>\.[0-9]+)?(?>[eE][+-]?[0-9]+)?)))';
var regextJson2 = '\A(?&json)\z/x';
var jsonmatcher = [
    {
        "name": "Vuyisanani",
        "surname": "meteni",
        "isMarried": false,
        "siblings": ["A", "B", "C"]
    },
    {
        "name": "Robert",
        "surname": "Dumani",
        "isMarried": true,
        "siblings": ["J", "B", "C"]
    },
    {
        "name": "Lizwi",
        "surname": "Doe",
        "isMarried": false,
        "siblings": null
    }
];
// let jsonmatchers = JSON.stringify(jsonmatcher);
if (regextJson2.match(jsonmatcher)) {
    console.table('working', jsonmatcher);
}
else {
    console.table(jsonmatcher);
}
