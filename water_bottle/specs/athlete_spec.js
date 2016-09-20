var bottle = require('../water_bottle');
var assert = require( 'assert' );
var athlete = require('../athlete');

describe("Athlete", function(){


  it("should start hydrated", function(){
    assert.equal( 100, athlete.hydration );
  })

  it("should increase distance when runs", function(){
    athlete.run();
    assert.equal(5, athlete.distanceCovered);
  })

  it("should decrease hydration when runs", function(){
    assert(90, athlete.hydration);
  })

  it("can't run if not hydrated enough", function(){
    athlete.hydration = 5;
    athlete.run();
    assert.equal(5, athlete.distanceCovered);
  })

  it("can rehydrate by drinking", function(){
    athlete.waterBottle.fill();
    athlete.drink();
    assert.equal(15, athlete.hydration);
  })

  it("water comes out of water bottle when athlete drinks", function(){
    assert.equal(90, athlete.waterBottle.volume);
  })

  it("can't drink if no water", function(){
    athlete.waterBottle.empty();
    athlete.drink();
    assert.equal(15, athlete.hydration);
  })

  it("can run particular distance if hydrated enough", function(){
    athlete.waterBottle.fill();
    athlete.drink();
    assert.equal(25, athlete.hydration);
    athlete.runDistance(10);
    assert.equal(15, athlete.distanceCovered);
    assert.equal(5, athlete.hydration);
  })

})