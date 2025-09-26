import React from "react";
import type { StepProps } from "./types";

const StepTwo: React.FC<StepProps> = ({ formData, setFormData }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Step 2: Contact Info</h2>
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="border p-2 rounded w-full mb-3"
      />
      <input
        type="tel"
        placeholder="Phone"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        className="border p-2 rounded w-full"
      />
    </div>
  );
};

export default StepTwo;
