// Get the number from command line arguments
const args = process.argv.slice(2); // starting from index 2
const num = parseInt(args[0]);

// Validate the input
if (isNaN(num) || num < 0) {
  console.log(" provide a positive integer.");
  process.exit(1);
}

// Recursive function to calculate factorial
function factorial(n) {
  if (n == 0 || n == 1) return 1;
  return n * factorial(n - 1);
}

// Call and print result
const result = factorial(num);
console.log(" Factorial of   is: " + factorial(num));

