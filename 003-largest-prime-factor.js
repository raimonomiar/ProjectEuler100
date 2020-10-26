var limit= 600851475143;
var primeArr = [];
var primeIndex = 2;

while(primeIndex <= limit) {

    if (limit % primeIndex == 0) {
        limit = limit / primeIndex;
        primeArr.push(primeIndex);
        primeIndex = 2;
    }

    primeIndex++;
}
console.log(Math.max(...primeArr));