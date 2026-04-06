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

let latitudes = [];
let longitudes = [];
for(let i = 0; i < markers.length; i++) {
 const marker = markers[i];
 latitudes.push(marker.lat);
 longitudes.push(marker.lon);
}

const average = (arr) => arr.reduce((sum, val) => sum + val, 0) / arr.length;

const getLatitudes = (x) => x.lat //+x.lon+ 'hello'
let latitudes2 = markers.map(getLatitudes);
let longitudes2 = markers.map((x) => x.lon);
console.log("Latitudes:", latitudes2);
console.log("Longitudes:", longitudes2);
 // [-34.6, -16.5, -15.8, -33.4, 4.6, -0.3, -12.0, -25.2, -34.9, 10.5], [-58.4, -68.1, -47.9, -70.7, -74.0, -78.6, -77.0, -57.5, -56.2, -66.9]
console.log(average(latitudes2), average(longitudes2)); // -15.76, -65.53



const averageLat = average(markers.map((x) => x.lat));
const averageLon = average(markers.map((x) => x.lon));

console.log(Number.parseFloat(averageLat).toFixed(2), Number.parseFloat(averageLon).toFixed(2)); // -15.76, -65.53

