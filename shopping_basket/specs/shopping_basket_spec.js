var shoppingBasket = require( '../shopping_basket' );
var shoppingItem = require( '../shopping_item' );
var assert = require( 'assert' );

describe( "Shopping Basket", function() {

  beforeEach(function(){
    shoppingBasket.empty();
  })

  it("should start empty", function(){
    assert.equal(0, shoppingBasket.items.length);
  })

  it("should be able to add items", function(){
    shoppingBasket.add(shoppingItem.pasta);
    assert.equal(1, shoppingBasket.items.length);
  })

  it("should be able to remove an item", function(){
    shoppingBasket.add(shoppingItem.pasta);
    shoppingBasket.remove(shoppingItem.pasta);
    assert.equal(0, shoppingBasket.items.length);
  })

  it("should be able to hold multiple items", function(){
    shoppingBasket.add(shoppingItem.pasta);
    shoppingBasket.add(shoppingItem.pasta);
    assert.equal(2, shoppingBasket.items.length);
  })

  it("item has a price", function(){
    assert.equal(1.50, shoppingItem.pasta.price);
  })

  it("should be able to get shopping value", function(){
    shoppingBasket.add(shoppingItem.pasta);
    shoppingBasket.add(shoppingItem.pasta);
    assert.equal(3, shoppingBasket.total());
  })

  it("should be able to add different products", function(){
    shoppingBasket.add(shoppingItem.pasta);
    shoppingBasket.add(shoppingItem.pasta);
    shoppingBasket.add(shoppingItem.chocolate);
    assert.equal(4, shoppingBasket.total());
  })

  it("can apply discount if over 20", function(){
    shoppingBasket.add(shoppingItem.pasta);
    shoppingBasket.add(shoppingItem.pasta);
    shoppingBasket.add(shoppingItem.chocolate);
    shoppingBasket.add(shoppingItem.caviar);
    assert.equal(18.9, shoppingBasket.total());
  })

  it("can apply all discounts", function(){
    shoppingBasket.add(shoppingItem.pasta);
    shoppingBasket.add(shoppingItem.pasta);
    shoppingBasket.add(shoppingItem.pasta);
    shoppingBasket.add(shoppingItem.chocolate);
    shoppingBasket.add(shoppingItem.caviar);
    assert.equal(17.955, shoppingBasket.finalPrice());
  })

  it("can apply bogof, over 20 discount and loyalty card", function(){
    shoppingBasket.add(shoppingItem.pasta);
    shoppingBasket.add(shoppingItem.pasta);
    shoppingBasket.add(shoppingItem.chocolate);
    shoppingBasket.add(shoppingItem.caviar);
    assert.equal(18.525, shoppingBasket.finalPrice());
  })

})