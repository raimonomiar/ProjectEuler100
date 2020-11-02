var a = 1;

var limit = 1000;
var powerValue = 2;
var breakFromLoop = false

while( a <= limit && !breakFromLoop) {
    var b = 1;
    while (b <= limit && !breakFromLoop) {
        
        var c = Math.sqrt(Math.pow(a,powerValue) + Math.pow(b, powerValue));
        if (a + b + c === limit) {
            console.log(a * b  * c);
            breakFromLoop = true;
        }
        
        b++;
    }
    a++;
}