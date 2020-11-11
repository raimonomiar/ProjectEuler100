var number = 2;
var power = 1000;
var sum = 0;
var powerValue = BigInt(Math.pow(number, power));
digitArr =  powerValue.toString().split('');

for (let index = 0; index < digitArr.length; index++) {
    if (digitArr[index] !== 'n') {
        sum += parseInt(digitArr[index]);
    }
}

console.log(sum);
