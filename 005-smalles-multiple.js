var smallestNumber = 1;
var limit = 20;
var canContinue = true;
while(canContinue) {

    var isDivisible = true
    for (let index = 1; index < limit; index++) {
        if (smallestNumber % index != 0) {
            isDivisible = false;
            break;
        }
    }
    if (isDivisible) {
        canContinue = false;
    } else {
        smallestNumber++;
    }
}
console.log(smallestNumber);
