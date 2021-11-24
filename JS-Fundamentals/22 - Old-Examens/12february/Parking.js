class Parking {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = []
        this.freeSpace = capacity
    }

    addCar(carModel, carNumber) {
        if (this.freeSpace <= 0) {
            throw new Error("Not enough parking space.")
        }
        this.vehicles.push({ carModel, carNumber, payed: false })
        this.freeSpace--
        return `The ${carModel}, with a registration number ${carNumber}, parked.`
    }

    removeCar(carNumber) {
        let car = this.vehicles.find(x => x.carNumber === carNumber)
        if (car) {
            if (car.payed === false) {
                throw new Error(`${carNumber} needs to pay before leaving the parking lot.`)
            } else {
                let index = this.vehicles.indexOf(car)
                this.vehicles.splice(index, 1)
                this.freeSpace++
                return `${carNumber} left the parking lot.`
            }
        } else {
            throw new Error("The car, you're looking for, is not found.")
        }
    }

    pay(carNumber) {
        let car = this.vehicles.find(x => x.carNumber === carNumber)
        if (!car) {
            throw new Error(`${carNumber} is not in the parking lot.`)
        }
        if (car.payed === true) {
            throw new Error(`${carNumber}'s driver has already payed his ticket.`)
        }
        car.payed = true
        return `${carNumber}'s driver successfully payed for his stay.`
    }

    getStatistics(carNumber) {
        let result = []
        result.push(`The Parking Lot has ${this.freeSpace} empty spots left.`)
        let sorted = this.vehicles.sort((a, b) => a.carModel.localeCompare(b.carModel))

        if (carNumber === undefined) {
            for (let car of sorted) {
                let isPayed = ''
                if (car.payed === false) {
                    isPayed = 'Not payed'
                } else {
                    isPayed = 'Has payed'
                }
                result.push(`${car.carModel} == ${car.carNumber} - ${isPayed}`)
            }
        } else {
            
            let car = this.vehicles.find(x => x.carNumber === carNumber)
            let isPayed = ''
            if(car === undefined){
                return ''
            }
            if (car.payed === false) {
                isPayed = 'Not payed'
            } else {
                isPayed = 'Has payed'
            }
            return `${car.carModel} == ${car.carNumber} - ${isPayed}`
        }
        return result.join('\n')
    }

}



const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.addCar("Lada 1600", "B8324KM"));
console.log(parking.addCar("Alfa", "C3452D"));
console.log(parking.addCar("Opel", "V7654"));
console.log(parking.getStatistics("B8324KM"));


console.log(parking.pay("TX3691CA"));
console.log(parking.pay("B8324KM"));
console.log(parking.removeCar("B8324KM"));
console.log(parking.getStatistics("B8324KM"));
