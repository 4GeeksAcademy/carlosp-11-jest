// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * 127.9 / 1.2;
    return parseFloat(valueInYen.toFixed(2));
}

const fromYenToPound = function(valueInYen){
    let valueInPound = valueInYen * 0.8 / 127.9;
    return parseFloat(valueInPound.toFixed(2));
}

// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
//module.exports = { sum };

// we include fromEuroToDollar here as well because it needs to be exported
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
//module.exports = { sum, fromDollarToYen };
//module.exports = { sum, fromYenToPound };