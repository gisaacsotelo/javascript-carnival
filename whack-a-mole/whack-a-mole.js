// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

//// - The ability to store or get references to the cells in the HTML table.
//// - A function to randomly select which cell should show the mole.
//// - A way to show a mole in the chosen cell.

//get from dom
let cells = document.getElementsByTagName('td')
console.log(cells[0].style.width)

//creating an img element for our picture
let mole = document.createElement('img')
//setting desired image and height
mole.src = 'mole.PNG'

//checkign how tall to make the image:
/*
this is just in case they decide to change the cell sizes after, to avoid 
changing this code tool, otherwise you can just check the css and go with 
73px or something similar
*/
let newHeigth = cells[0].offsetHeight //I think this number includes padding and border and all that
//to play it safe will just do an 90% of this
newHeigth = Math.floor(newHeigth * 0.9)
newHeigth = `${newHeigth}px`
mole.style.width = newHeigth

//get mole in a random cell - initislizing this one get used once only
cells[Math.floor(Math.random() * 25)].appendChild(mole)
console.log(mole)

// event listener
mole.addEventListener('click', changeMole)

// audio
var audio = new Audio()
audio.src = 'whack-audio.wav'

//functions

//randomizer between 0-24
function giveMeARandom() {
  randomNumber = Math.floor(Math.random() * 25)
  return randomNumber
}

function changeMole() {
  console.log('got clicks')
  audio.play()
  let randomNumber = giveMeARandom()
  cells[randomNumber].appendChild(mole)
}
