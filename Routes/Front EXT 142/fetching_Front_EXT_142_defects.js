const express = require('express');
const router = express.Router();
const Front_EXT_142 = require('../../Models/Front_EXT_142_Schema')

router.get('/',  (req, res) => {
 
    Front_EXT_142.find()
    .then((response)=>{
      res.send(response)
    }).catch((error)=>{
      console.log(error)
    })
  
  })

  module.exports = router;