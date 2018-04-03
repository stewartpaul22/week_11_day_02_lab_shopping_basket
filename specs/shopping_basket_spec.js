var assert = require('assert');
var ShoppingBasket = require('../shopping_basket.js');
var Item = require('../item.js');

describe('Shopping Basket', function(){

// 10% discount for all shopping baskets over £20
// If the customer has a valid discount card then they get an additional 5% off.
// Extension (hard!) Add the ability to have buy one get one free items.

  var shopping_basket;
  var item1;
  var item2;

  beforeEach(function(){
    shopping_basket = new ShoppingBasket();
    item1 = new Item('Quorn Flakes', 2.99, true);
    item2 = new Item('Orange Juice', 3.19, false);
  });

  it('basket begins empty', function(){
    assert.strictEqual(shopping_basket.items.length, 0);
  });

  it('can add item to basket', function(){
    shopping_basket.addItem(item1);
    shopping_basket.addItem(item2);
    assert.strictEqual(shopping_basket.items.length, 2);
  });

  it('can remove item from basket', function(){
    shopping_basket.addItem(item1);
    shopping_basket.removeItem(item1);
    assert.strictEqual(shopping_basket.items.length, 0);
  });

  it('can calculate total cost of basket', function(){
    shopping_basket.addItem(item1);
    shopping_basket.addItem(item2);
    assert.strictEqual(shopping_basket.calculateTotal(), 6.18);
  });

});
