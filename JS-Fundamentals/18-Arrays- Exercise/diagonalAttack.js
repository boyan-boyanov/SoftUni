function diagonalAttack(array) {
    let matrix = array.map(row => row.split(" ").map(Number))
    
    let first = 0
    let second = 0

    for (let i = 0; i < array.length; i++) {
        first += matrix[i][i];
        second += matrix[i][matrix.length - 1 - i]        
    }
    if (first === second) {
        for (let row = 0; row < array.length; row++) {
           for (let coll = 0; coll < array.length; coll++) {
               if ((row !==coll) && (row !== matrix.length - 1 - coll)) {
                matrix[row][coll] = first;
               }               
           }            
        }        
    }
    console.log(matrix.map(row => row.join(" ")).join("\n"));
}

diagonalAttack(['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']
);