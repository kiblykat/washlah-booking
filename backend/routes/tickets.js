import express from "express";
import { TicketModel } from "../model/ticketModel.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const tickets = await TicketModel.find({});
    return res.status(200).json({ data: tickets });
  } catch (err) {
    console.log(err);
  }
});

router.post("/", async (req, res) => {
  try {
    if (
      !req.body.userId ||
      !req.body.slotType ||
      !req.body.addOns ||
      !req.body.validUntil
    ) {
      return res.status(400).json({ msg: "send all required fields" });
    }

    const isAlrBooked = await TicketModel.findOne({
      userId: req.body.userId,
    });
    if (isAlrBooked) {
      return res.status(400).json({ msg: "ticket already booked" });
    }
    const newTicket = {
      userId: req.body.userId,
      slotType: req.body.slotType,
      addOns: req.body.addOns,
      validUntil: req.body.validUntil,
    };
    const favParking = await TicketModel.create(newTicket);
    res.status(200).json({ data: favParking });
  } catch (err) {
    console.log(err);
  }
});

router.delete("/", (req, res) => {
  try {
    res.status(200).json({ msg: "delete" });
  } catch (err) {
    console.log(err);
  }
});

export default router;
