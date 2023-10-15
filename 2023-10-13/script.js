let symbol = "*";
let xAxis = 100;
let yAxis = 100;
let oneLineOfSymbols = "";
let dataSet = {};
// ? DOM main container
let mainContainer = document.querySelector(".main-container");
// console.log(mainContainer);

// ? function to create string with X symbols
let xOfN = (xAxis) => {
   for (let i = 0; i < xAxis; i++) {
      oneLineOfSymbols += symbol;
   }
   return oneLineOfSymbols;
};
// console.log(xOfN(xAxis));

let firstLine = xOfN(xAxis);
let txtLenght = firstLine.length;
console.log(txtLenght);

// ? function to create Y lines of X symbols to paragraph
let yOfN = (y, firstLine) => {
   for (let i = 1; i <= y; i++) {
      let newPara = document.createElement("p");
      newPara.setAttribute("id", i);
      newPara.innerText = firstLine;
      mainContainer.appendChild(newPara);
   }
};

yOfN(yAxis, firstLine);

//  ? make each created paragraph string as array;
let toArray = (id) => {
   let eleID = document.getElementById(id);
   let textOfID = eleID.innerText;

   return textOfID.split("");
};

// ? show all ID's of created para elements

let showID = (yAxis, toArray) => {
   for (let i = 1; i <= yAxis; i++) {
      console.log(toArray(i));
      // let eleID = document.getElementById(i);
      // let textOfID = eleID.innerText;
      // console.log(textOfID);
   }
};

showID(yAxis, toArray);

// console.log(xAxisOf100.split(""));
