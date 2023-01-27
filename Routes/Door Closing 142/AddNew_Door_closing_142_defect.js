const express = require('express');
const router = express.Router();

const Door_Closing_142 = require('../../Models/Door_Closing_142_Schema')


router.post('/', async (req, res) => {
    let data = await  new Door_Closing_142(req.body)
    let result = await data.save();
    // console.log(res.send(result))
    res.send(result)
 })

 module.exports = router;