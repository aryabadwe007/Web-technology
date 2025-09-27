// Declare Array with String Data 
// 	display every element in uppercase format
//              (use prdefined methods of String)

function uppercase(){
    let a=["hello"];
    console.log(a.map((ele)=>ele.substring(0,5).toUpperCase()));

}

uppercase();

let arr = [12, 34, 56, 78, 99, 21, 32, 1, 5, 10]

function callbk(x) {
    console.log("SEE THIS ", x)
}
arr.forEach(callbk)
arr.forEach((x) => console.log(x))