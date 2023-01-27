const express = require('express');
const router = express.Router();

const Front_EXT_142 = require('../../Models/Front_EXT_142_Schema')

router.post('/', async (req, res) => {
    let data = await  new Front_EXT_142(req.body)
    let result = await data.save();
    // console.log(res.send(result))
    res.send(result)
 })

 module.exports = router;