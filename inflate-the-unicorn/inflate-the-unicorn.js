// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')
// ^------------------------------
// ^ --- locating DOM elemnts
// ^------------------------------

let unicorns = document.getElementsByTagName('img')
console.log(unicorns)

//?------- Variables

let counter = [0, 0, 0]
const images = []

for (let i = 0; i < 4; i++) {
  images.push(`./images/unicorn-${i}.png`)
}

console.log(images)
// ^------------------------------
// ^ --- Event listener
// ^------------------------------

for (let i = 0; i < unicorns.length; i++) {
  unicorns[i].addEventListener('click', clickOnUnicorn)
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~ FUNCTIONS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// ~~~~~ clickOnUnicorn ()
function clickOnUnicorn(e) {
  console.log(e.target.id)
  switch (e.target.id) {
    case 'js-unicorn-1':
      counter[0]++
      inflate(e.target, counter[0])
      break
    case 'js-unicorn-2':
      counter[1]++
      inflate(e.target, counter[1])
      break
    case 'js-unicorn-3':
      counter[2]++
      inflate(e.target, counter[2])
      break
  }
}

// ~~~~~ inflate ()
function inflate(unicorn, index) {
  if (index < 4) {
    console.log(`inflating`)
    unicorn.src = images[index]
  } else {
    console.log('Its full')
    alert(`The unicorn number: ${unicorn.id.slice(-1)} says:\n MUCHAS GRACIAS!`)
  }
}
