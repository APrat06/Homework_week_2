class ShoppingCart {
    constructor(){
        this.items = []
    }
    getItems(){
        return this.items
    }
    addItem(name, quantity, price){
        this.items.push({
            name: name,
            quantity: quantity,
            pricePerUnit: price
        })
    }
    clear(){
        this.items = []
    }
    total(){
        return this.items.reduce((accumulator, nextValue) => accumulator + nextValue.pricePerUnit * nextValue.quantity, 0)
    }
}

module.exports = ShoppingCart