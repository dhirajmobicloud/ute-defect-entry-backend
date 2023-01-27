const express = require('express')
const router = express.Router()

const Surface_FTR_139 = require('../../Models/Surface_FTR_139_Schema')

router.post('/', async (req, res) => {
    let data = await  new Surface_FTR_139(req.body)
    let result = await data.save();
    // console.log(res.send(result))
    res.send(result)
 })

 module.exports = router;