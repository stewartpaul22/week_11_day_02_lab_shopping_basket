var assert = require('assert');
var ShoppingBasket = require('../shopping_basket.js');
var Item = require('../item.js');

describe('Shopping Basket', function(){

// Extension (hard!) Add the ability to have buy one get one free items.

  var shopping_basket;
  var shopping_basket2;
  var item1;
  var item2;

  beforeEach(function(){
    shopping_basket = new ShoppingBasket(true);
    shopping_basket2 = new ShoppingBasket(false);
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

  it('apply 10% discount for baskets over £20', function(){
    // arrange: add item1 x 20 = £59.80
    for (var i = 0; i < 20; i++) {
      shopping_basket2.addItem(item1);
    };
    assert.strictEqual(shopping_basket2.calculateTotal(), 53.82);
  });

  it('apply 10% discount for baskets over £20 and cust has 5% discount card', function(){
    // arrange: add item1 x 20 = £59.80
    for (var i = 0; i < 20; i++) {
      shopping_basket.addItem(item1);
    };
    assert.strictEqual(shopping_basket.calculateTotal(), 50.83);
  });

});
