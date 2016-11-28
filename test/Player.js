var assert = require('assert');
var Player = require('../Player');
var Deck = require('../Deck');

describe('Player', function() {
  describe('#hit', function() {
    beforeEach(function() {
      this.player = new Player();
      this.deck = new Deck();
      this.deck.shuffle();
    });
    it('should decrease the size of the deck by 1', function() {
      this.player.hit(this.deck);
      assert.equal(51, this.deck.cards.length);
    });
    it('should increase the size of the hand by 1', function() {
      this.player.hit(this.deck);
      assert.equal(1, this.player.hand.length);
    });
  });
});
