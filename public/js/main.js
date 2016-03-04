// ;(function () {
//   console.log('hey')

let array
let counter = 0
let mark = 'x'

// sets up game
function startGame () {
  array = [0, 1, 2, 3, 4, 5, 6, 7, 8]
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
          ? "somebody won" : "keep going"
}

// make a move
function makeMove () {
  // console.log('click')
  let mark
  counter % 2 === 0 ? mark = 'x' : mark = 'o'
  console.log(event.target.id)
  const space = document.getElementById(event.target.id)
  // console.log(space)
  space.innerHTML = mark
  array[event.target.id] = mark
  winCheck(array)
  counter += 1
}

// click
const form = document.querySelector('form')
const board = document.querySelector('table')
board.addEventListener('click', makeMove)

// start new game
form.addEventListener('submit', () => {
  // const chat = {name: name.value, text: text.value}
  console.log('new game')
  // ws.emit('sendChat', chat) // before because displayChat resets text.value
  startGame()
  event.preventDefault()
})

// })();

