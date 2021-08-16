function vacation(count, type, day) {
    let price = 0;
    if (type === "Business" && count >= 100) {
        count -= 10
    }
    switch (day) {
        case "Friday":
            if (type === "Students") {
                price = 8.45 * count
            } else if (type === "Business") {
                price = 10.90 * count
            } else if (type === "Regular") {
                price = 15 * count
            }
            break;
        case "Saturday":
            if (type === "Students") {
                price = 9.80 * count
            } else if (type === "Business") {
                price = 15.60 * count
            } else if (type === "Regular") {
                price = 20 * count
            }
            break;
        case "Sunday":
            if (type === "Students") {
                price = 10.46 * count
            } else if (type === "Business") {
                price = 16 * count
            } else if (type === "Regular") {
                price = 22.5 * count
            }
            break;
        default:
            break;
    }
    if (type === "Students" && count >= 30) {
        price *= 0.85
    }
    if (type === "Regular" && count >= 10 && count <= 20) {
        price *= 0.95
    }

    
    console.log(`Total price: ${price.toFixed(2)}`);
}

vacation(30,
    "Students",
    "Sunday")