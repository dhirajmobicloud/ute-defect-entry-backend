const express = require('express');
const router = express.Router();
const Rear_Int_140 = require('../../Models/Rear_Int_140_Schema')

router.get('/',  (req, res) => {
    console.log("running")
    Rear_Int_140.find()
    .then((response)=>{
      res.send(response)
    }).catch((error)=>{
      console.log(error)
    })
  
  })

  module.exports = router;