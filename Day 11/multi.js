// 1)  accept 2 numbers from user 
//   and perform multiplication 
  
//   using promise concept perform multiplication if both number 
//   are positive else reject the promise 

function multiplication(n1,n2){

    let promise=new Promise(function(resolve,reject){

        if(n1>0 && n2>0){
        
        resolve(mul);
        mul=n1*n2;
        }
        else{
            reject("numbers are not positive");
        }
        
        return promise;
        
    });

    multiplication.then(result => {console.log("multiplication is : "+ mul)});

    
    // function(){(

    // });
}