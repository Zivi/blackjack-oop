var assert = require('assert');
var Deck = require('../Deck');
describe('Deck', function() {
  describe('#constructor', function() {
    it('should have a length of 52', function() {
      var deck = new Deck();
      assert.equal(deck.cards.length, 52);
    });
    it('should have a first card with value 1 and suit spades', function() {
      var deck = new Deck();
      assert.deepEqual(deck.cards[0], {value: 1, suit: 'spades' });
    });
    it('should have a last card with value 10 and suit diamonds', function() {
      var deck = new Deck();
      assert.deepEqual(deck.cards[51], {value: 10, suit: 'diamonds' });
    });
  });
  describe('#shuffle', function() {
    it('should have the cards in different positions', function() {
      var deck = new Deck();
      var cardsBefore = deck.cards;
      deck.shuffle();
      assert.notDeepEqual(cardsBefore, deck.cards);
    });
  });
  describe('#draw', function() {
    it('should remove the last card from deck', function() {
      var deck = new Deck();
      var drawnCard = deck.cards[deck.cards.length - 1];
      assert.equal(drawnCard, deck.draw());
    });
  });
});
