var Player = require('./Player');
var Deck = require('./Deck');
function Game() {
  this.player = new Player();
  this.deck = new Deck();
}

Game.prototype.start = function() {
  this.deck.shuffle();
  this.player.hit(this.deck);
  this.player.hit(this.deck);
  this.player.move(this.deck);
}

var game = new Game();
game.start();
