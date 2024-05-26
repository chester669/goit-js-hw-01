// const pricePerDroid = 300;
// const quantity = 4;
// const totalPrice = pricePerDroid * quantity;
// const makeTransition = `You ordered ${quantity} drones worth ${totalPrice} credits!`;
// console.log(makeTransition);

// const fruit = "mango"
//  let fruit = "mango"
// console.log(fruit)

//const isModalOpen = true
// const isAdmin = false
// null
// undefinded

// typeof fruit = string

// let a = 5 . let b = 2 . a += 2 (a=7) . b -= 1 (b = 1). a *= 3 (a = 15)
// string(5) = "5"

// const fruit = "mango"; const weight = 20 ; const price = `your ${fruit} weight ${weight} so it cost ${totaPrice};

// const a = 2; const b = 4; console.log(a > b) - false; console.log(b >= a) - true;
//console.log(5 === 5) - true; console.log(5 !== 5) - false; console.log(5 !== "5") - true;
//const order = fruit === fruit;

//console.log(Number("5")) - 5; console.log(Number(false)) - 0; console.log(Number(true)) - 1;
//console.log("5" * 2) - 10; console.log(5  + true) - 6

//console.log(Number.parseInt("5")) - 5; Number.parseInt(5.5) - 5; Number.parseInt("12FWE78") - 12;
//console.log(Number.parseFloat("5.5cm")) - 5.5; Number.parseFLoat("12.42qfjg45") - 12.42
//console.log(Math.floor(1.2)) - 1; Math.floor(23,8) - 23;
//console.log(Math.ceil(1.2)) - 2; Math.ceil(23.8) - 24;
//console.log(Math.round(1.3)) - 1; Math.round(1.8) - 2;
//Math.max(10, 20, 40) - 40; Math.min (10 , 20 , 40 ,30) - 10; Math.random() - random number from 0 to 1;

//console.log(0.1 + 0.2 === 0.3) - false ; (0.1 + 0.2) - 0.30000000004;
//console.log((0.1 * 10 + 0.2 * 10)/10) - 0.3
//console.log((0.1 + 0.2).toFixed(1)) - 0.3; (4.839384).toFixed(3) - 4.839;

// function comingOut() {
//   console.log("I love justin Biber");
// }

// function generalNumber(x, y, a) {
//   console.log(`money: ${x + y + a}`);
// }
// generalNumber(10, 20, 10);

// function multiply(x, y, a) {
//   return x * y * a;
// }
// const result = multiply(3, 4, 5);
// console.log(result);

// function test(x, y, f) {
//   return x + y + f;
// }

// console.log("i love plants");
// const amount = test(2, 8, 9);
// console.log(amount);
// console.log("i dont like chemicals");

// function full(love, price) {
//   return `your ${love} cost ${price} dollars`;
// }
// const message = full("radar", 3000);
// console.log(message);

////////////////////////////////////////////// if, switch, && , ||, ! - operators ///////////////////////////////////////////////

// let price = 100;
// subscription = "pro";
// if (subcription === "pro")  {
// price = 100; };

//let price = 0;
//subscription = "free";
//if ( subsription === "pro") {
//price = 100; }

// function checkAge(age) {
//   if (age >= 18) {
//     return (checkAge = "You are an adult");
//   }
// }
// console.log(checkAge(20));

// let age = 20;

// if (age >= 18) {
//   age = "you are an adult";
// }
// console.log(age);

//  /////////////////////////// else ////////////////////////////////

// function checkStorage(available, ordered) {
//   if (available > ordered) {
//     return (checkStorage = "Order is processed, our manager will contact you");
//   }
// }
// console.log(checkStorage(20, 10));

// /////////////////////// else if //////////////////////////////////

// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return (checkStorage = "There are no products in the order!");
//   } else if (available < ordered) {
//     return (checkStorage =
//       "Your order is too large, there are not enough items in stock!");
//   } else available > ordered;
//   {
//     return (checkStorage =
//       "The order is accepted, our manager will contact you");
//   }
// }

// //////////////// тернарний оперант ( conditional / ternary operant) ////////////////////

