var Card = require('./Card');
var suits = ['spades', 'clubs', 'hearts', 'diamonds'];
function Deck() {
  this.cards = [];
  for (var i = 0; i < 52; i += 1) {
    var value = i % 13 + 1;
    var j = Math.floor(i / 13);
    this.cards.push(new Card(value, suits[j]));
  }
}
module.exports = Deck;
