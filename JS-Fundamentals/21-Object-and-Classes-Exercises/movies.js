function movies(cinemaList) {
    let movieInfo = []
    for (let commands of cinemaList) {
        let command = commands.split(" ")
        if (command.includes("addMovie")) {
            command.shift();
            let movieName = command.join(" ");
            movieInfo.push({
                name: movieName
            })
        } else if (command.includes("directedBy")) {
            let index = command.findIndex(x => x === "directedBy")
            let movieName = command.slice(0, index).join(" ")
            let director = command.slice(index + 1).join(" ")
            let exist = movieInfo.findIndex(x => x.name === movieName)
            if (exist > -1) {
                movieInfo[exist].director = director
            }
        } else if (command.includes("onDate")) {
            let date = command.pop();
            command.pop();
            let movieName = command.join(" ")
            let exist = movieInfo.findIndex(x => x.name === movieName)
            if (exist > -1) {
                movieInfo[exist].date = date
            }
        }
    }

    for (let movies of movieInfo) {
        if (movies.name && movies.director && movies.date) {
            console.log(JSON.stringify(movies));
        }
    }
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    )