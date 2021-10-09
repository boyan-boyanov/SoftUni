function lastKNumberSequance(n, k){
    let fibonachi = [1]
    
    for (let i = 1; i < Number(n); i++) {
        let sum = 0;
        for (let j = 0; j < k; j++){
            if (fibonachi.length - 1 - j >= 0) {
                sum+= fibonachi[fibonachi.length - 1 - j];     
            }
        }
        fibonachi.push(sum)     
    }
    console.log(fibonachi.join(" "));
    }