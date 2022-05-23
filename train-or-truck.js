// Функции-конструкторы Train и Truck имеют схожие свойства и поведение.
// Перепишите их так, чтобы избавиться от дублирования одинаковых свойств и методов.
function Vehicle(driver) {
  this.driver = driver;
  this.speed = 0;
  this.drive = function (kmh) {
    this.speed = kmh;
    return `${this.driver} driving at ${kmh} kilometers per hour`;
  };
  this.stop = function () {
    this.speed = 0;
    return `${this.driver} has stopped`;
  };
}
function Train(driver) {
  Vehicle.call(this, driver);
  // this.driver = driver;
  this.type = 'passenger'; // 'passenger', 'freight', 'mail'
  // this.speed = 0;
  // this.drive = function (kmh) {
  //   this.speed = kmh;
  //   return `${this.driver} driving at ${kmh} kilometers per hour`;
  // };
  // this.stop = function () {
  //   this.speed = 0;
  //   return `${this.driver} has stopped`;
  // };
}

function Train(driver) {
  Vehicle.call( this, driver)
  this.type = 'passenger'; // 'passenger', 'freight', 'mail'
  }

function Truck(driver) {

 

  Vehicle.call(this, driver);
  // this.driver = driver;
  // this.speed = 0;
  this.cargo = [];
  // this.drive = function (kmh) {
  //   this.speed = kmh;
  //   return `${this.driver} driving at ${kmh} kilometers per hour`;
  // };
  // this.stop = function () {
  //   this.speed = 0;
  //   return `${this.driver} has stopped`;
  // };
  // this.loadCargo = function (cargo) {
  //   return this;
  // };

}
Truck.prototype.loadCargo = function (cargo = []) {
  this.cargo = [cargo];
  return this.cargo;
};




Truck.prototype.unloadCargo = function () {
  this.cargo[this.cargo.length - 1];
  return this.cargo.pop();
};


// экспорт Vehicle, Train, Truc в файл с тестами
module.exports = { Vehicle, Train, Truck };

// Функции-конструкторы Train и Truck имеют схожие свойства и поведение.
// Перепишите их так, чтобы избавиться от дублирования одинаковых свойств и методов.
