const express = require('express');
const Connect = require('./DB/config');
const mongoose = require('mongoose')
const Surface_RH_139 = require('./DB/Models/Surface_RH_139')

const app = express();
app.use(express.json())

app.get('/',  (req, res) => {
  console.log("running")
   Surface_RH_139.find()
  .then((response)=>{
    res.send(response)
  }).catch((error)=>{
    console.log(error)
  })

})

app.get('/add',  (req, res) => {
   console.log(res.send(req.body))
    new Surface_RH_139(req.body)

})


//   app.listen(5000, ()=>{
//     console.log('hey dhiraj')
//   })

mongoose.set("strictQuery", true);
// Connect()

Connect().then(() => {
  app.listen(5000);
  console.log('Server running');
}).catch((err) => {
  console.log(err);
})
  