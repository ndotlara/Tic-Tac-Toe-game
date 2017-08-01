'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')

//create an `X` and an `O` marker
const playerOne = "X"
const playerTwo = "O"
// const currentPlayer = // do I need?

//create an event click-handler that places an X where clicked,
// then, toggles to place an O in new box that is clicked - changing players
// Create a function where if X=true or O=true, cannot click to replace marker
// set up an event listener that identifies when a box is clicked
// reset game board to play new game

//what's the winning game logic/code?
// what's the tie-game logic/code?
