// import React, { useState, useEffect } from 'react';
// import { getUsers, createUser } from '../../../shared/firestore';
// import { Button } from '../../../components/ui/button';

// const MealPlanForm: React.FC = () => {
//   const [users, setUsers] = useState<any[]>([]);
//   const [selectedUser, setSelectedUser] = useState<string>('');
//   const [mealPlan, setMealPlan] = useState<string>('');
//   const [notification, setNotification] = useState<string>('');

//   useEffect(() => {
//     const fetchUsers = async () => {
//       const usersData = await getUsers();
//       setUsers(usersData);
//     };
//     fetchUsers();
//   }, []);

//   const handleAssignMealPlan = async () => {
//     if (selectedUser && mealPlan) {
//       try {
//         // Save meal plan to Firestore
//         await createUser('mealPlans', selectedUser, { mealPlan, createdAt: new Date() });
//         alert('Meal plan assigned successfully!');

//         // Send notification
//         await sendNotification(selectedUser, notification);
//         alert('Notification sent successfully!');
//       } catch (error) {
//         console.error('Error assigning meal plan or sending notification:', error);
//       }
//     } else {
//       alert('Please select a user and enter a meal plan.');
//     }
//   };

//   const sendNotification = async (userId: string, message: string) => {
//     // Implement FCM notification logic here
//     console.log(`Sending notification to ${userId}: ${message}`);
//     // You would typically call a backend service or cloud function to send the notification
//   };

//   return (
//     <div className="p-4 bg-white shadow-md rounded-md">
//       <h2 className="text-xl mb-4">Assign Meal Plan</h2>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Select User</label>
//         <select
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           onChange={(e) => setSelectedUser(e.target.value)}
//           value={selectedUser}
//         >
//           <option value="">Select User</option>
//           {users.map(user => (
//             <option key={user.id} value={user.id}>
//               {user.firstname} {user.lastname}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Meal Plan</label>
//         <textarea
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           placeholder="Enter meal plan details"
//           value={mealPlan}
//           onChange={(e) => setMealPlan(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Notification Message</label>
//         <textarea
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           placeholder="Enter notification message"
//           value={notification}
//           onChange={(e) => setNotification(e.target.value)}
//         />
//       </div>
//       <Button
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         onClick={handleAssignMealPlan}
//       >
//         Assign Meal Plan & Send Notification
//       </Button>
//     </div>
//   );
// };

// export default MealPlanForm;

// import React, { useState, useEffect } from 'react';
// import { getUsers, createUser } from '../../../shared/firestore';
// import { Button } from '../../../components/ui/button';

// const MealPlanForm: React.FC = () => {
//   const [users, setUsers] = useState<any[]>([]);
//   const [selectedUser, setSelectedUser] = useState<string>('');
//   const [bmiCategory, setBmiCategory] = useState<string>('');
//   const [mealPlan, setMealPlan] = useState<string>('');
//   const [duration, setDuration] = useState<string>('');
//   const [notificationTitle, setNotificationTitle] = useState<string>('');
//   const [notificationMessage, setNotificationMessage] = useState<string>('');
//   const [priority, setPriority] = useState<string>('normal');

//   useEffect(() => {
//     const fetchUsers = async () => {
//       const usersData = await getUsers();
//       setUsers(usersData);
//     };
//     fetchUsers();
//   }, []);

//   const handleAssignMealPlan = async () => {
//     if (selectedUser && mealPlan && notificationTitle && notificationMessage) {
//       try {
//         // Save meal plan to Firestore
//         const mealPlanData = {
//           bmiCategory,
//           createdAt: new Date(),
//           duration,
//           healthConditions: [], // Add logic to fetch or input health conditions
//           nutritionalGoals: {}, // Add logic to input nutritional goals
//         };
//         await createUser('mealPlans', selectedUser, mealPlanData);

//         // Save notification to Firestore
//         const notificationData = {
//           title: notificationTitle,
//           message: notificationMessage,
//           priority,
//           relatedHealthConditions: [], // Add logic to fetch or input related health conditions
//           sentAt: new Date(),
//           type: 'reminders',
//         };
//         await createUser('notifications', selectedUser, notificationData);

//         alert('Meal plan and notification saved successfully!');
//       } catch (error) {
//         console.error('Error saving meal plan or notification:', error);
//       }
//     } else {
//       alert('Please fill in all required fields.');
//     }
//   };

//   return (
//     <div className="p-4 bg-white shadow-md rounded-md">
//       <h2 className="text-xl mb-4">Assign Meal Plan</h2>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Select User</label>
//         <select
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           onChange={(e) => setSelectedUser(e.target.value)}
//           value={selectedUser}
//         >
//           <option value="">Select User</option>
//           {users.map(user => (
//             <option key={user.id} value={user.id}>
//               {user.firstname} {user.lastname}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">BMI Category</label>
//         <input
//           type="text"
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           placeholder="Enter BMI Category"
//           value={bmiCategory}
//           onChange={(e) => setBmiCategory(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Meal Plan</label>
//         <textarea
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           placeholder="Enter meal plan details"
//           value={mealPlan}
//           onChange={(e) => setMealPlan(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Duration</label>
//         <input
//           type="text"
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           placeholder="Enter duration (e.g., 1 week)"
//           value={duration}
//           onChange={(e) => setDuration(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Notification Title</label>
//         <input
//           type="text"
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           placeholder="Enter notification title"
//           value={notificationTitle}
//           onChange={(e) => setNotificationTitle(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Notification Message</label>
//         <textarea
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           placeholder="Enter notification message"
//           value={notificationMessage}
//           onChange={(e) => setNotificationMessage(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Priority</label>
//         <select
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           onChange={(e) => setPriority(e.target.value)}
//           value={priority}
//         >
//           <option value="normal">Normal</option>
//           <option value="important">Important</option>
//         </select>
//       </div>
//       <Button
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         onClick={handleAssignMealPlan}
//       >
//         Save Meal Plan & Send Notification
//       </Button>
//     </div>
//   );
// };

// export default MealPlanForm;

// import React, { useState, useEffect } from 'react';
// import { getUsers, createUser } from '../../../shared/firestore';
// import { Button } from '../../../components/ui/button';

// const MealPlanForm: React.FC = () => {
//   const [users, setUsers] = useState<any[]>([]);
//   const [selectedUser, setSelectedUser] = useState<string>('');
//   const [bmiCategory, setBmiCategory] = useState<string>('');
//   const [mealPlan, setMealPlan] = useState<string>('');
//   const [duration, setDuration] = useState<string>('');
//   const [notificationTitle, setNotificationTitle] = useState<string>('');
//   const [notificationMessage, setNotificationMessage] = useState<string>('');
//   const [priority, setPriority] = useState<string>('normal');

//   useEffect(() => {
//     const fetchUsers = async () => {
//       const usersData = await getUsers();
//       setUsers(usersData);
//     };
//     fetchUsers();
//   }, []);

//   const handleAssignMealPlan = async () => {
//     if (selectedUser && mealPlan && notificationTitle && notificationMessage) {
//       try {
//         // Save meal plan to Firestore
//         const mealPlanData = {
//           bmiCategory,
//           createdAt: new Date(),
//           duration,
//           healthConditions: [], // Add logic to fetch or input health conditions
//           nutritionalGoals: {}, // Add logic to input nutritional goals
//         };
//         await createUser('mealPlans', selectedUser, mealPlanData);

//         // Save notification to Firestore
//         const notificationData = {
//           title: notificationTitle,
//           message: notificationMessage,
//           priority,
//           relatedHealthConditions: [], // Add logic to fetch or input related health conditions
//           sentAt: new Date(),
//           type: 'reminders',
//         };
//         await createUser('notifications', selectedUser, notificationData);

//         alert('Meal plan and notification saved successfully!');
//       } catch (error) {
//         console.error('Error saving meal plan or notification:', error);
//       }
//     } else {
//       alert('Please fill in all required fields.');
//     }
//   };

//   return (
//     <div className="p-4 bg-white shadow-md rounded-md">
//       <h2 className="text-xl mb-4">Assign Meal Plan</h2>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Select User</label>
//         <select
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           onChange={(e) => setSelectedUser(e.target.value)}
//           value={selectedUser}
//         >
//           <option value="">Select User</option>
//           {users.map(user => (
//             <option key={user.id} value={user.id}>
//               {user.firstname} {user.lastname}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">BMI Category</label>
//         <select
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           onChange={(e) => setBmiCategory(e.target.value)}
//           value={bmiCategory}
//         >
//           <option value="">Select BMI Category</option>
//           <option value="Underweight">Underweight</option>
//           <option value="Normal">Normal</option>
//           <option value="Overweight">Overweight</option>
//           <option value="Obese">Obese</option>
//         </select>
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Meal Plan</label>
//         <textarea
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           placeholder="Enter meal plan details"
//           value={mealPlan}
//           onChange={(e) => setMealPlan(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Duration</label>
//         <input
//           type="text"
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           placeholder="Enter duration (e.g., 1 week)"
//           value={duration}
//           onChange={(e) => setDuration(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Notification Title</label>
//         <input
//           type="text"
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           placeholder="Enter notification title"
//           value={notificationTitle}
//           onChange={(e) => setNotificationTitle(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Notification Message</label>
//         <textarea
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           placeholder="Enter notification message"
//           value={notificationMessage}
//           onChange={(e) => setNotificationMessage(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Priority</label>
//         <select
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           onChange={(e) => setPriority(e.target.value)}
//           value={priority}
//         >
//           <option value="normal">Normal</option>
//           <option value="important">Important</option>
//         </select>
//       </div>
//       <Button
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         onClick={handleAssignMealPlan}
//       >
//         Save Meal Plan & Send Notification
//       </Button>
//     </div>
//   );
// };

// export default MealPlanForm;

// import React, { useState, useEffect } from 'react';
// import { getUsers, createUser } from '../../../shared/firestore';
// import { Button } from '../../../components/ui/button';

// const MealPlanForm: React.FC = () => {
//   const [users, setUsers] = useState<any[]>([]);
//   const [selectedUser, setSelectedUser] = useState<string>('');
//   const [bmiCategory, setBmiCategory] = useState<string>('');
//   const [mealPlan, setMealPlan] = useState<string>('');
//   const [duration, setDuration] = useState<string>('');
//   const [notificationTitle, setNotificationTitle] = useState<string>('');
//   const [notificationMessage, setNotificationMessage] = useState<string>('');
//   const [priority, setPriority] = useState<string>('normal');

//   useEffect(() => {
//     const fetchUsers = async () => {
//       const usersData = await getUsers();
//       setUsers(usersData);
//     };
//     fetchUsers();
//   }, []);

//   const handleUserChange = (userId: string) => {
//     setSelectedUser(userId);
//     const user = users.find(user => user.id === userId);
//     if (user) {
//       setBmiCategory(user.bmiCategory || ''); // Assuming bmiCategory is part of user data
//     }
//   };

//   const handleAssignMealPlan = async () => {
//     if (selectedUser && mealPlan && notificationTitle && notificationMessage) {
//       try {
//         // Save meal plan to Firestore
//         const mealPlanData = {
//           bmiCategory,
//           createdAt: new Date(),
//           duration,
//           healthConditions: [], // Add logic to fetch or input health conditions
//           nutritionalGoals: {}, // Add logic to input nutritional goals
//         };
//         await createUser('mealPlans', selectedUser, mealPlanData);

//         // Save notification to Firestore
//         const notificationData = {
//           title: notificationTitle,
//           message: notificationMessage,
//           priority,
//           relatedHealthConditions: [], // Add logic to fetch or input related health conditions
//           sentAt: new Date(),
//           type: 'reminders',
//         };
//         await createUser('notifications', selectedUser, notificationData);

//         alert('Meal plan and notification saved successfully!');
//       } catch (error) {
//         console.error('Error saving meal plan or notification:', error);
//       }
//     } else {
//       alert('Please fill in all required fields.');
//     }
//   };

