// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
console.log('Dress The Clown!')
/* 
^---------------------------------
^---------- DOM retrieves
^---------------------------------
*/

let currentHead = document.getElementById('js-head')
let currentBody = document.getElementById('js-head')
let currentShoes = document.getElementById('js-head')

//------------- Global variable declarations

let allHeads = []
let allBodies = []
let allShoes = []
console.log(allHeads)
//-------------- Defaults
/*
head defaults:
Just practicing loops and pushing can be also declared directly will do that with bodies
'i' starts in 1 and goes to 5 since there are only 5 images for head -  so goes from 1-5
*/

for (let i = 1; i <= 5; i++) {
  allHeads.push(`./images/head${i}.png`)
  console.log(allHeads[i - 1], typeof allHeads[i - 1])
}
console.log(allHeads)

changeClownHead()

/*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~ FUNCTIONS 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

//~~~ changeClownHead

function changeClownHead() {
  currentHead.src = './images/head2.png'
}
