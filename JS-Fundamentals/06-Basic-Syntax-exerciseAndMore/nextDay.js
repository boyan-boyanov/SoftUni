function nextDay(year, month, day){

let today = new Date(year, month, day);
let tomorrow = new Date(today.setDate(today.getDate()));

let newYear = tomorrow.getFullYear();
let newMonth = tomorrow.getMonth();
let newDay = tomorrow.getDate();

console.log(`${newYear}-${newMonth}-${newDay}`);
console.log(today);

}

nextDay(2016, 9, 30);