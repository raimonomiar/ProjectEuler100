var pallindromeArr = [];

for (let index = 100; index < 1000; index++) {
    for (let index1 = 100; index1 < 1000; index1++) {
        var number = index * index1;
        if (isPallindrome(number)) {
            pallindromeArr.push(number);
        }
    }
}

function isPallindrome(number) {
    let reverseNumber = parseInt(number.toString().split('').reverse().join(''));
    return number === reverseNumber;
}

console.log(Math.max(...pallindromeArr));