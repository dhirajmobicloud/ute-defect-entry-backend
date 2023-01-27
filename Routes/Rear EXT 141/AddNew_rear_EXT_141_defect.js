
const express = require('express');
const router = express.Router();

const Rear_EXT_141 = require('../../Models/Rear_EXT_141_Schema')

router.post('/', async (req, res) => {
    let data = await  new Rear_EXT_141(req.body)
    let result = await data.save();
    // console.log(res.send(result))
    res.send(result)
 })

 module.exports = router;