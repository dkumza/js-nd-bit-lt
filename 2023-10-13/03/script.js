let coinFlip = 0;
let heads = 0;
let tails = 0;
let totalFlipps = 1;
let howManyTimesFlipping = 10;

// * DOM container
let mainContainer = document.querySelector(".main-container");
console.log(mainContainer);
let counterEle = document.querySelector(".counter");

// * random ciklas
function rand(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1) + min);
}

// * flipping coin
let flippingCoin = (x) => {
   counterEle.innerText = `Moneta buvo metama: ${x} karta/us, ir iskrito sios monetos puses:`;
   for (let i = 0; i < x; i++) {
      console.log(totalFlipps++);
      let headsOrTails = rand(0, 1);
      // ? compare head or tail is flipped
      //? if rand = 0 - heads, else - tails
      if (headsOrTails === 0) {
         heads++;
         console.log("heads", heads);
         let paraEle = document.createElement("p");
         paraEle.innerText = "heads";
         mainContainer.appendChild(paraEle);
      } else {
         tails++;
         console.log("tails", tails);
         let paraEle = document.createElement("p");
         paraEle.innerText = "tails";
         mainContainer.appendChild(paraEle);
      }
      // ? #1 loop is stopped when head is up
      // if (heads === 1) {
      //    break;
      // }
      // ? #2 loop is stopped when 3 head in a row
      // if (heads === 3) {
      //    break;
      // }
      // ? #3 loop is stopped wehn 3 heads in row
      if (heads === 3 && tails === 0) {
         break;
      }
   }
};

flippingCoin(howManyTimesFlipping);

// let flippingCoin = rand(0, 1);
