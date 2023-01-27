const express = require('express');
const router = express.Router();
const Surface_LH_140 = require('../../Models/Surface_LH_140_Schema')

router.get('/',  (req, res) => {
    
    Surface_LH_140.find()
    .then((response)=>{
      res.send(response)
    }).catch((error)=>{
      console.log(error)
    })
  
  })

  module.exports = router;