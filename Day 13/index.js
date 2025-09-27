
// const express = require('express');
// const users1 = require('./MOCK_DATA.json');
// const app = express();

// app.get('/', (req, res) => {
//     res.send("Hello From Express");
// });
// app.get('/users', (req, res) => {
   
//     res.json(users1);
// });

// app.get('/users/:id/:email', (req, res) => {
//     const id = Number(req.params.id);  
    
//     const user = users1.find(
//         users => users.id === id
//     )
//     return res.json(user);
// });


// app.get('/users/:email', (req, res) => {
//    const email = req.params.email;
//    const user2 = users1.find(user => user.email === email);
//    return res.json(user2);
// });


// app.listen(8059)// 
// console.log("From Start Script ");



// app.delete('/users/:id', (req, res) => {
//     const id = Number(req.params.id);  // 15
//     const user = users1.find(
//         user => user.id === id
//     )
//     return res.json(user);
// });




const express=require('express')
const app=express()
const users1=require('./MOCK_DATA.json')

app.get('/',(req,res)=>{
    res.send("hello")
});
app.get('/users',(req,res)=>{
    res.json(users1);

});
app.get('/users/:id',(req,res)=>{
    const id=Number(req.params.id)

    const user=users1.find(
        user => user.id == id
    )

    return res.json(user);
});
app.listen(8059);
console.log("started");

app.delete('/users/:id', (req, res) => {
    const id = Number(req.params.id);  // 15
    
    const userIndex = users1.findIndex(
        user => user.id === id
    )
    if (userIndex === -1)
        return res.status(404).send('Data not found');

    const deletedItem = users1.splice(userIndex, 1);
    return res.json("Ennis ");
});



