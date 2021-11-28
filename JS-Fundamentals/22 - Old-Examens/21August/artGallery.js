class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 };
        this.listOfArticles = [];
        this.guests = [];
    }
    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLowerCase()
        quantity = Number(quantity)
        if (!this.possibleArticles.hasOwnProperty(articleModel)) {
            throw new Error("This article model is not included in this gallery!")
        } else {
            let result = this.listOfArticles.find(x => x.articleName === articleName)
            if (result == undefined) {
                let myObj = {
                    articleModel: articleModel,
                    articleName: articleName,
                    quantity: quantity
                }
                this.listOfArticles.push(myObj)
            } else {
                result.quantity += quantity
            }
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }

    inviteGuest(guestName, personality) {
        let findGuest = this.guests.find(x => x.guestName === guestName)
        if (findGuest != undefined) {
            throw new Error(`${guestName} has already been invited.`)
        } else {
            let num = 0
            if (personality === 'Vip') {
                num = 500
            } else if (personality === 'Middle') {
                num = 250
            } else {
                num = 50
            }
            let createGuest = {
                guestName: guestName,
                points: num,
                purchaseArticle: 0,
            }
            this.guests.push(createGuest)
        }
        return `You have successfully invited ${guestName}!`
    }

    buyArticle(articleModel, articleName, guestName) {
        let guestInfo = this.guests.find(x => x.guestName == guestName)
        let realModel = this.listOfArticles.find(x => x.articleName === articleName)
        if (realModel == undefined || realModel.articleModel != articleModel) {
            throw new Error("This article is not found.")
        } else if (realModel.quantity == 0) {
            throw new Error(`The ${articleName} is not available.`)
        }else if(!this.guests.find(x => x.guestName == guestName)){
            throw new Error("This guest is not invited.")
        }else{
            let itemCost = this.possibleArticles[articleModel]
            let guestPoints = guestInfo.points
            if(itemCost>guestPoints){
                return "You need to more points to purchase the article."
            }else{
                guestInfo.points -= itemCost
                guestInfo.purchaseArticle++
                realModel.quantity--
                return `${guestName} successfully purchased the article worth ${itemCost} points.`
            }
        }

    }

    showGalleryInfo(criteria){
        let result = ""
        if(criteria === 'article'){
            result += 'Articles information:\n';
            for(let item of this.listOfArticles){
                result += `${item.articleModel} - ${item.articleName} - ${item.quantity}\n`;
            }
        }else{
            result += 'Guests information:\n';
            for(let men of this.guests){
                result += `${men.guestName} - ${men.purchaseArticle}\n`;
            }
        }
        return result
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