//   return (
//     <div className="p-4 bg-white shadow-md rounded-md">
//       <h2 className="text-xl mb-4">Assign Meal Plan</h2>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Select User</label>
//         <select
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           onChange={(e) => handleUserChange(e.target.value)}
//           value={selectedUser}
//         >
//           <option value="">Select User</option>
//           {users.map(user => (
//             <option key={user.id} value={user.id}>
//               {user.firstname} {user.lastname}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">BMI Category</label>
//         <input
//           type="text"
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           value={bmiCategory}
//           readOnly
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Meal Plan</label>
//         <textarea
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           placeholder="Enter meal plan details"
//           value={mealPlan}
//           onChange={(e) => setMealPlan(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Duration</label>
//         <input
//           type="text"
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           placeholder="Enter duration (e.g., 1 week)"
//           value={duration}
//           onChange={(e) => setDuration(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Notification Title</label>
//         <input
//           type="text"
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           placeholder="Enter notification title"
//           value={notificationTitle}
//           onChange={(e) => setNotificationTitle(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Notification Message</label>
//         <textarea
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           placeholder="Enter notification message"
//           value={notificationMessage}
//           onChange={(e) => setNotificationMessage(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Priority</label>
//         <select
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           onChange={(e) => setPriority(e.target.value)}
//           value={priority}
//         >
//           <option value="normal">Normal</option>
//           <option value="important">Important</option>
//         </select>
//       </div>
//       <Button
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         onClick={handleAssignMealPlan}
//       >
//         Save Meal Plan & Send Notification
//       </Button>
//     </div>
//   );
// };

// export default MealPlanForm;

// import React, { useState, useEffect } from 'react';
// import { getUsers, createMealPlan, getMealPlans, updateMealPlan, deleteMealPlan } from '../../../shared/firestore';
// import { Button } from '../../../components/ui/button';

// const MealPlanForm: React.FC = () => {
//   const [users, setUsers] = useState<any[]>([]);
//   const [mealPlans, setMealPlans] = useState<any[]>([]);
//   const [selectedUser, setSelectedUser] = useState<string>('');
//   const [selectedMealPlan, setSelectedMealPlan] = useState<string>('');
//   const [bmiCategory, setBmiCategory] = useState<string>('');
//   const [mealPlanDetails, setMealPlanDetails] = useState<string>('');
//   const [duration, setDuration] = useState<string>('');
//   const [healthConditions, setHealthConditions] = useState<string[]>([]);
//   const [nutritionalGoals, setNutritionalGoals] = useState<string>('');
//   const [notificationTitle, setNotificationTitle] = useState<string>('');
//   const [notificationMessage, setNotificationMessage] = useState<string>('');
//   const [priority, setPriority] = useState<string>('normal');

//   useEffect(() => {
//     const fetchUsers = async () => {
//       const usersData = await getUsers();
//       setUsers(usersData);
//     };
//     const fetchMealPlans = async () => {
//       const mealPlansData = await getMealPlans();
//       setMealPlans(mealPlansData);
//     };
//     fetchUsers();
//     fetchMealPlans();
//   }, []);

//   const handleUserChange = (userId: string) => {
//     setSelectedUser(userId);
//     const user = users.find(user => user.id === userId);
//     if (user) {
//       setBmiCategory(user.bmiCategory || '');
//     }
//   };

//   const handleMealPlanChange = (mealPlanId: string) => {
//     setSelectedMealPlan(mealPlanId);
//     const mealPlan = mealPlans.find(plan => plan.id === mealPlanId);
//     if (mealPlan) {
//       setMealPlanDetails(mealPlan.details || '');
//       setDuration(mealPlan.duration || '');
//       setHealthConditions(Array.isArray(mealPlan.healthConditions) ? mealPlan.healthConditions : []);
//       setNutritionalGoals(mealPlan.nutritionalGoals || '');
//     }
//   };

//   const handleAssignMealPlan = async () => {
//     if (selectedUser && mealPlanDetails && notificationTitle && notificationMessage) {
//       try {
//         const mealPlanData = {
//           bmiCategory: `/users_bmi/${selectedUser}`,
//           createdAt: new Date(),
//           duration,
//           details: mealPlanDetails,
//           healthConditions: healthConditions.map(condition => `/health_assessments/${condition}`),
//           nutritionalGoals,
//         };
//         const mealPlanId = `${selectedUser}-${Date.now()}`; // Example ID
//         await createMealPlan(mealPlanId, mealPlanData);

//         alert('Meal plan saved successfully!');
//         setMealPlans([...mealPlans, { id: mealPlanId, ...mealPlanData }]);
//       } catch (error) {
//         console.error('Error saving meal plan:', error);
//       }
//     } else {
//       alert('Please fill in all required fields.');
//     }
//   };

//   const handleUpdateMealPlan = async () => {
//     if (selectedMealPlan) {
//       try {
//         const updatedData = {
//           details: mealPlanDetails,
//           duration,
//           healthConditions: healthConditions.map(condition => `/health_assessments/${condition}`),
//           nutritionalGoals,
//         };
//         await updateMealPlan(selectedMealPlan, updatedData);
//         alert('Meal plan updated successfully!');
//         setMealPlans(mealPlans.map(plan => 
//           plan.id === selectedMealPlan ? { ...plan, ...updatedData } : plan
//         ));
//       } catch (error) {
//         console.error('Error updating meal plan:', error);
//       }
//     }
//   };

//   const handleDeleteMealPlan = async () => {
//     if (selectedMealPlan) {
//       try {
//         await deleteMealPlan(selectedMealPlan);
//         alert('Meal plan deleted successfully!');
//         setMealPlans(mealPlans.filter(plan => plan.id !== selectedMealPlan));
//         setSelectedMealPlan('');
//         setMealPlanDetails('');
//         setDuration('');
//         setHealthConditions([]);
//         setNutritionalGoals('');
//       } catch (error) {
//         console.error('Error deleting meal plan:', error);
//       }
//     }
//   };

//   return (
//     <div className="p-4 bg-white shadow-md rounded-md">
//       <h2 className="text-xl mb-4">Assign Meal Plan</h2>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Select User</label>
//         <select
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           onChange={(e) => handleUserChange(e.target.value)}
//           value={selectedUser}
//         >
//           <option value="">Select User</option>
//           {users.map(user => (
//             <option key={user.id} value={user.id}>
//               {user.firstname} {user.lastname}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Select Meal Plan</label>
//         <select
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           onChange={(e) => handleMealPlanChange(e.target.value)}
//           value={selectedMealPlan}
//         >
//           <option value="">Select Meal Plan</option>
//           {mealPlans.map(plan => (
//             <option key={plan.id} value={plan.id}>
//               {plan.details} - {plan.duration}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">BMI Category</label>
//         <input
//           type="text"
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           value={bmiCategory}
//           readOnly
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Meal Plan Details</label>
//         <textarea
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           placeholder="Enter meal plan details"
//           value={mealPlanDetails}
//           onChange={(e) => setMealPlanDetails(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Duration</label>
//         <input
//           type="text"
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           placeholder="Enter duration (e.g., 1 week)"
//           value={duration}
//           onChange={(e) => setDuration(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Health Conditions</label>
//         <input
//           type="text"
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           placeholder="Enter health conditions (comma separated)"
//           value={healthConditions.join(', ')}
//           onChange={(e) => setHealthConditions(e.target.value.split(',').map(cond => cond.trim()))}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Nutritional Goals</label>
//         <textarea
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           placeholder="Enter nutritional goals"
//           value={nutritionalGoals}
//           onChange={(e) => setNutritionalGoals(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Notification Title</label>
//         <input
//           type="text"
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           placeholder="Enter notification title"
//           value={notificationTitle}
//           onChange={(e) => setNotificationTitle(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Notification Message</label>
//         <textarea
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           placeholder="Enter notification message"
//           value={notificationMessage}
//           onChange={(e) => setNotificationMessage(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Priority</label>
//         <select
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           onChange={(e) => setPriority(e.target.value)}
//           value={priority}
//         >
//           <option value="normal">Normal</option>
//           <option value="important">Important</option>
//         </select>
//       </div>
//       <Button
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         onClick={handleAssignMealPlan}
//       >
//         Save Meal Plan & Send Notification
//       </Button>
//       <Button
//         className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2"
//         onClick={handleUpdateMealPlan}
//       >
//         Update Meal Plan
//       </Button>
//       <Button
//         className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2"
//         onClick={handleDeleteMealPlan}
//       >
//         Delete Meal Plan
//       </Button>
//     </div>
//   );
// };

// export default MealPlanForm;

// import React, { useState, useEffect } from 'react';
// import { getUsers, createMealPlan, getMealPlans, updateMealPlan, deleteMealPlan } from '../../../shared/firestore';
// import { Button } from '../../../components/ui/button';

// const MealPlanForm: React.FC = () => {
//   const [users, setUsers] = useState<any[]>([]);
//   const [mealPlans, setMealPlans] = useState<any[]>([]);
//   const [selectedUser, setSelectedUser] = useState<string>('');
//   const [selectedMealPlan, setSelectedMealPlan] = useState<string>('');
//   const [bmiCategory, setBmiCategory] = useState<string>('');
//   const [mealPlanDetails, setMealPlanDetails] = useState<string>('');
//   const [duration, setDuration] = useState<string[]>([]);
//   const [healthConditions, setHealthConditions] = useState<string[]>([]);
//   const [nutritionalGoals, setNutritionalGoals] = useState<string>('');
//   const [notificationTitle, setNotificationTitle] = useState<string>('');
//   const [notificationMessage, setNotificationMessage] = useState<string>('');
//   const [priority, setPriority] = useState<string>('normal');

//   useEffect(() => {
//     const fetchUsers = async () => {
//       const usersData = await getUsers();
//       setUsers(usersData);
//     };
//     const fetchMealPlans = async () => {
//       const mealPlansData = await getMealPlans();
//       setMealPlans(mealPlansData);
//     };
//     fetchUsers();
//     fetchMealPlans();
//   }, []);

//   const handleUserChange = (userId: string) => {
//     setSelectedUser(userId);
//     const user = users.find(user => user.id === userId);
//     if (user) {
//       setBmiCategory(user.bmiCategory || '');
//     }
//   };

//   const handleMealPlanChange = (mealPlanId: string) => {
//     setSelectedMealPlan(mealPlanId);
//     const mealPlan = mealPlans.find(plan => plan.id === mealPlanId);
//     if (mealPlan) {
//       setMealPlanDetails(mealPlan.details || '');
//       setDuration(Array.isArray(mealPlan.duration) ? mealPlan.duration : []);
//       setHealthConditions(Array.isArray(mealPlan.healthConditions) ? mealPlan.healthConditions : []);
//       setNutritionalGoals(mealPlan.nutritionalGoals || '');
//     }
//   };

//   const handleAssignMealPlan = async () => {
//     if (selectedUser && mealPlanDetails && notificationTitle && notificationMessage) {
//       try {
//         const mealPlanData = {
//           bmiCategory: `/users_bmi/${selectedUser}`,
//           createdAt: new Date(),
//           duration,
//           details: mealPlanDetails,
//           healthConditions: healthConditions.map(condition => `/health_assessments/${condition}`),
//           nutritionalGoals,
//         };
//         const mealPlanId = `${selectedUser}-${Date.now()}`; // Example ID
//         await createMealPlan(mealPlanId, mealPlanData);

//         alert('Meal plan saved successfully!');
//         setMealPlans([...mealPlans, { id: mealPlanId, ...mealPlanData }]);
//       } catch (error) {
//         console.error('Error saving meal plan:', error);
//       }
//     } else {
//       alert('Please fill in all required fields.');
//     }
//   };

//   const handleUpdateMealPlan = async () => {
//     if (selectedMealPlan) {
//       try {
//         const updatedData = {
//           details: mealPlanDetails,
//           duration,
//           healthConditions: healthConditions.map(condition => `/health_assessments/${condition}`),
//           nutritionalGoals,
//         };
//         await updateMealPlan(selectedMealPlan, updatedData);
//         alert('Meal plan updated successfully!');
//         setMealPlans(mealPlans.map(plan => 
//           plan.id === selectedMealPlan ? { ...plan, ...updatedData } : plan
//         ));
//       } catch (error) {
//         console.error('Error updating meal plan:', error);
//       }
//     }
//   };

