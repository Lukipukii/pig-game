//Elemento del arbol dom
const player1 = document.querySelector('.player--0')
const player2 = document.querySelector('.player--1')
const scorePlayer1 = document.getElementById('score--0')
const scorePlayer2 = document.getElementById('score--1')
const currentScore1 = document.getElementById('current--0')
const currentScore2 = document.getElementById('current--1')
const dice = document.querySelector('.dice')

//evento para reiniciar valores a 0 y poner jugador 1 activo
document.querySelector('.btn--new').addEventListener('click', function () {
  scorePlayer1.textContent = '0'
  scorePlayer2.textContent = '0'
  currentScore1.textContent = '0'
  currentScore2.textContent = '0'
  if (!player1.classList.contains('player--active')) {
    changeActivePlayer()
  }
  enableButtons()
})

//funcion para ir sumando la puntuacion
function addScore(currentScore) {
  let rndNum = Math.floor(Math.random() * 6) + 1
  let imgDice = `./dice-${rndNum}.png`
  dice.src = imgDice
  if (rndNum == 1) {
    currentScore.textContent = 0
    changeActivePlayer()
  } else {
    currentScore.textContent = Number(currentScore.textContent) + rndNum
  }
}

//funcion para cambiar jugador activo
function changeActivePlayer() {
  player1.classList.toggle('player--active')
  player2.classList.toggle('player--active')
}

//evento de ir sumando las tiradas
document.querySelector('.btn--roll').addEventListener('click', function () {
  if (player1.classList.contains('player--active')) {
    addScore(currentScore1)
  } else {
    addScore(currentScore2)
  }
})

//evento terminar turno
document.querySelector('.btn--hold').addEventListener('click', function () {
  if (player1.classList.contains('player--active')) {
    scorePlayer1.textContent =
      Number(scorePlayer1.textContent) + Number(currentScore1.textContent)
    currentScore1.textContent = 0
    if (Number(scorePlayer1.textContent) >= 100) {
      document.getElementById('name--0').textContent = 'WINNER'
      dissableButtons()
    } else {
      changeActivePlayer()
    }
  } else {
    scorePlayer2.textContent =
      Number(scorePlayer2.textContent) + Number(currentScore2.textContent)
    currentScore2.textContent = 0
    if (Number(scorePlayer2.textContent) >= 100) {
      document.getElementById('name--1').textContent = 'WINNER'
      dissableButtons()
    } else {
      changeActivePlayer()
    }
  }
})

//funcion descativar botones
function dissableButtons() {
  document.querySelector('.btn--roll').disabled = true
  document.querySelector('.btn--hold').disabled = true
}
//funcion activar botones
function enableButtons() {
  document.querySelector('.btn--roll').disabled = false
  document.querySelector('.btn--hold').disabled = false
}
