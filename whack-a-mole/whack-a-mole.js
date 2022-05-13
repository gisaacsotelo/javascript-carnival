// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

//// - The ability to store or get references to the cells in the HTML table.
// - A function to randomly select which cell should show the mole.
// - A way to show a mole in the chosen cell.

let cells = document.getElementsByTagName('td')
console.log(cells)

let randomizer = 0

let randomNumber = () => Math.floor(Math.random() * 26)
