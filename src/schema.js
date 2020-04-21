/*
1. Write a function that performs some validity checks on two JSON files, geo.json and data.json

2. Write a function that takes in latitude and longitude as parameters, and returns the data from data.json sorted by euclidean distance from the latitude longitude

3. Write a function that takes in latitude and longitude as parameters, and returns the row from data.json with the shortest distance from the latitude and longitude, in a nicely formatted way

---*/
var testGeo = [
    {
        "ipv4": "120.29.249.252",
        "geo": "-37.822633,144.932208"
    },
    {
        "ipv4": "66.207.196.130",
        "geo": "43.638090,-79.425509"
    },
    {
        "ipv4": "77.95.252.48",
        "geo": "51.987831,5.933394"
    },
    {
        "ipv4": "104.236.41.143",
        "geo": "40.82993,-74.126728"
    }
];
var dataTest = [
    {
        "active": 1,
        "asn": 38796,
        "countrycode": "AU",
        "id": 199,
        "statecode": null,
        "meta": "Port Melbourne ausregistry01.ring.nlnog.net 120.29.249.252 180 120.29.249.252"
    },
    {
        "active": 1,
        "asn": 21949,
        "countrycode": "CA",
        "id": 193,
        "statecode": null,
        "meta": "174  beanfield01.ring.nlnog.net 66.207.196.130 Toronto"
    },
    {
        "active": 1,
        "asn": 43190,
        "countrycode": "NL",
        "id": 24,
        "statecode": null,
        "meta": "None totaalnet01.ring.nlnog.net Arnhem 77.95.252.48 24"
    }
];
var b = testGeo[0]["ipv4"];
var a = dataTest[0]["meta"].includes(b);
if (a) {
    console.log(a);
    var dx = testGeo[0]["geo"];
    console.log(dx);
}
else {
    console.log(a);
}
console.table(dataTest);
console.table(testGeo);