//   const handleDeleteMealPlan = async () => {
//     if (selectedMealPlan) {
//       try {
//         await deleteMealPlan(selectedMealPlan);
//         alert('Meal plan deleted successfully!');
//         setMealPlans(mealPlans.filter(plan => plan.id !== selectedMealPlan));
//         setSelectedMealPlan('');
//         setMealPlanDetails('');
//         setDuration([]);
//         setHealthConditions([]);
//         setNutritionalGoals('');
//       } catch (error) {
//         console.error('Error deleting meal plan:', error);
//       }
//     }
//   };

//   const handleDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setDuration(e.target.value.split(',').map(d => d.trim()));
//   };

//   return (
//     <div className="p-4 bg-white shadow-md rounded-md">
//       <h2 className="text-xl mb-4">Assign Meal Plan</h2>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Select User</label>
//         <select
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           onChange={(e) => handleUserChange(e.target.value)}
//           value={selectedUser}
//         >
//           <option value="">Select User</option>
//           {users.map(user => (
//             <option key={user.id} value={user.id}>
//               {user.firstname} {user.lastname}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Select Meal Plan</label>
//         <select
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           onChange={(e) => handleMealPlanChange(e.target.value)}
//           value={selectedMealPlan}
//         >
//           <option value="">Select Meal Plan</option>
//           {mealPlans.map(plan => (
//             <option key={plan.id} value={plan.id}>
//               {plan.details} - {plan.duration.join(', ')}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">BMI Category</label>
//         <input
//           type="text"
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           value={bmiCategory}
//           readOnly
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Meal Plan Details</label>
//         <textarea
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           placeholder="Enter meal plan details"
//           value={mealPlanDetails}
//           onChange={(e) => setMealPlanDetails(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Duration</label>
//         <input
//           type="text"
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           placeholder="Enter durations (comma separated, e.g., '1 week, 2 weeks')"
//           value={duration.join(', ')}
//           onChange={handleDurationChange}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Health Conditions</label>
//         <input
//           type="text"
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           placeholder="Enter health conditions (comma separated)"
//           value={healthConditions.join(', ')}
//           onChange={(e) => setHealthConditions(e.target.value.split(',').map(cond => cond.trim()))}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Nutritional Goals</label>
//         <textarea
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           placeholder="Enter nutritional goals"
//           value={nutritionalGoals}
//           onChange={(e) => setNutritionalGoals(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Notification Title</label>
//         <input
//           type="text"
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           placeholder="Enter notification title"
//           value={notificationTitle}
//           onChange={(e) => setNotificationTitle(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Notification Message</label>
//         <textarea
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           placeholder="Enter notification message"
//           value={notificationMessage}
//           onChange={(e) => setNotificationMessage(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Priority</label>
//         <select
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           onChange={(e) => setPriority(e.target.value)}
//           value={priority}
//         >
//           <option value="normal">Normal</option>
//           <option value="important">Important</option>
//         </select>
//       </div>
//       <Button
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         onClick={handleAssignMealPlan}
//       >
//         Save Meal Plan & Send Notification
//       </Button>
//       <Button
//         className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2"
//         onClick={handleUpdateMealPlan}
//       >
//         Update Meal Plan
//       </Button>
//       <Button
//         className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2"
//         onClick={handleDeleteMealPlan}
//       >
//         Delete Meal Plan
//       </Button>
//     </div>
//   );
// };

// export default MealPlanForm;

// import React, { useState, useEffect } from 'react';
// import { getUsers, createMealPlan, getMealPlans, updateMealPlan, deleteMealPlan, getUserBmiCategory } from '../../../shared/firestore';
// import { Button } from '../../../components/ui/button';

// const MealPlanForm: React.FC = () => {
//   const [users, setUsers] = useState<any[]>([]);
//   const [mealPlans, setMealPlans] = useState<any[]>([]);
//   const [selectedUser, setSelectedUser] = useState<string>('');
//   const [selectedMealPlan, setSelectedMealPlan] = useState<string>('');
//   const [bmiCategory, setBmiCategory] = useState<string>('');
//   const [mealPlanDetails, setMealPlanDetails] = useState<string>('');
//   const [duration, setDuration] = useState<string[]>([]);
//   const [healthConditions, setHealthConditions] = useState<string[]>([]);
//   const [nutritionalGoals, setNutritionalGoals] = useState<string>('');
//   const [notificationTitle, setNotificationTitle] = useState<string>('');
//   const [notificationMessage, setNotificationMessage] = useState<string>('');
//   const [priority, setPriority] = useState<string>('normal');

//   const bmiCategories = [
//     'Underweight',
//     'Normal weight',
//     'Overweight',
//     'Obesity'
//   ];

//   useEffect(() => {
//     const fetchUsers = async () => {
//       const usersData = await getUsers();
//       setUsers(usersData);
//     };
//     const fetchMealPlans = async () => {
//       const mealPlansData = await getMealPlans();
//       setMealPlans(mealPlansData);
//     };
//     fetchUsers();
//     fetchMealPlans();
//   }, []);

//   const handleUserChange = async (userId: string) => {
//     setSelectedUser(userId);
//     if (userId) {
//       try {
//         const bmiData = await getUserBmiCategory(userId);
//         setBmiCategory(bmiData || '');
//       } catch (error) {
//         console.error('Error fetching BMI category:', error);
//         setBmiCategory('');
//       }
//     } else {
//       setBmiCategory('');
//     }
//   };

//   const handleMealPlanChange = (mealPlanId: string) => {
//     setSelectedMealPlan(mealPlanId);
//     const mealPlan = mealPlans.find(plan => plan.id === mealPlanId);
//     if (mealPlan) {
//       setMealPlanDetails(mealPlan.details || '');
//       setDuration(Array.isArray(mealPlan.duration) ? mealPlan.duration : []);
//       setHealthConditions(Array.isArray(mealPlan.healthConditions) ? mealPlan.healthConditions : []);
//       setNutritionalGoals(mealPlan.nutritionalGoals || '');
//     }
//   };

//   const handleAssignMealPlan = async () => {
//     if (selectedUser && mealPlanDetails && notificationTitle && notificationMessage) {
//       try {
//         const mealPlanData = {
//           bmiCategory: `/users_bmi/${selectedUser}`,
//           createdAt: new Date(),
//           duration,
//           details: mealPlanDetails,
//           healthConditions: healthConditions.map(condition => `/health_assessments/${condition}`),
//           nutritionalGoals,
//         };
//         const mealPlanId = `${selectedUser}-${Date.now()}`; // Example ID
//         await createMealPlan(mealPlanId, mealPlanData);

//         alert('Meal plan saved successfully!');
//         setMealPlans([...mealPlans, { id: mealPlanId, ...mealPlanData }]);
//       } catch (error) {
//         console.error('Error saving meal plan:', error);
//       }
//     } else {
//       alert('Please fill in all required fields.');
//     }
//   };

//   const handleUpdateMealPlan = async () => {
//     if (selectedMealPlan) {
//       try {
//         const updatedData = {
//           details: mealPlanDetails,
//           duration,
//           healthConditions: healthConditions.map(condition => `/health_assessments/${condition}`),
//           nutritionalGoals,
//         };
//         await updateMealPlan(selectedMealPlan, updatedData);
//         alert('Meal plan updated successfully!');
//         setMealPlans(mealPlans.map(plan => 
//           plan.id === selectedMealPlan ? { ...plan, ...updatedData } : plan
//         ));
//       } catch (error) {
//         console.error('Error updating meal plan:', error);
//       }
//     }
//   };

//   const handleDeleteMealPlan = async () => {
//     if (selectedMealPlan) {
//       try {
//         await deleteMealPlan(selectedMealPlan);
//         alert('Meal plan deleted successfully!');
//         setMealPlans(mealPlans.filter(plan => plan.id !== selectedMealPlan));
//         setSelectedMealPlan('');
//         setMealPlanDetails('');
//         setDuration([]);
//         setHealthConditions([]);
//         setNutritionalGoals('');
//       } catch (error) {
//         console.error('Error deleting meal plan:', error);
//       }
//     }
//   };

//   const handleDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setDuration(e.target.value.split(',').map(d => d.trim()));
//   };

//   return (
//     <div className="p-4 bg-white shadow-md rounded-md">
//       <h2 className="text-xl mb-4">Assign Meal Plan</h2>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Select User</label>
//         <select
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           onChange={(e) => handleUserChange(e.target.value)}
//           value={selectedUser}
//         >
//           <option value="">Select User</option>
//           {users.map(user => (
//             <option key={user.id} value={user.id}>
//               {user.firstname} {user.lastname}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Select Meal Plan</label>
//         <select
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           onChange={(e) => handleMealPlanChange(e.target.value)}
//           value={selectedMealPlan}
//         >
//           <option value="">Select Meal Plan</option>
//           {mealPlans.map(plan => (
//             <option key={plan.id} value={plan.id}>
//               {plan.details} - {Array.isArray(plan.duration) ? plan.duration.join(', ') : plan.duration}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">BMI Category</label>
//         <select
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           onChange={(e) => setBmiCategory(e.target.value)}
//           value={bmiCategory}
//         >
//           <option value="">Select BMI Category</option>
//           {bmiCategories.map(category => (
//             <option key={category} value={category}>
//               {category}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Meal Plan Details</label>
//         <textarea
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           placeholder="Enter meal plan details"
//           value={mealPlanDetails}
//           onChange={(e) => setMealPlanDetails(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Duration</label>
//         <input
//           type="text"
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           placeholder="Enter durations (comma separated, e.g., '1 week, 2 weeks')"
//           value={duration.join(', ')}
//           onChange={handleDurationChange}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Health Conditions</label>
//         <input
//           type="text"
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           placeholder="Enter health conditions (comma separated)"
//           value={healthConditions.join(', ')}
//           onChange={(e) => setHealthConditions(e.target.value.split(',').map(cond => cond.trim()))}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Nutritional Goals</label>
//         <textarea
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           placeholder="Enter nutritional goals"
//           value={nutritionalGoals}
//           onChange={(e) => setNutritionalGoals(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Notification Title</label>
//         <input
//           type="text"
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           placeholder="Enter notification title"
//           value={notificationTitle}
//           onChange={(e) => setNotificationTitle(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Notification Message</label>
//         <textarea
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           placeholder="Enter notification message"
//           value={notificationMessage}
//           onChange={(e) => setNotificationMessage(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Priority</label>
//         <select
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           onChange={(e) => setPriority(e.target.value)}
//           value={priority}
//         >
//           <option value="normal">Normal</option>
//           <option value="important">Important</option>
//         </select>
//       </div>
//       <Button
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         onClick={handleAssignMealPlan}
//       >
//         Save Meal Plan & Send Notification
//       </Button>
//       <Button
//         className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2"
//         onClick={handleUpdateMealPlan}
//       >
//         Update Meal Plan
//       </Button>
//       <Button
//         className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2"
//         onClick={handleDeleteMealPlan}
//       >
//         Delete Meal Plan
//       </Button>
//     </div>
//   );
// };

// export default MealPlanForm;

// import React, { useState, useEffect } from 'react';
// import { getUsers, createMealPlan, getMealPlans, updateMealPlan, deleteMealPlan, getUserBmiCategory } from '../../../shared/firestore';
// import { Button } from '../../../components/ui/button';

// const MealPlanForm: React.FC = () => {
//   const [users, setUsers] = useState<any[]>([]);
//   const [mealPlans, setMealPlans] = useState<any[]>([]);
//   const [selectedUser, setSelectedUser] = useState<string>('');
//   const [selectedMealPlan, setSelectedMealPlan] = useState<string>('');
//   const [bmiCategory, setBmiCategory] = useState<string>('');
//   const [mealPlanDetails, setMealPlanDetails] = useState<string>('');
//   const [duration, setDuration] = useState<string[]>([]);
//   const [healthConditions, setHealthConditions] = useState<string[]>([]);
//   const [nutritionalGoals, setNutritionalGoals] = useState<string>('');
//   const [notificationTitle, setNotificationTitle] = useState<string>('');
//   const [notificationMessage, setNotificationMessage] = useState<string>('');
//   const [priority, setPriority] = useState<string>('normal');

