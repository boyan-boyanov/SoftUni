function songs(array) {
    let numberOfSongs = array.shift()
    let wantedType = array.pop()
    let playList = [];

    class Song {
        constructor(songType, songName, songLength) {
            this.typeList = songType;
            this.name = songName;
            this.time = songLength;
        }
    }
    for (let i = 0; i < numberOfSongs; i++) {
        let current = array[i].split("_")
        playList.push(new Song(current[0], current[1], current[2]))
    }
    if (wantedType === "all") {
        for (let play of playList)
            console.log(play.name);
    } else {
        for (let play of playList) {
            if (play.typeList === wantedType) {
                console.log(play.name);

            }

        }
    }
}

songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
    
);