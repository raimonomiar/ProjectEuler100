var sum = 0;
var limit = 1000;

for (let index = 0; index < limit; index++) {
    if (index % 3 == 0 || index % 5 === 0) {
        sum += index;
    }
} 

console.log(sum);