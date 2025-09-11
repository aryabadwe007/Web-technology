function arrayOperations(choice)
{
let a = ["HTML", "CSS", "JAVASCRIPT"]
console.log("Original Array:", a);

switch(choice)
{
case"push" :
a.push("Node.js");
console.log("After push:", a); 
break;

case"Unshift" :
a.unshift("Mongodb");
console.log("After Unshift:", a); 
break;


case"Pop" :
a.pop("Javascript");
console.log("After Javascript:", a);    
break;

case"Slice" :
a.slice(0,1);
console.log("After Slice:", a);    
break;

case"Splice" :
a.splice(0,2,"C#","Mongodb");
console.log("After Splice:", a);    
break;
    }
}


arrayOperations('push');
arrayOperations('Unshift');
arrayOperations('Pop');
arrayOperations('Slice');
arrayOperations('Splice');




