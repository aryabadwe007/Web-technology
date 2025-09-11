// Declare Array with String Data 
// 	display every element in uppercase format
//              (use prdefined methods of String)

function uppercase(){
    let a=["hello"];
    console.log(a.map((ele)=>ele.substring(0,5).toUpperCase()));

}

uppercase();