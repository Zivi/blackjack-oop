var Deck = require('./Deck');
var readlineSync = require('readline-sync');

function Player() {
  this.hand = [];
}

Player.prototype.move = function(deck) {
  var moveChoices = ['hit', 'stay'];
  if (this.hand.length === 0) {
    this.hit(deck);
    this.hit(deck);
    console.log('your hand is: ' + this.hand[0].value + ' ' + this.hand[1].value);
  } else {
    var playerItems = '';
    var playerScore = 0;
    this.hand.forEach(function(card) {
      playerItems += card.value + ' of  ' + card.suit + ' ';
      playerScore += parseInt(card.value);
    })
    if (playerScore < 21) {
      var move = readlineSync.keyInSelect(
        moveChoices,
        'Your hand is: ' + playerItems + ' ' + ' your score is: ' + playerScore +
        ', would you like to hit or stay?');
      if (move === 0) {
        this.hit(deck);
        this.move(deck);
      } else if (move === 1) {
        console.log('Player stays: ' + this.hand.toString());
      }
    } else if (playerScore === 21) {
      console.log('your score is 21, you win');
    } else { // score is > 21
      console.log('your score is: ' + playerScore + ' you lose');
    }
  }
  return this.hand.length;
}

Player.prototype.hit = function(deck) {
  this.hand.push(deck.draw());
}

module.exports = Player;

var player = new Player();
var deck = new Deck()
deck.shuffle();
player.move(deck);
player.move(deck);
