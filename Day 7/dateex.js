const independence = new Date(1947,7,15)
const republic  = new Date(1950,0,26)
 const today = new Date()
/*
 if(republic >today)
    console.log("republic day is after today")
else
console.log("republic day is before today")
*/


if (republic.valueOf() != independence.valueOf())
    console.log("different")
else
    console.log("same")


