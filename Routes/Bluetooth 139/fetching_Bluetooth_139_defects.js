const express = require('express');
const router = express.Router();
const Bluetooth_139 = require('../../Models/Bluetooth_139_Schema')

router.get('/',  (req, res) => {
   
    Bluetooth_139.find()
    .then((response)=>{
      res.send(response)
    }).catch((error)=>{
      console.log(error)
    })
  
  })

  module.exports = router;