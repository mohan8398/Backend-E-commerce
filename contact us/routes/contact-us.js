const express = require('express');

const path = require('path');

const router = express.Router();

const rootDir =require('../util/path')

router.get('/contact-us', (req, res, next) => {
    res.sendFile(path.join(rootDir,'views','contact-us.html'));
  });
  

router.post('/contact-us', (req, res, next) => {
  console.log(req.body);
 
  res.redirect('/success');
});

router.use('/success',(req, res, next) => {
  res.send('<h1>Form successfuly filled</h1>');
})

  
  module.exports = router;
