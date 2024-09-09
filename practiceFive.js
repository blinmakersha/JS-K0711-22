// Создайте класс Car с конструктором, принимающим параметры make, model и year.
// Добавьте метод getCarInfo, который возвращает строку с информацией о машине в формате
// "Машина: [make] [model], год выпуска: [year]". Создайте несколько объектов этого класса и вызовите метод для каждого из них.

class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getCarInfo() {
    return `Машина: ${this.make} ${this.model}, год выпуска: ${this.year}`;
  }
}

const car1 = new Car("Toyota", "Camry", 2018);
const car2 = new Car("Honda", "CRV", 2021);
const car3 = new Car("Ford", "Focus", 2012);

console.log(car1.getCarInfo());
console.log(car2.getCarInfo());
console.log(car3.getCarInfo());
