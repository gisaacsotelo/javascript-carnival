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
let currentChangingArray = ['head', 'body', 'shoes']

//-------------- Defaults
/*
Just practicing loops and pushing can be also declared directly, but DRY
'i' starts in 0 and goes to 5 since there are only 6 images for head/body/shoes -  so goes from 0-5
*/
for (let i = 0; i <= 5; i++) {
  allHeads.push(`./images/head${i}.png`)
  allBodies.push(`./images/body${i}.png`)
  allShoes.push(`./images/shoes${i}.png`)
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
