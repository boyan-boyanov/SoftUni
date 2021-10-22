function sorting(nums) {
    let numbers = []
    nums.sort((a, b) => a - b)
    let length = nums.length
    for (let i = 0; i < length / 2; i++) {
        numbers.push(nums[nums.length - 1])
        nums.pop();
        if (nums.length>0) {
            numbers.push(nums[0])
            nums.shift();            
        }
    }
    console.log(numbers.join(" "));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94, 100]);