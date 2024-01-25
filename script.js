const scorePlayer1 = document.getElementById('score--0')
const scorePlayer2 = document.getElementById('score--1')
const currentScore1 = document.getElementById('current--0')
const currentScore2 = document.getElementById('current--1')
const dice = document.querySelector('.dice')

document.querySelector('.btn--new').addEventListener('click', function () {
  scorePlayer1.textContent = '0'
  scorePlayer2.textContent = '0'
  currentScore1.textContent = '0'
  currentScore2.textContent = '0'
})

/*
document.querySelector('.btn--roll').addEventListener('click', function () {
  const isPlayerActive = player.classList.contains('.player--active')
  if(document.querySelector('.player--0').isPlayerActive) {

  } else {

  }
  

  let rndNumber = Math.floor(Math.random() * 6) + 1
  let diceSrc = `./dice-${rndNumber}.png`
  dice.src = diceSrc
  currentScore += rndNumber
  
})

document.querySelector('.btn--hold').addEventListener('click', function () {
})
*/
