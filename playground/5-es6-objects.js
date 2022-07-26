// Object property shorthand

const name = 'Andrew'
const userAge = 27

const user = {
    name,
    age: userAge,
    location: 'Philadelphia'
}

console.log(user)

// Object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

// const label = product.label
// const stock = product.stock

// const {label: product_label, stock, rating = 5} = product
// console.log(product_label)
// console.log(stock)
// console.log(rating)

const transactioon = (type, { label, stock }) => {
    console.log(type, label, stock)
}

transactioon('order', product )