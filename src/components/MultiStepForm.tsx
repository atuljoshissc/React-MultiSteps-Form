import React, { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import type{ FormData } from "./types";
import StepFour from "./StepFour";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    state: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/insert", formData);
      alert("Data inserted successfully!");
      navigate("/sucess");
    } catch (error) {
      alert("Error inserting data!");
    }
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="max-w-lg mx-auto p-6 border rounded-xl shadow-md bg-gray-700 text-white">
      {/* This Is Progress Indicator Which Teels In Which Step We Are */}
      <div className="flex justify-between mb-6">
        {[1, 2, 3, 4].map((s) => (
          <div
            key={s}
            className={`w-8 h-8 flex items-center justify-center rounded-full text-white font-bold ${
              step >= s ? "bg-blue-500" : "bg-gray-300"
            }`}
          >
            {s}
          </div>
        ))}
      </div>

      {/* Step Components */}
      {step === 1 && <StepOne formData={formData} setFormData={setFormData} />}
      {step === 2 && <StepTwo formData={formData} setFormData={setFormData} />}
      {step === 3 && <StepThree formData={formData} setFormData={setFormData} />}
      {step === 4 && <StepFour formData={formData} />}

      {/* These Are Navigation Buttons */}
      <div className="flex justify-between mt-6">
        {step > 1 && (
          <button
            onClick={prevStep}
            className="px-4 py-2 bg-gray-400 text-white rounded-lg"
          >
            Previous
          </button>
        )}

        {step < 4 && (
          <button
            onClick={nextStep}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg ml-auto"
          >
            Next
          </button>
        )}

        {step === 4 && (
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-green-500 text-white rounded-lg ml-auto"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;