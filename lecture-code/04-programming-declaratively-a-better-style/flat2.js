const distances = [
 [0, 20, 35, 40],
 [20, 0, 10, 50],
 [35, 10, 0, 30],
 [40, 50, 30, 0],
];

const maxDist1 = Math.max(...distances.flat()); // 50

const maxDist2 = distances
    .flat()
    .reduce((p, d) => Math.max(p, d), 0); // also 50

