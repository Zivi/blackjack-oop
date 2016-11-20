function Card(value, suit) {
  this.value = value > 10 ? 10 : value;
  this.suit = suit;
}
module.exports = Card;
