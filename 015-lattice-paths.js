var limit = 20;
var paths = 1;

for(i = 0; i < limit; i++) {
    paths *= (2 * limit - i);
    paths /= i + 1;
}
console.log(paths);