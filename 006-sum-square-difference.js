var sumOfSquares = 0;
var squareOfSum = 0;
var limit = 100;
var index = 1;
var powerValue = 2;

while(index <= limit) {
    sumOfSquares += Math.pow(index, powerValue);
    squareOfSum += index;

    index ++;
}

console.log(Math.pow(squareOfSum, powerValue) - sumOfSquares);