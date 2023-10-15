let symbol = "*";
let xAxis = 100;
let yAxis = 100;
let oneLineOfSymbols = "";

// ? DOM main container
let mainContainer = document.querySelector(".main-container");

// ? function to create string with X symbols
let xOfN = (xAxis) => {
   for (let i = 0; i < xAxis; i++) {
      oneLineOfSymbols += symbol;
   }
   return oneLineOfSymbols;
};
let firstLine = xOfN(xAxis);
console.log(firstLine);

// ? function to create Y lines of X symbols to paragraph
let yOfN = (y, firstLineArray) => {
   for (let i = 1; i <= y; i++) {
      let newPara = document.createElement("p");
      newPara.setAttribute("id", i);
      newPara.innerText = firstLineArray;
      mainContainer.appendChild(newPara);
   }
};
yOfN(yAxis, firstLine);

// ? function witch takes line by created ID in paragraph and changes 2 symbols
// ? to color of red, to make X symbol from all small simbols
let changeSymbols = (yAxis) => {
   for (let i = 1; i <= yAxis; i++) {
      // * get line by id
      let line = document.getElementById(i);
      // * get line text
      let lineText = line.innerText;
      // * split line text to array
      let lineTextArray = lineText.split("");
      // * change symbols
      lineTextArray[i - 1] = "<span>*</span>";
      lineTextArray[lineTextArray.length - i] = "<span>*</span>";
      // * join array to string
      line.innerHTML = lineTextArray.join("");
   }
};
changeSymbols(yAxis);
