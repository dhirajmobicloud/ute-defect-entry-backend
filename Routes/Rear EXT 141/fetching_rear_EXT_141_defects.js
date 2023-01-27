const express = require('express');
const router = express.Router();
const Rear_EXT_141 = require('../../Models/Rear_EXT_141_Schema')

router.get('/',  (req, res) => {
 
    Rear_EXT_141.find()
    .then((response)=>{
      res.send(response)
    }).catch((error)=>{
      console.log(error)
    })
  
  })

  module.exports = router;