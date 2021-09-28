function orders(product, quantity) {
    function price(drink) {
        switch (drink) {
            case "coffee":
                return 1.50;
                break;
            case "water":
                return 1.00;
                break;
            case "coke":
                return 1.40;
                break;
            case "snacks":
                return 2.00;
                break;
        }
    }
    let result = (price(product) * quantity).toFixed(2);
    return result;
}