// declare function calculate(...a) 
// 	and display addition of data 
// 	display only odd numbers from given data 

//   call calculate function with multiple parameters 

function add(...a)
{
    console.log("from new function");
    let sum = 0;
    for(let i = 0; i<a.length; i++){
        sum += a[i];
    }
     console.log("Addition of " + (a.length) + " numbers = " + sum);
}
 add(10,11,12,13);
 add(10,20);
 add(10);
 add();



 function odd_nos(...a)

 {
    console.log("from new function");
    
    for(let i = 0; i<a.length; i++){
        if(a[i] % 2 != 0){
            console.log("Number is odd" + a[i]);   
        }  
    } 
}
odd_nos(1,2,3,4,5,6);

function mul(...a){
    mult = 1;
    console.log(" New Function : ");

    for(let i = 0; i<a.length; i++){
        mult *= a[i]; 
    }

    console.log("Multiplication is : " , mult )
}

mul(2,3,4);
mul(4,5);
mul();
mul(5,6,7,8,9);

