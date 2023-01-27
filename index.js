const express = require('express');
const Connect = require('./DB/config');
const mongoose = require('mongoose')
const cors = require('cors')
const surface_RH_139_defects = require('./Routes/Surface_RH_139/fetching_surface_rh_139_defects')
const add_surface_RH_139_defect = require('./Routes/Surface_RH_139/AddNew_surface_rh_139_defect')

const surface_FTR_139_defects = require('./Routes/Surface FTR 139/fetching_surface_ftr_139_defects')
const add_surface_FTR_139_defect = require('./Routes/Surface FTR 139/AddNew_surface_ftr_139_defect')

const bluetooth_139_defect = require('./Routes/Bluetooth 139/fetching_Bluetooth_139_defects')
const addNew_Bluetooth_139_defect = require('./Routes/Bluetooth 139/AddNew_Bluetooth_139_defect')

const electrical_1_140_defects = require('./Routes/Electrical 1 140/fetching_Electrical_1_140_defects')
const addNew_Electrical_1_140_defect = require('./Routes/Electrical 1 140/AddNew_Electrical_1_140_defect')

const surface_LH_140_defect = require('./Routes/Surface LH 140/fetching_surface_lh_140_defect')
const addNew_surface_LH_140_defect = require('./Routes/Surface LH 140/AddNew_surface_LH_140_defect')

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

const app = express();
app.use(express.json())
app.use(cors())

// --------------------------------APIs-----------------------------------

app.use('/surface_RH_139_defects', surface_RH_139_defects);
app.use('/add_surface_RH_139_defect', add_surface_RH_139_defect);

app.use('/surface_FTR_139_defects', surface_FTR_139_defects);
app.use('/add_surface_FTR_139_defect', add_surface_FTR_139_defect);

app.use('/electrical_1_140_defects', electrical_1_140_defects);
app.use('/addNew_Electrical_1_140_defect', addNew_Electrical_1_140_defect);

app.use('/bluetooth_139_defect', bluetooth_139_defect);
app.use('/addNew_Bluetooth_139_defect', addNew_Bluetooth_139_defect);

app.use('/surface_LH_140_defect', surface_LH_140_defect);
app.use('/addNew_surface_LH_140_defect', addNew_surface_LH_140_defect);

app.use('/rear_INT_140_defects', rear_INT_140_defects);
app.use('/addNew_rear_INT_140_defect', addNew_rear_INT_140_defect);

app.use('/rear_EXT_141_defects', rear_EXT_141_defects);
app.use('/addNew_rear_EXT_141_defect', addNew_rear_EXT_141_defect);

app.use('/rH_exterior_141_defects', rH_exterior_141_defects);
app.use('/addNew_RH_exterior_141_defect', addNew_RH_exterior_141_defect);

app.use('/lH_Exterior_141_defects', lH_Exterior_141_defects);
app.use('/addNew_LH_Exterior_141_defect', addNew_LH_Exterior_141_defect);

app.use('/electrical_2_142_defects', electrical_2_142_defects);
app.use('/addNew_Electrical_2_142_defect', addNew_Electrical_2_142_defect);

app.use('/front_EXT_142_defects', front_EXT_142_defects);
app.use('/addNew_Front_EXT_142_defect', addNew_Front_EXT_142_defect);

app.use('/door_closing_142_defects', door_closing_142_defects);
app.use('/addNew_Door_closing_142_defect', addNew_Door_closing_142_defect);

mongoose.set("strictQuery", true);
// Connect()

Connect().then(() => {
  app.listen(5000);
  console.log('Server running');
}).catch((err) => {
  console.log(err);
})
  