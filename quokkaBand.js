let bandNumber = 1

const takeNumber = function (bandName) {
    return `${bandNumber++}. ${bandName}`
}

const scum = takeNumber("Galactic Scum")
console.log(scum) 

console.log(takeNumber("Underdogs"))

const big = takeNumber("Big Dogs")
console.log(big)

const howdy = takeNumber("Howdy Doodies")
console.log(howdy)