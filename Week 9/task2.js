// PART A
const sisConfig = { semester: 'Spring 2025', maxCredits: 30 };
sisConfig.maxCredits = 99;  // attempt to mutate
sisConfig.newField = 'ups'; // attempt to add a new property
console.log(sisConfig);     // What do you see?

// Part B - Object.freeze()
const frozenConfig = { semester: 'Spring 2025', maxCredits: 30 };

Object.freeze(frozenConfig);

frozenConfig.maxCredits = 99;
frozenConfig.newField = 'ups';

console.log(frozenConfig);
// { semester: 'Spring 2025', maxCredits: 30 }


// Part C - Object.freeze() is shallow
const nestedConfig = {
  semester: 'Spring 2025',
  limits: {
    maxCredits: 30,
  },
};

Object.freeze(nestedConfig);

nestedConfig.limits.maxCredits = 9999;

console.log(nestedConfig.limits.maxCredits);
// 9999