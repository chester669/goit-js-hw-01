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

// console.log(" i love plants");
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

// function checkPassword(password) {
//   const correctPassword = "jqueryismyjam";
//   return (checkPassword =
//     password === correctPassword
//       ? "Access granted"
//       : "Access denied, wrong password!");
// }

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
//   return numberInclude;
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

function getShippingCost(country) {
  let price;

  switch (country) {
    case "China":
      price = 100;
      break;
    case "Chile":
      price = 250;
      break;
    case "Australia":
      price = 170;
      break;
    case "Jamaica":
      price = 120;
      break;
    default:
      return "Sorry, there is no delivery to your country";
  }
  return (message = `Shipping to ${country} will cost ${price} credits`);
}

function checkForSpam(message) {
  const lowerCaseMessage = message.toLowerCase();
  const forbiddenWords =
    lowerCaseMessage.includes("sale") || lowerCaseMessage.includes("spam");
  return forbiddenWords;
}

function formatMessage(message, maxLength) {
  const messageSymbols = message.length;
  if (messageSymbols > maxLength) {
    message = message.slice(0, maxLength);
    return message + "...";
  } else {
    return message;
  }
}

function makeTransaction(quantity, pricePerDroid, customerCredits) {
  const totalPrice = quantity * pricePerDroid;
  if (totalPrice > customerCredits) {
    return "Insufficient funds!";
  } else {
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
  }
}
