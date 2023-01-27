const express = require('express');
const router = express.Router();

const Rear_Int_140 = require('../../Models/Rear_Int_140_Schema')

router.post('/', async (req, res) => {
    let data = await  new Rear_Int_140(req.body)
    let result = await data.save();
    // console.log(res.send(result))
    res.send(result)
 })

 module.exports = router;