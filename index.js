// loads .env file content
require('dotenv').config()
const express= require('express')
const cors = require('cors')
// Creates an Express application
const pfServer = express()

pfServer.use(cors())
pfServer.use(express.json())
const PORT = 4000 || process.env.PORT

pfServer.listen(PORT,()=>{
    console.log(`Project Fair Server started at port: ${PORT} and waiting for client requests!!!!`);
})
// http get request resolving to http://localhost:400/
pfServer.get('/',(req,res)=>{
    res.send(`<h1>Project Fair Server Started and waiting for client requests!!</h1>`)
})
