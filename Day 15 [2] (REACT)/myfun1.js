











// Create Function Component  with parameters
//      	 a) Factorial ==  pass number as parameter 
//                   b) Calculator ==  pass 2 numbers as attribute 
//                         and display 

// 		addition , subtraction , division , multiplication 
// 	c) in point b  =  accept 1 more argument operation and then 
//                      display data for that operation only 

function Myfunction(props){
    const msg = "Hello World";

    return(
    <>
    <h1>{msg} {props.data}</h1><br></br>

    <h2>{props.skills}</h2><br></br>
    <h2>{props.doj}</h2>
    </>
    );
}

function Function2(props){
    return(
        <>
            
        </>
    )
}

export default Myfunction;