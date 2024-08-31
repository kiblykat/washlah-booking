import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useAuth } from "../hooks/hooks";
import { Navigate } from "react-router-dom";
import AddOn from "../components/AddOn";

interface AddOns {
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
}

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

function HomePage() {
  const { userLoggedIn } = useAuth();
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

  const handleSlotChange = (slot: string) => {
    setSelectedSlot(slot);
  };

  const handleAddOnChange = (addOn: keyof AddOns) => {
    setAddOns({ ...addOns, [addOn]: !addOns[addOn] });
  };

  const totalPrice = 350; // Example total price, calculate based on selections

  return (
    <>
      {!userLoggedIn && <Navigate to={"/"} replace={true} />}
      <div className="min-h-screen bg-gray-100">
        <Navbar />
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
                <strong>{selectedSlot}:</strong> Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Aenean augue elit, consequat id
                facilisis a, condimentum vitae magna. Praesent rutrum, dolor
                quis hendrerit lacinia, est massa feugiat velit, eu suscipit
                libero nulla et ligula.
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
            <button className="btn btn-success btn-lg">Book! →</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