//   // New state for diet prescription
//   const [dietPrescription, setDietPrescription] = useState<string>('');
//   const [recommendedIntake, setRecommendedIntake] = useState({
//     meat: '',
//     vegetables: '',
//     fruits: '',
//     rice: '',
//     fat: '',
//     water: ''
//   });

//   const bmiCategories = [
//     'Underweight',
//     'Normal weight',
//     'Overweight',
//     'Obesity'
//   ];

//   useEffect(() => {
//     const fetchUsers = async () => {
//       const usersData = await getUsers();
//       setUsers(usersData);
//     };
//     const fetchMealPlans = async () => {
//       const mealPlansData = await getMealPlans();
//       setMealPlans(mealPlansData);
//     };
//     fetchUsers();
//     fetchMealPlans();
//   }, []);

//   const handleUserChange = async (userId: string) => {
//     setSelectedUser(userId);
//     if (userId) {
//       try {
//         const bmiData = await getUserBmiCategory(userId);
//         setBmiCategory(bmiData || '');
//       } catch (error) {
//         console.error('Error fetching BMI category:', error);
//         setBmiCategory('');
//       }
//     } else {
//       setBmiCategory('');
//     }
//   };

//   const handleMealPlanChange = (mealPlanId: string) => {
//     setSelectedMealPlan(mealPlanId);
//     const mealPlan = mealPlans.find(plan => plan.id === mealPlanId);
//     if (mealPlan) {
//       setMealPlanDetails(mealPlan.details || '');
//       setDuration(Array.isArray(mealPlan.duration) ? mealPlan.duration : []);
//       setHealthConditions(Array.isArray(mealPlan.healthConditions) ? mealPlan.healthConditions : []);
//       setNutritionalGoals(mealPlan.nutritionalGoals || '');
//     }
//   };

//   const handleAssignMealPlan = async () => {
//     if (selectedUser && mealPlanDetails && notificationTitle && notificationMessage) {
//       try {
//         const mealPlanData = {
//           bmiCategory: `/users_bmi/${selectedUser}`,
//           createdAt: new Date(),
//           duration,
//           details: mealPlanDetails,
//           healthConditions: healthConditions.map(condition => `/health_assessments/${condition}`),
//           nutritionalGoals,
//           dietPrescription,
//           recommendedIntake
//         };
//         const mealPlanId = `${selectedUser}-${Date.now()}`; // Example ID
//         await createMealPlan(mealPlanId, mealPlanData);

//         alert('Meal plan saved successfully!');
//         setMealPlans([...mealPlans, { id: mealPlanId, ...mealPlanData }]);
//       } catch (error) {
//         console.error('Error saving meal plan:', error);
//       }
//     } else {
//       alert('Please fill in all required fields.');
//     }
//   };

//   const handleUpdateMealPlan = async () => {
//     if (selectedMealPlan) {
//       try {
//         const updatedData = {
//           details: mealPlanDetails,
//           duration,
//           healthConditions: healthConditions.map(condition => `/health_assessments/${condition}`),
//           nutritionalGoals,
//           dietPrescription,
//           recommendedIntake
//         };
//         await updateMealPlan(selectedMealPlan, updatedData);
//         alert('Meal plan updated successfully!');
//         setMealPlans(mealPlans.map(plan => 
//           plan.id === selectedMealPlan ? { ...plan, ...updatedData } : plan
//         ));
//       } catch (error) {
//         console.error('Error updating meal plan:', error);
//       }
//     }
//   };

//   const handleDeleteMealPlan = async () => {
//     if (selectedMealPlan) {
//       try {
//         await deleteMealPlan(selectedMealPlan);
//         alert('Meal plan deleted successfully!');
//         setMealPlans(mealPlans.filter(plan => plan.id !== selectedMealPlan));
//         setSelectedMealPlan('');
//         setMealPlanDetails('');
//         setDuration([]);
//         setHealthConditions([]);
//         setNutritionalGoals('');
//       } catch (error) {
//         console.error('Error deleting meal plan:', error);
//       }
//     }
//   };

//   const handleDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setDuration(e.target.value.split(',').map(d => d.trim()));
//   };

//   return (
//     <div className="p-4 bg-white shadow-md rounded-md">
//       <h2 className="text-xl mb-4">Assign Meal Plan</h2>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Select User</label>
//         <select
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           onChange={(e) => handleUserChange(e.target.value)}
//           value={selectedUser}
//         >
//           <option value="">Select User</option>
//           {users.map(user => (
//             <option key={user.id} value={user.id}>
//               {user.firstname} {user.lastname}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Select Meal Plan</label>
//         <select
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           onChange={(e) => handleMealPlanChange(e.target.value)}
//           value={selectedMealPlan}
//         >
//           <option value="">Select Meal Plan</option>
//           {mealPlans.map(plan => (
//             <option key={plan.id} value={plan.id}>
//               {plan.details} - {Array.isArray(plan.duration) ? plan.duration.join(', ') : plan.duration}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">BMI Category</label>
//         <select
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           onChange={(e) => setBmiCategory(e.target.value)}
//           value={bmiCategory}
//         >
//           <option value="">Select BMI Category</option>
//           {bmiCategories.map(category => (
//             <option key={category} value={category}>
//               {category}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Diet Prescription</label>
//         <textarea
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           placeholder="Enter diet prescription"
//           value={dietPrescription}
//           onChange={(e) => setDietPrescription(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Recommended Intake per Day</label>
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Meat/Fish/Poultry</label>
//             <input
//               type="text"
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//               placeholder="Number of servings"
//               value={recommendedIntake.meat}
//               onChange={(e) => setRecommendedIntake({ ...recommendedIntake, meat: e.target.value })}
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Vegetables</label>
//             <input
//               type="text"
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//               placeholder="Number of servings"
//               value={recommendedIntake.vegetables}
//               onChange={(e) => setRecommendedIntake({ ...recommendedIntake, vegetables: e.target.value })}
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Fruits</label>
//             <input
//               type="text"
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//               placeholder="Number of servings"
//               value={recommendedIntake.fruits}
//               onChange={(e) => setRecommendedIntake({ ...recommendedIntake, fruits: e.target.value })}
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Rice or Substitute</label>
//             <input
//               type="text"
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//               placeholder="Number of servings"
//               value={recommendedIntake.rice}
//               onChange={(e) => setRecommendedIntake({ ...recommendedIntake, rice: e.target.value })}
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Fat</label>
//             <input
//               type="text"
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//               placeholder="Number of servings"
//               value={recommendedIntake.fat}
//               onChange={(e) => setRecommendedIntake({ ...recommendedIntake, fat: e.target.value })}
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Water</label>
//             <input
//               type="text"
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//               placeholder="Liters per day"
//               value={recommendedIntake.water}
//               onChange={(e) => setRecommendedIntake({ ...recommendedIntake, water: e.target.value })}
//             />
//           </div>
//         </div>
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Meal Plan Details</label>
//         <textarea
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           placeholder="Enter meal plan details"
//           value={mealPlanDetails}
//           onChange={(e) => setMealPlanDetails(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Duration</label>
//         <input
//           type="text"
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           placeholder="Enter durations (comma separated, e.g., '1 week, 2 weeks')"
//           value={duration.join(', ')}
//           onChange={handleDurationChange}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Health Conditions</label>
//         <input
//           type="text"
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           placeholder="Enter health conditions (comma separated)"
//           value={healthConditions.join(', ')}
//           onChange={(e) => setHealthConditions(e.target.value.split(',').map(cond => cond.trim()))}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Nutritional Goals</label>
//         <textarea
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           placeholder="Enter nutritional goals"
//           value={nutritionalGoals}
//           onChange={(e) => setNutritionalGoals(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Notification Title</label>
//         <input
//           type="text"
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           placeholder="Enter notification title"
//           value={notificationTitle}
//           onChange={(e) => setNotificationTitle(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Notification Message</label>
//         <textarea
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           placeholder="Enter notification message"
//           value={notificationMessage}
//           onChange={(e) => setNotificationMessage(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Priority</label>
//         <select
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           onChange={(e) => setPriority(e.target.value)}
//           value={priority}
//         >
//           <option value="normal">Normal</option>
//           <option value="important">Important</option>
//         </select>
//       </div>
//       <Button
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         onClick={handleAssignMealPlan}
//       >
//         Save Meal Plan & Send Notification
//       </Button>
//       <Button
//         className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2"
//         onClick={handleUpdateMealPlan}
//       >
//         Update Meal Plan
//       </Button>
//       <Button
//         className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2"
//         onClick={handleDeleteMealPlan}
//       >
//         Delete Meal Plan
//       </Button>
//     </div>
//   );
// };

// export default MealPlanForm;

// import React, { useState, useEffect } from 'react';
// import { getUsers, createMealPlan, getMealPlans, updateMealPlan, deleteMealPlan, getUserBmiCategory } from '../../../shared/firestore';
// import { Button } from '../../../components/ui/button';

// const MealPlanForm: React.FC = () => {
//   const [users, setUsers] = useState<any[]>([]);
//   const [mealPlans, setMealPlans] = useState<any[]>([]);
//   const [selectedUser, setSelectedUser] = useState<string>('');
//   const [selectedMealPlan, setSelectedMealPlan] = useState<string>('');
//   const [bmiCategory, setBmiCategory] = useState<string>('');
//   const [mealPlanDetails, setMealPlanDetails] = useState<string>('');
//   const [duration, setDuration] = useState<string[]>([]);
//   const [healthConditions, setHealthConditions] = useState<string[]>([]);
//   const [nutritionalGoals, setNutritionalGoals] = useState<string>('');
//   const [notificationTitle, setNotificationTitle] = useState<string>('');
//   const [notificationMessage, setNotificationMessage] = useState<string>('');
//   const [priority, setPriority] = useState<string>('normal');

//   // New state for diet prescription
//   const [dietPrescription, setDietPrescription] = useState<string>('');
//   const [recommendedIntake, setRecommendedIntake] = useState({
//     meat: '',
//     vegetables: '',
//     fruits: '',
//     rice: '',
//     fat: '',
//     water: ''
//   });

//   const bmiCategories = [
//     'Underweight',
//     'Normal weight',
//     'Overweight',
//     'Obesity'
//   ];

//   useEffect(() => {
//     const fetchUsers = async () => {
//       const usersData = await getUsers();
//       setUsers(usersData);
//     };
//     const fetchMealPlans = async () => {
//       const mealPlansData = await getMealPlans();
//       setMealPlans(mealPlansData);
//     };
//     fetchUsers();
//     fetchMealPlans();
//   }, []);

//   const handleUserChange = async (userId: string) => {
//     setSelectedUser(userId);
//     if (userId) {
//       try {
//         const bmiData = await getUserBmiCategory(userId);
//         setBmiCategory(bmiData || '');
//       } catch (error) {
//         console.error('Error fetching BMI category:', error);
//         setBmiCategory('');
//       }
//     } else {
//       setBmiCategory('');
//     }
//   };

//   const handleMealPlanChange = (mealPlanId: string) => {
//     setSelectedMealPlan(mealPlanId);
//     const mealPlan = mealPlans.find(plan => plan.id === mealPlanId);
//     if (mealPlan) {
//       setMealPlanDetails(mealPlan.details || '');
//       setDuration(Array.isArray(mealPlan.duration) ? mealPlan.duration : []);
//       setHealthConditions(Array.isArray(mealPlan.healthConditions) ? mealPlan.healthConditions : []);
//       setNutritionalGoals(mealPlan.nutritionalGoals || '');
//     }
//   };

//   const handleAssignMealPlan = async () => {
//     if (selectedUser && mealPlanDetails && notificationTitle && notificationMessage) {
//       try {
//         const mealPlanData = {
//           bmiCategory: `/users_bmi/${selectedUser}`,
//           createdAt: new Date(),
//           duration,
//           details: mealPlanDetails,
//           healthConditions: healthConditions.map(condition => `/health_assessments/${condition}`),
//           nutritionalGoals,
//           dietPrescription,
//           recommendedIntake
//         };
//         const mealPlanId = `${selectedUser}-${Date.now()}`; // Example ID
//         await createMealPlan(mealPlanId, mealPlanData);

