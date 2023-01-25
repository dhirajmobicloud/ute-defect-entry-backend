const express = require('express');
const Connect = require('./DB/config');
const mongoose = require('mongoose')
const cors = require('cors')
const surface_RH_139_defects = require('./Routes/Surface_RH_139/fetching_surface_rh_139_defects')
const add_surface_RH_139_defect = require('./Routes/Surface_RH_139/AddNew_surface_rh_139_defect')
const surface_FTR_139_defects = require('./Routes/Surface FTR 139/fetching_surface_ftr_139_defects')

const app = express();
app.use(express.json())
app.use(cors())

app.use('/surface_RH_139_defects', surface_RH_139_defects);
app.use('/add_surface_RH_139_defect', add_surface_RH_139_defect);
app.use('/surface_FTR_139_defects', surface_FTR_139_defects);


mongoose.set("strictQuery", true);
// Connect()

Connect().then(() => {
  app.listen(5000);
  console.log('Server running');
}).catch((err) => {
  console.log(err);
})
  