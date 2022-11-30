const item = [
     {name: 'Bike', price:100},
      {name: 'TV', price:200},
       {name: 'Album', price:10},
        {name: 'Book', price:5},
         {name: 'Phone', price:500},
          {name: 'Computer', price:1000}
]
let priceT = []
const cheapItems  = item.filter(item=>{
    priceT.push(item.price);
    if(item.price < 11){
        return item;}
})
let priceExpensive = 0;
const expensiveItems = item.filter(item=>{
    priceT.push(item.price);
    priceExpensive += item.price;
    if(item.price > 11){
    return item;
    }
})

let sum = 0
 priceT.filter(price =>{
    sum += price;
    return sum;
}    );
 // ****** ASNWERS ************

//  1. 
console.log("Cheap products are ", cheapItems); //cheap items
// 2.
console.log(" Expensive products are ", expensiveItems) // edxpensive itemes
// 3.
 console.log(`Total Price of all products is : ${sum} USD`) // total price
//  /4
 console.log(`Total price of all products abover 10 USD are: ${priceExpensive} USD `)