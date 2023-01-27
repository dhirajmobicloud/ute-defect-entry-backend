const express = require('express');
const router = express.Router();
const Door_Closing_142 = require('../../Models/Door_Closing_142_Schema')

router.get('/',  (req, res) => {
   
    Door_Closing_142.find()
    .then((response)=>{
      res.send(response)
    }).catch((error)=>{
      console.log(error)
    })
  
  })

  module.exports = router;