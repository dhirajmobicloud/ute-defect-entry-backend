const express = require('express');
const router = express.Router();

const Electrical_2_142 = require('../../Models/Electrical_2_142_Schema')

router.post('/', async (req, res) => {
    let data = await  new Electrical_2_142(req.body)
    let result = await data.save();
    // console.log(res.send(result))
    res.send(result)
 })

 module.exports = router;