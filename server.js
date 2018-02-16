const express = require('express');
const path    = require('path');

const app  = express();
const port =process.env.PORT || 3000;

//middlewares
app.use(express.static('public'))

//routes
app.get('*', (req,res)=> {
  res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
});

//listening
app.listen(port,()=>console.log("server listening on port " + port));