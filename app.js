// section 7 start #:
'use strict';
// DOM query selector :
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 correct Number!';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

//handle click#1 :

// #2 :
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
}
// document.querySelector('.number').textContent=number;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is no input:
  if (guess === 0) {
    displayMessage('🚫 No Number!')
  }
   else if(guess !== number){
    if (score > 1) {
      displayMessage(guess > number ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = `${score}`;
    } else {
      displayMessage('💥 you lost the game !');
      document.querySelector('body').style.backgroundColor = 'tomato';
      document.querySelector('.over-game').textContent='!Game Over!'
    }
   }
  //when guess is too low: 
  // else if (guess < number) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 TOO LOW !';
  //     score--;
  //     document.querySelector('.score').textContent = `${score}`;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 you lost the game !';
  //     document.querySelector('body').style.backgroundColor = 'tomato';
  //     document.querySelector('.over-game').textContent='!Game Over!'
  //   }
  // }
  //when guess is too high:
  // else if (guess > number) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 TOO HIGH !';
  //     score--;
  //     document.querySelector('.score').textContent = `${score}`;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 you lost the game !';
  //     document.querySelector('body').style.backgroundColor = 'tomato';
  //     document.querySelector('.over-game').textContent='!Game Over!'
  //   }
  // }
  // when player wins:
  else {
    displayMessage('🎉 correct Number');
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').textContent = number;
    // document.querySelector('.number').style.fontSize ='8em';
    document.querySelector('.number').style.width = '30rem';
    if(score > highScore){
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  score = 20;
  document.querySelector('.over-game').textContent='Guess My Number!'
  document.querySelector('.score').textContent = `${score}`;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  number = Math.trunc(Math.random() * 20) + 1;
});
