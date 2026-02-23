const car = { make: "Toyota", model: "Corolla", year: 2020 };
Object.freeze(car);

car.model = "Camry";
console.log(car);

//In strict mode, JavaScript does not silently ignore attempts to modify frozen objects—
//it throws a TypeError instead.
//In non-strict mode, this line would simply fail silently and leave car.model unchanged.
