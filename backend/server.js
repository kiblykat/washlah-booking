import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const app = express();
app.use(cors());

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("app connected to db");
  } catch (err) {
    console.log(err);
  }
};
startServer();

app.listen(4000, () => {
  console.log(`listening on port ${process.env.PORT}`);
});

app.get("/", (req, res) => {
  res.status(200).json({ msg: "ok" });
});
