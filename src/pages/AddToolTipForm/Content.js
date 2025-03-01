import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const steps = ["Location", "Content", "Styling"];

const Stepper = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  const handlePrev = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  return (
    <div className="flex flex-col space-y-12 w-2/3">
      {/* Stepper */}
      <div className="flex items-center space-x-0">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            {/* Step Bubble */}
            <div className="flex items-center space-x-0">
              <div
                className={`flex items-center space-x-2 px-4 py-2 border-2 rounded-full transition-all duration-200 ${
                  index === activeStep
                    ? "border-blue-700 bg-blue-100"
                    : "border-gray-300 bg-white opacity-50"
                }`}
              >
                <div
                  className={`w-6 h-6 flex items-center justify-center text-sm font-semibold border rounded-full transition-all duration-200 ${
                    index === activeStep
                      ? "text-blue-700 border-blue-700"
                      : "text-gray-400 border-gray-300"
                  }`}
                >
                  {index + 1}
                </div>
                <span
                  className={`font-medium transition-all duration-200 ${
                    index === activeStep ? "text-blue-700" : "text-gray-400"
                  }`}
                >
                  {step}
                </span>
              </div>
            </div>

            {/* Connector Line */}
            {index < steps.length - 1 && <div className="w-10 h-[2px] bg-gray-300"></div>}
          </React.Fragment>
        ))}
      </div>
        

      <div className=" bg-white">
      {/* Form Section */}
      <div className="space-y-12 w-full ">
        {/* Page Selection */}
        <div className="flex flex-row justify-between space-x-8">
        <div>  <label className="block text-gray-900 font-bold text-lg">Page</label>
             <p className="text-gray-500 text-sm">Choose page to add tooltip</p></div>
        
          <select className="mt-2 w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500">
            <option>Page</option>
          </select>
        </div>

        {/* Element Selection */}
        <div className="flex flex-row justify-between space-x-8">
        <div>  <label className="block text-gray-900 font-bold text-lg">Select Element</label>
             <p className="text-gray-500 text-sm">Select Element from the Page</p></div>
        
          <select className="mt-2 w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500">
            <option>Element</option>
          </select>
        </div>

        {/* Position Selection */}
        <div className="flex flex-row justify-between space-x-8">
        <div>  <label className="block text-gray-900 font-bold text-lg">Position</label>
             <p className="text-gray-500 text-sm">Select Position for Tooltip</p></div>
        
          <select className="mt-2 w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500">
            <option>Position</option>
          </select>
        </div>
        <div className="flex flex-row justify-between space-x-8">
        <div>  <label className="block text-gray-900 font-semibold">Other Margins</label>
             <p className="text-gray-500 text-sm">Choose page to add tooltip</p></div>
        
             <table className="mt-2 w-1/2 border-collapse border border-gray-300 rounded-sm">
            <thead>
              <tr className="bg-gray-200 text-gray-700 text-sm">
                <th className="border border-gray-300 px-4 py-2">Top</th>
                <th className="border border-gray-300 px-4 py-2">Bottom</th>
                <th className="border border-gray-300 px-4 py-2">Right</th>
                <th className="border border-gray-300 px-4 py-2">Left</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-4"></td>
                <td className="border border-gray-300 px-4 py-4"></td>
                <td className="border border-gray-300 px-4 py-4"></td>
                <td className="border border-gray-300 px-4 py-4"></td>
              </tr>
            </tbody>
          </table>
        </div>

  
       
      </div>
    </div>


      {/* Navigation Buttons */}
      <div className="flex space-x-4 pt-12">
        
        <button
          className={`px-4 py-2 rounded-md transition-all duration-200 ${
            activeStep === steps.length - 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
          onClick={handleNext}
          disabled={activeStep === steps.length - 1}
        >
          Next
           <FontAwesomeIcon className="ml-4" icon={faChevronRight} />
        </button>
        <button
          className={`px-4 py-2 rounded-md
            
            transition-all duration-200 ${
            activeStep === 0
              ? "bg-gray-300 text-gray-500 cursor-not-allowed hidden"
              : "bg-gray-500 text-white hover:bg-gray-600"
          }`}
          onClick={handlePrev}
          disabled={activeStep === 0}
        >
          Prev
          <FontAwesomeIcon className="ml-4" icon={faChevronLeft} />
        </button>
      </div>
    </div>
  );
};

export default Stepper;
