//Elemento del arbol dom
const player1 = document.querySelector('.player--0')
const player2 = document.querySelector('.player--1')
const playerActive = document.querySelector('.player--active')
const scorePlayer1 = document.getElementById('score--0')
const scorePlayer2 = document.getElementById('score--1')
const currentScore1 = document.getElementById('current--0')
const currentScore2 = document.getElementById('current--1')
const dice = document.querySelector('.dice')

//funcion para reiniciar valores a 0
document.querySelector('.btn--new').addEventListener('click', function () {
  scorePlayer1.textContent = '0'
  scorePlayer2.textContent = '0'
  currentScore1.textContent = '0'
  currentScore2.textContent = '0'
})

//funcion para ir sumando la puntuacion
function addScore(currentScore) {
  let rndNum = Math.floor(Math.random() * 6) + 1
  let imgDice = `./dice-${rndNum}.png`
  dice.src = imgDice

  currentScore.textContent = Number(currentScore.textContent) + rndNum
}

document.querySelector('.btn--roll').addEventListener('click', function () {
  if (player1.classList.contains(playerActive)) {
    addScore(currentScore1)
  } else {
    addScore(currentScore2)
  }
})

document.querySelector('.btn--hold').addEventListener('click', function () {})
