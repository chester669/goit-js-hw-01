function makeTransaction(quantiti, pricePerDroid) {
  const totalPrice = quantiti * pricePerDroid;
  return `You ordered ${quantiti} droids worth ${totalPrice} credits!`;
}
console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"

// const number = document.querySelector("#categories");
// console.log(`Number of categories: ${number.children.length}`);

// const categories = document.querySelectorAll("#categories .item");
// categories.forEach((category) => {
//   const categoryTitle = category.querySelector("h2").textContent;
//   const numberOfElements = category.querySelectorAll("li").length;
//   console.log(`Category: ${categoryTitle}`);
//   console.log(`Elements: ${numberOfElements}`);
// });
