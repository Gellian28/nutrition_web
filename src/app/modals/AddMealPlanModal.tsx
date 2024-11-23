import React from 'react';

interface AddMealPlanModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddMealPlanModal: React.FC<AddMealPlanModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded shadow-lg">
        <p>Meal plan saved successfully!</p>
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={onClose}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default AddMealPlanModal;