//addition , subtraction , division , multiplication 
	// c) in point b  =  accept 1 more argument operation and then 
    //                  display data for that operation only 







   
 function Addition(props){
    let n1 = parseFloat(props.num1);
    let n2 = parseFloat(props.num2);
    let n3 = parseFloat(props.num3);
 
    function Add(){
    return (n1+n2+n3);
    }

    return(
        <div id="cal" style={{textAlign:"center"}} >
            <h1>Calculator</h1>
            <h2>Addition : {Add()}</h2><br></br>
            <h2>Multiplication of 4 * 5 is : {4 * 5}</h2><br></br>
            <h2>Subtraction of 745 - 533 is : {745 - 533}</h2><br></br>
            <h2>Division of 445 / 5 is : {445 / 5}</h2><br></br>
            <h2>Modulus of 20 % 3 is : {20 % 3}</h2><br></br>
        </div>
    )

}    

export default Addition;

 