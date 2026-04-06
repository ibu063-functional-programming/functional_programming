const markers = [
 { name: "UY", lat: -34.9, lon: -56.2 },
 { name: "AR", lat: -34.6, lon: -58.4 },
 { name: "BR", lat: -15.8, lon: -47.9 },
 // ...
 { name: "BO", lat: -16.5, lon: -68.1 },
];
let averageLat = markers.map(x => x.lat);
let averageLon = markers.map(x => x.lon);


const serviceResult = {
    accountsData: [
        { id: "F220960K", balance: 1024 },
        { id: "S120456T", balance: 2260 },
        { id: "J140793A", balance: -38 },
        { id: "M120396V", balance: -114 },
        { id: "A120289L", balance: 55000 },
    ],
}
const delinquent = serviceResult.accountsData.filter(
 (v) => v.balance < 0
);
const delinquentIds = delinquent.map((v) => v.id);
const lats = delinquent.map((v) => v.lat);
const longs = delinquent.map((v) => v.lon);

const getField = f => obj => obj[f];
let averageLat1 = markers.map(getField("lat"));
let averageLon1 = markers.map(getField("lon"));

console.log(averageLat1);