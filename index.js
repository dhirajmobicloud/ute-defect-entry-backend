const express = require('express');
const Connect = require('./DB/config');
const mongoose = require('mongoose')
const cors = require('cors')
const surface_RH_139_defects = require('./Routes/Surface_RH_139/fetching_surface_rh_139_defects')
const add_surface_RH_139_defect = require('./Routes/Surface_RH_139/AddNew_surface_rh_139_defect')

const surface_FTR_139_defects = require('./Routes/Surface FTR 139/fetching_surface_ftr_139_defects')
const add_surface_FTR_139_defect = require('./Routes/Surface FTR 139/AddNew_surface_ftr_139_defect')

const Bluetooth_139_defect = require('./Routes/Bluetooth 139/fetching_Bluetooth_139_defects')
const AddNew_Bluetooth_139_defect = require('./Routes/Bluetooth 139/AddNew_Bluetooth_139_defect')

const Electrical_1_140_defects = require('./Routes/Electrical 1 140/fetching_Electrical_1_140_defects')
const AddNew_Electrical_1_140_defect = require('./Routes/Electrical 1 140/AddNew_Electrical_1_140_defect')

const surface_LH_140_defect = require('./Routes/Surface LH 140/fetching_surface_lh_140_defect')
const AddNew_surface_LH_140_defect = require('./Routes/Surface LH 140/AddNew_surface_LH_140_defect')

const rear_INT_140_defects = require('./Routes/Rear Int 140/fetching_rear_INT_140_defects')
const AddNew_rear_INT_140_defect = require('./Routes/Rear Int 140/AddNew_rear_INT_140_defect')

const rear_EXT_141_defects = require('./Routes/Rear EXT 141/fetching_rear_EXT_141_defects')
const AddNew_rear_EXT_141_defect = require('./Routes/Rear EXT 141/AddNew_rear_EXT_141_defect')

const RH_exterior_141_defects = require('./Routes/RH Exterior 141/fetching_RH_exterior_141_defects')
const AddNew_RH_exterior_141_defect = require('./Routes/RH Exterior 141/AddNew_RH_exterior_141_defect')

const LH_Exterior_141_defects = require('./Routes/LH Exterior 141/fetching_LH_Exterior_141_defects')
const AddNew_LH_Exterior_141_defect = require('./Routes/LH Exterior 141/AddNew_LH_Exterior_141_defect')

const Electrical_2_142_defects = require('./Routes/Electrical 2 142/fetching_Electrical_2_142_defects')
const AddNew_Electrical_2_142_defect = require('./Routes/Electrical 2 142/AddNew_Electrical_2_142_defect')

const Front_EXT_142_defects = require('./Routes/Front EXT 142/fetching_Front_EXT_142_defects')
const AddNew_Front_EXT_142_defect = require('./Routes/Front EXT 142/AddNew_Front_EXT_142_defect')

const Door_closing_142_defects = require('./Routes/Door Closing 142/fetching_Door_closing_142_defects')
const AddNew_Door_closing_142_defect = require('./Routes/Door Closing 142/AddNew_Door_closing_142_defect')

const app = express();
app.use(express.json())
app.use(cors())

// --------------------------------APIs-----------------------------------

app.use('/surface_RH_139_defects', surface_RH_139_defects);
app.use('/add_surface_RH_139_defect', add_surface_RH_139_defect);

app.use('/surface_FTR_139_defects', surface_FTR_139_defects);
app.use('/add_surface_FTR_139_defect', add_surface_FTR_139_defect);

app.use('/Electrical_1_140_defects', Electrical_1_140_defects);
app.use('/AddNew_Electrical_1_140_defect', AddNew_Electrical_1_140_defect);

app.use('/Bluetooth_139_defect', Bluetooth_139_defect);
app.use('/AddNew_Bluetooth_139_defect', AddNew_Bluetooth_139_defect);

app.use('/surface_LH_140_defect', surface_LH_140_defect);
app.use('/AddNew_surface_LH_140_defect', AddNew_surface_LH_140_defect);

app.use('/rear_INT_140_defects', rear_INT_140_defects);
app.use('/AddNew_rear_INT_140_defect', AddNew_rear_INT_140_defect);

app.use('/rear_EXT_141_defects', rear_EXT_141_defects);
app.use('/AddNew_rear_EXT_141_defect', AddNew_rear_EXT_141_defect);

app.use('/RH_exterior_141_defects', RH_exterior_141_defects);
app.use('/AddNew_RH_exterior_141_defect', AddNew_RH_exterior_141_defect);

app.use('/LH_Exterior_141_defects', LH_Exterior_141_defects);
app.use('/AddNew_LH_Exterior_141_defect', AddNew_LH_Exterior_141_defect);

app.use('/Electrical_2_142_defects', Electrical_2_142_defects);
app.use('/AddNew_Electrical_2_142_defect', AddNew_Electrical_2_142_defect);

app.use('/Front_EXT_142_defects', Front_EXT_142_defects);
app.use('/AddNew_Front_EXT_142_defect', AddNew_Front_EXT_142_defect);

app.use('/Door_closing_142_defects', Door_closing_142_defects);
app.use('/AddNew_Door_closing_142_defect', AddNew_Door_closing_142_defect);

mongoose.set("strictQuery", true);
// Connect()

Connect().then(() => {
  app.listen(5000);
  console.log('Server running');
}).catch((err) => {
  console.log(err);
})
  