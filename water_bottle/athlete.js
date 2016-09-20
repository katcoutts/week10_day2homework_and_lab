var bottle = require('./water_bottle');

var athlete = {
  name: "Mo",
  hydration: 100,
  distanceCovered: 0,
  waterBottle: bottle,
  run: function(){
    if (this.hydration >= 10){
    this.distanceCovered += 5;
    this.hydration -= 10;
    }
  },
  runDistance: function(distance){
    if ((distance * 2) <= this.hydration){
      this.distanceCovered += distance;
      this.hydration -= (distance * 2);
    }
  },
  drink: function(){
    if (this.waterBottle.volume > 10){
    this.waterBottle.drunk();
    this.hydration += 10;}
  }
}

module.exports = athlete;