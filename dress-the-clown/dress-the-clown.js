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
  allHeads.push(`./images/${currentChangingArray[0]}${i}.png`)
  allBodies.push(`./images/${currentChangingArray[1]}${i}.png`)
  allShoes.push(`./images/${currentChangingArray[2]}${i}.png`)
}

//^-----------------------------------
//^------- Event listeners ( ͡° ͜ʖ ͡°)

/* 
todo-------------- Some pseudo:
| Detect arrow keys
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
Up: 38
Down: 39
Right: 40
Left: 37
*/

document.addEventListener('keyup', function (event) {
  console.log(event.key)
  if (event.key === 37 || event.key === 40) {
    console.log(event.key)
  } else if (event.key === 38 || event.key === 39) {
    console.log(event.key)
  }
})

/*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~ FUNCTIONS (⌐□_□)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

//~~~ changeClownHead

function loopTheArray(pressedArrow) {
  console.log(pressedArrow)
  // currentHead.src = './images/head2.png'
}

function changeIterationTarget(pressedArrow) {
  console.log(pressedArrow)
}