// const array = [false];
// const result = array ? "A" : "B";
// console.log(result);

// function checkPassword(password) {
//   const correctPassword = "jqueryismyjam";
//   return (checkPassword =
//     password === correctPassword
//       ? "Access granted"
//       : "Access denied, wrong password!");
// }

////////////////////////// switch ///////////////////////////

// function getSubscriptionPrice(type) {
//   switch (type) {
//     case "starter":
//       return 0;
//       break;
//     case "professional":
//       return 20;
//       break;
//     case "organization":
//       return 50;
//       break;
//     default:
//       return "there are not such a subscription";
//   }
// }
// console.log(getSubscriptionPrice("organization"));

///////////////////////////////////////////  logic operant (&&, ||, !) //////////////////////////////////////////////////////

// ////////////////////////// && ////////////////////////////
// function isNumberInRange(start, end, number) {
//   const numberInclude = start <= number && end >= number;
//   if (start <= number && end >= number) {
//     return true;
//   } else start >= number && end <= number;
//   {
//     return false;
//   }
// }
// console.log(isNumberInRange(10, 30, 20));

// //////////////////////// || ////////////////////////////////

// function checkAccess(subType) {
//   const subscription = subType === "pro" || subType === "vip";
//   return subscription;
//   if ("pro" === subType || "vip" === subType) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(checkAccess("pro"));

//////////////////////////// ! ///////////////////////////////

// function toggleModalVisibility(isVisible) {
//   const visible = !isVisible;
//   return visible;
// }
// console.log(toggleModalVisibility(true));

// ////////////////////////////////////////// methods (slice) /////////////////////////////////////////////////

// function getSubstring(string, length) {
//   const substring = string.slice(0, length);
//   return substring;
// }

// console.log(getSubstring("hello babe", 4));

/////////////////////////// toUpperCase toLowerCase ///////////////////////

// function normalizeInput(input, to) {
//   if (to === "lower") {
//     return input.toLowerCase();
//   } else if (to === "upper") {
//     return input.toUpperCase();
//   } else {
//     return input;
//   }
// }
// console.log(normalizeInput("HellO My NAMe Is VIktor", "lower"));

////////////////////////////////// includes ////////////////////////////

// function checkBoolean(right, wrong) {
//   let message = right === wrong;
//   return message;
// }

// console.log(checkBoolean("message", "mesSage"));

// function checkForName(fullName, firstName) {
//   const fullNameLower = fullName.toLowerCase();
//   const firstNameLower = firstName.toLowerCase();
//   const compare = fullNameLower.includes(firstNameLower);
//   return compare;
// }
// console.log(checkForName("jacob vanilla", "Liza"));

///////////////////////////// endsWith startsWith ///////////////////////

// function checkFileExtension(fileName, ext) {
//   if (fileName.endsWith(ext)) {
//     return "File extension matches";
//   } else {
//     return "File extension does not match";
//   }
// }
// console.log(checkFileExtension("project.html", "js"));

//////////////////////////// indexOf() /////////////////////

// function getFileName(file) {
//   if (file.indexOf(".") > 0) {
//     const fileName = file.indexOf(".");
//     return file.slice(0, fileName);
//   } else {
//     return file.slice(0);
//   }
// }
// console.log(getFileName("index.js"));

// //////////////////////////// trim() ////////////////////////////
// function createFileName(name, ext) {
//   const noSpaceName = name.trim();
//   const noSpaceExt = ext.trim();
//   return noSpaceName + "." + noSpaceExt;
// }

// console.log(createFileName(" train   ", " js  "));

//////////////////////////////////////////////////////////// цикли ////////////////////////////////////////////////////////////

// const number = 3;
// let adding = 1;
// let show = 0;

// while (adding <= number) {
//   show += adding;
//   adding += 1;
//   console.log(show);
// }

// function calculateTotal(number) {
//   total = 0;
//   adding = 1;
//   while (adding <= number) {
//     total += adding;
//     adding += 1;
//   }
//   return total;
// }
// console.log(calculateTotal(3));

/////////////////////////// do ... while ///////////////////////

////////////////////////////////////// for ////////////////////////////////////\

