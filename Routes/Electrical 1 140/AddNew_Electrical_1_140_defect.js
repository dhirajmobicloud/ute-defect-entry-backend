const express = require('express');
const router = express.Router();

const Electrical_1_140 = require('../../Models/Electrical_1_140_Schema')


router.post('/', async (req, res) => {
    let data = await  new Electrical_1_140(req.body)
    let result = await data.save();
    // console.log(res.send(result))
    res.send(result)
 })

 module.exports = router;