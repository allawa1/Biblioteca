require("dotenv").config()
const express = require('express');
const routerMain = require('./router/main')
const app = express();
const bodyParser = require('body-parser')
const fetch = require('node-fetch');

const heartbeat = require("./router/apiHeartbeat");
const apiBooks = require("./router/apiBooks");

app.use("/css", express.static(__dirname + "/css"))
app.use("/js", express.static(__dirname + "/js"))
app.use("/", express.static(__dirname + "/public"))
app.use(bodyParser.json())

app.use("/router/apiHeartbeat", heartbeat);
app.use("/api/apiBooks", apiBooks);

// app.get('/heartbeat',(req,res)=>{
//     res.json({
//         is: "working"
//     })
// })

app.listen(3001, ()=> {
    console.log('The server is running at Port 3001')
})
