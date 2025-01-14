const character = "#";
const count = 8;
const rows = [];
let inverted = true;

// Create space - " ".repeat(rowCount - rowNumber)
// rowCount 7 - rowNumber 1 - rowCount 7 : --------#--------
// rowCount 6 - rowNumber 3 - rowCount 6 :  ------###------
// rowCount 5 - rowNumber 5 - rowCount 5 :  -----#####-----
// rowCount 4 - rowNumber 7 - rowCount 4:   ----#######----
// so on and so forth...

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

// unshift() - adds element at the beginning of an array - First element has the most characters #
// push() - adds element at the end of an array - Last element has the least characters #
for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}

let result = ""

// Iterate through rows then add all elements into result with each newline  
for (const row of rows) {
  result = result + row + "\n";
}

//Console log result
console.log(result);