// for (let i = 0; i <= 20; i += 5) {
//   console.log(i);
// }

// function calculateTotal(number) {
//   total = 0;
//   for (adding = 1; adding <= number; adding += 1) {
//     total += adding;
//   }
//   return total;
// }
// console.log(calculateTotal(5));

// function calculateEvenTotal(number) {
//   total = 0;
//   for (adding = 2; adding <= number; adding += 2) {
//     total += adding;
//   }
//   return Math.floor(total);
// }
// console.log(calculateEvenTotal(27));

// const start = 17;
// const end = 25;
// let number;
// for (let integer = start; integer <= end; integer++) {
//   if (integer % 5 === 0) {
//     number = integer;
//     break;
//   }
// }
// console.log(number);

// const start = 6;
// const end = 17;
// let number;

// for (let i = start; i <= end; i++) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// console.log(number);

// const lineStart = 5;
// const lineEnd = 15;
// let dot;
// for (dot = lineStart; dot <= lineEnd; dot += 5) {
//   if (dot % 4 !== 0) {
//     break;
//   }
// }
// console.log(dot);

// function findNumber(start, end, divisor) {
//   for (integral = start; integral <= end; integral++) {
//     if (integral % divisor === 0) {
//       return integral;
//     }
//   }
// }
// console.log(findNumber(10, 30, 7));

//  ///////////////////////////////////   homework  ////////////////////////////////////////////////////

// function getShippingCost(country) {
//   let price;

//   switch (country) {
//     case "China":
//       price = 100;
//       break;
//     case "Chile":
//       price = 250;
//       break;
//     case "Australia":
//       price = 170;
//       break;
//     case "Jamaica":
//       price = 120;
//       break;
//     default:
//       return "Sorry, there is no delivery to your country";
//   }
//   return (message = `Shipping to ${country} will cost ${price} credits`);
// }

// function checkForSpam(message) {
//   const lowerCaseMessage = message.toLowerCase();
//   const forbiddenWords =
//     lowerCaseMessage.includes("sale") || lowerCaseMessage.includes("spam");
//   return forbiddenWords;
// }

// function formatMessage(message, maxLength) {
//   const messageSymbols = message.length;
//   if (messageSymbols > maxLength) {
//     message = message.slice(0, maxLength);
//     return message + "...";
//   } else {
//     return message;
//   }
// }

// function makeTransaction(quantity, pricePerDroid, customerCredits) {
//   const totalPrice = quantity * pricePerDroid;
//   if (totalPrice > customerCredits) {
//     return "Insufficient funds!";
//   } else {
//     return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
//   }
// }

////////////////////////////////////////////////////////// array //////////////////////////////////////////////////////////////////

// function getOrderQuantity(order) {
//   const elements = order.length;
//   return elements;
// }
// console.log(getOrderQuantity(["fruit", "banana", "apple"]));

// function getLastElementMeta(array) {
//   const lastElementIndex = array.length - 1;
//   const lastElement = array[lastElementIndex];
//   return [lastElementIndex, lastElement];
// }
// console.log(getLastElementMeta(["apple", "fruit", "cigarettes"]));

// function getExtremeElements(array) {
//   const lastElement = array[array.length - 1];
//   return [array[0], lastElement];
// }
// console.log(getExtremeElements(["first", "second", "third"]));

///////////////////////// join / split /////////////////////////
// function getLength(array) {
//   const stringArray = array.join("");
//   return stringArray.length;
// }
// console.log(getLength(["i", "love", "justin", "biber"]));

// function calculateEngravingPrice(message, pricePerWord) {
//   const letters = message.split(" ");
//   const lettersNumber = letters.length;
//   return lettersNumber * pricePerWord;
// }
// console.log(calculateEngravingPrice("I love you Biber", 10));

/////////// slice ////////////
// const fruits = ["apple", "plum", "pear", "orange", "banana"];

// const firstTwoEls = fruits.slice(0, 3);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(1, 3);
// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

//////////////////////////// concat ////////////////////////

// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Peach", "Houston"];
// const allClients = oldClients.concat(newClients);
// console.log(allClients);

