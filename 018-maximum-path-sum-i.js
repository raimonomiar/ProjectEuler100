var sampleArr = [
    [75,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [95,64,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [17,47,82,0,0,0,0,0,0,0,0,0,0,0,0],
    [18,35,87,10,0,0,0,0,0,0,0,0,0,0,0],
    [20,04,82,47,65,0,0,0,0,0,0,0,0,0,0],
    [19,01,23,75,03,34,0,0,0,0,0,0,0,0,0],
    [88,02,77,73,07,63,67,0,0,0,0,0,0,0,0],
    [99,65,04,28,06,16,70,92,0,0,0,0,0,0,0],
    [41,41,26,56,83,40,80,70,33,0,0,0,0,0,0],
    [41,48,72,33,47,32,37,16,94,29,0,0,0,0,0],
    [53,71,44,65,25,43,91,52,97,51,14,0,0,0,0],
    [70,11,33,28,77,73,17,78,39,68,17,57,0,0,0],
    [91,71,52,38,17,14,91,43,58,50,27,29,48,0,0],
    [63,66,04,68,89,53,67,30,73,16,69,87,40,31,0],
    [04,62,98,27,23,09,70,98,73,93,38,53,60,04,23]
];

let counter = null;
let sumArr = [];

for (let index = sampleArr.length - 1 ; index > 0; index--) {
    for (let i = 0; i < sampleArr[index - 1].length; i++) {
        const currentValue = sampleArr[index - 1][i];
        let addition1;
        let addition2;
        if (index == sampleArr.length - 1) {
            addition1 = sampleArr[index][i];
            addition2 = sampleArr[index][i+1];
        } else {
            addition1 = sumArr[i];
            addition2 = sumArr[i+1];
        }
         
        if (currentValue != 0) {
            if (currentValue + addition1 > currentValue + addition2) {
                sumArr[i] = currentValue + addition1;
            } else {
                sumArr[i] = currentValue + addition2;
            }            
        }
    }
}

console.log(sumArr[0])