import React from "react";
import type { ReviewProps } from "./types";

const StepFour: React.FC<ReviewProps> = ({ formData }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Step 3: Review & Submit</h2>
      <p className="mb-2">
        <b>First Name:</b> {formData.firstName}
      </p>
      <p className="mb-2">
        <b>Last Name:</b> {formData.lastName}
      </p>
      <p className="mb-2">
        <b>Email:</b> {formData.email}
      </p>
      <p className="mb-2">
        <b>Phone:</b> {formData.phone}
      </p>
      <p className="mb-2">
        <b>City:</b> {formData.city}
      </p>
      <p className="mb-2">
        <b>State:</b> {formData.state}
      </p>
    </div>
  );
};

export default StepFour;
