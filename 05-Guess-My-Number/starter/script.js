'use strict';

/*
// get the text content of a message
console.log(document.querySelector('.message').textContent);
// set the value of a message
console.log(
  (document.querySelector('.message').textContent = 'Correct Number!')
);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

// use .value to get the value of an input field.
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When no number
  if (!guess) {
    displayMessage('🚫 No Number!');
  }
  // When player wins
  else if (guess === secretNumber) {
    displayMessage('🎊 Correct Number!');

    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      console.log(displayMessage('😳 You just lost the game'));
      document.querySelector('.score').textContent = 0;
    }
  }
});

/*
    Implementing the again button. 
*/

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  displayMessage('Start Guessing ...');
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});
