
//Hard coded

// function Factorial(props){
//         let fact = 1;
//         let num = parseInt(props.num3);
//         for(let i = 1; i<=num; i++ ){
//             fact *= i;
//         }

//        return(
//         <>
//             <h2>Factorial of {num} is: {fact}</h2>
//         </>
//        )
// }

// export default Factorial;






//user input


import React, { useState } from 'react';

function FactorialCalculator() {
    
    const [inputNumber, setInputNumber] = useState('');  // Store users input string


    const calculateFactorial = (n) => { // Function to calculate factorial
        let num = parseInt(n);
        let fact = 1;

        // Validation for non-negative integers
        if (isNaN(num) || num < 0) {
            return "Invalid Input";
        }
        if (num === 0) {
            return 1;
        }

        // Calculation loop
        for (let i = 1; i <= num; i++) {
            fact *= i;
        }
        return fact;
    };

    // 3. Handle input change
    const handleChange = (event) => {
        // Only allow non-negative integer input
        const value = event.target.value.replace(/[^0-9]/g, ''); 
        setInputNumber(value);
    };

    // Calculate the result dynamically whenever inputNumber changes
    const result = calculateFactorial(inputNumber);

    return (
        <div style={{ padding: '20px', border: '2px solid #3498db', borderRadius: '8px', textAlign:"center" }}>
            <h1>Factorial Calculator</h1>
            
            <label htmlFor="numInput">Enter a integer:</label>
            <input
                id="numInput"
                type="text" // Use 'text' to prevent issues with length limits, then validate manually
                value={inputNumber}
                onChange={handleChange}
                placeholder="e.g., 5"
                style={{ margin: '10px', padding: '8px' }}
            />

            {/* Display the result */}
            <h2>
                Factorial of {inputNumber || 'your number'} is: 
                <span style={{ color: '#fa6453ff', marginLeft: '10px' }}>
                    {result}
                </span>
            </h2>
        </div>
    );
}

export default FactorialCalculator;