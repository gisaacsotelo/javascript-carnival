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

//^-----------------------------------
//^------- Event listeners ( ͡° ͜ʖ ͡°)

/* 
Key codes for the arrows:
Up: 38
Down: 39
Right: 40
Left: 37
*/
document.addEventListener('keyup', function (event) {
  switch (
    event.keyCode //I think it is depreciated since it is the same thing, but wont dig much since avaoiding rabbits rn
  ) {
    case 37:
      console.log('Pressed Left arrow')
      break
    case 38:
      console.log('Pressed Up arrow')
      break
    case 39:
      console.log('Pressed Down arrow')
      break
    case 40:
      console.log('Pressed Right arrow')
      break
  }
})

/*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~ FUNCTIONS (⌐□_□)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

//~~~ changeClownHead

function loopTheArray() {
  currentHead.src = './images/head2.png'
}

function changeIterationTarget() {}
