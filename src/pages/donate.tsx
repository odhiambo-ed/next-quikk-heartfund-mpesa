import React, { useState } from "react";
import ButtonGroup from "../components/ButtonGroup";
import { toast } from "react-toastify";

const Donate: React.FC = () => {


  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Make a Donation</h1>
      <ButtonGroup amounts={[10, 20, 50, 100]} onSelect={handleSelectAmount} />
      <form onSubmit={handleSubmit} className="mt-6">
        <button
          type="submit"
          className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Proceed to Payment
        </button>
      </form>
    </div>
  );
};

export default Donate;