// ////////////////// indexOf /////////////////
// const clients = ["Mango", "Ajax", "Poly", "Kiwi", "Poly"];
// console.log(clients.indexOf("Poly"));
// console.log(clients.indexOf("Monkong"));

// function getSlice(array, value) {
//   const elementIndex = array.indexOf(value);
//   if (elementIndex === -1) {
//     return "i love biber";
//   } else {
//     return array.slice(0, elementIndex + 1);
//   }
// }
// console.log(getSlice(["polly", "dobby", "daniel"], "dobby"));

//////////////// push ///////////////////////
// function createArrayOfNumbers(min, max) {
//   const integralNumber = [];
//   for (min; min <= max; min += 1) {
//     integralNumber.push(min);
//   }
//   return integralNumber;
// }
// console.log(createArrayOfNumbers(10, 20));

// const test = [];
// const max = 10;
// const min = 2;
// for (let i = 0; i < max; i += 1) {
//   test.push(`${i}`);
// }
// console.log(test);

// const tags = [];

// for (let i = 0; i < 3; i += 1) {
//   tags.push(`${i}`);
// }

// console.log(tags);

// const list = ["love", "hate", "peace"];
// for (i = 0; i < list.length; i++) {
//   console.log(list[i]);
// }

// add all elements

// function calculateTotalPrice(order) {
//   let general;
//   for (i = 0; i < order.length - 1; i++) {
//     general = order + order[i];
//     console.log(general);
//   }
// }
// console.log(calculateTotalPrice([10, 85, 16, 5, 10, 12]));

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i++) {
//     total += order[i];
//   }
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

//////////// push ///////////////////////
// function createArrayOfNumbers(min, max) {
//   const integralNumber = [];
//   for (min; min <= max; min += 1) {
//     integralNumber.push(min);
//   }
//   return integralNumber;
// }
// console.log(createArrayOfNumbers(10, 20));

// function getEvenNumbers(start, end) {
//   const numbers = [];
//   for (start; start <= end; start++) {
//     if (start % 2 === 0) {
//       numbers.push(start);
//     }
//   }
//   return numbers;
// }
// console.log(getEvenNumbers(7, 20));

/////////////////////////////// includes //////////////////////////////

// function checkStorage(storage, item) {
//   const itemLowerCase = item.toLowerCase();
//   if (storage.includes(itemLowerCase)) {
//     return `${itemLowerCase} is available to order!`;
//   } else {
//     return `Sorry! We are out of stock!`;
//   }
// }
// console.log(checkStorage(["apple", "plum", "pear"], "donut"));

// function checkForName(fullName, firstName) {
//   const fullNameLower = fullName.toLowerCase();
//   const firstNameLower = firstName.toLowerCase();
//   const compare = fullNameLower.includes(firstNameLower);
//   return compare;
// }
// console.log(checkForName("jacob vanilla", "Liza"));

// function checkForSpam(message) {
//   const lowerCaseMessage = message.toLowerCase();
//   const forbiddenWords =
//     lowerCaseMessage.includes("sale") || lowerCaseMessage.includes("spam");
//   return forbiddenWords;
// }

// function getCommonElements(array1, array2) {
//   const commonElements = [];
//   for (let i = 0; i < array1.length; i++) {
//     if (array2.includes(array1[i])) {
//       commonElements.push(array1[i]);
//     }
//   }
//   return commonElements;
// }
// console.log(getCommonElements([1, 4, 6, 8], [4, 5, 7, 8]));

///////////////////// for ... of /////////////////////
// function calculateTotalPrice(order, number) {
//   let total = [];
//   for (const price of order) {
//     if (price > number) {
//       total.push(price);
//     }
//   }
//   return total;
// }
// console.log(calculateTotalPrice([1, 5, 5], 3));

///////////////////////////////////////////////// arguments (to reversed) //////////////////////////////////////////////

// function createReversedArray() {
//   const reveresdArray = Array.from(arguments);
//   return reveresdArray.toReversed();
// }

// console.log(createReversedArray(12, 17, 21));

// function calculateTax(amount, taxRate = 0.2) {
//   const tax = amount * taxRate;
//   return tax;
// }
// console.log(calculateTax(100));

// Напиши функцію яка на основі масиву користувачів що поставили лайк формує та повертає рядок.
// Функцію має повернути текст, як вказано у прикладах:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// function createStr(arr) {

// }

// console.log(createStr([]));
// console.log(createStr(["Peter"]));
// console.log(createStr(["Jacob", "Alex"]));
// console.log(createStr(["Max", "John", "Mark"]));
// console.log(createStr(["Mark", "Alex", "Jacob", "Mark"]));

// function users(likedUsers) {
//   firstName = likedUsers[0];
//   secondName = likedUsers[1];
//   thirdName = likedUsers[2];
//   if (likedUsers.length === 0) {
//     return `no one likes this`;
//   } else if (likedUsers.length === 1) {
//     return `${firstName} likes this`;
//   } else if (likedUsers.length === 2) {
//     return `${firstName} and ${secondName} likes this`;
//   } else if (likedUsers.length === 3) {
//     return `${firstName}, ${secondName} and ${thirdName} likes this`;
//   } else {
//     return `${firstName}, ${secondName} and ${
//       likedUsers.length - 2
//     } others likes this`;
//   }
// }
// console.log(users([]));
// console.log(users(["Peter"]));
// console.log(users(["Jacob", "Alex"]));
// console.log(users(["Max", "John", "Mark"]));
// console.log(users(["Mark", "Alex", "Jacob", "Mark"]));

// WHAT DO WE NEED ... if array length = 1 , we have to write value + text , if 2 - values + text + "and" between values
// if 3 then values + text + end between values, if 4 first 2 values + length of other values + text

// function user(love) {
//   love.splice(2, 0, "and");
//   return love;
// }
// console.log(user(["max", "nikia", "vova", "kolya", "masha"]));
// a = [4, 5, 6];
// console.log(a.slice());
// console.log(a[0])

// console.log(a);

// const a = [1, 2, 3, "hello"];

// console.log(a.splice(1, 1, 98, 97));
// a.splice(2, 0, [{ value: true }]);
// console.log(a);

/////////////////////////////////////////////////////////// object metods //////////////////////////////////////////////////////

// const atTheOldToad = {
//   potions: [],
//   getPotions() {
//     return "List of all available potions";
//   },
//   addPotion(potionName) {
//     return `Adding ${potionName}`;
//   },
// };
// console.log(atTheOldToad.addPotion("Invisibility"));

//////////////////////////////////////////////////////////// objects ///////////////////////////////////////////////////////////

// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   name,
//   price,
//   image,
//   tags,
// };

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.area = 60;
// apartment.rooms= 3;
// apartment.location ={
//   country: "Jamaica",
//     city: "Kingston",
// }

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// const aptRating = apartment["rating"];
// const aptDescr = apartment["descr"];
// const aptPrice = apartment["price"];
// const aptTags = apartment["tags"];

///////////////////////////////////////////////// for in //////////////////////////////////////

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = [];
// const values = [];
// for (const meaning in apartment) {
//   keys.push(meaning);
//   values.push(apartment[meaning]);
// }
// console.log(values);
// console.log(keys);

///////////////////////////////////////// object.keys() + for ... of ////////////////////////////////////////////

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);

