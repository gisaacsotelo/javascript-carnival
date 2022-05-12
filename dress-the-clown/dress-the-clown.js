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

//-------------- Defaults
/*
head defaults:
Just practicing loops and pushing can be also declared directly, but DRY
'i' starts in 1 and goes to 5 since there are only 5 images for head -  so goes from 1-5
*/
for (let i = 1; i <= 5; i++) {
  allHeads.push(`./images/head${i}.png`)
  allBodies.push(`./images/head${i}.png`)
  allShoes.push(`./images/head${i}.png`)
}

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
