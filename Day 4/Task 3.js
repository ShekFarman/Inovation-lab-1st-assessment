const car = {
  brand: "Toyota",
  color: "Black",
  model: "Fortuner ",
  engine: {
    type: "Diesel",
    capacity: "2.4L"
  }
};

const { brand, color } = car;
console.log(brand);
console.log(color);

const { model, price = "Not available" } = car;
console.log(model);
console.log(price);

const { engine: { type, capacity } } = car;
console.log(type);
console.log(capacity);

const copyCar = { ...car };
console.log(copyCar);

const moreDetails = { price: "₹65.88 Lakhs", color: "white" };
const updatedCar = { ...car, ...moreDetails };
console.log(updatedCar);
