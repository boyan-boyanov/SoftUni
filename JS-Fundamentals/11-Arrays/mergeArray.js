function mergeArray(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        let current= "";
        if (i % 2 === 0) {
            current += Number(arr1[i]) + Number(arr2[i])
        } else {
            current += "" + arr1[i] + arr2[i]
        }
        result.push(current);
    }
        console.log(result.join(" - "));
}

mergeArray(['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44']
);