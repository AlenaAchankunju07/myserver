const mongoose = require('mongoose')

const connection_string= process.env.CONNECTIONSTRING

mongoose.connect(connection_string).then((res)=>{
    console.log("MONGODB ATLAS CONNECTED SUCESSFULLY WITH MYSERVER");
    
}).catch(err=>{
    console.log("connection failed!");
    console.log(err);
    
    
})