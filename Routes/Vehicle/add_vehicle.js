const express = require('express');
const router = express.Router();

const Vehicle = require('../../Models/Vehicle_Schema')

router.get('/', async(req, res)=>{
    let data = await Vehicle.find();
    res.send(data)
})

// router.post('/', async(req, res)=>{
//     let data = await new Vehicle(req.body);
//     let result = await data.save();
//     res.send(result)
// })

// router.post('/', async(req, res)=>{
//     let id =  req.params
//     res.send(id)
//     console.log(id)
// })

module.exports = router;