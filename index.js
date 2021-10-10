const express = require("express");

const app = express();

app.get("./ ", (req,res) =>{
  res.send("continue i love it");
});
   
app.listen(3000, () =>{console.log("working on port 3000");
});