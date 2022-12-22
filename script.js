const totalScore = {
  computerScore: 0,
  playerScore: 0
}

function getComputerChoice() {
  const rpsChoices = ['Rock', 'Paper', 'Scissors']
  let computerChoice = rpsChoices[Math.floor(Math.random() * 3)]
  console.log(computerChoice)
  return computerChoice
}


function getResult(playerChoice, computerChoice) {
  let score;

  if (playerChoice === computerChoice) {
    score = 0

  } else if (playerChoice === 'Rock' && computerChoice === 'Scissors') {
    score = 1
  } else if (playerChoice === 'Scissors' && computerChoice === 'Paper') {
    score = 1
  } else if (playerChoice === 'Paper' && computerChoice === 'Rock') {
    score = 1
  }
  else {
    score = -1
  }

  return score
}

function showResult(score, playerChoice, computerChoice) {

  let result = document.getElementById('result')

  switch (score) {
    case -1:
      result.innerText = 'You Lose!'
      break
    case 0:
      result.innerText = 'Its a tie.'
      break
    case 1:
      result.innerText = 'You Won!'
      break
  }

  let playerScore = document.getElementById('player-score')
  let hands = document.getElementById('hands')
  playerScore.innerText = `Your score: ${totalScore['playerScore']}`
  hands.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`

}


function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice()
  let score = getResult(playerChoice.value, computerChoice)
  totalScore['playerScore'] += score
  totalScore['computerScore'] += score
  console.log(totalScore['computerScore'])
  showResult(score, playerChoice.value, computerChoice)
}





function endGame(totalScore) {
  totalScore['playerScore'] = 0
  totalScore['computerScore'] = 0
  let playerScore = document.getElementById('player-score')
  let hands = document.getElementById('hands')
  let result = document.getElementById('result')
  result.innerText = ''
  hands.innerText = ''
  playerScore.innerText = ''

}

function playGame() {

  let rpsButtons = document.querySelectorAll('.rpsButton')

  rpsButtons.forEach(rpsButton => {
    rpsButton.onclick = () => onClickRPS(rpsButton)
  })


  let endGameButton = document.getElementById('endGameButton')
  endGameButton.onclick = () => endGame(totalScore)
  

}

playGame()
