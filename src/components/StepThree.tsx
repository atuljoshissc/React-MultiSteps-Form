import React from "react";
import type { StepProps } from "./types";

const StepThree: React.FC<StepProps> = ({ formData, setFormData }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Step 2: City And State Info</h2>
      <input
        type="text"
        placeholder="ciry"
        value={formData.city}
        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
        className="border p-2 rounded w-full mb-3"
      />
      <input
        type="text"
        placeholder="state"
        value={formData.state}
        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
        className="border p-2 rounded w-full"
      />
    </div>
  );
};

export default StepThree;
