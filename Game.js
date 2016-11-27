var Player = require('./Player');
function Game() {
  this.player1 = new Player();
  this.dealer = new Player();
  this.deck = new Deck();
}

Game.prototype.start = function() {
  this.player1.move(this.deck);
}
