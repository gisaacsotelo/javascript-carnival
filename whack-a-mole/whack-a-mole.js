// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
console.log('Whack-a-Mole!')

//Variables

let cells = document.getElementsByTagName('td')
let mole = document.createElement('img')
let audio = new Audio()

//defaults
mole.src = 'mole.PNG'
audio.src = 'whack-audio.wav'

//checkign how tall to make the image:
let newHeigth = cells[0].offsetHeight
newHeigth = Math.floor(newHeigth * 0.9)
newHeigth = `${newHeigth}px`
mole.style.width = newHeigth

//get mole in a random cell - initislizing this one get used once only
cells[Math.floor(Math.random() * 25)].appendChild(mole)

// event listener
mole.addEventListener('click', changeMole)

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
