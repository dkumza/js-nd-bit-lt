// 1 Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą
// ir pavardę kaip stringus (Jonas Jonaitis). Atspausdinti trumpesnį stringą:

console.log("**1 uzduotis:**");

let firstPerson = "Edward Norton";
let secondPerson = "Matthew McConaughey";

let firstPersonLength = firstPerson.length;
let secondPersonLength = secondPerson.length;

if (firstPersonLength < secondPersonLength) {
   console.log(firstPerson);
} else console.log(secondPerson);

// 2 Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus).
// Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių
// ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
// "Aš esu Vardenis Pavardenis. Man yra XX metai(ų)".

console.log("");
console.log("**2 uzduotis:**");

let personName = "Darius";
let personLastName = "Kumža";
let personBornYear = 1989;
let yearNow = 2023;

let personAge = yearNow - personBornYear;
console.log(
   `Aš esu ${personName} ${personLastName}. Man yra ${personAge} metai(ų)`
);

// 3 Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus.
// Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš trijų paskutinių vardo ir pavardės kintamųjų raidžių.
// Jį atspausdinti.

console.log("");
console.log("**3 uzduotis:**");

let celebName = "Matthew";
let celebLastName = "McConaughey";
let lastOfNames = celebName.slice(-3) + celebLastName.slice(-3);
console.log(lastOfNames);

// 4 Sukurti kintamąjį su stringu: “Once upon a time in hollywood”.
// Jame visas “o” (didžiąsias ir mažąsias) pakeisti žvaigždutėm “*”.
// Rezultatą atspausdinti.

console.log("");
console.log("**4 uzduotis:**");
let longString = "Once upon a time in hollywood";
let changeString = longString.toLowerCase();
console.log(changeString.replaceAll("o", "*"));

// 5 Sukurkite keturis kintamuosius kuriems sugeneruokite atsitiktines reikšmes nuo 0 iki 2.
// Suskaičiuokite kiek yra nulių, vienetų ir dvejetų.
console.log("");
console.log("**5 uzduotis:**");

function rand(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1) + min);
}

let zero = 0;
let one = 0;
let two = 0;

for (let i = 0; i < 4; i++) {
   let randNumber = rand(0, 2);
   console.log("random number:", randNumber);
   if (randNumber === 0) {
      zero++;
   } else if (randNumber === 1) {
      one++;
   } else two++;
}

console.log("zero:", zero, "one:", one, "two:", two);

// 6 Pasinaudokite atsitiktinio skaičiaus generavimo funkcija.
// Sukurkite du kintamuosius ir naudodamiesi funkcija jiems priskirkite atsitiktines reikšmes nuo 0 iki 4.
// Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.
console.log("");
console.log("**6 uzduotis:**");

let sum = 0;
let x1 = rand(0, 4);
let x2 = rand(0, 4);
console.log(x1, x2);

if (x1 > x2) {
   sum = x1 / x2;
} else sum = x2 / x1;

console.log(sum.toFixed(2));

// 7 Naudokite funkciją ir sukurkite tris kintamuosius kuriems priskirkite atsitiktines reikšmes nuo 0 iki 25.
// Raskite ir atspausdinkite vidurinę reikšmę.
console.log("");
console.log("**7 uzduotis:**");

let y1 = rand(0, 25);
let y2 = rand(0, 25);
let y3 = rand(0, 25);
console.log(y1, y2, y3);
// add all 3 numbers, then minus min number and min max value
let middle = y1 + y2 + y3 - Math.min(y1, y2, y3) - Math.max(y1, y2, y3);
console.log(middle);

// 8 Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus.
// Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš pirmų vardo ir pavardės kintamųjų raidžių.
// Jį atspausdinti.

// 9
console.log("");
console.log("**8 uzduotis:**");

let firstOfNames = celebName[0] + celebLastName[0];
console.log(firstOfNames);

console.log("");
console.log("**9 uzduotis:**");

function randomString(length, chars) {
   let result = "";
   for (let i = length; i > 0; --i)
      result += chars[Math.floor(Math.random() * chars.length)];
   return result;
}
let rString = randomString(3, "abcdefghijklmnopqrstuvwxyz");

console.log(rString);
