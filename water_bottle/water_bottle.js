var waterBottle = {
  volume: 0,
  fill: function(){
    this.volume = 100;
  },
  drunk: function(){
    if (this.volume >= 10){
    this.volume -= 10;}
    else {
      this.empty();
    }
  },
  empty: function(){
    this.volume = 0;
  }
};

module.exports = waterBottle;