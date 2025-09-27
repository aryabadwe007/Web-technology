const fs=require('fs');
const data=fs.readFile("sample.txt","utf8",(err,data)=>{
    if(err){
        console.log("error occurred");

    }
    else{
        console.log(data);
    }
});


