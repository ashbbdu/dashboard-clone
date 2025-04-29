import express from "express";
import { shipmentVolumeByRange } from "../controllers/Shipment";

const router = express.Router();

router.get("/shipmentvolumetbyrange" , shipmentVolumeByRange)


export default router;