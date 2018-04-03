var ShoppingBasket = function(){
  this.items = [];
};

ShoppingBasket.prototype.addItem = function (item) {
  this.items.push(item);
};

ShoppingBasket.prototype.removeItem = function (item) {

  // var found = this.items.find(function(element) {
  //   return element === item;
  // });
  //
  // this.items = this.items.filter(item => item === found);

  this.items.pop();
};

ShoppingBasket.prototype.calculateTotal = function () {
  let total = 0;
  for (let item of this.items) {
    total += item.price;
  }
  return total;
};

module.exports = ShoppingBasket;
