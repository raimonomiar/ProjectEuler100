const startDate = new Date("1901-01-01");
const endDate = new Date("2000-12-31");
let sum = 0;
const day = 0; //sunday = 0

let currentDate = new Date(startDate);
currentDate.setDate(currentDate.getDate() + (day - currentDate.getDay() + 7) % 7);
while(currentDate <= endDate) {
    if (currentDate.getDate() == 1) {    
        sum = sum + 1;
    }
    currentDate.setDate(currentDate.getDate() + 7);   
}
console.log(sum);