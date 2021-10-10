function negativeOrPositiveNumbers(nums) {
    let newArr = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= 0) {
            newArr.push(nums[i]);
        } else {
            newArr.unshift(nums[i])
        }
    }
    console.log(newArr.join("\n"));
}