import { NextFunction, Request, RequestHandler, Response } from "express";



export const shipmentVolumeByRange = async (req :  Request , res : Response ) : Promise<any> => {
    try {
        console.log("shipmentVolumeByRange");
        return res.send("success");
        
    } catch (error) {
        console.log(error);
        return res.send("Error");
    }
}