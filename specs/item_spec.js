var assert = require('assert');
var Item = require('../item.js');

describe('Item', function(){

  var item1;
  var item2;

  beforeEach(function(){
    item1 = new Item('Quorn Flakes', 2.99, true);
    item2 = new Item('Orange Juice', 3.19, false);
  });

  it('items should have a name', function(){
    assert.strictEqual(item1.name, 'Quorn Flakes');
  });

  it('items should have a price', function(){
    assert.strictEqual(item1.price, 2.99);
  });

  it('item can be eligible for bogof', function(){
    assert.strictEqual(item1.bogof, true);
  });

});
