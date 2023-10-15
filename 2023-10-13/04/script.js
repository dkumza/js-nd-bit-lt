// * random ciklas
function rand(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1) + min);
}

// * DOM selector
let mainContainer = document.querySelector(".main-container");
console.log(mainContainer);

let name1 = "Kazys";
let name2 = "Petras";
let pointsofName1 = 0;
let pointsofName2 = 0;
let maxPointsAllowed = 221;
let playing = true;

// ? create game status function
let gameStatus = (name1, name2, points1, points2) => {
   let newPara = document.createElement("p");
   newPara.classList.add("name-about");
   newPara.innerText = `Žaidėjo ${name1} surinkti taškai: ${points1}. O žaidėjo ${name2} surinkti taškai: ${points2}`;
   mainContainer.appendChild(newPara);
};

// ? function to announce winner
let winnerIs = (winnerName) => {
   let newParaForWin = document.createElement("p");
   newParaForWin.classList.add("winner");
   newParaForWin.innerText = `Partiją laimėjo: laimėtojo ${winnerName}​`;
   mainContainer.appendChild(newParaForWin);
};

let playGame = () => {
   while (playing) {
      pointsofName1 += rand(10, 25);
      pointsofName2 += rand(5, 25);

      if (pointsofName1 >= maxPointsAllowed) {
         // * how many points each player have - printed to DOM
         gameStatus(name1, name2, pointsofName1, pointsofName2);
         // * winner is printed to DOM
         winnerIs(name1);
         break;
      } else if (pointsofName2 >= maxPointsAllowed) {
         // * how many points each player have - printed to DOM
         gameStatus(name2, name1, pointsofName2, pointsofName1);
         // * winner is printed to DOM
         winnerIs(name2);
         break;
      }
   }
};

playGame();
