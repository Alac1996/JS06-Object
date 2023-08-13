// function createProductObject(name, quantity, pricePerPiece, discountPercent) {
//   const product = {
//     name: name,
//     quantity: quantity,
//     pricePerPiece: pricePerPiece,
//   };

//   if (discountPercent > 0) {
//     product.discountPercent = discountPercent;
//   }

//   return product;
// }

// function calTotalPrice(product) {
//   let totalPrice = product.quantity * product.pricePerPiece;

//   if (product.discountPercent) {
//     const discountAmount = (product.discountPercent / 100) * totalPrice;
//     totalPrice -= discountAmount;
//   }

//   return totalPrice;
// }

// let name = prompt("Product");
// let quantitiy = prompt("quantity");
// let pricePerPiece = +prompt("Price / Piece");
// let discountPercent = +prompt("discount");

// const product = createProductObject(
//   name,
//   quantitiy,
//   pricePerPiece,
//   discountPercent
// );
// const totalPrice = calTotalPrice(product);

// console.log(`total price of ${product.name} is ${totalPrice} baht`);

const log = console.log;
// sub Program-1 : Input
let name = prompt("Enter product name");
let quantity = +prompt("Enter quantity");
let price = Number(prompt("Enter price"));
let discount = prompt("Enter discount") * 1;
// sub program-2 : CreateObject
// const products = {
//   name: name, // name : "Hermes"
//   quantity: quantity, // quantity : 20
//   price: price, // discount : 0.1
//   discount: discount, // discount : 0.1
// };

//  เมื่อชื่อ key ตรงกับชื่อตัวแปรที่เก็บ value สามารถยุบ syntax (Property Shorthand)
const products = {
  name,
  quantity,
  price,
};

if (discount != 0) {
  products["discount"] = discount;
}

log(products);
// sub program-3 : Calculate Price
// discount 10%, paid 90%
// discount 0.1, paid 0.9
// price,quantity,discount => TotalPrice
// function calcPrice(price, quantitiy, discount = 0) {
//   let totalPrice = price * quantitiy * (1 - discount);
//   //100*10 (1-0.1) => 1000(0.9) => 900
//   return totalPrice;
// }

// let result = calcPrice(products.price, products.quantity, products.discount);
// console.log(result);

function calcPrice(productObj) {
  let price = productObj.price;
  let quantitiy = productObj.quantitiy;
  let discount = productObj.discount ? productObj.discount : 0;
  return price * quantitiy * (1 - discount);
}

let result = calcPrice(products);

log(result);
