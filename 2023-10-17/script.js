function rand(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1) + min);
}

let array100 = [];
let over5kPrimes = [];

const createArray = (ele, x, y) => {
   for (let i = 0; i < ele; i++) {
      array100.push(rand(x, y));
   }
};

createArray(100, 997, 15991);

let over5k = array100.filter((val) => val > 5000);
console.log("over 5k left:", over5k.length);

const isPrime = (num) => {
   for (let i = 2; i < num; i++) if (num % i === 0) return false;
   return num !== 1;
};

over5k.forEach((val) => {
   if (isPrime(val)) {
      over5kPrimes.push(val);
   }
});

console.log("prime numbers left:", over5kPrimes.length);
console.log(over5kPrimes);
