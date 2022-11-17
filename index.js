const express = require('express')
const server = express()

server.get('/api/main',(req,res)=>{
    res.write('<h1>HANDSON 2</h1>')
    res.write(JSON.stringify(["ASSESSMENT","2"]))
    res.end()
})
 server.listen(9000,()=>{
    console.log("Server started");

 })
