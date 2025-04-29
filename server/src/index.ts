import express, { Request, Response } from "express";
import User from "./models/User";

const app = express();
const PORT = 4001;

require("./database/database");

User.sync({force : true});

app.get("/", (req: Request, res: Response) => {
    res.send(`App is running !`);
  });
  


app.listen(PORT , () => {
    console.log(`App is up and running on PORT ${PORT}`);
})

