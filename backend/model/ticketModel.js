import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  slotType: {
    type: String, // e.g., "P1", "P2", "P3", "P4"
    required: true,
  },
  addOns: {
    panels: {
      quickWax: { type: Boolean, default: false },
      ceramicDetailer: { type: Boolean, default: false },
      wetcoatSealant: { type: Boolean, default: false },
      pasteWax: { type: Boolean, default: false },
    },
    wheels: {
      tiresCleaning: { type: Boolean, default: false },
      innerBarrel: { type: Boolean, default: false },
      rimsDegrease: { type: Boolean, default: false },
    },
    engineBay: {
      conditioning: { type: Boolean, default: false },
      detailing: { type: Boolean, default: false },
    },
    glassAndPlastics: {
      windowPolish: { type: Boolean, default: false },
    },
  },
  purchaseDate: {
    type: Date,
    default: Date.now,
    required: true,
  },
  validUntil: {
    type: Date,
    required: true,
  },
});

export const TicketModel = mongoose.model("Ticket", ticketSchema);
