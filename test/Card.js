var assert = require('assert');
var Card = require('../Card');
describe('Card', function() {
  describe('#constructor', function() {
    it('should have a value and a suit', function() {
      var card = new Card(1, 'hearts');
      assert.equal(card.value, 1);
      assert.equal(card.suit, 'hearts');
    })
    it('should have a value equal to 10 when input > 10', function() {
      var card = new Card(11, 'hearts');
      assert.equal(card.value, 10);
    })
  })
})
