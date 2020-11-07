var limit = 500;
var firstTrangleNumber = 0;
var divisorArr = [];
var i = 1;

while(firstTrangleNumber == 0) {
    divisorArr = []
    var n = i * (i+1) /2;
    var j = 1;
    while (n >= j && firstTrangleNumber == 0) {

        if (n % j == 0) {
            divisorArr.push(j);
            if (divisorArr.length === limit) {
                firstTrangleNumber = n;
            }
        }
        j++;

    }
    i++;
 
}
console.log(firstTrangleNumber);