class ArtGallery {

    constructor(creator) {
        this.creator = creator
    }
    possibleArticles = { "picture": 200, "photo": 50, "item": 250 }
    listOfArticles = []
    guests = []

    addArticle = (articleModel, articleName, quantity) => {
        if (this.possibleArticles.hasOwnProperty(articleModel.toLowerCase())) {
            if (this.listOfArticles.some(a => a.articleName == articleName)) {

                let currObjectRef = this.listOfArticles.find(a => a.articleName == articleName)
                let oldQuantity = currObjectRef.quantity
                // let newQuantity = oldQuantity + quantity
                currObjectRef.quantity = currObjectRef.quantity + quantity
            }
            else {
                let lowerCaseArticleModel = articleModel.toLowerCase()
                this.listOfArticles.push({ articleModel: lowerCaseArticleModel, articleName, quantity })
            }
            return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
        }
        else {
            throw new Error("This article model is not included in this gallery!")
        }
    }

    inviteGuest = (guestName, personality) => {
        if (!this.guests.some(g => g.guestName == guestName)) {
            let points = 0
            if (personality == 'Vip') {
                points = 500
            }
            else if (personality == 'Middle') {
                points = 250
            }
            else {
                points = 50
            }

            this.guests.push({ guestName, points, purchaseArticle: 0 })

            return `You have successfully invited ${guestName}!`

        }
        else {
            throw new Error(`${guestName} has already been invited.`)
        }
    }

    buyArticle = (articleModel, articleName, guestName) => {

        if (this.possibleArticles.hasOwnProperty(articleModel.toLowerCase())) {
            if (this.listOfArticles.find(a => a.quantity == 0)) {
                return `The ${articleName} is not available.`
            }
        }
        if (this.listOfArticles.some(a => a.articleName == articleName) == false || this.possibleArticles.hasOwnProperty(articleModel.toLowerCase()) == false) {
            throw new Error('This article is not found.')
        }
        if (!this.guests.find((g => g.guestName == guestName))) {
            return `This guest is not invited.`
        }
        else {
            let currGuest = this.guests.find((g => g.guestName == guestName))
            let currArticle = this.listOfArticles.find((a => a.articleName == articleName))
            let articlePoints = this.possibleArticles[articleModel]
            if (currGuest.points >= articlePoints) {
                currGuest.points -= articlePoints
                currArticle.quantity -= 1
                currGuest.purchaseArticle += 1

                return `${guestName} successfully purchased the article worth ${articlePoints} points.`
            }
            else {
                return "You need to more points to purchase the article."
            }
        }


    }

    showGalleryInfo = (criteria) => {
        switch (criteria) {
            case 'article': {
                let resultString = `Articles information:\n`
                for (let article of this.listOfArticles) {
                    resultString += `${article.articleModel} - ${article.articleName} - ${article.quantity}\n`
                }
                return resultString.slice(0, -1)
            }
            case 'guest': {
                let resultString = 'Guests information:\n'
                for (let guest of this.guests) {
                    resultString += `${guest.guestName} - ${guest.purchaseArticle}\n`
                }
                return resultString.slice(0, -1)
            }

        }
    }
}


const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));
