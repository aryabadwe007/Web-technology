//UPPERCASE, LOWERCASE

import { useState } from "react";









const Case = () => {
   
 const[inputText,setinputText] = useState("")
 const[convertText,setconvertText] = useState("")
   const handler = (event) => {
        setinputText(event.target.value)
        setconvertText("")
    }

    const Upperrcase = ()=>{
        setconvertText(inputText.toUpperCase());
    }

        const Lowercase = ()=>{
        setconvertText(inputText.toLowerCase());
    }

    const Titlecase=()=>{const titleCase = inputText
            .toLowerCase() 
            .split(' ') 
            .map((word) => {
               
                return word.charAt(0).toUpperCase() + word.slice(1);
            })
            .join(' '); 
        
        setconvertText(titleCase);
    };


    return(
        <>
        <h1>UPPERCASE, LOWERCASE, TITLECASE</h1>
        <div>
            <label>
                Add Text : <input type="text" placeholder="Text" value={inputText} onChange={handler}/><br />
            </label>
            <button onClick={Upperrcase}>Uppercase</button><br /><br />
            <button onClick={Lowercase}>Lowercase</button><br /><br />
             <button onClick={Titlecase}>Titlecase</button><br /><br />
            <label>converted text: <input type="text" value={convertText}></input></label>

           
        </div>


        </>
    )
}

export default Case;