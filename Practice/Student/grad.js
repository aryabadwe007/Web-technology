//GRADUATE

import { useState } from "react";

// degree, year, final year score, univ
function Graduate(){
    const [degree, setdegree] = useState("");

    const [year, setyear] = useState("");
    const [score, setscore] = useState("");
    const [university, setuniversity] = useState("");

    // console.log("Current state : ", {degree, year, score, university});

    return(
        <>
            <label>
                Degree : <input type="text" placeholder="degree" value={degree} onChange={(e)=>setdegree(e.target.value)}/>
            </label>

            <label>
                Year : <input type="text" placeholder="year" value={year} onChange={(e)=>setyear(e.target.value)}/>
            </label>

             <label>
                Score : <input type="number" placeholder="Enter marks" value={score} onChange={(e)=>setscore(e.target.value)} />
            </label>

             <label>
                University : <input type="text" placeholder="University" value={university} onChange={(e)=>setuniversity(e.target.value)}/>
            </label>
        </>
    )
}

export default Graduate;