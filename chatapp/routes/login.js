const express = require("express");
const router=express.Router();

router.get('/login',(req,res)=>{

res.send('<form action="/" onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" method="POST"><input type="text" name="username" id="username">  <button type="submit">add</button></form>')

})
module.exports = router;
