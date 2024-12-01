import { createNotification } from "@directus/sdk";
import { useState, useEffect } from "react";
import { Button } from "../../../components/ui/button";
import { getUsers, getMealPlans, getUserBmiCategory, createMealPlan, updateMealPlan, deleteMealPlan } from "../../../shared/firestore";
import AddMealPlanModal from "../../modals/AddMealPlanModal";
import DeleteMealPlanModal from "../../modals/DeleteMealPlanModal";
import FillDetailsModal from "../../modals/FillDetailsModal";
import UpdateMealPlanModal from "../../modals/UpdateMealPlanModal";

const MealPlanForm: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]); // existing state
  const [mealPlans, setMealPlans] = useState<any[]>([]); // existing state
  const [selectedUser, setSelectedUser] = useState<string>(''); // existing state
  const [selectedMealPlan, setSelectedMealPlan] = useState<string>(''); // existing state
  const [bmiCategory, setBmiCategory] = useState<string>(''); // existing state
  const [mealPlanDetails, setMealPlanDetails] = useState<string>(''); // existing state
  const [duration, setDuration] = useState<string>(''); // existing state
  const [nutritionalGoals, setNutritionalGoals] = useState<string>(''); // existing state
  const [notificationTitle, setNotificationTitle] = useState<string>(''); // existing state
  const [notificationMessage, setNotificationMessage] = useState<string>(''); // existing state
  const [priority, setPriority] = useState<string>('normal'); // existing state
  const [dietPrescription, setDietPrescription] = useState<string>(''); // existing state
  const [recommendedIntake, setRecommendedIntake] = useState({
    meat: '',
    vegetables: '',
    fruits: '',
    rice: '',
    fat: '',
    water: ''
  }); // existing state
  const [physicalActivities, setPhysicalActivities] = useState<string[]>([]); // existing state

  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false); // existing state
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState<boolean>(false); // existing state
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false); // existing state
  const [isFillDetailsModalOpen, setIsFillDetailsModalOpen] = useState<boolean>(false); // existing state

  const activityOptions = [
    '30 minuto paglalakad',
    '30-45 minuto lakad – takbo',
    '60 minuto paglalakad',
    '60 minuto lakad-takbo',
    '30 minuto jogging',
    '30-45 minuto jogging',
    '60 minuto jogging'
  ];

  // Define allowed durations
  const allowedDurations = [
    '1 week',
    '2 weeks',
    '3 weeks',
    '1 month',
    '2 months',
    '3 months',
    '6 months'
  ];

  // Predefined BMI categories
  const predefinedBmiCategories = [
    'Underweight',
    'Normal weight',
    'Overweight',
    'Obesity'
  ];

  useEffect(() => {
    const fetchUsers = async () => {
      const usersData = await getUsers();
      setUsers(usersData);
    };
    const fetchMealPlans = async () => {
      const mealPlansData = await getMealPlans();
      setMealPlans(mealPlansData);
    };
    fetchUsers();
    fetchMealPlans();
  }, []);

  const handleUserChange = async (userId: string) => {
    setSelectedUser(userId);
    if (userId) {
      try {
        const bmiData = await getUserBmiCategory(userId);
        setBmiCategory(bmiData || '');
      } catch (error) {
        console.error('Error fetching BMI category:', error);
        setBmiCategory('');
      }
    } else {
      setBmiCategory('');
    }
  };

  const clearForm = () => {
    setSelectedUser('');
    setSelectedMealPlan('');
    setBmiCategory('');
    setMealPlanDetails('');
    setDuration('');
    setNutritionalGoals('');
    setNotificationTitle('');
    setNotificationMessage('');
    setPriority('normal');
    setDietPrescription('');
    setRecommendedIntake({
      meat: '',
      vegetables: '',
      fruits: '',
      rice: '',
      fat: '',
      water: ''
    });
    setPhysicalActivities([]);
  };

  const handleAssignMealPlan = async () => {
    if (selectedUser && mealPlanDetails && notificationTitle && notificationMessage && duration) {
      try {
        const mealPlanData = {
          bmiCategory: bmiCategory,
          createdAt: new Date(),
          duration,
          details: mealPlanDetails,
          nutritionalGoals,
          dietPrescription,
          recommendedIntake,
          physicalActivities
        };
        const mealPlanId = `${selectedUser}-${Date.now()}`;
        await createMealPlan(mealPlanId, mealPlanData);

        const notificationData = {
          userId: selectedUser,
          title: notificationTitle,
          message: notificationMessage,
          priority,
          createdAt: new Date()
        };
        await createNotification(notificationData);

        setMealPlans([...mealPlans, { id: mealPlanId, ...mealPlanData }]);
        setIsAddModalOpen(true);
        clearForm();
      } catch (error) {
        console.error('Error saving meal plan or notification:', error);
      }
    } else {
      setIsFillDetailsModalOpen(true);
    }
  };

  const handleUpdateMealPlan = async () => {
    if (selectedMealPlan) {
      try {
        const updatedData = {
          details: mealPlanDetails,
          duration,
          nutritionalGoals,
          dietPrescription,
          recommendedIntake,
          physicalActivities
        };
        await updateMealPlan(selectedMealPlan, updatedData);
        setIsUpdateModalOpen(true);
        setMealPlans(mealPlans.map(plan => plan.id === selectedMealPlan ? { ...plan, ...updatedData } : plan));
      } catch (error) {
        console.error('Error updating meal plan:', error);
      }
    }
  };

  const handleDeleteMealPlan = async () => {
    if (selectedMealPlan) {
      try {
        await deleteMealPlan(selectedMealPlan);
        setIsDeleteModalOpen(true);
        setMealPlans(mealPlans.filter(plan => plan.id !== selectedMealPlan));
        setSelectedMealPlan('');
        setMealPlanDetails('');
        setDuration('');
        setNutritionalGoals('');
      } catch (error) {
        console.error('Error deleting meal plan:', error);
      }
    }
  };

  const handleActivityChange = (activity: string) => {
    setPhysicalActivities(prevActivities =>
      prevActivities.includes(activity)
        ? prevActivities.filter(a => a !== activity)
        : [...prevActivities, activity]
    );
  };
  return (
  <div className="p-4 bg-white shadow-md rounded-md mx-auto w-full sm:w-11/12 md:w-9/12 lg:w-8/12 xl:w-7/12">
    <h2 className="text-2xl mb-6 text-center font-semibold">Assign Meal Plan</h2>

    <div className="space-y-4">
      {/* User Selection */}
      {/* <div>
        <label className="block text-sm font-medium text-gray-700">Selected User</label>
        <select
          className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm text-sm"
          onChange={(e) => handleUserChange(e.target.value)}
          value={selectedUser}
        >
          {users.map(user => (
            <option key={user.id} value={user.id}>
              {user.firstname} {user.lastname}
            </option>
          ))}
        </select>
      </div> */}
        {/* Selected User Display */}
      {selectedUser && (
        <div>
          <label className="block text-sm font-medium text-gray-700">Selected User</label>
          <select
            className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm text-sm p-2"
            value={selectedUser}  // Automatically selects the user when selectedUser is set
            disabled // Make this dropdown read-only
          >
            <option value="">
              {users.find(user => user.id === selectedUser)?.firstname}{" "}
              {users.find(user => user.id === selectedUser)?.lastname}
            </option>
          </select>
        </div>
      )}

      {/* Duration and BMI Category */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Duration */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Duration</label>
          <select
            className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm text-sm"
            onChange={(e) => setDuration(e.target.value)}
            value={duration}
          >
            <option value="">Select Duration</option>
            {allowedDurations.map(d => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>

        {/* BMI Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700">BMI Category</label>
          <select
            className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm text-sm"
            onChange={(e) => setBmiCategory(e.target.value)}
            value={bmiCategory}
          >
            <option value="">Select BMI Category</option>
            {predefinedBmiCategories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Meal Plan Details */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Meal Plan Details</label>
        <textarea
          className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm text-sm"
          rows={3}
          value={mealPlanDetails}
          onChange={(e) => setMealPlanDetails(e.target.value)}
        ></textarea>
      </div>

      {/* Nutritional Goals */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Nutritional Goals</label>
        <textarea
          className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm text-sm"
          rows={3}
          value={nutritionalGoals}
          onChange={(e) => setNutritionalGoals(e.target.value)}
        ></textarea>
      </div>

      {/* Physical Activities */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Select Physical Activities</label>
        <div className="mt-2 flex flex-wrap gap-4">
          {activityOptions.map(activity => (
            <label key={activity} className="text-sm flex items-center gap-2 w-full sm:w-1/2 lg:w-1/3">
              <input
                type="checkbox"
                value={activity}
                checked={physicalActivities.includes(activity)}
                onChange={() => handleActivityChange(activity)}
                className="mr-2"
              />
              {activity}
            </label>
          ))}
        </div>
      </div>
      {/* Recommended Intake */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Recommended Intake</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {Object.keys(recommendedIntake).map((key) => (
            <div key={key}>
              <label className="block text-xs">{key.charAt(0).toUpperCase() + key.slice(1)}</label>
              <input
                type="number"
                className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm text-sm"
                value={recommendedIntake[key as keyof typeof recommendedIntake]}
                onChange={(e) =>
                  setRecommendedIntake({
                    ...recommendedIntake,
                    [key]: e.target.value
                  })
                }
              />
            </div>
          ))}
        </div>
      </div>

       {/* Action Buttons */}
        <div className="space-x-4 mt-6">
          <Button
            onClick={handleAssignMealPlan}
            style={{ backgroundColor: "#38A169", color: "white" }} // Green for "Assign"
          >
            Assign Meal Plan
          </Button>
          <Button
            onClick={handleUpdateMealPlan}
            disabled={!selectedMealPlan}
            style={{ backgroundColor: "#4299E1", color: "white" }} // Blue for "Update"
          >
            Update Meal Plan
          </Button>
          <Button
            onClick={handleDeleteMealPlan}
            disabled={!selectedMealPlan}
            style={{ backgroundColor: "#E53E3E", color: "white" }} // Red for "Delete"
          >
            Delete Meal Plan
          </Button>
        </div>
      </div>

    {/* Modals for Add, Update, Delete */}
    <AddMealPlanModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
    <UpdateMealPlanModal isOpen={isUpdateModalOpen} onClose={() => setIsUpdateModalOpen(false)} />
    <DeleteMealPlanModal isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)} />
    <FillDetailsModal isOpen={isFillDetailsModalOpen} onClose={() => setIsFillDetailsModalOpen(false)} />
  </div>
);

};

export default MealPlanForm;
