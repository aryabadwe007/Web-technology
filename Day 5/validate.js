function validate()
{
    console.log("here")
    var name = document.Form1["Form1"] ["studName"].value
    var age = document.Form1["Form1"] ["Student age"].value
    console.log(name, age)

    if(name.trim()=="")
    {
        document.getElementsByClassName("errormessage")[0].style.visibility = 'visible'
            }
    }
