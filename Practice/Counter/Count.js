import { useCallback, useState } from "react";

const Count = () =>{

    const[count,setcount] = useState(0);

    const Increment = useCallback(()=>{
            setcount(count + 1);
        })

    const Decrement =  useCallback(()=>{
            if(count<=0){
                alert("Invalid Count")
            }else{
            setcount(count - 1);
        }})

    const Reset = useCallback(() =>{
            setcount(count - count);
        })


    return(
        <>

    
            <h1>Increment, Decrement, Reset</h1>
            <h2>Count is : {count}</h2>
            <div>
                <button onClick={Increment}>Increment</button><br /><br />
                <button onClick={Decrement}>Decrement</button><br /> <br />
                <button onClick={Reset}>Reset</button><br />
            </div>
        </>
    )
}

export default Count;