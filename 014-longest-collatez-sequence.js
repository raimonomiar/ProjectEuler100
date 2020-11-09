var limit = 1000000;
var chainArray = [];
var startingNumber = 0;

for (let index = 1; index < limit; index++) {
    
    var sequenceArr = [];
    
    addToSequence(index, sequenceArr);

    if (chainArray.length < sequenceArr.length) {
        chainArray = sequenceArr;
        startingNumber = index;
    }

}

console.log(startingNumber);

function addToSequence(number, sequenceArr) {
    if (number != 1) {
        sequenceArr.push(number);
        
        if (number % 2 == 0) {
            number = number / 2;
        } else {
            number = (3 * number) + 1;
        }
        addToSequence(number, sequenceArr);
    } else {
        sequenceArr.push(1);
    }
}
