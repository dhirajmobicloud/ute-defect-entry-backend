const express = require('express');
const Connect = require('./DB/config');
const mongoose = require('mongoose')
const cors = require('cors')
const Vehicle = require('./Models/Vehicle_Schema')
const User = require('./Models/User_Schema')
const Demo = require('./Models/demoSchema')

const surface_RH_139_defects = require('./Routes/Surface_RH_139/fetching_surface_rh_139_defects')
const add_surface_RH_139_defect = require('./Routes/Surface_RH_139/AddNew_surface_rh_139_defect')

const surface_FTR_139_defects = require('./Routes/Surface FTR 139/fetching_surface_ftr_139_defects')
const add_surface_FTR_139_defect = require('./Routes/Surface FTR 139/AddNew_surface_ftr_139_defect')

const bluetooth_139_defect = require('./Routes/Bluetooth 139/fetching_Bluetooth_139_defects')
const addNew_Bluetooth_139_defect = require('./Routes/Bluetooth 139/AddNew_Bluetooth_139_defect')

const electrical_1_140_defects = require('./Routes/Electrical 1 140/fetching_Electrical_1_140_defects')
const addNew_Electrical_1_140_defect = require('./Routes/Electrical 1 140/AddNew_Electrical_1_140_defect')

const surface_LH_140_defect = require('./Routes/Surface LH 140/fetching_surface_lh_140_defect')
const addNew_surface_LH_140_defect = require('./Routes/Surface LH 140/AddNew_surface_lh_140_defect')

const rear_INT_140_defects = require('./Routes/Rear Int 140/fetching_rear_INT_140_defects')
const addNew_rear_INT_140_defect = require('./Routes/Rear Int 140/AddNew_rear_INT_140_defect')

const rear_EXT_141_defects = require('./Routes/Rear EXT 141/fetching_rear_EXT_141_defects')
const addNew_rear_EXT_141_defect = require('./Routes/Rear EXT 141/AddNew_rear_EXT_141_defect')

const rH_exterior_141_defects = require('./Routes/RH Exterior 141/fetching_RH_exterior_141_defects')
const addNew_RH_exterior_141_defect = require('./Routes/RH Exterior 141/AddNew_RH_exterior_141_defect')

const lH_Exterior_141_defects = require('./Routes/LH Exterior 141/fetching_LH_Exterior_141_defects')
const addNew_LH_Exterior_141_defect = require('./Routes/LH Exterior 141/AddNew_LH_Exterior_141_defect')

const electrical_2_142_defects = require('./Routes/Electrical 2 142/fetching_Electrical_2_142_defects')
const addNew_Electrical_2_142_defect = require('./Routes/Electrical 2 142/AddNew_Electrical_2_142_defect')

const front_EXT_142_defects = require('./Routes/Front EXT 142/fetching_Front_EXT_142_defects')
const addNew_Front_EXT_142_defect = require('./Routes/Front EXT 142/AddNew_Front_EXT_142_defect')

const door_closing_142_defects = require('./Routes/Door Closing 142/fetching_Door_closing_142_defects')
const addNew_Door_closing_142_defect = require('./Routes/Door Closing 142/AddNew_Door_closing_142_defect')

const add_vehicle = require('./Routes/Vehicle/add_vehicle')
const all_vehicles = require('./Routes/Vehicle/all_vehicles');
const { json } = require('express');

const app = express();
app.use(express.json())
app.use(cors())

// --------------------------------APIs-----------------------------------

app.get('/', (req , res)=>{
  res.send("Welcome")
})

app.use('/surface-rh-139-defects', surface_RH_139_defects);
app.use('/add_surface_RH_139_defect', add_surface_RH_139_defect);

app.use('/surface-ftr-139-defects', surface_FTR_139_defects);
app.use('/add_surface_FTR_139_defect', add_surface_FTR_139_defect);

app.use('/electrical-1-140-defects', electrical_1_140_defects);
app.use('/addNew_Electrical_1_140_defect', addNew_Electrical_1_140_defect);

app.use('/bluetooth-139-defect', bluetooth_139_defect);
app.use('/addNew_Bluetooth_139_defect', addNew_Bluetooth_139_defect);

app.use('/surface-lh-140-defect', surface_LH_140_defect);
app.use('/addNew_surface_LH_140_defect', addNew_surface_LH_140_defect);

app.use('/rear-int-140-defects', rear_INT_140_defects);
app.use('/addNew_rear_INT_140_defect', addNew_rear_INT_140_defect);

app.use('/rear-ext-141-defects', rear_EXT_141_defects);
app.use('/addNew_rear_EXT_141_defect', addNew_rear_EXT_141_defect);

app.use('/rh-exterior-141-defects', rH_exterior_141_defects);
app.use('/addNew_RH_exterior_141_defect', addNew_RH_exterior_141_defect);

app.use('/lh-exterior-141-defects', lH_Exterior_141_defects);
app.use('/addNew_LH_Exterior_141_defect', addNew_LH_Exterior_141_defect);

app.use('/electrical-2-142-defects', electrical_2_142_defects);
app.use('/addNew_Electrical_2_142_defect', addNew_Electrical_2_142_defect);

app.use('/front-ext-142-defects', front_EXT_142_defects);
app.use('/addNew_Front_EXT_142_defect', addNew_Front_EXT_142_defect);

app.use('/door-closing-142-defects', door_closing_142_defects);
app.use('/addNew_Door_closing_142_defect', addNew_Door_closing_142_defect);

app.use('/add_vehicle', add_vehicle);
app.use('/all_vehicles', all_vehicles);

app.get('/users', async (req , res)=>{
  let data = await User.find();
  let result = await data.map((element)=>{
    return {"username" : element.username}
  })
  res.send(result)
 
})

app.post('/addusers', async (req , res)=>{
  let data =  new User(req.body)
  let result = await data.save()
  res.send(result)
 
})


app.post('/login', async (req , res)=>{
  let Username = req.body.username;
  let Password = req.body.password;
  let data = await User.findOne({username:Username, password:Password})
 if(data){
  res.send({ "id":data._id, "username":data.username})
 }else{
  res.status(401).send("please enter valid data")
 }
})

app.post('/assigned-segement', async(req,res)=>{
  let data = await new Demo(req.body)
  let result = await data.save();
  res.send(result)
})

app.get('/assigned-segement-data', async(req,res)=>{
  let data = await Demo.find();
  res.send(data)
})

app.get('/get-assigned-segement-data/:username', async(req,res)=>{
  let username = req.params.username
  let data = await Demo.find({username});
  // res.send(data[0])
  if(data){
    res.status(401).send({err:"Please enter valid data"})
  }
  else{
    res.send(data[0])
  }
})

mongoose.set("strictQuery", true);
// Connect()

Connect().then(() => {
  app.listen(5000);
  console.log('Server running');
}).catch((err) => {
  console.log(err);
})
  