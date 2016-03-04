// ;(function () {
//   console.log('hey')

let array = []
let counter = 0
let mark = 'x'

// sets up game and add event listener
function startGame () {
  array = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  board.addEventListener('click', makeMove)
  message.innerHTML = "x starts"
  for (let i = 0; i < array.length; i++) {
    document.getElementById(`${i}`).innerHTML = '&nbsp;'
  }
}

// check to see if a winning move has been made
function winCheck (array) {
  return  (array[0] === array[1] && array[1] === array[2]) ||
          (array[0] === array[4] && array[4] === array[8]) ||
          (array[0] === array[3] && array[3] === array[6]) ||
          (array[1] === array[4] && array[4] === array[7]) ||
          (array[2] === array[5] && array[5] === array[8]) ||
          (array[3] === array[4] && array[4] === array[5]) ||
          (array[6] === array[7] && array[7] === array[8]) ||
          (array[2] === array[4] && array[4] === array[6])
          ? true : false
}

// make a move
function makeMove () {
  console.log("counter", counter)
  let turn
// check whose move it is based on the counter and tell them
  counter % 2 === 0 ? (mark = 'x', turn = 'o') : (mark = 'o', turn ='x')
  message.innerHTML = `${turn}'s turn`
// if the space is already taken, alert user
  if (array[event.target.id] === 'x' || array[event.target.id] === 'o') {
    message.innerHTML = 'Pick a different space'
  } else {
// get the space array index from DOM
    const space = document.getElementById(event.target.id)
// visually mark it
    space.innerHTML = mark
// add it to array
    array[event.target.id] = mark
// check win conditions and end or increment counter
    winCheck(array) === true ? endGame() : counter++
    if (winCheck(array) === false && counter === 9) {
      tieGame()
    }
  }
}

// end game and remove event listener
function endGame() {
  counter % 2 === 0 ? mark = 'x' : mark = 'o'
  message.innerHTML = `${mark} won!`
  board.removeEventListener('click', makeMove)
}

// tie
function tieGame () {
  message.innerHTML = `It's a tie!`
  board.removeEventListener('click', makeMove)
}

// click
const form = document.querySelector('form')
const board = document.querySelector('table')
const message = document.querySelector('#message')
// board.addEventListener('click', makeMove)

// start new game
form.addEventListener('submit', () => {
  // const chat = {name: name.value, text: text.value}
  console.log('new game')
  // ws.emit('sendChat', chat) // before because displayChat resets text.value
  startGame()
  event.preventDefault()
})

// })();

