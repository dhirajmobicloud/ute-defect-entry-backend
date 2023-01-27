const express = require('express');
const router = express.Router();

const LH_Exterior_141 = require('../../Models/LH_Exterior_141_Schema')


router.post('/', async (req, res) => {
    let data = await  new LH_Exterior_141(req.body)
    let result = await data.save();
    // console.log(res.send(result))
    res.send(result)
 })

 module.exports = router;