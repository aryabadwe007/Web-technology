//UNDERGRAD
//PG
//GRAD

import { useState } from "react";
import Graduate from './grad'
function StudentInfo(){

   const[name, setname] = useState("")
   const[email, setemail] = useState("")
   const[selected, setselected] = useState("");

    const handler = (event) =>{
        setselected(event.target.value)
    }

    //button
     const handleSubmit = () => {
        console.log("Form Submitted. Selected Level:", selected);
       
    };


    return(
        <>
            <h1>Student Info</h1>
            <div>
                <h1>Form</h1>
                <label>
                    Username : <input type="text" placeholder="Enter name" value={name} onChange={(e)=>setname(e.target.value)}/>
                </label><br /> <br />

                 <label>
                    Email : <input type="email" placeholder="Enter Email" value={email} onChange={(e)=>setemail(e.target.value)}/>
                </label>

                {/* //DROPDOWN */}
                <div>
                    <select value={selected} onChange={handler}>
                        
                        <option value={""}>Select</option>
                        <option value={"Grad"}>Graduate</option>
                        <option >PG</option>
                        <option >Undergrad</option>
                    </select>
                </div>

                <h1>Educational Details</h1>

                {selected == "Grad" && (
                    <Graduate />
                )}
            </div>

            <div>
                <button onClick={handleSubmit}>Submit Data</button>
            </div>
        </>
    )
}

export default StudentInfo;

