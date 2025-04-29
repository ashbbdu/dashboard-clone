import express, { Request, Response } from "express";
import User from "./models/User";
import ShipmentProfile from "./models/ShipmentProfile";
import ShipmentRoutes from "./routes/Shipment"

const app = express();
const PORT = 4001;

require("./database/database");

// User.sync();
// ShipmentProfile.sync();

app.get("/", (req: Request, res: Response) => {
    res.send(`App is running !`);
  });
  
app.use("/api/v1/shipment" , ShipmentRoutes) 


app.listen(PORT , () => {
    console.log(`App is up and running on PORT ${PORT}`);
})

