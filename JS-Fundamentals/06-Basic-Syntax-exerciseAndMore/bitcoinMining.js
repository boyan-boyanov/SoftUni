function bitcoinMining(arr) {
    let bitcoinPrice = 11949.16;
    let goldPrice = 67.51;
    let money = 0;
    let bitcoin = 0;
    let firstDay = 0;
    for (let i = 0; i < arr.length; i++) {
        let shift = arr[i];
        money += shift * goldPrice;
        if (money >= bitcoinPrice) {
            let times = Math.floor(money / bitcoinPrice);
            if (firstDay === 0) {firstDay = i+1}
            for (let k = 0; k < times; k++) {
                bitcoin++;
                money -= bitcoinPrice
                
                
            }
        }

    }
}

bitcoinMining([100, 200, 300]);