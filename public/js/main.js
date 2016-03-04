// ;(function () {
//   console.log('hey')

let array
let counter

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
  function makeMove (space) {
    let mark
    counter % 2 === 0 ? mark = 'x' : mark = 'o'
  }
// })();