//         alert('Meal plan saved successfully!');
//         setMealPlans([...mealPlans, { id: mealPlanId, ...mealPlanData }]);
//       } catch (error) {
//         console.error('Error saving meal plan:', error);
//       }
//     } else {
//       alert('Please fill in all required fields.');
//     }
//   };

//   const handleUpdateMealPlan = async () => {
//     if (selectedMealPlan) {
//       try {
//         const updatedData = {
//           details: mealPlanDetails,
//           duration,
//           healthConditions: healthConditions.map(condition => `/health_assessments/${condition}`),
//           nutritionalGoals,
//           dietPrescription,
//           recommendedIntake
//         };
//         await updateMealPlan(selectedMealPlan, updatedData);
//         alert('Meal plan updated successfully!');
//         setMealPlans(mealPlans.map(plan => 
//           plan.id === selectedMealPlan ? { ...plan, ...updatedData } : plan
//         ));
//       } catch (error) {
//         console.error('Error updating meal plan:', error);
//       }
//     }
//   };

//   const handleDeleteMealPlan = async () => {
//     if (selectedMealPlan) {
//       try {
//         await deleteMealPlan(selectedMealPlan);
//         alert('Meal plan deleted successfully!');
//         setMealPlans(mealPlans.filter(plan => plan.id !== selectedMealPlan));
//         setSelectedMealPlan('');
//         setMealPlanDetails('');
//         setDuration([]);
//         setHealthConditions([]);
//         setNutritionalGoals('');
//       } catch (error) {
//         console.error('Error deleting meal plan:', error);
//       }
//     }
//   };

//   const handleDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setDuration(e.target.value.split(',').map(d => d.trim()));
//   };

//   return (
//     <div className="p-4 bg-white shadow-md rounded-md">
//       <h2 className="text-xl mb-4">Assign Meal Plan</h2>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Select User</label>
//         <select
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           onChange={(e) => handleUserChange(e.target.value)}
//           value={selectedUser}
//         >
//           <option value="">Select User</option>
//           {users.map(user => (
//             <option key={user.id} value={user.id}>
//               {user.firstname} {user.lastname}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Select Meal Plan</label>
//         <select
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           onChange={(e) => handleMealPlanChange(e.target.value)}
//           value={selectedMealPlan}
//         >
//           <option value="">Select Meal Plan</option>
//           {mealPlans.map(plan => (
//             <option key={plan.id} value={plan.id}>
//               {plan.details} - {Array.isArray(plan.duration) ? plan.duration.join(', ') : plan.duration}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">BMI Category</label>
//         <select
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           onChange={(e) => setBmiCategory(e.target.value)}
//           value={bmiCategory}
//         >
//           <option value="">Select BMI Category</option>
//           {bmiCategories.map(category => (
//             <option key={category} value={category}>
//               {category}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Diet Prescription</label>
//         <textarea
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           placeholder="Enter diet prescription"
//           value={dietPrescription}
//           onChange={(e) => setDietPrescription(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Recommended Intake per Day</label>
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Meat/Fish/Poultry</label>
//             <input
//               type="text"
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//               placeholder="Number of servings"
//               value={recommendedIntake.meat}
//               onChange={(e) => setRecommendedIntake({ ...recommendedIntake, meat: e.target.value })}
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Vegetables</label>
//             <input
//               type="text"
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//               placeholder="Number of servings"
//               value={recommendedIntake.vegetables}
//               onChange={(e) => setRecommendedIntake({ ...recommendedIntake, vegetables: e.target.value })}
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Fruits</label>
//             <input
//               type="text"
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//               placeholder="Number of servings"
//               value={recommendedIntake.fruits}
//               onChange={(e) => setRecommendedIntake({ ...recommendedIntake, fruits: e.target.value })}
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Rice or Substitute</label>
//             <input
//               type="text"
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//               placeholder="Number of servings"
//               value={recommendedIntake.rice}
//               onChange={(e) => setRecommendedIntake({ ...recommendedIntake, rice: e.target.value })}
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Fat</label>
//             <input
//               type="text"
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//               placeholder="Number of servings"
//               value={recommendedIntake.fat}
//               onChange={(e) => setRecommendedIntake({ ...recommendedIntake, fat: e.target.value })}
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Water</label>
//             <input
//               type="text"
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//               placeholder="Liters per day"
//               value={recommendedIntake.water}
//               onChange={(e) => setRecommendedIntake({ ...recommendedIntake, water: e.target.value })}
//             />
//           </div>
//         </div>
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Meal Plan Details</label>
//         <textarea
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           placeholder="Enter meal plan details"
//           value={mealPlanDetails}
//           onChange={(e) => setMealPlanDetails(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Duration</label>
//         <input
//           type="text"
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           placeholder="Enter durations (comma separated, e.g., '1 week, 2 weeks')"
//           value={duration.join(', ')}
//           onChange={handleDurationChange}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Health Conditions</label>
//         <input
//           type="text"
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           placeholder="Enter health conditions (comma separated)"
//           value={healthConditions.join(', ')}
//           onChange={(e) => setHealthConditions(e.target.value.split(',').map(cond => cond.trim()))}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Nutritional Goals</label>
//         <textarea
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           placeholder="Enter nutritional goals"
//           value={nutritionalGoals}
//           onChange={(e) => setNutritionalGoals(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Notification Title</label>
//         <input
//           type="text"
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           placeholder="Enter notification title"
//           value={notificationTitle}
//           onChange={(e) => setNotificationTitle(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Notification Message</label>
//         <textarea
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           placeholder="Enter notification message"
//           value={notificationMessage}
//           onChange={(e) => setNotificationMessage(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Priority</label>
//         <select
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           onChange={(e) => setPriority(e.target.value)}
//           value={priority}
//         >
//           <option value="normal">Normal</option>
//           <option value="important">Important</option>
//         </select>
//       </div>
//       <Button
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         onClick={handleAssignMealPlan}
//       >
//         Save Meal Plan & Send Notification
//       </Button>
//       <Button
//         className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2"
//         onClick={handleUpdateMealPlan}
//       >
//         Update Meal Plan
//       </Button>
//       <Button
//         className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2"
//         onClick={handleDeleteMealPlan}
//       >
//         Delete Meal Plan
//       </Button>
//     </div>
//   );
// };

// export default MealPlanForm;

// import React, { useState, useEffect } from 'react';
// import { getUsers, createMealPlan, getMealPlans, updateMealPlan, deleteMealPlan, getUserBmiCategory } from '../../../shared/firestore';
// import { Button } from '../../../components/ui/button';
// import AddMealPlanModal from '../../modals/AddMealPlanModal';
// import UpdateMealPlanModal from '../../modals/UpdateMealPlanModal';
// import DeleteMealPlanModal from '../../modals/DeleteMealPlanModal';
// import FillDetailsModal from '../../modals/FillDetailsModal';

// const MealPlanForm: React.FC = () => {
//   const [users, setUsers] = useState<any[]>([]);
//   const [mealPlans, setMealPlans] = useState<any[]>([]);
//   const [selectedUser, setSelectedUser] = useState<string>('');
//   const [selectedMealPlan, setSelectedMealPlan] = useState<string>('');
//   const [bmiCategory, setBmiCategory] = useState<string>('');
//   const [mealPlanDetails, setMealPlanDetails] = useState<string>('');
//   const [duration, setDuration] = useState<string>('');
//   const [nutritionalGoals, setNutritionalGoals] = useState<string>('');
//   const [notificationTitle, setNotificationTitle] = useState<string>('');
//   const [notificationMessage, setNotificationMessage] = useState<string>('');
//   const [priority, setPriority] = useState<string>('normal');

//   const [dietPrescription, setDietPrescription] = useState<string>('');
//   const [recommendedIntake, setRecommendedIntake] = useState({
//     meat: '',
//     vegetables: '',
//     fruits: '',
//     rice: '',
//     fat: '',
//     water: ''
//   });

//   const [physicalActivities, setPhysicalActivities] = useState<string[]>([]);

//   const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
//   const [isUpdateModalOpen, setIsUpdateModalOpen] = useState<boolean>(false);
//   const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
//   const [isFillDetailsModalOpen, setIsFillDetailsModalOpen] = useState<boolean>(false);

//   const bmiCategories = [
//     'Underweight',
//     'Normal weight',
//     'Overweight',
//     'Obesity'
//   ];

//   const activityOptions = [
//     '30 minuto paglalakad',
//     '30-45 minuto lakad – takbo',
//     '60 minuto paglalakad',
//     '60 minuto lakad-takbo',
//     '30 minuto jogging',
//     '30-45 minuto jogging',
//     '60 minuto jogging'
//   ];

//   // Define allowed durations
//   const allowedDurations = [
//     '1 week',
//     '2 weeks',
//     '3 weeks',
//     '1 month',
//     '2 months',
//     '3 months',
//     '6 months'
//   ];

//   useEffect(() => {
//     const fetchUsers = async () => {
//       const usersData = await getUsers();
//       setUsers(usersData);
//     };
//     const fetchMealPlans = async () => {
//       const mealPlansData = await getMealPlans();
//       setMealPlans(mealPlansData);
//     };
//     fetchUsers();
//     fetchMealPlans();
//   }, []);
//   const handleUserChange = async (userId: string) => {
//   setSelectedUser(userId);
//   if (userId) {
//     try {
//       const bmiData = await getUserBmiCategory(userId);
//       setBmiCategory(bmiData || '');
//     } catch (error) {
//       console.error('Error fetching BMI category:', error);
//       setBmiCategory('');
//     }
//   } else {
//     setBmiCategory('');
//   }
// };
//   const clearForm = () => {
//     setSelectedUser('');
//     setSelectedMealPlan('');
//     setBmiCategory('');
//     setMealPlanDetails('');
//     setDuration('');
//     setNutritionalGoals('');
//     setNotificationTitle('');
//     setNotificationMessage('');
//     setPriority('normal');
//     setDietPrescription('');
//     setRecommendedIntake({
//       meat: '',
//       vegetables: '',
//       fruits: '',
//       rice: '',
//       fat: '',
//       water: ''
//     });
//     setPhysicalActivities([]);
//   };
//   const handleAssignMealPlan = async () => {
//   if (selectedUser && mealPlanDetails && notificationTitle && notificationMessage && duration) {
//     try {
//       // Meal plan data
//       const mealPlanData = {
//         bmiCategory: bmiCategory,
//         createdAt: new Date(),
//         duration,
//         details: mealPlanDetails,
//         nutritionalGoals,
//         dietPrescription,
//         recommendedIntake,
//         physicalActivities
//       };
//       const mealPlanId = `${selectedUser}-${Date.now()}`; // Example ID
//       await createMealPlan(mealPlanId, mealPlanData);

//       // Notification data
//       const notificationData = {
//         userId: selectedUser,
//         title: notificationTitle,
//         message: notificationMessage,
//         priority,
//         createdAt: new Date()
//       };
//       await createNotification(notificationData); // Create a notification document

//       setMealPlans([...mealPlans, { id: mealPlanId, ...mealPlanData }]);
//       setIsAddModalOpen(true); // Open the add modal
//       clearForm();
//     } catch (error) {
//       console.error('Error saving meal plan or notification:', error);
//     }
//   } else {
//     setIsFillDetailsModalOpen(true); // Open the fill details modal
//   }
// };

//   const handleUpdateMealPlan = async () => {
//     if (selectedMealPlan) {
//       try {
//         const updatedData = {
//           details: mealPlanDetails,
//           duration,
//           nutritionalGoals,
//           dietPrescription,
//           recommendedIntake,
//           physicalActivities
//         };
//         await updateMealPlan(selectedMealPlan, updatedData);
//         setIsUpdateModalOpen(true); // Open the update modal
//         setMealPlans(mealPlans.map(plan => 
//           plan.id === selectedMealPlan ? { ...plan, ...updatedData } : plan
//         ));
//       } catch (error) {
//         console.error('Error updating meal plan:', error);
//       }
//     }
//   };

