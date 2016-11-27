var assert = require('assert');
var Player = require('../Player');
var Deck = require('../Deck');

describe('Player', function() {
  describe('#move', function() {
    it('should have two cards after the first move', function() {
      var player = new Player();
      var deck = new Deck();
      console.log('hand: ' + player.hand);
      assert.equal(2, player.move(deck));
    });
  });
});
