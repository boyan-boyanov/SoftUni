function orbit(array){
    let width = array[0];
    let height = array[1];
    let x = Math.abs(array[2]);
    let y = Math.abs(array[3]);

    let matrix = new Array(height);
    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = new Array(width)        
    }

    matrix[x][y] = 1;

    for (let row = 0 ; row < width; row++) {
        for (let coll = 0; coll < height; coll++) {
          matrix[row][coll] = Math.max(Math.abs(x-row), Math.abs(y-coll)) + 1;            
        }       
        
    }  

    console.log(matrix.map(rim => rim.join(" ")).join("\n"));

}

orbit([3, 3, 2, 2])