const express = require('express');
const router = express.Router();

const Surface_LH_140 = require('../../Models/Surface_LH_140_Schema')

router.post('/', async (req, res) => {
    let data = await  new Surface_LH_140(req.body)
    let result = await data.save();
    // console.log(res.send(result))
    res.send(result)
 })

 module.exports = router;