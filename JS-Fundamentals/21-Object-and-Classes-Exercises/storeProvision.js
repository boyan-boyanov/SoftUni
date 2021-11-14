function storeProvision(currentStock, newStock) {
    let shop = []

    for (let i = 0; i < currentStock.length - 1; i += 2) {
        let product = {
            name: currentStock[i],
            value: Number(currentStock[i + 1]),
        }
        shop.push(product)
    }

    for (let j = 0; j < newStock.length - 1; j += 2) {
        let newProduct = newStock[j]
        let productValue = Number(newStock[j + 1])
        let index = shop.findIndex(x => x.name === newProduct)
        if (index > -1) {
            shop[index].value += productValue
        } else {
            shop.push({ name: newProduct, value: productValue })
        }
    }
    for (const product of shop) {
        console.log(`${product.name} -> ${product.value}`);
    }
}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )