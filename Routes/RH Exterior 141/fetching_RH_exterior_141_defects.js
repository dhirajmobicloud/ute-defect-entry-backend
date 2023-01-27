const express = require('express');
const router = express.Router();
const RH_Exterior_141 = require('../../Models/RH_Exterior_141_Schema')

router.get('/',  (req, res) => {
    RH_Exterior_141.find()
    .then((response)=>{
      res.send(response)
    }).catch((error)=>{
      console.log(error)
    })
  
  })

  module.exports = router;