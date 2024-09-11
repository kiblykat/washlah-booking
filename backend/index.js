import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import ticketRoutes from "./routes/tickets.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

//use /tickets endpoints for ticket booking
app.use("/tickets", ticketRoutes);

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("app connected to db");
    app.listen(4000, () => {
      console.log(`listening on port ${process.env.PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};
startServer();

app.get("/", (req, res) => {
  res.status(200).json({ msg: "ok" });
});
