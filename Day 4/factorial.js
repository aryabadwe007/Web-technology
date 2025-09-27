// Write a function getFactorialImpl ( choice="FORLOOP" ) ----it could be FORLOOP or RECUR
// 	Function Fact2(n1)
// 	Use recursion and print the factorial
// 	If the choice is FORLOOP return Fact1
// 	If the choice is RECUR then return Fact2
// 	Outside --- call let rv = getFactorialImpl("RECUR")
// 	rv(3)
// 	Rv = getFactorialImpl()
// 	rv(5)

// let a = 5;
// let fact = 1;
// for( i = 5; i>=1; i--){
//     fact = fact * i;
//     console.log(fact);
// }


function getFactorialImpl()
{

   function fact1(n)
  {
  
    let fact=1;
    for (i=n;i>=1;i--)
    {
    fact = fact * i;
    
    }
    return fact;
  }

  
    return fact1;
  
}

let rv = getFactorialImpl();
 console.log("factorial of 5:", rv(5));

