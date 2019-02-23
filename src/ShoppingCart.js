class ShoppingCart {
    constructor(){
        this.Items = []
    }
    getItems(){
        return this.Items
    }
    addItem(name, quantity, price){
        this.Items.push({
            name: name,
            quantity: quantity,
            pricePerUnit: price
        })
    }
    clear(){
        this.Items = []
    }
    total(){
        return this.Items.reduce((accumulator, next_value) => accumulator + next_value.pricePerUnit * next_value.quantity, 0)
    }
}

module.exports = ShoppingCart