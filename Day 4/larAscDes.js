//  To Find max number from array write code in 3 ways as shown in lecture 

function largest()
{
    let arr = [9,8,4,3,2];
    let max = arr[0];
    for(i=0; i<5; i++)
    {
        if(max<arr[i])
        {
            max = arr[i];
        
        }
        return max;
    }
    
}

console.log(largest());


function asc()
{
    let arr = [2,5,3,11,6];
    arr.sort((a,b)=>a-b);
   
    return arr[arr.length-1];
    
}


console.log(asc());


function des()
{
    let arr = [2,5,3,11,6];
    arr.sort((a,b)=>b-a);
   
    return arr[arr.length-1];
    
}


console.log(des());

