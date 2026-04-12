class City {
  constructor(name, lat, long) {
    this.name = name;
    this.lat = lat;
    this.long = long;
  }

  getName() {
    return this.name;
  }

  setName(newName) {
    this.name = newName;
  }

  setLat(newLat) {
    this.lat = newLat;
  }

  setLong(newLong) {
    this.long = newLong;
  }

  getCoords() {
    return [this.lat, this.long];
  }
}

function chainify(obj) {
  return new Proxy(obj, {
    get(target, prop, receiver) {
      const value = target[prop];
      if (typeof value === 'function') {
        return (...args) => {
          const result = value.apply(target, args);
          return result === undefined ? receiver : result;
        };
      }
      return value;
    }
  });
}


const myCity = new City('Montevideo, Uruguay', -34.9, -56.1);
const chainedCity = chainify(myCity);

chainedCity
  .setName('Pune, India')
  .setLat(18.5626)
  .setLong(73.8087);

console.log(chainedCity.getCoords()); // [18.5626, 73.8087]
console.log(myCity.getName());       // 'Pune, India'