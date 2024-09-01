import React, { FC } from "react";

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

type AddOnProps = {
  addOns: AddOns;
  setAddOns: React.Dispatch<React.SetStateAction<AddOns>>;
  carComponent: (keyof AddOns)[];
  carComponentName: string;
};

const AddOn: FC<AddOnProps> = ({
  addOns,
  setAddOns,
  carComponent,
  carComponentName,
}) => {
  const handleAddOnChange = (addOn: keyof AddOns) => {
    setAddOns({ ...addOns, [addOn]: !addOns[addOn] });
  };

  return (
    <div>
      <h3 className="font-semibold mb-4">{carComponentName}</h3>
      {carComponent.map((addOn: keyof AddOns) => (
        <label key={addOn} className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={addOns[addOn]}
            onChange={() => handleAddOnChange(addOn)}
            className="checkbox checkbox-primary m-1"
          />
          <span className="label-text capitalize">
            {addOn.replace(/([A-Z])/g, " $1")}
          </span>
        </label>
      ))}
    </div>
  );
};

export default AddOn;
