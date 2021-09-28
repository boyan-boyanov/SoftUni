function grades(score) {

    if (score >= 2 && score < 3) {
        return `Fail (${Math.floor(score)})`;
    } else if (score < 3.50) {
        return `Poor (${score.toFixed(2)})`;
    } else if (score < 4.50) {
        return `Good (${score.toFixed(2)})`
    } else if (score < 5.50) {
        return `Very good (${score.toFixed(2)})`
    } else if (score >= 5.50) {
        return `Excellent (${score.toFixed(2)})`
    }
}