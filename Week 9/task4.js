// TO DO
const deepCopy = (obj) => {
  let aux = obj;

  if (obj && typeof obj === 'object') {
    aux = new obj.constructor();

    Object.getOwnPropertyNames(obj).forEach((prop) => {
      aux[prop] = deepCopy(obj[prop]);
    });
  }

  return aux;
};

const original = {
    id: 'S003',
    name: 'Lejla Mustafic',
    progress: { completedCredits: 90, remainingCredits: 30 },
    courses: ['FP', 'Algo'],
  };
  
  const copy = deepCopy(original);
  copy.name = 'Lejla Pasic';
  copy.progress.completedCredits = 100;
  copy.courses.push('AI');
  
  console.log(original.name);                      // 'Lejla Mustafic' <-- unchanged
  console.log(original.progress.completedCredits); // 90 <-- unchanged
  console.log(original.courses.length);            // 2  <-- unchanged
  console.log(copy.name);                          // 'Lejla Pasic'

module.exports = { deepCopy };