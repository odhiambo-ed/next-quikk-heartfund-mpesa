import React from "react";

interface ButtonGroupProps {
  amounts: number[];
  onSelect: (amount: number) => void;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ amounts, onSelect }) => {
  return (
    <div className="flex space-x-4">
      {amounts.map((amount) => (
        <button
          key={amount}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => onSelect(amount)}
        >
          ${amount}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;