const markers = [
 { name: "AR", lat: -34.6, lon: -58.4 },
 { name: "BO", lat: -16.5, lon: -68.1 },
 { name: "BR", lat: -15.8, lon: -47.9 },
 { name: "CL", lat: -33.4, lon: -70.7 },
 { name: "CO", lat: 4.6, lon: -74.0 },
 { name: "EC", lat: -0.3, lon: -78.6 },
 { name: "PE", lat: -12.0, lon: -77.0 },
 { name: "PY", lat: -25.2, lon: -57.5 },
 { name: "UY", lat: -34.9, lon: -56.2 },
 { name: "VE", lat: 10.5, lon: -66.9 },
];

const sum = (x, y) => x + y;

const average = arr => arr.reduce(sum, 0) / arr.length;

// Utility to flip the first two arguments of a binary function
const flip2 = fn => (a, b, ...rest) => fn(b, a, ...rest);

// Converts a method into a function (e.g., turns `[].map` into a standalone function)
const demethodize = method => (arg, ...args) => method.call(arg, ...args);

// Curry a binary function
const curry = fn => a => b => fn(a, b);

// General field getter
const getField = key => obj => obj[key];

// Functional map
const myMap = curry(flip2(demethodize(Array.prototype.map)));

// Get all latitudes
const getAllLats = myMap(getField("lat"));

// Get all longitudes
const getAllLons = myMap(getField("lon")); // or "lng" depending on your data

// Pipeline function
const pipeline = (...fns) => input => fns.reduce((acc, fn) => fn(acc), input);

// Assume `markers` is your array of objects with lat/lon
const averageLat = pipeline(getAllLats, average)(markers);
const averageLon = pipeline(getAllLons, average)(markers);

console.log({ averageLat, averageLon });
