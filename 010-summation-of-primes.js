var sum = 0;
var limit = 2000000;
var index = 1;
const isPrime = (num) => {
    for (let index = 2, s = Math.sqrt(num); index <= s; index++) {
        if (num % index === 0) {
            return false
        }
    } 
    return num > 1;
}

while(index < limit) {
    if (isPrime(index)) {
        sum += index;
    }
    index++;
}

console.log(sum)

