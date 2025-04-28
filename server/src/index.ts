import express, { Request, Response } from "express";
const app = express();

const PORT = 4001;


app.get("/", (req: Request, res: Response) => {
    res.send(`App is running !`);
  });
  

app.listen(PORT , () => {
    console.log(`App is up and running on PORT ${PORT}`);
})

