symbol = "*";
let result = "";

for (let x = 1; x <= 100; x++) {
   for (let y = 1; y <= 100; y++) {
      result += "*";
   }
   result += `<br>`;
}
document.write(result);
