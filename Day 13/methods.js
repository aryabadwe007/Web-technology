const f = require('http');



const app=f.createServer((req, res) => {

    console.log("Method " + req.method)

    if (req.method === 'POST') {
        res.write("Post Method Demo ");
    }

    if (req.method === 'GET') {
        res.write("GET Method Demo ");
    }
    //res.send();
});


app.listen(8059, () => {
    console.log("server started")

});


