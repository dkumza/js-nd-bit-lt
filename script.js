// 1 uzduotis
// let symbol = "*";
// let result = "";
// let maxSymbols = 400;
// let maxSymbolsInLine = 50;

// console.log(mainContainer);

// A print 400 symbols
// for (let i = 0; i < 400; i++) {
//    result += symbol;
// }
// console.log(result);

// for (let i = 0; i <  i++) {
// let newLine = document.createElement("p");
// newLine.classList.add("new-line");
// newLine.textContent = `${result.split("").join(" ")}`;
// mainContainer.appendChild(newLine);
// }

// B print 400 symbols
// for (let i = 0; i < 400; i++) {
//    result += symbol;
// }

// let cutEveryN = result.match(/.{1,50}/g) || [];

// // console.log(typeof cutEveryN);

// // console.log(typeof cutEveryN[0]);

// n = 0;

// for (let key of cutEveryN) {
//    console.log(key);
//    let newLine = document.createElement("p");
//    newLine.classList.add("new-line");
//    newLine.textContent = `${key}`;
//    mainContainer.appendChild(newLine);
// }

// 2
function rand(min, max) {
   min = Math.ceil(min);

   max = Math.floor(max);

   return Math.floor(Math.random() * (max - min + 1) + min);
}

// let randN = rand(1, 6);
// // document.write(`<h3>${randN}</h3>`);

// newLine.textContent = `${randN}`;

// 3

// let color = "";

// let mainContainer = document.querySelector(".main-container");
// function createPElement(color, number) {
//    let newLine = document.createElement("p");
//    newLine.classList.add(`new-line`);
//    newLine.classList.add(`${color}`);
//    newLine.textContent = `${number}`;
//    mainContainer.appendChild(newLine);
// }

// for (let i = 0; i < 3; i++) {
//    let randN = rand(-10, 10);
//    if (randN < 0) {
//       color = "red";
//       number = createPElement(color, randN);
//    } else if (randN === 0) {
//       color = "green";
//       number = createPElement(color, randN);
//    } else {
//       color = "blue";
//       number = createPElement(color, randN);
//    }
// }

// 4 Sukurkite kintamąjį su stringu: “An American in Paris”. Jame ištrinti visas balses.
// Rezultatą atspausdinti. Kodą pakartoti su stringais:
// “Breakfast at Tiffany's”, “2001: A Space Odyssey” ir “It's a Wonderful Life”.

// let string1 = "An American in Paris";
// let string2 = "Breakfast at Tiffany's";
// let string3 = "2001: A Space Odyssey";
// let string4 = `It's a Wonderful Life`;

// let balses = "AaIiYyOoUu";

// // function to remove balses from strings with Regex
// let replacedString1 = string1.replaceAll(/[`AaIiYyOoUu`]/g, "");
// let replacedString2 = string2.replaceAll(/[`AaIiYyOoUu`]/g, "");
// let replacedString3 = string3.replaceAll(/[`AaIiYyOoUu`]/g, "");
// let replacedString4 = string4.replaceAll(/[`AaIiYyOoUu`]/g, "");

// console.log(replacedString1, replacedString2, replacedString3, replacedString4);

// 5 Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300,
// atspausdinkite juos atskirtus tarpais ir suskaičiuokite kiek tarp jų yra didesnių už 150.
// Skaičiai didesni nei 275 turi būti raudonos spalvos.

// declare varaibles
let saveNumbers = [];
let noDots = "";
let moreThen150 = 0;

let zeroTo300 = (n) => {
   for (let i = 0; i < n; i++) {
      let randN = rand(0, n);
      if (randN <= 275) {
         saveNumbers.push(randN);
      } else saveNumbers.push(`<span>${randN}</span>`);
   }
   return saveNumbers;
};

zeroTo300(300);
// console.log(saveNumbers);

// function to generate 300 numbers from 0 to 300
// let zeroTo300 = () => {
//    for (let i = 0; i < 300; i++) {
//       let randN = rand(0, 300);
//       saveNumbers.push(randN);
//    }
//    return saveNumbers;
// };

// function to check number more then 275 and add span around number
// let moreThen275 = (saveNumbers) => {
//    let newValue = 0;
//    console.log(saveNumbers);
//    for (let key in saveNumbers) {
//       if (saveNumbers[key] > 275) {
//          console.log(saveNumbers[key]);
//          saveNumbers[key] = `<span>${newValue}<span>`;
//          // letObjectToArray.replace(key, `<span>${key}<span>`);
//       }
//    }
// console.log(spanNumbers);
// };

// moreThen275(saveNumbers);

// console.log(saveNumbers);

// function to check numbers more then 150
let moreThen = (saveNumbers) => {
   for (let key of saveNumbers) {
      if (key > 150) {
         moreThen150++;
      }
   }
   return moreThen150;
};
moreThen(saveNumbers);

// print moreThen150 to DOM
let printToDom150 = (moreThen150) => {
   let mainContainer = document.querySelector(".main-container");
   let newLine = document.createElement("p");
   newLine.classList.add(`new-line`);
   newLine.innerText = `${moreThen150}`;
   mainContainer.appendChild(newLine);
};
printToDom150(moreThen150);

// function to convert object to array and cut out " , " from array and replace with space = " "
let toArray = (saveNumbers) => {
   // convert object to array
   letObjectToArray = String(saveNumbers);
   // cut out , from array and replace with space
   noDots = letObjectToArray.split(",").join(" ");
   return noDots, letObjectToArray;
};
toArray(saveNumbers);

// function to print all random numbers in html DOM element
let printToDOM = (noDots) => {
   let mainContainer = document.querySelector(".main-container");
   let newLine = document.createElement("p");
   newLine.classList.add(`new-line`);
   newLine.innerHTML = `${noDots}`;
   mainContainer.appendChild(newLine);
   // test = newLine.textContent;
};
printToDOM(noDots);

// function to search for all numbers more then 275

//  6

let randNumbers = [];

let zeroToN = (m, n) => {
   for (m; m < n; m++) {
      let randN = rand(0, n);
      if (randN % 77 === 0) {
         randNumbers.push(randN);
      }
   }
   return randNumbers;
};

zeroToN(1, 3000);
// console.log(randNumbers);

// function to convert object to array and cut out " , " from array and replace with space = " "
// toArray = (randNumbers) => {
//    console.log(randNumbers);
//    // convert object to array
//    randNumbers = String(randNumbers);
//    // cut out , from array and replace with space
//    noDots = randNumbers.split(",").join(" ");
//    return noDots;
// };

toArray(randNumbers);

// print to dom
let toDom77 = (noDots) => {
   let mainContainer = document.querySelector(".main-container");
   let newLine = document.createElement("p");
   newLine.classList.add(`new-line`);
   newLine.innerHTML = `${noDots}`;
   mainContainer.appendChild(newLine);
};

toDom77(noDots);
