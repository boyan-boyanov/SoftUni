function chessBoard(num) {
    console.log(`<div class="chessboard">`);
    for (let i = 1; i <= num; i++) {
        console.log(`  <div>`);
        for (let k = 1; k <= num; k++) {
            if ((i % 2 !== 0 && k % 2 !== 0) || (i % 2 === 0 && k % 2 === 0)) {
                console.log(`    <span class="black"></span>`);
            } else {
                console.log(`    <span class="white"></span>`);
            }
        }
        console.log(`  </div>`); 
    }
    console.log(`</div>`);
}

chessBoard(4);