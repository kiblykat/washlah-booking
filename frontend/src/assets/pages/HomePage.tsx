import React, { useState } from "react";

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

function HomePage() {
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
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 bg-white shadow-md">
        <div className="flex items-center">
          <img
            src="/path-to-your-logo.png"
            alt="Logo"
            className="h-12 w-12 mr-2"
          />
          <span className="text-xl font-semibold">WashInn Detailers</span>
        </div>
        <div className="flex space-x-4">
          <a href="#tickets" className="link link-hover">
            My Tickets
          </a>
          <a href="#bookings" className="link link-hover">
            Bookings
          </a>
          <a href="#calendar" className="link link-hover">
            Calendar
          </a>
          <button className="btn btn-success">Book A Slot Now ↓</button>
        </div>
      </nav>

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
              facilisis a, condimentum vitae magna. Praesent rutrum, dolor quis
              hendrerit lacinia, est massa feugiat velit, eu suscipit libero
              nulla et ligula.
            </p>
          </div>
        </div>

        {/* Add Ons */}
        <div className="mt-10">
          <h2 className="text-3xl font-bold mb-6 text-center">Add Ons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Panels */}
            <div>
              <h3 className="font-semibold mb-4">Panels</h3>
              {PanelAddOns.map((addOn) => (
                <label key={addOn} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={addOns[addOn]}
                    onChange={() => handleAddOnChange(addOn)}
                    className="checkbox checkbox-primary"
                  />
                  <span className="label-text capitalize">
                    {addOn.replace(/([A-Z])/g, " $1")}
                  </span>
                </label>
              ))}
            </div>

            {/* Wheels */}
            <div>
              <h3 className="font-semibold mb-4">Wheels</h3>
              {WheelsAddOns.map((addOn) => (
                <label key={addOn} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={addOns[addOn]}
                    onChange={() => handleAddOnChange(addOn)}
                    className="checkbox checkbox-primary"
                  />
                  <span className="label-text capitalize">
                    {addOn.replace(/([A-Z])/g, " $1")}
                  </span>
                </label>
              ))}
            </div>

            {/* Engine Bay */}
            <div>
              <h3 className="font-semibold mb-4">Engine Bay</h3>
              {EngineAddOns.map((addOn) => (
                <label key={addOn} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={addOns[addOn]}
                    onChange={() => handleAddOnChange(addOn)}
                    className="checkbox checkbox-primary"
                  />
                  <span className="label-text capitalize">{addOn}</span>
                </label>
              ))}
            </div>

            {/* Glass & Plastics */}
            <div>
              <h3 className="font-semibold mb-4">Glass & Plastics</h3>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={addOns.windowPolish}
                  onChange={() => handleAddOnChange("windowPolish")}
                  className="checkbox checkbox-primary"
                />
                <span className="label-text">Window Polish</span>
              </label>
            </div>
          </div>
        </div>

        {/* Total Price and Book Button */}
        <div className="mt-10 flex justify-end items-center">
          <p className="text-2xl font-bold mr-4">Total Price: ${totalPrice}</p>
          <button className="btn btn-success btn-lg">Book! →</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
