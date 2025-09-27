const constants = require('constants');
const fs = require('fs');

try {
  fs.access('sample.txt', constants.F_OK, (ERR) => {
    console.log(ERR)
  })

  const data = fs.readFileSync('sample2.txt', 'utf8');


  for (let a = 1; a < 11; a++) {
    console.log(a);
  }


  console.log('File content:', data);
} catch (err) {
  console.error('Error reading file:', err);
}

// fs.access starts, but doesn’t block.

// fs.readFileSync blocks and reads 'sample2.txt'.

// Numbers 1 to 10 are printed.

// Content of 'sample2.txt' is printed.

// When fs.access completes, it prints the ERR (null or error).