// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
console.log('Dress The Clown!')
/* 
^---------------------------------
^---------- DOM retrieves (͠≖ ͜ʖ͠≖)
^---------------------------------
*/

let currentHead = document.getElementById('js-head')
let currentBody = document.getElementById('js-head')
let currentShoes = document.getElementById('js-head')

console.log(currentHead.src)
console.log(typeof currentHead.src)
console.log(currentHead.src.slice(-9))

/* 
slice: 
  all heads have last strings 'headx.png' = 9 so -9 to slice the last 9 digits
*/

//------------- Global variable declarations

let allHeads = []
let allBodies = []
let allShoes = []
let ChangingArray = ['head', 'body', 'shoes']
let currentArrayIndex = 0

//-------------- Defaults
/*
Just practicing loops and pushing can be also declared directly, but DRY
'i' starts in 0 and goes to 5 since there are only 6 images for head/body/shoes -  so goes from 0-5
*/
for (let i = 0; i <= 5; i++) {
  allHeads.push(`./images/${ChangingArray[0]}${i}.png`)
  allBodies.push(`./images/${ChangingArray[1]}${i}.png`)
  allShoes.push(`./images/${ChangingArray[2]}${i}.png`)
}

console.log(allHeads)

//^-----------------------------------
//^------- Event listeners ( ͡° ͜ʖ ͡°)

/* 
todo-------------- Some pseudo:
| Detect arrow keys (reduced from switch to if else)
todo: When Up || down we change the Iteration target - [0-2] - head,body,shoes
todo:   - When located on index [3] and arrow up detected restart from 0
todo:   - When loctaed on index [0] and down detcted go to index [3]
todo: When right || left detected, we iterate through current array ("Change clothes")
todo: (these arrays are all 0-5)
todo:   - When located on index[5] and right detected we move to [0]
todo:   - When located on index[0] and left detected we move to [5]
*/

/* 
Key codes for the arrows:
After testing event.key is a string that contains the following
ArrowUp
ArrowDown
ArrowRight
ArrowLeft
So we dont need the codes anymore
*/

document.addEventListener('keyup', function (event) {
  if (event.key == 'ArrowLeft' || event.key == 'ArrowRight') {
    loopTheArray(event.key)
  } else if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
    changeIterationTarget(event.key)
  }
})

/*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~ FUNCTIONS (⌐□_□)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

/* 
  Pseudo:
  - Check if it was left/up or right/down
  - check current index of current clothing /array
  - if overflow up reset
  - if "underflow" down highest index / try .lastchild
*/
//~~~ loopTheArray
let loopTheArray = (pressedArrow) =>
  pressedArrow == 'ArrowLeft' ? moveLeft() : moveRight()

//~~~ moveLeft
function moveLeft() {
  currentArrayIndex = parseInt(currentHead.src.slice(-5, -4))
  // console.log(currentArrayIndex, typeof currentArrayIndex)
  // 0-5
  currentArrayIndex = currentArrayIndex === 0 ? 5 : --currentArrayIndex
  console.log(currentArrayIndex, typeof currentArrayIndex)
  currentHead.src = `./images/${ChangingArray[0]}${currentArrayIndex}.png`
}

//~~~ moveRight
function moveRight() {
  currentArrayIndex = parseInt(currentHead.src.slice(-5, -4))
  // console.log(currentArrayIndex, typeof currentArrayIndex)
  // 0-5
  currentArrayIndex = currentArrayIndex === 5 ? 0 : ++currentArrayIndex
  console.log(currentArrayIndex, typeof currentArrayIndex)
  currentHead.src = `./images/${ChangingArray[0]}${currentArrayIndex}.png`
}

//~~~ hangeIterationTarget
function changeIterationTarget(pressedArrow) {
  console.log(pressedArrow)
}

/*
! NOTE:
!   So far I have been adding way to many comments I do know that, it is just
!   for now while practicing, I do know that too many comments is a bad code practice too.
!   It is a way to reiterate to myself what Im coding will reduce the amount little by little
*/
