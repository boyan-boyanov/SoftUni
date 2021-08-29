function gramophone(band, album, song) {
    let sum = band.length * album.length * song.length / 2
    console.log(`The plate was rotated ${Math.ceil(sum / 2.5)} times.`);
}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs')