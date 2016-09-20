var bottle = require('../water_bottle');
var assert = require( 'assert' );


describe("Water Bottle", function(){

  beforeEach(function(){
    bottle.empty();
  })

  it("should be empty", function(){
    assert.equal( 0, bottle.volume );
  })

  it("should go to 100 when filled", function(){
    bottle.fill();
    assert.equal(100, bottle.volume);
  })

  it("should go by 10 when drunk", function(){
    bottle.fill();
    bottle.drunk();
    assert.equal(90, bottle.volume);
  })

  it("should go to 0 when emptied", function(){
    bottle.fill();
    bottle.empty();
    assert.equal(0, bottle.volume);
  })

  it("volume should not go below zero", function(){
    bottle.drunk();
    assert.equal(0, bottle.volume);
  })


})




// 5. should not be able to go below 0
