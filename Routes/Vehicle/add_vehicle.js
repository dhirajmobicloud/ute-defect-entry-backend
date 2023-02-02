const express = require('express');
const router = express.Router();

const Vehicle = require('../../Models/Vehicle_Schema')


router.post('/', async(req, res)=>{
    console.log(req.body)
    let data =  new Vehicle(req.body);
    let result = await data.save();
    res.send(result)
})



module.exports = router;