// for (let meaning of keys) {
//   values.push(apartment[meaning]);
// }
// console.log(values);
// console.log(keys);)

// function countProps(object) {
//   let propCount = 0;
//   let keys = Object.keys(object);
//   console.log(keys);
//   for (let meaning of keys) {
//     if (object.hasOwnProperty(meaning)) {
//       propCount += 1;
//     }
//   }
//   return propCount;
// }
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({}));

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

////////////////////////////////////////////// Object.values() ///////////////////////////////////////

// const keys = Object.keys(apartment);
// const values = Object.values(apartment);
// console.log(keys);
// console.log(values);

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   const values = Object.values(salaries);
//   console.log(values);
//   for (let i = 0; i < values.length; i++) {
//     totalSalary += values[i];
//   }
//   return totalSalary;
// }
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

/////////////////////////////////////// for...of////////////////////////////////////////

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];
// for (const color of colors) {
//   const hexColors = [color.hex];
//   const rgbColors = [color.rgb];
//   console.log(hexColors);
//   console.log(rgbColors);
// }

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//   }
//   return null;
// }
// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Grip"));
// console.log(getProductPrice("Scanner"));
// console.log(getProductPrice("Droid"));
// console.log(getProductPrice("Engine"));

// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   const productSearch = [];

//   for (const product of products) {
//     switch (propName) {
//       case "name":
//         productSearch.push(product.name);
//         break;
//       case "price":
//         productSearch.push(product.price);
//         break;
//       case "quantity":
//         productSearch.push(product.quantity);
//         break;
//     }
//   }
//   return productSearch;
// }
// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));

