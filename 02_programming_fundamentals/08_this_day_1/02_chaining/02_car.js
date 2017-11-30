// See Sparta courses for the exercise summary



const car = {
  speed_car: 0,
  minutes_drive: 0,
  distance_drive: 0,
  start: function() {
    this.speed_car=0;
    this.minutes_drive=0;
    this.distance_drive=0;
    return this;
  },
  changeSpeed: function(speed) {
    this.speed_car=speed;
    return this;
  },
  drive: function(minutes) {
    this.minutes_drive=minutes;
    this.distance_drive=this.distance_drive+(this.minutes_drive*this.speed_car)/60;
    return this;
  },
  showDistance: function() {
    // this.distance_drive=(this.minutes_drive*this.speed_car)/60;
    console.log(`${this.distance_drive} Km`);
    return `${this.distance_drive} Km`;
  },
};

car
  .start()
  .changeSpeed(130).drive(45)
  .changeSpeed(50).drive(30)
  .changeSpeed(90).drive(80).showDistance();

module.exports = car;
