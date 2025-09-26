import React from "react";
import type { StepProps } from "./types";

const StepOne: React.FC<StepProps> = ({ formData, setFormData }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Step 1: Personal Info</h2>
      <input
        type="text"
        placeholder="First Name"
        value={formData.firstName}
        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
        className="border p-2 rounded w-full mb-3"
      />
      <input
        type="text"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
        className="border p-2 rounded w-full"
      />
    </div>
  );
};

export default StepOne;
