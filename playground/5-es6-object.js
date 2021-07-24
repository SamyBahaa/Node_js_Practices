// object shorthand property

const FirstName = "Samy"
const Age = 22

const user = {
    FirstName:FirstName, /// if they are the same name no need to do like this 
    Age,                 // you can do like this one
    Location: "Egypt"
}

console.log(user)


// object destructuring

const product = {
    lable: "Red notebook",
    price: 3,
    stock:201,
    saleprice: undefined

} 

// const lable = product.lable
// const price = product.price

const {lable:productLable , price, rating = 5} = product

// console.log(lable, price)
// console.log(productLable)
// console.log(rating)

const transaction = (type, {lable, stock})=>{
    console.log(type,lable,stock)
}


transaction("order", product)