const car = {
  brand: "Honda",
  color: "Red",
  speed: 100,
  showCar: function() {
    console.log("Brand: " + this.brand + ", Color: " + this.color + ", Speed: " + this.speed + "km/h");
  }
};
car.showCar(); 
car.speed = 120;
console.log(car.speed);
