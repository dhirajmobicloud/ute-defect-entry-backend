const express = require("express");
const router = express.Router();

const Vehicle = require("../../Models/Vehicle_Schema");
const Bluetooth_139_Schema = require("../../Models/Bluetooth_139_Schema");
const Surface_RH_139_Schema = require("../../Models/Surface_RH_139_Schema");
const Electrical_1_140_Schema = require("../../Models/Electrical_1_140_Schema");
const Surface_FTR_139_Schema = require("../../Models/Surface_FTR_139_Schema");
const Surface_LH_140_Schema = require("../../Models/Surface_LH_140_Schema");
const Rear_Int_140_Schema = require("../../Models/Rear_Int_140_Schema");
const Rear_EXT_141_Schema = require("../../Models/Rear_EXT_141_Schema");
const RH_Exterior_141_Schema = require("../../Models/RH_Exterior_141_Schema");
const LH_Exterior_141_Schema = require("../../Models/LH_Exterior_141_Schema");
const Electrical_2_142_Schema = require("../../Models/Electrical_2_142_Schema");
const Front_EXT_142_Schema = require("../../Models/Front_EXT_142_Schema");
const Door_Closing_142_Schema = require("../../Models/Door_Closing_142_Schema");

router.post("/", async (req, res) => {
  console.log(req.body);
  let selected_defects = req.body.sectedDefects;
 let operation= selected_defects.forEach(async (element) => {
    if (element.Segement === "Surface-RH-139") {
      let delete_defect = await Surface_RH_139_Schema.deleteOne({
        _id: element._id,
      });
      console.log(delete_defect);
      let update_segement = new Surface_RH_139_Schema(req.body.newDefect);
      let result = await update_segement.save();
      console.log("Surface_RH_139_Schema");
    }
    if (element.Segement === "Bluetooth-139") {
      let delete_defect = await Bluetooth_139_Schema.deleteOne({
        _id: element._id,
      });
      console.log(delete_defect);
      let update_segement = new Bluetooth_139_Schema(req.body.newDefect);
      let result = await update_segement.save();
      console.log("Bluetooth_139_Schema");
    }
    if (element.Segement === "Electrical-1-140") {
      let delete_defect = await Electrical_1_140_Schema.deleteOne({
        _id: element._id,
      });
      console.log(delete_defect);
      let update_segement = new Electrical_1_140_Schema(req.body.newDefect);
      let result = await update_segement.save();
      console.log("Electrical_1_140_Schema");
    }
    if (element.Segement === "Surface-LH-140") {
      let delete_defect = await Surface_LH_140_Schema.deleteOne({
        _id: element._id,
      });
      console.log(delete_defect);
      let update_segement = await new Surface_LH_140_Schema(req.body.newDefect);
      let result = await update_segement.save();
      console.log("Surface_LH_140_Schema");
    }
    if (element.Segement === "Rear-Int-140") {
      let delete_defect = await Rear_Int_140_Schema.deleteOne({
        _id: element._id,
      });
      console.log(delete_defect);
      let update_segement = await new Rear_Int_140_Schema(req.body.newDefect);
      let result = await update_segement.save();
      // console.log(res.send(result))
    }
    if (element.Segement === "Rear-EXT-141") {
      let delete_defect = await Rear_EXT_141_Schema.deleteOne({
        _id: element._id,
      });
      console.log(delete_defect);
      let update_segement = await new Rear_EXT_141_Schema(req.body.newDefect);
      let result = await update_segement.save();
      // console.log(res.send(result))
    }
    if (element.Segement === "RH-Exterior-141") {
      let delete_defect = await RH_Exterior_141_Schema.deleteOne({
        _id: element._id,
      });
      console.log(delete_defect);
      let update_segement = await new RH_Exterior_141_Schema(
        req.body.newDefect
      );
      let result = await update_segement.save();
      // console.log(res.send(result))
    }
    if (element.Segement === "LH-Exterior-141") {
      let delete_defect = await LH_Exterior_141_Schema.deleteOne({
        _id: element._id,
      });
      console.log(delete_defect);
      let update_segement = await new LH_Exterior_141_Schema(
        req.body.newDefect
      );
      let result = await update_segement.save();
      // console.log(res.send(result))
    }
    if (element.Segement === "Electrical-2-142") {
      let delete_defect = await Electrical_2_142_Schema.deleteOne({
        _id: element._id,
      });
      console.log(delete_defect);
      let update_segement = await new Electrical_2_142_Schema(
        req.body.newDefect
      );
      let result = await update_segement.save();
      // console.log(res.send(result))
    }
    if (element.Segement === "Front EXT-142") {
      let delete_defect = await Front_EXT_142_Schema.deleteOne({
        _id: element._id,
      });
      console.log(delete_defect);
      let update_segement = await new Front_EXT_142_Schema(req.body.newDefect);
      let result = await update_segement.save();
      // console.log(res.send(result))
    }
    if (element.Segement === "Door-Closing-142") {
      let delete_defect = await Door_Closing_142_Schema.deleteOne({
        _id: element._id,
      });
      console.log(delete_defect);
      let update_segement = await new Door_Closing_142_Schema(
        req.body.newDefect
      );
      let result = await update_segement.save();
      // console.log(res.send(result))
    }

    Vehicle.findOne({ vin: element.vin }).then((vehicle) => {
      if (element.status === "Repaired") {
        let Index = vehicle.repaired.findIndex(
          (item) => item._id === element._id
        );
        vehicle.repaired.splice(Index, 1);
        vehicle.repaired.push(req.body.newDefect);
        Vehicle.updateOne(
          { vin: element.vin },
          { $set: { repaired: vehicle.repaired } }
        ).then((response) => {
          // res.send(response);
          console.log(response);
        });
      } else {
        let Index = vehicle.defect.findIndex(
          (item) => item._id === element._id
        );
        vehicle.defect.splice(Index, 1);
        vehicle.defect.push(req.body.newDefect);
        Vehicle.updateOne(
          { vin: element.vin },
          { $set: { defect: vehicle.defect } }
        ).then((response) => {
          // res.send(response);
          console.log(response);
        });
      }
    });
  });
  res.send(operation)
});

module.exports = router;
