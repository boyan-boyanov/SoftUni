class Vacationer {
    constructor(fullName, creditCard) {
        this._fullName = {
            firstName: '',
            middleName: '',
            lastName: ''
        }
        this.idNumber = "";
        this.creditCard = {
            cardNumber: 1111,
            expirationDate: "",
            securityNumber: 111
        }
        if (creditCard !== undefined) {
            this.creditCard.cardNumber = creditCard[0];
            this.creditCard.expirationDate = creditCard[1];
            this.creditCard.securityNumber = creditCard[2];
        }
        this.wishList = []
        
        if (fullName[0] && fullName[1] && fullName[2]) {
            let patern = /^[A-Z][a-z]+$/
            let first = fullName[0].match(patern)
            let second = fullName[1].match(patern)
            let last =  fullName[2].match(patern)
            if(first !==null && second !== null && last !== null){
                this._fullName.firstName = fullName[0],
                this._fullName.middleName = fullName[1],
                this._fullName.lastName = fullName[2]
            }else{
                throw new Error("Invalid full name")
            }
        } else {
            throw new Error('Name must include first name, middle name and last name')
        }
    }
    generateIDNumber(){
        console.log('1');
    }
    
}

// Initialize vacationers with 2 and 3 parameters
let vacationer1 = new Vacationer(["Vania", "Ivanova", "Zhivkova"]);
let vacationer2 = new Vacationer(["Tania", "Ivanova", "Zhivkova"],
    [123456789, "10/01/2018", 777]);


// Should throw an error (Invalid full name)
/*try {
    let vacationer3 = new Vacationer(["Vania", "Ivanova", "ZhiVkova"]);
} catch (err) {
    console.log("Error: " + err.message);
}*/

// Should throw an error (Missing credit card information)
try {
    let vacationer3 = new Vacationer(["Zdravko", "Georgiev", "Petrov"]);
    vacationer3.addCreditCardInfo([123456789, "20/10/2018"]);
} catch (err) {
    console.log("Error: " + err.message);
}

vacationer1.addDestinationToWishList('Spain');
vacationer1.addDestinationToWishList('Germany');
vacationer1.addDestinationToWishList('Bali');

// Return information about the vacationers
console.log(vacationer1.getVacationerInfo());
console.log(vacationer2.getVacationerInfo());