// function calculateTotalPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   for (let product of products)
//     if (product.name === productName) {
//       return product.price * product.quantity;
//     }
//   return `Product ${productName} not found `;
// }
// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Droid"));
// console.log(calculateTotalPrice("Grip"));
// console.log(calculateTotalPrice("Scanner"));
// console.log(calculateTotalPrice("Blaster"));

// ///////////////////////////////////////// this //////////////////////////////////////////////

// const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],
//   getPotions() {
//     return this.potions;
//   },
// };
// console.log(atTheOldToad.getPotions());

// const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     this.potions.push(potionName);
//   },
// };
// atTheOldToad.addPotion("love");
// console.log(atTheOldToad.getPotions());

// //////////////////////////////////////////// for of + this + push ////////////////////////////////////////////

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     this.potions.push(newPotion);
//   },
//   getTotalPrice() {
//     let totalPrice = 0;
//     for (const potion of this.potions) {
//       totalPrice += potion.price;
//     }
//     return totalPrice;
//   },
// };

// atTheOldToad.addPotion({ name: "Power potion", price: 270 });
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.getTotalPrice());

// ////////////////////////// for of === ///////////////////////////////

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       if (potion.name === oldName) {
//         potion.name = newName;
//       }
//     }
//   },
// };
// atTheOldToad.updatePotionName("Stone skin", "Invisibility");
// console.log(atTheOldToad.getPotions());

/////////////////////////////////////////////////// rest (...args) /////////////////////////////////////////////////////

// function add(...args) {
//   let amount = 0;
//   for (const arg of args) {
//     amount += arg;
//   }
//   return amount;
// }
// console.log(add(15, 27));

// function addOverNum(firstNumber, ...args) {
//   let amount = 0;
//   for (const number of args) {
//     if (number > firstNumber) {
//       amount += number;
//     }
//   }
//   return amount;
// }
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// console.log(addOverNum(50, 15, 27));

/////////////////////////////////////////////// tempt (...spread)///////////////////////////////////////

// function getExtremeScores(scores) {
//   const object = { best: Math.max(...scores), worst: Math.min(...scores) };
//   return object;
// }
// console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26]));

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [
//   ...firstGroupScores,
//   ...secondGroupScores,
//   ...thirdGroupScores,
// ];

// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);
// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);

// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };

// const finalSettings = { ...defaultSettings, ...overrideSettings };

// ////////////////////////////////////////////// callback functions //////////////////////////////////////////////////

// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }

// const result = makePizza();
// const pointer = makePizza;
// console.log(result);
// console.log(pointer);

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

////////////////////////////////////// inline callback ///////////////////////////////////////

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}`);
// });

// Доповнений виклик makePizza з інлайн колбек-функцією
// makePizza("Ultracheese", function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}`);
// });

//////////////////////////////////////////////// forEach //////////////////////////////////////////
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (number) {
//     totalPrice += number;
//   });

//   return totalPrice;
// }
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// function filterArray(numbers, value) {
//   let suitNumbers = [];
//   numbers.forEach(function (number, index) {
//     if (number > value) {
//       suitNumbers.push(number);
//     }
//   });
//   return suitNumbers;
// }
// console.log(filterArray([12, 24, 8, 41, 76], 38));

////////////////////////////////////////////////////////////// arrow function//////////////////////////////////////////////////
// const add = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// };

////////////// implcit return ///////////
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });

