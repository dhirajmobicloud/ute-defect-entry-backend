const express = require('express');
const router = express.Router();
const Surface_FTR_139 = require('../../Models/Surface_FTR_139_Schema')

router.get('/',  (req, res) => {
    console.log("running")
    Surface_FTR_139.find()
    .then((response)=>{
      res.send(response)
    }).catch((error)=>{
      console.log(error)
    })
  
  })

  module.exports = router;