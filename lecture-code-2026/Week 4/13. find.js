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

const brazilData = markers.find((v) => v.name === "BR");

console.log(brazilData);
// Output: { name: "BR", lat: -15.8, lon: -47.9 }

