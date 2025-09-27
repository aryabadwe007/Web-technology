// in above rest api 
// 	/users/aboutus ----- display aboutus.html page 

const express = require('express');
const f = require ('fs');
const p =require ('path');
const users1 = require ('./MOCK_DATA.json');

const port = 3040;
const app = express();

app.get('/', (req,res)=>{
    res.send("Hello, I am Anushka ");
});

app.get('/users',(req,res)=>{
    res.json(users1);
});

app.get('/users/:id', (req, res)=>{
    const id = Number(req.params.id);
    const user = users1.find(
    user => user.id === id);
    
    res.json(user);
});

app.get('/users/:id/:email', (req, res)=>{
    const email = (req.params.email);
    const user = users1.find(
    user => user.email === email);
    
    res.json(user);
});

app.delete('/users/:id/', (req,res)=>{
    const id = Number(req.params.id);
    const userIndex = users1.findIndex(
        user => user.id === id);
    
    if(userIndex == -1)
    {
        return res.status(404).send ("Data not found");
    }
    const delete_Item = users1.splice(userIndex,1);
    return res.json("Deleted successfully");
});

app.listen(port);
console.log("Start server");