//   const handleDeleteMealPlan = async () => {
//     if (selectedMealPlan) {
//       try {
//         await deleteMealPlan(selectedMealPlan);
//         setIsDeleteModalOpen(true); // Open the delete modal
//         setMealPlans(mealPlans.filter(plan => plan.id !== selectedMealPlan));
//         setSelectedMealPlan('');
//         setMealPlanDetails('');
//         setDuration('');
//         setNutritionalGoals('');
//       } catch (error) {
//         console.error('Error deleting meal plan:', error);
//       }
//     }
//   };

//   const handleActivityChange = (activity: string) => {
//     setPhysicalActivities(prevActivities =>
//       prevActivities.includes(activity)
//         ? prevActivities.filter(a => a !== activity)
//         : [...prevActivities, activity]
//     );
//   };

//   return (
//     <div className="p-4 bg-white shadow-md rounded-md">
//       <h2 className="text-xl mb-4">Assign Meal Plan</h2>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Select User</label>
//         <select
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           onChange={(e) => handleUserChange(e.target.value)}
//           value={selectedUser}
//         >
//           <option value="">Select User</option>
//           {users.map(user => (
//             <option key={user.id} value={user.id}>
//               {user.firstname} {user.lastname}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Duration</label>
//         <select
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           onChange={(e) => setDuration(e.target.value)}
//           value={duration}
//         >
//           <option value="">Select Duration</option>
//           {allowedDurations.map(d => (
//             <option key={d} value={d}>
//               {d}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">BMI Category</label>
//         <select
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           onChange={(e) => setBmiCategory(e.target.value)}
//           value={bmiCategory}
//         >
//           <option value="">Select BMI Category</option>
//           {bmiCategories.map(category => (
//             <option key={category} value={category}>
//               {category}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Diet Prescription</label>
//         <textarea
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           placeholder="Enter diet prescription"
//           value={dietPrescription}
//           onChange={(e) => setDietPrescription(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Recommended Intake per Day</label>
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Meat/Fish/Poultry</label>
//             <input
//               type="text"
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//               placeholder="Number of servings"
//               value={recommendedIntake.meat}
//               onChange={(e) => setRecommendedIntake({ ...recommendedIntake, meat: e.target.value })}
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Vegetables</label>
//             <input
//               type="text"
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//               placeholder="Number of servings"
//               value={recommendedIntake.vegetables}
//               onChange={(e) => setRecommendedIntake({ ...recommendedIntake, vegetables: e.target.value })}
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Fruits</label>
//             <input
//               type="text"
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//               placeholder="Number of servings"
//               value={recommendedIntake.fruits}
//               onChange={(e) => setRecommendedIntake({ ...recommendedIntake, fruits: e.target.value })}
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Rice or Substitute</label>
//             <input
//               type="text"
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//               placeholder="Number of servings"
//               value={recommendedIntake.rice}
//               onChange={(e) => setRecommendedIntake({ ...recommendedIntake, rice: e.target.value })}
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Fat</label>
//             <input
//               type="text"
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//               placeholder="Number of servings"
//               value={recommendedIntake.fat}
//               onChange={(e) => setRecommendedIntake({ ...recommendedIntake, fat: e.target.value })}
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Water</label>
//             <input
//               type="text"
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//               placeholder="Liters per day"
//               value={recommendedIntake.water}
//               onChange={(e) => setRecommendedIntake({ ...recommendedIntake, water: e.target.value })}
//             />
//           </div>
//         </div>
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Physical Activity Recommendations</label>
//         <div className="grid grid-cols-1 gap-2">
//           {activityOptions.map(activity => (
//             <div key={activity} className="flex items-center">
//               <input
//                 type="checkbox"
//                 className="mr-2"
//                 checked={physicalActivities.includes(activity)}
//                 onChange={() => handleActivityChange(activity)}
//               />
//               <label className="text-sm">{activity}</label>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Meal Plan Details</label>
//         <textarea
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           placeholder="Enter meal plan details"
//           value={mealPlanDetails}
//           onChange={(e) => setMealPlanDetails(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Nutritional Goals</label>
//         <textarea
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           placeholder="Enter nutritional goals"
//           value={nutritionalGoals}
//           onChange={(e) => setNutritionalGoals(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Notification Title</label>
//         <input
//           type="text"
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           placeholder="Enter notification title"
//           value={notificationTitle}
//           onChange={(e) => setNotificationTitle(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Notification Message</label>
//         <textarea
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           placeholder="Enter notification message"
//           value={notificationMessage}
//           onChange={(e) => setNotificationMessage(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Priority</label>
//         <select
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           onChange={(e) => setPriority(e.target.value)}
//           value={priority}
//         >
//           <option value="normal">Normal</option>
//           <option value="important">Important</option>
//         </select>
//       </div>
//       <Button
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         onClick={handleAssignMealPlan}
//       >
//         Save Meal Plan & Send Notification
//       </Button>
//       <Button
//         className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2"
//         onClick={handleUpdateMealPlan}
//       >
//         Update Meal Plan
//       </Button>
//       <Button
//         className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2"
//         onClick={handleDeleteMealPlan}
//       >
//         Delete Meal Plan
//       </Button>

//       {/* Modals for success messages */}
//       <AddMealPlanModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
//       <UpdateMealPlanModal isOpen={isUpdateModalOpen} onClose={() => setIsUpdateModalOpen(false)} />
//       <DeleteMealPlanModal isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)} />
//       <FillDetailsModal isOpen={isFillDetailsModalOpen} onClose={() => setIsFillDetailsModalOpen(false)} />
//     </div>
//   );
// };

// export default MealPlanForm;

// import React, { useState, useEffect } from 'react';
// import { getUsers, createMealPlan, getMealPlans, updateMealPlan, deleteMealPlan, getUserBmiCategory, createNotification } from '../../../shared/firestore';
// import { Button } from '../../../components/ui/button';
// import AddMealPlanModal from '../../modals/AddMealPlanModal';
// import UpdateMealPlanModal from '../../modals/UpdateMealPlanModal';
// import DeleteMealPlanModal from '../../modals/DeleteMealPlanModal';
// import FillDetailsModal from '../../modals/FillDetailsModal';

// const MealPlanForm: React.FC = () => {
//   const [users, setUsers] = useState<any[]>([]);
//   const [mealPlans, setMealPlans] = useState<any[]>([]);
//   const [selectedUser, setSelectedUser] = useState<string>('');
//   const [selectedMealPlan, setSelectedMealPlan] = useState<string>('');
//   const [bmiCategory, setBmiCategory] = useState<string>('');
//   const [mealPlanDetails, setMealPlanDetails] = useState<string>('');
//   const [duration, setDuration] = useState<string>('');
//   const [nutritionalGoals, setNutritionalGoals] = useState<string>('');
//   const [notificationTitle, setNotificationTitle] = useState<string>('');
//   const [notificationMessage, setNotificationMessage] = useState<string>('');
//   const [priority, setPriority] = useState<string>('normal');

//   const [dietPrescription, setDietPrescription] = useState<string>('');
//   const [recommendedIntake, setRecommendedIntake] = useState({
//     meat: '',
//     vegetables: '',
//     fruits: '',
//     rice: '',
//     fat: '',
//     water: ''
//   });

//   const [physicalActivities, setPhysicalActivities] = useState<string[]>([]);

//   const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
//   const [isUpdateModalOpen, setIsUpdateModalOpen] = useState<boolean>(false);
//   const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
//   const [isFillDetailsModalOpen, setIsFillDetailsModalOpen] = useState<boolean>(false);

//   const bmiCategories = [
//     'Underweight',
//     'Normal weight',
//     'Overweight',
//     'Obesity'
//   ];

//   const activityOptions = [
//     '30 minuto paglalakad',
//     '30-45 minuto lakad – takbo',
//     '60 minuto paglalakad',
//     '60 minuto lakad-takbo',
//     '30 minuto jogging',
//     '30-45 minuto jogging',
//     '60 minuto jogging'
//   ];

//   // Define allowed durations
//   const allowedDurations = [
//     '1 week',
//     '2 weeks',
//     '3 weeks',
//     '1 month',
//     '2 months',
//     '3 months',
//     '6 months'
//   ];

//   useEffect(() => {
//     const fetchUsers = async () => {
//       const usersData = await getUsers();
//       setUsers(usersData);
//     };
//     const fetchMealPlans = async () => {
//       const mealPlansData = await getMealPlans();
//       setMealPlans(mealPlansData);
//     };
//     fetchUsers();
//     fetchMealPlans();
//   }, []);

//   const handleUserChange = async (userId: string) => {
//     setSelectedUser(userId);
//     if (userId) {
//       try {
//         const bmiData = await getUserBmiCategory(userId);
//         setBmiCategory(bmiData || '');
//       } catch (error) {
//         console.error('Error fetching BMI category:', error);
//         setBmiCategory('');
//       }
//     } else {
//       setBmiCategory('');
//     }
//   };

//   const clearForm = () => {
//     setSelectedUser('');
//     setSelectedMealPlan('');
//     setBmiCategory('');
//     setMealPlanDetails('');
//     setDuration('');
//     setNutritionalGoals('');
//     setNotificationTitle('');
//     setNotificationMessage('');
//     setPriority('normal');
//     setDietPrescription('');
//     setRecommendedIntake({
//       meat: '',
//       vegetables: '',
//       fruits: '',
//       rice: '',
//       fat: '',
//       water: ''
//     });
//     setPhysicalActivities([]);
//   };

//   const handleAssignMealPlan = async () => {
//     if (selectedUser && mealPlanDetails && notificationTitle && notificationMessage && duration) {
//       try {
//         // Meal plan data
//         const mealPlanData = {
//           bmiCategory: bmiCategory,
//           createdAt: new Date(),
//           duration,
//           details: mealPlanDetails,
//           nutritionalGoals,
//           dietPrescription,
//           recommendedIntake,
//           physicalActivities
//         };
//         const mealPlanId = `${selectedUser}-${Date.now()}`; // Example ID
//         await createMealPlan(mealPlanId, mealPlanData);

//         // Notification data
//         const notificationData = {
//           userId: selectedUser,
//           title: notificationTitle,
//           message: notificationMessage,
//           priority,
//           createdAt: new Date()
//         };
//         await createNotification(notificationData); // Create a notification document

//         setMealPlans([...mealPlans, { id: mealPlanId, ...mealPlanData }]);
//         setIsAddModalOpen(true); // Open the add modal
//         clearForm();
//       } catch (error) {
//         console.error('Error saving meal plan or notification:', error);
//       }
//     } else {
//       setIsFillDetailsModalOpen(true); // Open the fill details modal
//     }
//   };

//   const handleUpdateMealPlan = async () => {
//     if (selectedMealPlan) {
//       try {
//         const updatedData = {
//           details: mealPlanDetails,
//           duration,
//           nutritionalGoals,
//           dietPrescription,
//           recommendedIntake,
//           physicalActivities
//         };
//         await updateMealPlan(selectedMealPlan, updatedData);
//         setIsUpdateModalOpen(true); // Open the update modal
//         setMealPlans(mealPlans.map(plan => 
//           plan.id === selectedMealPlan ? { ...plan, ...updatedData } : plan
//         ));
//       } catch (error) {
//         console.error('Error updating meal plan:', error);
//       }
//     }
//   };

//   const handleDeleteMealPlan = async () => {
//     if (selectedMealPlan) {
//       try {
//         await deleteMealPlan(selectedMealPlan);
//         setIsDeleteModalOpen(true); // Open the delete modal
//         setMealPlans(mealPlans.filter(plan => plan.id !== selectedMealPlan));
//         setSelectedMealPlan('');
//         setMealPlanDetails('');
//         setDuration('');
//         setNutritionalGoals('');
//       } catch (error) {
//         console.error('Error deleting meal plan:', error);
//       }
//     }
//   };

//   const handleActivityChange = (activity: string) => {
//     setPhysicalActivities(prevActivities =>
//       prevActivities.includes(activity)
//         ? prevActivities.filter(a => a !== activity)
//         : [...prevActivities, activity]
//     );
//   };

