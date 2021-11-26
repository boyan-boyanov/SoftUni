class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes() {
        if (this._likes.length === 0) {
            return `${this.title} has 0 likes`;
        } else if (this._likes.length === 1) {
            return `${this._likes[0]} likes this story!`;
        } else {
            return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`;
        }
    }

    like(username) {
        if (this._likes.includes(username)) {
            throw new Error("You can't like the same story twice!")
        } else if (this.creator === username) {
            throw new Error("You can't like your own story!")
        } else {
            this._likes.push(username)
            return `${username} liked ${this.title}!`
        }
    }

    dislike(username) {
        if (!this._likes.includes(username)) {
            throw new Error("You can't dislike this story!")
        } else {
            let index = this._likes.indexOf(username)
            this._likes.splice(index, 1)
            return `${username} disliked ${this.title}`
        }
    }

    comment(username, content, id) {
        let numOfComment = this._comments.length
        if (id === undefined || numOfComment < id) {
            this._comments.push({
                Id: numOfComment + 1,
                Username: username,
                Content: content,
                Replies: []
            })
            return `${username} commented on ${this.title}`
        } else {
            let answer = this._comments[id - 1].Replies
            let nextAnswer = `${id}.${answer.length + 1}`
            answer.push({ Id: nextAnswer, Username: username, Content: content })
            return "You replied successfully"
        }
    }

    toString(sortingType) {        
        let result = []
        result.push(`Title: ${this.title}`)
        result.push(`Creator: ${this.creator}`)
        result.push(`Likes: ${this._likes.length}`)
        result.push('Comments:')
        if (sortingType === 'asc') {
            let printing = this._comments.sort((a,b) => a.Id - b.Id)
            for (let com of printing) {
                result.push(`-- ${com.Id}. ${com.Username}: ${com.Content}`)
                if (com.Replies.length > 0) {
                    let repPrint = com.Replies.sort((a,b) => a.Id - b.Id)
                    for (let rep of repPrint) {
                        result.push(`--- ${rep.Id}. ${rep.Username}: ${rep.Content}`)
                    }
                }
            }
        }else if(sortingType === 'desc'){
            let printing = this._comments.sort((a,b) => b.Id - a.Id)
            for (let com of printing) {
                result.push(`-- ${com.Id}. ${com.Username}: ${com.Content}`)
                if (com.Replies.length > 0) {
                    let repPrint = com.Replies.sort((a,b) => b.Id - a.Id)
                    for (let rep of repPrint) {
                        result.push(`--- ${rep.Id}. ${rep.Username}: ${rep.Content}`)
                    }
                }
            }
        }else{
            let printing = this._comments.sort((a,b)=> a.Username.localeCompare(b.Username))
            for (let com of printing) {
                result.push(`-- ${com.Id}. ${com.Username}: ${com.Content}`)
                if (com.Replies.length > 0) {
                    let repPrint = com.Replies.sort((a,b)=> a.Username.localeCompare(b.Username))
                    for (let rep of repPrint) {
                        result.push(`--- ${rep.Id}. ${rep.Username}: ${rep.Content}`)
                    }
                }
            }
        }
        return result.join('\n')
    }
}


let art = new Story("My Story", "Anny");
console.log(art.like("John"));
console.log(art.like("John"));
console.log(art.likes);
console.log(art.dislike("John"));
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));
