var shoppingItem = require( './shopping_item' );

var shoppingBasket = {
  items: [],
  loyaltyCard: true,
  add: function(item){
    this.items.push(item);
  },


  remove: function(item){
    for (i in this.items){
      if (this.items[i].name == item.name){
        this.items.splice(i);
        return;
      }
    }
  },

  empty: function(){
    this.items = [];
  },

  total: function(){
    var total = 0;
    for (var shoppingItem of this.items){
      total += shoppingItem.price;
    }
    if (total > 20){
      total = total - (total/10);
  }
  return total
  },

  loyaltyDiscount: function(discount){
    var cost = this.total(); 
    if (this.loyaltyCard === true){
      cost = cost - (cost/discount);
    }
    return cost;
  },

// the below function now does all the calculations as you need to apply bogofs first, before the other discounts. So could refactor to pull the other two discounts out of these and have it so you pass in the discount so it would be more easily updated.

  applyBogof: function(){
    var price = 0;
    var bogofItems = [];
    for (var shoppingItem of this.items){
      // if an item is not in an array the indexOf method will return -1
      if ((shoppingItem.bogof === true) && (bogofItems.indexOf(shoppingItem) >= 0 )){
        var index = bogofItems.indexOf(shoppingItem);
        bogofItems.splice(index);
      }
      else if (shoppingItem.bogof === true){
        bogofItems.push(shoppingItem);
        price += shoppingItem.price;
      }
      else {
        price += shoppingItem.price;
      }
    }
    if (price > 20){
      price = price - (price/10);
    }
    if (this.loyaltyCard === true){
      price = price - (price/20);
    }
    return price;
  }


}





module.exports = shoppingBasket;