//   return (
//     <div className="p-4 bg-white shadow-md rounded-md">
//       <h2 className="text-xl mb-4">Assign Meal Plan</h2>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Select User</label>
//         <select
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           onChange={(e) => handleUserChange(e.target.value)}
//           value={selectedUser}
//         >
//           <option value="">Select User</option>
//           {users.map(user => (
//             <option key={user.id} value={user.id}>
//               {user.firstname} {user.lastname}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Duration</label>
//         <select
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           onChange={(e) => setDuration(e.target.value)}
//           value={duration}
//         >
//           <option value="">Select Duration</option>
//           {allowedDurations.map(d => (
//             <option key={d} value={d}>
//               {d}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">BMI Category</label>
//         <select
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           onChange={(e) => setBmiCategory(e.target.value)}
//           value={bmiCategory}
//         >
//           <option value="">Select BMI Category</option>
//           {bmiCategories.map(category => (
//             <option key={category} value={category}>
//               {category}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Diet Prescription</label>
//         <textarea
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           placeholder="Enter diet prescription"
//           value={dietPrescription}
//           onChange={(e) => setDietPrescription(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Recommended Intake per Day</label>
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Meat/Fish/Poultry</label>
//             <input
//               type="text"
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//               placeholder="Number of servings"
//               value={recommendedIntake.meat}
//               onChange={(e) => setRecommendedIntake({ ...recommendedIntake, meat: e.target.value })}
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Vegetables</label>
//             <input
//               type="text"
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//               placeholder="Number of servings"
//               value={recommendedIntake.vegetables}
//               onChange={(e) => setRecommendedIntake({ ...recommendedIntake, vegetables: e.target.value })}
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Fruits</label>
//             <input
//               type="text"
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//               placeholder="Number of servings"
//               value={recommendedIntake.fruits}
//               onChange={(e) => setRecommendedIntake({ ...recommendedIntake, fruits: e.target.value })}
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Rice or Substitute</label>
//             <input
//               type="text"
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//               placeholder="Number of servings"
//               value={recommendedIntake.rice}
//               onChange={(e) => setRecommendedIntake({ ...recommendedIntake, rice: e.target.value })}
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Fat</label>
//             <input
//               type="text"
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//               placeholder="Number of servings"
//               value={recommendedIntake.fat}
//               onChange={(e) => setRecommendedIntake({ ...recommendedIntake, fat: e.target.value })}
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Water</label>
//             <input
//               type="text"
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//               placeholder="Liters per day"
//               value={recommendedIntake.water}
//               onChange={(e) => setRecommendedIntake({ ...recommendedIntake, water: e.target.value })}
//             />
//           </div>
//         </div>
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Physical Activity Recommendations</label>
//         <div className="grid grid-cols-1 gap-2">
//           {activityOptions.map(activity => (
//             <div key={activity} className="flex items-center">
//               <input
//                 type="checkbox"
//                 className="mr-2"
//                 checked={physicalActivities.includes(activity)}
//                 onChange={() => handleActivityChange(activity)}
//               />
//               <label className="text-sm">{activity}</label>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Meal Plan Details</label>
//         <textarea
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           placeholder="Enter meal plan details"
//           value={mealPlanDetails}
//           onChange={(e) => setMealPlanDetails(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Nutritional Goals</label>
//         <textarea
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           placeholder="Enter nutritional goals"
//           value={nutritionalGoals}
//           onChange={(e) => setNutritionalGoals(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Notification Title</label>
//         <input
//           type="text"
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           placeholder="Enter notification title"
//           value={notificationTitle}
//           onChange={(e) => setNotificationTitle(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Notification Message</label>
//         <textarea
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           placeholder="Enter notification message"
//           value={notificationMessage}
//           onChange={(e) => setNotificationMessage(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Priority</label>
//         <select
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           onChange={(e) => setPriority(e.target.value)}
//           value={priority}
//         >
//           <option value="normal">Normal</option>
//           <option value="important">Important</option>
//         </select>
//       </div>
//       <Button
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         onClick={handleAssignMealPlan}
//       >
//         Save Meal Plan & Send Notification
//       </Button>
//       <Button
//         className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2"
//         onClick={handleUpdateMealPlan}
//       >
//         Update Meal Plan
//       </Button>
//       <Button
//         className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2"
//         onClick={handleDeleteMealPlan}
//       >
//         Delete Meal Plan
//       </Button>

//       {/* Modals for success messages */}
//       <AddMealPlanModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
//       <UpdateMealPlanModal isOpen={isUpdateModalOpen} onClose={() => setIsUpdateModalOpen(false)} />
//       <DeleteMealPlanModal isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)} />
//       <FillDetailsModal isOpen={isFillDetailsModalOpen} onClose={() => setIsFillDetailsModalOpen(false)} />
//     </div>
//   );
// };

// export default MealPlanForm;

// import React, { useState, useEffect } from 'react';
// import { getUsers, createMealPlan, getMealPlans, updateMealPlan, deleteMealPlan, getUserBmiCategory, createNotification, getBmiCategories, addBmiCategory, updateBmiCategory, deleteBmiCategory } from '../../../shared/firestore';
// import { Button } from '../../../components/ui/button';
// import AddMealPlanModal from '../../modals/AddMealPlanModal';
// import UpdateMealPlanModal from '../../modals/UpdateMealPlanModal';
// import DeleteMealPlanModal from '../../modals/DeleteMealPlanModal';
// import FillDetailsModal from '../../modals/FillDetailsModal';

// const MealPlanForm: React.FC = () => {
//   const [users, setUsers] = useState<any[]>([]);
//   const [mealPlans, setMealPlans] = useState<any[]>([]);
//   const [selectedUser, setSelectedUser] = useState<string>('');
//   const [selectedMealPlan, setSelectedMealPlan] = useState<string>('');
//   const [bmiCategory, setBmiCategory] = useState<string>('');
//   const [bmiCategories, setBmiCategories] = useState<string[]>([]);
//   const [newBmiCategory, setNewBmiCategory] = useState<string>('');
//   const [mealPlanDetails, setMealPlanDetails] = useState<string>('');
//   const [duration, setDuration] = useState<string>('');
//   const [nutritionalGoals, setNutritionalGoals] = useState<string>('');
//   const [notificationTitle, setNotificationTitle] = useState<string>('');
//   const [notificationMessage, setNotificationMessage] = useState<string>('');
//   const [priority, setPriority] = useState<string>('normal');

//   const [dietPrescription, setDietPrescription] = useState<string>('');
//   const [recommendedIntake, setRecommendedIntake] = useState({
//     meat: '',
//     vegetables: '',
//     fruits: '',
//     rice: '',
//     fat: '',
//     water: ''
//   });

//   const [physicalActivities, setPhysicalActivities] = useState<string[]>([]);

//   const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
//   const [isUpdateModalOpen, setIsUpdateModalOpen] = useState<boolean>(false);
//   const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
//   const [isFillDetailsModalOpen, setIsFillDetailsModalOpen] = useState<boolean>(false);

//   const activityOptions = [
//     '30 minuto paglalakad',
//     '30-45 minuto lakad – takbo',
//     '60 minuto paglalakad',
//     '60 minuto lakad-takbo',
//     '30 minuto jogging',
//     '30-45 minuto jogging',
//     '60 minuto jogging'
//   ];

//   // Define allowed durations
//   const allowedDurations = [
//     '1 week',
//     '2 weeks',
//     '3 weeks',
//     '1 month',
//     '2 months',
//     '3 months',
//     '6 months'
//   ];

//   useEffect(() => {
//     const fetchUsers = async () => {
//       const usersData = await getUsers();
//       setUsers(usersData);
//     };
//     const fetchMealPlans = async () => {
//       const mealPlansData = await getMealPlans();
//       setMealPlans(mealPlansData);
//     };
//     const fetchBmiCategories = async () => {
//       const categories = await getBmiCategories();
//       setBmiCategories(categories);
//     };
//     fetchUsers();
//     fetchMealPlans();
//     fetchBmiCategories();
//   }, []);

//   const handleUserChange = async (userId: string) => {
//     setSelectedUser(userId);
//     if (userId) {
//       try {
//         const bmiData = await getUserBmiCategory(userId);
//         setBmiCategory(bmiData || '');
//       } catch (error) {
//         console.error('Error fetching BMI category:', error);
//         setBmiCategory('');
//       }
//     } else {
//       setBmiCategory('');
//     }
//   };

//   const handleAddBmiCategory = async () => {
//     if (newBmiCategory) {
//       await addBmiCategory(newBmiCategory);
//       setBmiCategories([...bmiCategories, newBmiCategory]);
//       setNewBmiCategory('');
//     }
//   };

//   const handleUpdateBmiCategory = async (oldCategory: string, newCategory: string) => {
//     if (oldCategory && newCategory) {
//       await updateBmiCategory(oldCategory, newCategory);
//       setBmiCategories(bmiCategories.map(cat => (cat === oldCategory ? newCategory : cat)));
//     }
//   };

//   const handleDeleteBmiCategory = async (category: string) => {
//     if (category) {
//       await deleteBmiCategory(category);
//       setBmiCategories(bmiCategories.filter(cat => cat !== category));
//     }
//   };

//   const clearForm = () => {
//     setSelectedUser('');
//     setSelectedMealPlan('');
//     setBmiCategory('');
//     setMealPlanDetails('');
//     setDuration('');
//     setNutritionalGoals('');
//     setNotificationTitle('');
//     setNotificationMessage('');
//     setPriority('normal');
//     setDietPrescription('');
//     setRecommendedIntake({
//       meat: '',
//       vegetables: '',
//       fruits: '',
//       rice: '',
//       fat: '',
//       water: ''
//     });
//     setPhysicalActivities([]);
//   };

//   const handleAssignMealPlan = async () => {
//     if (selectedUser && mealPlanDetails && notificationTitle && notificationMessage && duration) {
//       try {
//         // Meal plan data
//         const mealPlanData = {
//           bmiCategory: bmiCategory,
//           createdAt: new Date(),
//           duration,
//           details: mealPlanDetails,
//           nutritionalGoals,
//           dietPrescription,
//           recommendedIntake,
//           physicalActivities
//         };
//         const mealPlanId = `${selectedUser}-${Date.now()}`; // Example ID
//         await createMealPlan(mealPlanId, mealPlanData);

//         // Notification data
//         const notificationData = {
//           userId: selectedUser,
//           title: notificationTitle,
//           message: notificationMessage,
//           priority,
//           createdAt: new Date()
//         };
//         await createNotification(notificationData); // Create a notification document

//         setMealPlans([...mealPlans, { id: mealPlanId, ...mealPlanData }]);
//         setIsAddModalOpen(true); // Open the add modal
//         clearForm();
//       } catch (error) {
//         console.error('Error saving meal plan or notification:', error);
//       }
//     } else {
//       setIsFillDetailsModalOpen(true); // Open the fill details modal
//     }
//   };

//   const handleUpdateMealPlan = async () => {
//     if (selectedMealPlan) {
//       try {
//         const updatedData = {
//           details: mealPlanDetails,
//           duration,
//           nutritionalGoals,
//           dietPrescription,
//           recommendedIntake,
//           physicalActivities
//         };
//         await updateMealPlan(selectedMealPlan, updatedData);
//         setIsUpdateModalOpen(true); // Open the update modal
//         setMealPlans(mealPlans.map(plan => 
//           plan.id === selectedMealPlan ? { ...plan, ...updatedData } : plan
//         ));
//       } catch (error) {
//         console.error('Error updating meal plan:', error);
//       }
//     }
//   };

//   const handleDeleteMealPlan = async () => {
//     if (selectedMealPlan) {
//       try {
//         await deleteMealPlan(selectedMealPlan);
//         setIsDeleteModalOpen(true); // Open the delete modal
//         setMealPlans(mealPlans.filter(plan => plan.id !== selectedMealPlan));
//         setSelectedMealPlan('');
//         setMealPlanDetails('');
//         setDuration('');
//         setNutritionalGoals('');
//       } catch (error) {
//         console.error('Error deleting meal plan:', error);
//       }
//     }
//   };