//   return totalPrice;
// };
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   return filteredNumbers;
// };

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

/////////////////////////////////////// pure function ////////////////////////////////////////////////////

// function changeEven(numbers, value) {
//   const rightNumbers = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       rightNumbers.push(numbers[i] + value);
//     } else {
//       rightNumbers.push(numbers[i]);
//     }
//   }
//   return rightNumbers;
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
// console.log(changeEven([17, 24, 68, 31, 42], 100));

//////////////////////////////////////////// map /////////////////////////////////
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsLengths = planets.map((planets) => planets.length);

// console.log(planetsLengths);

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsInUpperCase = planets.map((planet) => planet.toUpperCase());
// console.log(planetsInUpperCase); // ["EARTH", "MARS", "VENUS", "JUPITER"]

// const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
// console.log(planetsInLowerCase); // ["earth", "mars", "venus", "jupiter"]

// // Оригінальний масив не змінився
// console.log(planets); // ["Earth", "Mars", "Venus", "Jupiter"]

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const titles = books.map((book) => book.title);

// console.log(titles);

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// const names = students.map((student) => student.name);
// console.log(names); // ["Mango", "Poly", "Ajax", "Kiwi", "Houston"]

/////////////////////////////////////// floatMap //////////////////////////////////////

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];

// const genres = books.flatMap((book) => book.genres);
// console.log(genres);

// const getUserEmails = (users) => {
//   const emails = users.map((user) => user.email);
//   return emails;
// };

// console.log(
//   getUserEmails([
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       skills: ["ipsum", "lorem"],
//       gender: "male",
//       age: 37,
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//       gender: "female",
//       age: 34,
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//       gender: "male",
//       age: 24,
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       skills: ["adipisicing", "irure", "velit"],
//       gender: "female",
//       age: 21,
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       skills: ["ex", "culpa", "nostrud"],
//       gender: "male",
//       age: 27,
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       skills: ["non", "amet", "ipsum"],
//       gender: "male",
//       age: 38,
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       skills: ["lorem", "veniam", "culpa"],
//       gender: "female",
//       age: 39,
//     },
//   ])
// );

///////////////////////////////////////// filter //////////////////////////////////////
const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

const evenNumbers = numbers.filter((number) => !(number % 2));
const oddNumbers = numbers.filter((number) => number % 2);
console.log(numbers);
console.log(evenNumbers);
console.log(oddNumbers);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";

// const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter((name) => name.author === AUTHOR);

// console.log(topRatedBooks);
// console.log(booksByAuthor);

// const getUsersWithEyeColor = (users, color) => {
//   const sameEyes = users.filter((user) => user.eyeColor === color);
//   return sameEyes;
// };
// console.log(
//   getUsersWithEyeColor(
//     [
//       {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//
//       },
//       {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//
//       },
//       {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//
//       },
//       {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//
//       },
//       {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//
//       },
//       {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//
//       },
//       {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//       },
//     ],
//     "blue"
//   )
// );

// const getUsersWithAge = (users, minAge, maxAge) => {
//   const acceptebleAge = users.filter(
//     (user) => minAge <= user.age && user.age <= maxAge
//   );
//   return acceptebleAge;
// };

// console.log(
//   getUsersWithAge(
//     [
//       {
//         name: "Moore Hensley",
//         age: 37,
//       },
//       {
//         name: "Sharlene Bush",
//         age: 34,
//       },
//       {
//         name: "Ross Vazquez",
//         age: 24,
//       },
//       {
//         name: "Elma Head",
//         age: 21,
//       },
//       {
//         name: "Carey Barr",
//         age: 27,
//       },
//       {
//         name: "Blackburn Dotson",
//         age: 38,
//       },
//       {
//         name: "Sheree Anthony",
//         age: 39,
//       },
//     ],
//     80,
//     100
//   )
// );

/////////////////////////////// find ///////////////////////////
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// ];
// const BOOK_TITLE = "The Dream of a Ridiculous Man";
// const AUTHOR = "Robert Sheckley";
// const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
// const bookByAuthor = books.find((name) => name.author === AUTHOR);
// console.log(bookWithTitle);
// console.log(bookByAuthor);

