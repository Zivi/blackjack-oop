var Card = require('./Card');
var suits = ['spades', 'clubs', 'hearts', 'diamonds'];
var _ = require('lodash');
function Deck() {
  this.cards = [];
  for (var i = 0; i < 52; i += 1) {
    var value = i % 13 + 1;
    var j = Math.floor(i / 13);
    this.cards.push(new Card(value, suits[j]));
  }
}
Deck.prototype.shuffle = function() {
  this.cards = _.shuffle(this.cards);
}

Deck.prototype.draw = function() {
  return this.cards.pop();
}
module.exports = Deck;
