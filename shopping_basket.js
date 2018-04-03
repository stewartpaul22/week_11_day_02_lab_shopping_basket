var ShoppingBasket = function(discountCard){
  this.items = [];
  this.discountCard = discountCard;
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
  if((total > 20.00) && (this.discountCard === true)){
    return parseFloat((total.toFixed(2))* 0.85);
  } else if (total > 20.00){
    return parseFloat((total.toFixed(2))* 0.9);
  }
  return parseFloat(total.toFixed(2));
};

module.exports = ShoppingBasket;