// const getUserWithEmail = (users, email) => {
//   const userEmail = users.find((user) => user.email === email);
//   return userEmail;
// };

// console.log(
//   getUserWithEmail(
//     [
//       {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//       },
//       {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//       },
//       {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//       },
//       {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//       },
//       {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//       },
//       {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//       },
//       {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//       },
//     ],
//     "sharlenebush@tubesys.com"
//   )
// );

///////////////////////////////////////////////////////// every //////////////////////////////////////////////////

// const isEveryUserActive = (users) => {
//   const userOnline = users.every((user) => user.isActive === true);
//   return userOnline;
// };
// console.log(
//   isEveryUserActive([
//     {
//       isActive: true,
//       balance: 2811,
//       gender: "male",
//     },
//     {
//       isActive: true,
//       balance: 3821,
//       gender: "female",
//     },
//     {
//       isActive: true,
//       balance: 3793,
//       gender: "male",
//     },
//     {
//       isActive: true,
//       balance: 2278,
//       gender: "female",
//     },
//     {
//       isActive: true,
//       balance: 3951,
//       gender: "male",
//     },
//     {
//       isActive: true,
//       balance: 1498,
//       gender: "male",
//     },
//     {
//       isActive: true,
//       balance: 2764,
//       gender: "female",
//     },
//   ])
// );

//////////////////////////////////////////// some ///////////////////////////////
// const isAnyUserActive = (users) => {
//   const active = users.some((user) => user.isActive === true);
//   return active;
// };

//////////////////////////////////// reduce //////////////////////////////

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]

// const totalPlayTime = playtimes.reduce((previousValue, number) => {
//   return previousValue + number;
// });

// const averagePlayTime = totalPlayTime / playtimes.length;
// console.log(averagePlayTime);
// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
//   const averagePlaytimePerGame = player.playtime / player.gamesPlayed;
//   return acc + averagePlaytimePerGame;
// }, 0);

// console.log(totalAveragePlaytimePerGame);

// const calculateTotalBalance = (users) =>
//   users.reduce((total, user) => {
//     return total + user.balance;
//   }, 0);
// console.log(
//   calculateTotalBalance([
//     { balance: 2811 },
//     { balance: 3821 },
//     { balance: 3793 },
//     { balance: 2278 },
//   ])
// );

/////////////////////////////////////////////////////////// .toSorted() /////////////////////////////////////////////////
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];

// const ascendingReleaseDates = releaseDates.toSorted();

// const alphabeticalAuthors = authors.toSorted();

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

// const ascendingReleaseDates = releaseDates.toSorted((a, b) => a - b);

// const descendingReleaseDates = releaseDates.toSorted((a, b) => b - a);

//////////////////////////////////////// localeCompare //////////////////////////////////////////
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];

// const authorsInAlphabetOrder = authors.toSorted((a, b) => a.localeCompare(b));

// const authorsInReversedOrder = authors.toSorted((a, b) => b.localeCompare(a));

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     rating: 7.94,
//   },
//   {
//     title: "Enemy of God",
//     author: "Bernard Cornwell",
//     rating: 8.67,
//   },
// ];

// const sortedByAuthorName = books.toSorted((firstBook, lastBook) =>
//   firstBook.author.localeCompare(lastBook.author)
// );

// const sortedByReversedAuthorName = books.toSorted((firstBook, lastBook) =>
//   lastBook.author.localeCompare(firstBook.author)
// );

// const sortedByAscendingRating = books.toSorted(
//   (low, high) => low.rating - high.rating
// );

// const sortedByDescentingRating = books.toSorted(
//   (low, high) => high.rating - low.rating
// );

// console.log(sortedByAuthorName);

// console.log(sortedByReversedAuthorName);

// console.log(sortedByAscendingRating);

// console.log(sortedByDescentingRating);

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;

const names = books
  .filter((book) => book.rating > MIN_BOOK_RATING)
  .map((book) => book.author)
  .toSorted((a, b) => a.localeCompare(b));

console.log(names);
