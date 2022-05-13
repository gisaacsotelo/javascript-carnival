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
let currentBody = document.getElementById('js-body')
let currentShoes = document.getElementById('js-shoes')

// this log below are just to check what is the "default" dressing values
// Testing:
// console.log(currentHead.src) //  default value 3
// console.log(currentBody.src) //  default value 4
// console.log(currentShoes.src) // default value 4
/*
Noticed that all the .src routes end in a similar way:
    eg 
         .../dress-the-clown/images/head3.png
         .../dress-the-clown/images/body4.png
         .../dress-the-clown/images/shoes4.png
the only things that changes are the caracters after ".images/" and before ".png"
so we can exploit that w slice method
will make 3 variables one for the changing outfit (head, body, shoes)
one for the index that is showing, and one for the picture number they all have number from 0-5
*/
// Testing:
// console.log(typeof currentHead.src) // currently string, will slice and parseint to get a number
// console.log(parseInt(currentHead.src.slice(-5, -4))) //this is how I get the index
// console.log(typeof parseInt(currentHead.src.slice(-5, -4))) // now its a number

//^-----------------------------------------------------------------
//^---------------- Global variable declarations
//^-----------------------------------------------------------------
/* 
Ok, 
    so we will need a variable for my current outfit (myPointer),
    this will be a string that will be used to direct the .src address
    an array for the 3 possible outfit changes head, body, shoes (currentAreaSelector)
    a variable for the index to decide which outfit will betargeted 0-2
    an variable for the possible outfits, they all go from 0-5 will use that to limit the changes later, 
*/

let myPointer = '' //defining it as an empty string for now
let currentAreaSelector = ['head', 'body', 'shoes'] // define it as the array w 3 possible selectors
let currentAreaSelectorIndex = 0 // define it as a number variable cero for initializing it
let currentOutfitSelector = 0 // define it as a number variable for now cero

//^-------------- Defaults
/* 
When testing and logging in DOM retrieves we realized our default values were:

  - head3 <<<<<<<< myPointer starts here
  - body4
  - shoes4

These values will define the current value of my pointer, 
also decided default pointer is head since was not defined
so: currentAreaSelectorIndex stays in 0
*/

//console.log(currentAreaSelector[0]) //checking Im recieving the string I want as default - Yup!
currentOutfitSelector = 3 // our default value

myPointer = `./images/${currentAreaSelector[currentAreaSelectorIndex]}${currentOutfitSelector}.png`

// console.log(myPointer) // Testing if got what I wwas expecting - Yup!

//^-----------------------------------
//^------- Event listeners ( ͡° ͜ʖ ͡°)

/* 
todo-------------- Some pseudo:
| Detect arrow keys (reduced from switch to if else)
| When Up || down we change the Iteration target - [0-2] - head,body,shoes
|   - When located on index [3] and arrow up detected restart from 0
|   - When loctaed on index [0] and down detcted go to index [3]
| When right || left detected, we iterate through current array ("Change clothes")
| (these arrays are all 0-5)
|   - When located on index[5] and right detected we move to [0]
|   - When located on index[0] and left detected we move to [5]
*/

/* 
Key codes for the arrows:
After testing event.key is a string that contains the following
ArrowUp
ArrowDown
ArrowRight
ArrowLeft
So we dont need the codes anymore

I used 'keyup' so it only registers a change after you have released the key
avoiding multiple changes for holding keys
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
  - check current index of currentAreaSelector /array
  - if overflow up reset
  - if "underflow" down highest index (5)
*/
//~~~ loopTheArray
let loopTheArray = (pressedArrow) =>
  pressedArrow == 'ArrowLeft' ? moveLeft() : moveRight()

//~~~ moveLeft
function moveLeft() {
  // check the current pointer to see if it will under or overflow
  currentOutfitSelector =
    currentOutfitSelector === 0 ? 5 : --currentOutfitSelector
  myPointer = `./images/${currentAreaSelector[currentAreaSelectorIndex]}${currentOutfitSelector}.png`
  switch (currentAreaSelectorIndex) {
    case 0:
      currentHead.src = myPointer
      break
    case 1:
      currentBody.src = myPointer
      break
    case 2:
      currentShoes.src = myPointer
      break
  }
}
// End moveLeft function

//~~~ moveRight
function moveRight() {
  // check the current pointer to see if it will under or overflow
  currentOutfitSelector =
    currentOutfitSelector === 5 ? 0 : ++currentOutfitSelector
  myPointer = `./images/${currentAreaSelector[currentAreaSelectorIndex]}${currentOutfitSelector}.png`
  switch (currentAreaSelectorIndex) {
    case 0:
      currentHead.src = myPointer
      break
    case 1:
      currentBody.src = myPointer
      break
    case 2:
      currentShoes.src = myPointer
      break
  }
}
// End moveRight function

//~~~ changeIterationTarget
let changeIterationTarget = (pressedArrow) =>
  pressedArrow == 'ArrowUp' ? moveUp() : moveDown()

//~~~ moveUp
function moveUp() {
  currentAreaSelectorIndex =
    currentAreaSelectorIndex === 0 ? 2 : --currentAreaSelectorIndex
}

//~~~ moveDown
function moveDown() {
  currentAreaSelectorIndex =
    currentAreaSelectorIndex === 2 ? 0 : ++currentAreaSelectorIndex
}

/*
! NOTE:
!   So far I have been adding way too many comments I do know that, it is just
!   for now while practicing, I do know that too many comments is a bad code practice too.
!   It is a way to reiterate to myself what Im coding will reduce the amount little by little
*/
