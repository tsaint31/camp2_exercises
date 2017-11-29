const car = require("../02_car");

test("should display distance when we don't change the speed", () => {
  logger = jest.fn();
  console.log = logger;

  car.start().changeSpeed(130).drive(45).showDistance();

  expect(logger).toHaveBeenCalledWith("97.5 Km");
});

test("should display the correct distance when we change the speed", () => {
  logger = jest.fn();
  console.log = logger;

  car
    .start()
    .changeSpeed(130).drive(45)
    .changeSpeed(50).drive(30)
    .changeSpeed(90).drive(80)
    .showDistance();

  expect(logger).toHaveBeenCalledWith("242.5 Km");
});

test("should be able to restart a car", () => {
  logger = jest.fn();
  console.log = logger;

  car
    .start()
    .changeSpeed(130).drive(45)
    .changeSpeed(50).drive(30)
    .start()
    .changeSpeed(90).drive(80)
    .showDistance();

  expect(logger).toHaveBeenCalledWith("120 Km");
});
