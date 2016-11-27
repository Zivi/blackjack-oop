function Card(value, suit) {
  this.value = value > 10 ? 10 : value;
  this.suit = suit;
}
Card.prototype.toString = function() {
  return this.value + " of " + this.suit;
}
module.exports = Card;
