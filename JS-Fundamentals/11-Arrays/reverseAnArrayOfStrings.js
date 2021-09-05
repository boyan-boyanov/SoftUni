function reverseAnArrayOfStrings(array){
// console.log(array.reverse().join(" ")); - лесно решение
for (let i = 0; i < Math.floor(array.length/2); i++) {
    let first = array[i]
    let last = array[array.length - 1 - i]
    array[i] = last
    array[array.length - 1 - i] = first    
}
console.log(array.join(" "));

}

reverseAnArrayOfStrings(['a', 'b', 'c', 'd', 'e']);
reverseAnArrayOfStrings(['abc', 'def', 'hig', 'klm', 'nop'])
reverseAnArrayOfStrings(['33', '123', '0', 'dd']);