//   const handleActivityChange = (activity: string) => {
//     setPhysicalActivities(prevActivities =>
//       prevActivities.includes(activity)
//         ? prevActivities.filter(a => a !== activity)
//         : [...prevActivities, activity]
//     );
//   };

//   return (
//     <div className="p-4 bg-white shadow-md rounded-md">
//       <h2 className="text-xl mb-4">Assign Meal Plan</h2>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Select User</label>
//         <select
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           onChange={(e) => handleUserChange(e.target.value)}
//           value={selectedUser}
//         >
//           <option value="">Select User</option>
//           {users.map(user => (
//             <option key={user.id} value={user.id}>
//               {user.firstname} {user.lastname}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Duration</label>
//         <select
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           onChange={(e) => setDuration(e.target.value)}
//           value={duration}
//         >
//           <option value="">Select Duration</option>
//           {allowedDurations.map(d => (
//             <option key={d} value={d}>
//               {d}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">BMI Category</label>
//         <select
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           onChange={(e) => setBmiCategory(e.target.value)}
//           value={bmiCategory}
//         >
//           <option value="">Select BMI Category</option>
//           {bmiCategories.map(category => (
//             <option key={category} value={category}>
//               {category}
//             </option>
//           ))}
//         </select>
//         <input
//           type="text"
//           className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm"
//           placeholder="Add new BMI category"
//           value={newBmiCategory}
//           onChange={(e) => setNewBmiCategory(e.target.value)}
//         />
//         <Button
//           className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           onClick={handleAddBmiCategory}
//         >
//           Add BMI Category
//         </Button>
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Diet Prescription</label>
//         <textarea
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           placeholder="Enter diet prescription"
//           value={dietPrescription}
//           onChange={(e) => setDietPrescription(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Recommended Intake per Day</label>
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Meat/Fish/Poultry</label>
//             <input
//               type="text"
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//               placeholder="Number of servings"
//               value={recommendedIntake.meat}
//               onChange={(e) => setRecommendedIntake({ ...recommendedIntake, meat: e.target.value })}
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Vegetables</label>
//             <input
//               type="text"
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//               placeholder="Number of servings"
//               value={recommendedIntake.vegetables}
//               onChange={(e) => setRecommendedIntake({ ...recommendedIntake, vegetables: e.target.value })}
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Fruits</label>
//             <input
//               type="text"
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//               placeholder="Number of servings"
//               value={recommendedIntake.fruits}
//               onChange={(e) => setRecommendedIntake({ ...recommendedIntake, fruits: e.target.value })}
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Rice or Substitute</label>
//             <input
//               type="text"
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//               placeholder="Number of servings"
//               value={recommendedIntake.rice}
//               onChange={(e) => setRecommendedIntake({ ...recommendedIntake, rice: e.target.value })}
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Fat</label>
//             <input
//               type="text"
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//               placeholder="Number of servings"
//               value={recommendedIntake.fat}
//               onChange={(e) => setRecommendedIntake({ ...recommendedIntake, fat: e.target.value })}
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Water</label>
//             <input
//               type="text"
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//               placeholder="Liters per day"
//               value={recommendedIntake.water}
//               onChange={(e) => setRecommendedIntake({ ...recommendedIntake, water: e.target.value })}
//             />
//           </div>
//         </div>
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Physical Activity Recommendations</label>
//         <div className="grid grid-cols-1 gap-2">
//           {activityOptions.map(activity => (
//             <div key={activity} className="flex items-center">
//               <input
//                 type="checkbox"
//                 className="mr-2"
//                 checked={physicalActivities.includes(activity)}
//                 onChange={() => handleActivityChange(activity)}
//               />
//               <label className="text-sm">{activity}</label>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Meal Plan Details</label>
//         <textarea
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           placeholder="Enter meal plan details"
//           value={mealPlanDetails}
//           onChange={(e) => setMealPlanDetails(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Nutritional Goals</label>
//         <textarea
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           placeholder="Enter nutritional goals"
//           value={nutritionalGoals}
//           onChange={(e) => setNutritionalGoals(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Notification Title</label>
//         <input
//           type="text"
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           placeholder="Enter notification title"
//           value={notificationTitle}
//           onChange={(e) => setNotificationTitle(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Notification Message</label>
//         <textarea
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           placeholder="Enter notification message"
//           value={notificationMessage}
//           onChange={(e) => setNotificationMessage(e.target.value)}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Priority</label>
//         <select
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//           onChange={(e) => setPriority(e.target.value)}
//           value={priority}
//         >
//           <option value="normal">Normal</option>
//           <option value="important">Important</option>
//         </select>
//       </div>
//       <Button
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         onClick={handleAssignMealPlan}
//       >
//         Save Meal Plan & Send Notification
//       </Button>
//       <Button
//         className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2"
//         onClick={handleUpdateMealPlan}
//       >
//         Update Meal Plan
//       </Button>
//       <Button
//         className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2"
//         onClick={handleDeleteMealPlan}
//       >
//         Delete Meal Plan
//       </Button>

//       {/* Modals for success messages */}
//       <AddMealPlanModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
//       <UpdateMealPlanModal isOpen={isUpdateModalOpen} onClose={() => setIsUpdateModalOpen(false)} />
//       <DeleteMealPlanModal isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)} />
//       <FillDetailsModal isOpen={isFillDetailsModalOpen} onClose={() => setIsFillDetailsModalOpen(false)} />
//     </div>
//   );
// };

// export default MealPlanForm;

import React, { useState, useEffect } from 'react';
import { getUsers, createMealPlan, getMealPlans, updateMealPlan, deleteMealPlan, getUserBmiCategory, createNotification } from '../../../shared/firestore';
import { Button } from '../../../components/ui/button';
import AddMealPlanModal from '../../modals/AddMealPlanModal';
import UpdateMealPlanModal from '../../modals/UpdateMealPlanModal';
import DeleteMealPlanModal from '../../modals/DeleteMealPlanModal';
import FillDetailsModal from '../../modals/FillDetailsModal';

const MealPlanForm: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [mealPlans, setMealPlans] = useState<any[]>([]);
  const [selectedUser, setSelectedUser] = useState<string>('');
  const [selectedMealPlan, setSelectedMealPlan] = useState<string>('');
  const [bmiCategory, setBmiCategory] = useState<string>('');
  const [mealPlanDetails, setMealPlanDetails] = useState<string>('');
  const [duration, setDuration] = useState<string>('');
  const [nutritionalGoals, setNutritionalGoals] = useState<string>('');
  const [notificationTitle, setNotificationTitle] = useState<string>('');
  const [notificationMessage, setNotificationMessage] = useState<string>('');
  const [priority, setPriority] = useState<string>('normal');

  const [dietPrescription, setDietPrescription] = useState<string>('');
  const [recommendedIntake, setRecommendedIntake] = useState({
    meat: '',
    vegetables: '',
    fruits: '',
    rice: '',
    fat: '',
    water: ''
  });

  const [physicalActivities, setPhysicalActivities] = useState<string[]>([]);

  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [isFillDetailsModalOpen, setIsFillDetailsModalOpen] = useState<boolean>(false);

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
        // Meal plan data
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
        const mealPlanId = `${selectedUser}-${Date.now()}`; // Example ID
        await createMealPlan(mealPlanId, mealPlanData);

        // Notification data
        const notificationData = {
          userId: selectedUser,
          title: notificationTitle,
          message: notificationMessage,
          priority,
          createdAt: new Date()
        };
        await createNotification(notificationData); // Create a notification document

        setMealPlans([...mealPlans, { id: mealPlanId, ...mealPlanData }]);
        setIsAddModalOpen(true); // Open the add modal
        clearForm();
      } catch (error) {
        console.error('Error saving meal plan or notification:', error);
      }
    } else {
      setIsFillDetailsModalOpen(true); // Open the fill details modal
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
        setIsUpdateModalOpen(true); // Open the update modal
        setMealPlans(mealPlans.map(plan => 
          plan.id === selectedMealPlan ? { ...plan, ...updatedData } : plan
        ));
      } catch (error) {
        console.error('Error updating meal plan:', error);
      }
    }
  };

  const handleDeleteMealPlan = async () => {
    if (selectedMealPlan) {
      try {
        await deleteMealPlan(selectedMealPlan);
        setIsDeleteModalOpen(true); // Open the delete modal
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
    <div className="p-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl mb-4">Assign Meal Plan</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Select User</label>
        <select
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          onChange={(e) => handleUserChange(e.target.value)}
          value={selectedUser}
        >
          <option value="">Select User</option>
          {users.map(user => (
            <option key={user.id} value={user.id}>
              {user.firstname} {user.lastname}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Duration</label>
        <select
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          onChange={(e) => setDuration(e.target.value)}
          value={duration}
        >
          <option value="">Select Duration</option>
          {allowedDurations.map(d => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">BMI Category</label>
        <select
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          onChange={(e) => setBmiCategory(e.target.value)}
          value={bmiCategory}
        >
          <option value="">Select BMI Category</option>
          {predefinedBmiCategories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Diet Prescription</label>
        <textarea
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          placeholder="Enter diet prescription"
          value={dietPrescription}
          onChange={(e) => setDietPrescription(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Recommended Intake per Day</label>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Meat/Fish/Poultry</label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              placeholder="Number of servings"
              value={recommendedIntake.meat}
              onChange={(e) => setRecommendedIntake({ ...recommendedIntake, meat: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Vegetables</label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              placeholder="Number of servings"
              value={recommendedIntake.vegetables}
              onChange={(e) => setRecommendedIntake({ ...recommendedIntake, vegetables: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Fruits</label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              placeholder="Number of servings"
              value={recommendedIntake.fruits}
              onChange={(e) => setRecommendedIntake({ ...recommendedIntake, fruits: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Rice or Substitute</label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              placeholder="Number of servings"
              value={recommendedIntake.rice}
              onChange={(e) => setRecommendedIntake({ ...recommendedIntake, rice: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Fat</label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              placeholder="Number of servings"
              value={recommendedIntake.fat}
              onChange={(e) => setRecommendedIntake({ ...recommendedIntake, fat: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Water</label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              placeholder="Liters per day"
              value={recommendedIntake.water}
              onChange={(e) => setRecommendedIntake({ ...recommendedIntake, water: e.target.value })}
            />
          </div>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Physical Activity Recommendations</label>
        <div className="grid grid-cols-1 gap-2">
          {activityOptions.map(activity => (
            <div key={activity} className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={physicalActivities.includes(activity)}
                onChange={() => handleActivityChange(activity)}
              />
              <label className="text-sm">{activity}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Meal Plan Details</label>
        <textarea
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          placeholder="Enter meal plan details"
          value={mealPlanDetails}
          onChange={(e) => setMealPlanDetails(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Nutritional Goals</label>
        <textarea
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          placeholder="Enter nutritional goals"
          value={nutritionalGoals}
          onChange={(e) => setNutritionalGoals(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Notification Title</label>
        <input
          type="text"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          placeholder="Enter notification title"
          value={notificationTitle}
          onChange={(e) => setNotificationTitle(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Notification Message</label>
        <textarea
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          placeholder="Enter notification message"
          value={notificationMessage}
          onChange={(e) => setNotificationMessage(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Priority</label>
        <select
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          onChange={(e) => setPriority(e.target.value)}
          value={priority}
        >
          <option value="normal">Normal</option>
          <option value="important">Important</option>
        </select>
      </div>
      <Button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleAssignMealPlan}
      >
        Save Meal Plan & Send Notification
      </Button>
      <Button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2"
        onClick={handleUpdateMealPlan}
      >
        Update Meal Plan
      </Button>
      <Button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2"
        onClick={handleDeleteMealPlan}
      >
        Delete Meal Plan
      </Button>

      {/* Modals for success messages */}
      <AddMealPlanModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
      <UpdateMealPlanModal isOpen={isUpdateModalOpen} onClose={() => setIsUpdateModalOpen(false)} />
      <DeleteMealPlanModal isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)} />
      <FillDetailsModal isOpen={isFillDetailsModalOpen} onClose={() => setIsFillDetailsModalOpen(false)} />
    </div>
  );
};

export default MealPlanForm;