function firstAndLastKnumbers(nums) {
    let first = nums.slice(1, 1 + nums[0])
    let last = nums.slice(nums.length - nums[0])
    console.log(first.join(" "));
    console.log(last.join(" "));
}