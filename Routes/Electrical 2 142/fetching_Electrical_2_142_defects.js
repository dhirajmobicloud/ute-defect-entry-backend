const express = require('express');
const router = express.Router();
const Electrical_2_142 = require('../../Models/Electrical_2_142_Schema')


router.get('/',  (req, res) => {

    Electrical_2_142.find()
    .then((response)=>{
      res.send(response)
    }).catch((error)=>{
      console.log(error)
    })
  
  })

  module.exports = router;