function sortNum(a, b, c) {
    let nums = [];
    nums.push(a, b, c)
    nums.sort((a, b) => b - a);

    for (let i = 0; i < nums.length; i++) {
        console.log(nums[i]);
    }
}

sortNum(2,1,3)