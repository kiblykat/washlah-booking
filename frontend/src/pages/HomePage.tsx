import { useEffect, useState } from "react";
import { useAuth } from "../hooks/hooks";
import { Navigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import AddOn from "../components/AddOn";
import bookingAPI from "../api/api";
import DateChoice from "../components/DateChoice";

type AddOns = {
  quickWax: boolean;
  ceramicDetailer: boolean;
  wetcoatSealant: boolean;
  pasteWax: boolean;
  tiresCleaning: boolean;
  innerBarrel: boolean;
  rimsDegrease: boolean;
  conditioning: boolean;
  detailing: boolean;
  windowPolish: boolean;
};

type SlotDesc = {
  P1: string;
  P2: string;
  P3: string;
  P4: string;
};

const PanelAddOns: (keyof AddOns)[] = [
  "quickWax",
  "ceramicDetailer",
  "wetcoatSealant",
  "pasteWax",
];

const WheelsAddOns: (keyof AddOns)[] = [
  "tiresCleaning",
  "innerBarrel",
  "rimsDegrease",
];

const EngineAddOns: (keyof AddOns)[] = ["conditioning", "detailing"];

const GlassPlasticAddOns: (keyof AddOns)[] = ["windowPolish"];

const slotPrices: { [key: string]: number } = {
  P1: 25,
  P2: 38,
  P3: 55,
  P4: 80,
};

const addOnPrices: { [K in keyof AddOns]: number } = {
  quickWax: 15,
  ceramicDetailer: 20,
  wetcoatSealant: 25,
  pasteWax: 30,
  tiresCleaning: 5,
  innerBarrel: 8,
  rimsDegrease: 5,
  conditioning: 15,
  detailing: 30,
  windowPolish: 200,
};

const slotdesc: SlotDesc = {
  P1: "(VIP Only) Foam wash (PH Neutral) + Vacuum + Tyre Shine + Glass Clean",
  P2: "P1 + Plastics/trims restore + Rims degrease + Quick wax",
  P3: "P1 + P2 + Leather seats conditioning+ Inner barrel + Tyre Cleaning",
  P4: "P1 + P2 + P3 + Clay rub + Full interior conditioning + Engine bay(C) + Wetcoat",
};

function calculateTotalPrice(selectedSlot: string, addOns: AddOns): number {
  //calculate slot price
  const totalSlotPrice = slotPrices[selectedSlot];

  //calculate addOn price
  const totalAddOnPrice = Object.keys(addOns)
    .filter((key) => addOns[key as keyof AddOns])
    .reduce((total, key) => total + addOnPrices[key as keyof AddOns], 0);

  return totalSlotPrice + totalAddOnPrice; //return total price
}

async function handleBooking(
  uid: string | undefined,
  selectedSlot: string,
  addOns: AddOns
) {
  const newBooking = {
    userId: uid,
    slotType: selectedSlot,
    addOns: addOns,
    purchaseDate: Date.now,
    validUntil: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
  };

  try {
    const response = await bookingAPI.post("/", newBooking);
    console.log(
      "response from bookingAPI is: " + JSON.stringify(response.data)
    );
    //todo: UID IS JUST FOR DEMONSTRATION PURPOSES
    toast.success(`booking successful for user ${uid}`);
  } catch (error) {
    // @ts-expect-error todo: update error class
    toast.error(error.response.data.msg);
    // @ts-expect-error todo: update error class
    console.log(error.response.data.msg);
  }
}

function HomePage() {
  const [bookDate, setBookDate] = useState<Date | null>(new Date());
  const { userLoggedIn, currentUser } = useAuth();
  const [selectedSlot, setSelectedSlot] = useState("P1");
  const [addOns, setAddOns] = useState<AddOns>({
    quickWax: true,
    ceramicDetailer: false,
    wetcoatSealant: false,
    pasteWax: true,
    tiresCleaning: false,
    innerBarrel: false,
    rimsDegrease: false,
    conditioning: true,
    detailing: true,
    windowPolish: false,
  });
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const handleSlotChange = (slot: string) => {
    setSelectedSlot(slot);
  };

  useEffect(() => {
    const total = calculateTotalPrice(selectedSlot, addOns);
    setTotalPrice(total);
  }, [selectedSlot, addOns]);

  return (
    <>
      {!userLoggedIn && <Navigate to={"/"} replace={true} />}
      <div className="min-h-screen bg-gray-100">
        <div className=" flex justify-center align-middle">
          <DateChoice bookDate={bookDate} setBookDate={setBookDate} />
        </div>
        {/* Main Content */}
        <div className="container mx-auto py-10 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Slot Type Selection */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Slot Type</h2>
              <div className="space-y-4">
                {["P1", "P2", "P3", "P4"].map((slot) => (
                  <button
                    key={slot}
                    className={`btn btn-block ${
                      selectedSlot === slot ? "btn-primary" : "btn-outline"
                    }`}
                    onClick={() => handleSlotChange(slot)}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Description</h2>
              <p className="text-lg">
                <strong>{selectedSlot}:</strong>{" "}
                {slotdesc[selectedSlot as keyof SlotDesc]}
              </p>
            </div>
          </div>

          {/* Add Ons */}
          <div className="mt-10">
            <h2 className="text-3xl font-bold mb-6 text-center">Add Ons</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Panels */}
              <AddOn
                addOns={addOns}
                setAddOns={setAddOns}
                carComponent={PanelAddOns}
                carComponentName="Panels"
              />
              {/* Wheels */}
              <AddOn
                addOns={addOns}
                setAddOns={setAddOns}
                carComponent={WheelsAddOns}
                carComponentName="Wheels"
              />

              {/* Engine Bay */}
              <AddOn
                addOns={addOns}
                setAddOns={setAddOns}
                carComponent={EngineAddOns}
                carComponentName="Engine Bay"
              />

              {/* Glass & Plastics */}
              <AddOn
                addOns={addOns}
                setAddOns={setAddOns}
                carComponent={GlassPlasticAddOns}
                carComponentName="Glass & Plastics"
              />
            </div>
          </div>

          {/* Total Price and Book Button */}
          <div className="mt-10 flex justify-end items-center">
            <p className="text-2xl font-bold mr-4">
              Total Price: ${totalPrice}
            </p>
            <button
              className="btn btn-success btn-lg"
              onClick={() =>
                handleBooking(currentUser?.uid, selectedSlot, addOns)
              }
            >
              Book! →
            </button>
            <Toaster />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
