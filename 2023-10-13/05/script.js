// * random ciklas
function rand(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1) + min);
}

// * DOM selector
let mainContainer = document.querySelector(".main-container");
// console.log(mainContainer);

let nailLength = 85;
let numberOFNails = 5;
let countHits = 0;

//  ? “Įkalkite” 5 vinis mažais smūgiais.
let hitNails = (numberOFNails, nailLength, countHits) => {
   for (let i = 1; i <= numberOFNails; i++) {
      for (let i = 0; i <= nailLength; i++) {
         // ! a variantas
         // ! i += rand(5, 20);
         // ? b variantas
         i += rand(20, 30);
         // ?! a variantas
         // ! let missOrNo = rand(1, 1);
         // ? b variantas
         let missOrNo = rand(0, 1);
         console.log(missOrNo);
         countHits += missOrNo;
      }
      console.log(`ikalta ${i} vinis, viso ${countHits} smūgiai`);
   }
   return countHits;
};
let resultOfHits = hitNails(numberOFNails, nailLength, countHits);

document.write(
   `ikalta/os ${numberOFNails} vinis/ių, viso ${resultOfHits} smūgių`
);

// console.log(resultOfHits);
