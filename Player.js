var Deck = require('./Deck');
var readlineSync = require('readline-sync');

function Player() {
  this.hand = [];
}

Player.prototype.move = function(deck) {
  var moveChoices = ['hit', 'stay'];
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

Player.prototype.hit = function(deck) {
  this.hand.push(deck.draw());
}

module.exports = Player;
