// let bandNumber = 0;

// const takeNumber = function (bandName) {
//     bandNumber++
//     let bandPlace = bandNumber + ". " + bandName;
//     return(bandPlace);
// }

let bandNumber = 1

const takeNumber = function (bandName) {
    return `${bandNumber++}. ${bandName}`
}

const scum = takeNumber("Galactic Scum")
console.log(scum) 

const under = takeNumber("Underdogs")
console.log(under)

const big = takeNumber("Big Dogs")
console.log(big)

const howdy = takeNumber("Howdy Doodies")
console.log(howdy)  