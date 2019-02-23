const cart_thing = require('./src/ShoppingCart')

const cart = new cart_thing()

cart.addItem('thing1', 2, 4.5)
cart.addItem('thing1', 1, 6)
cart.addItem('thing1', 4, 3.2)

cart.total()