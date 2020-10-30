var primeArr = [];
var index = 10001;
var incrementNumber = 1;
const isPrime = (num) => {
    for (let index = 2, s = Math.sqrt(num); index <= s; index++) {
        if (num % index === 0) {
            return false
        }
    } 
    return num > 1;
}

while(primeArr.length != index) {
    
    if (isPrime(incrementNumber)) {
        primeArr.push(incrementNumber)
    };
    incrementNumber++;
}

console.log(primeArr[index-1]);