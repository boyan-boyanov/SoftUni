function smallestTwoNumbers(array) {
    let nums = array.sort((a, b) => a - b).slice(0, 2).join(" ")
    console.log(nums);

}
