var sum = 0;
var currentValue = 1;
var previousValue = 0;
var nextValue = 0;
var limit = 4000000;

while(nextValue <= limit) {
    if (nextValue % 2 == 0) {
        sum+= nextValue
    }

    nextValue = previousValue + currentValue;
    previousValue = currentValue;
    currentValue = nextValue;
}

console.log(sum);
