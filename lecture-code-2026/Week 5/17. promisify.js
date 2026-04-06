import { readFile } from 'fs';

const promisify = (fn) => {
  return (...args) => {
    return new Promise((resolve, reject) => {
      fn(...args, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  };
};

const readFileData = promisify(readFile);

readFileData('example.txt', 'utf8')
  .then(data => console.log(data))
  .catch(err => console.error(err));