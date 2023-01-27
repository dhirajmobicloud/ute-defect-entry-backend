const express = require('express');
const router = express.Router();
const Electrical_1_140 = require('../../Models/Electrical_1_140_Schema')

router.get('/',  (req, res) => {
    
    Electrical_1_140.find()
    .then((response)=>{
      res.send(response)
    }).catch((error)=>{
      console.log(error)
    })
  
  })

  module.exports = router;