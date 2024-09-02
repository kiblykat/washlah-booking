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
    const newTicket = {
      userId: "1",
      slotType: "P1",
      addOns: {
        quickWax: true,
        ceramicDetailer: false,
        wetcoatSealant: false,
        pasteWax: true,
        tiresCleaning: false,
        innerBarrel: false,
        rimsDegrease: true,
        conditioning: true,
        detailing: true,
        windowPolish: false,
      },
      validUntil: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 days from now
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
