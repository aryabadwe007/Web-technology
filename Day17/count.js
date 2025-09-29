


import { useEffect, useState } from "react";



function Counter(){
    
    let [count, setCount] = useState(0);
    
useEffect(()=>{
    console.log("Useffect") })
    // setTimeout(
    //     setCount(count + 1))}, [count])

function handler(){
    setCount(count + 1)
    console.log("Count : " , count)
}

return(
    <>
        <h1 style={{textAlign:"center", backgroundColor:"brown", color:"beige"}}>Display the count</h1><br />
        <button style={{alignItems:"20%"}} onClick={handler}>Click me</button><br /><br />   
        <h1>Count : {count}</h1>

    </>
)

}

export default Counter;