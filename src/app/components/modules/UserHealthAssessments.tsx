// import React, { useEffect, useState } from 'react';
// import { getAssessments, getUsers, getUsersBMI } from '../../../shared/firestore'; // Adjust the import path

// interface UserHealthAssessmentsProps {
//   id: string;
// }

// const UserHealthAssessments: React.FC<UserHealthAssessmentsProps> = ({id}) => {
//   const [userData, setUserData] = useState<any | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     fetchData();
//   }, [id]);

//   const fetchData = async () => {
//     try {
//       const healthAssessments = await getAssessments();
//       const usersBmi = await getUsersBMI();
//       const registrations = await getUsers();

//       const userRegistration = registrations.find(reg => reg.userID === id);
//       const userHealthAssessment = healthAssessments.find(ha => ha.userID === id) || {};
//       const userBmi = usersBmi.find(bmi => bmi.userID === id) || {};

//       if (userRegistration) {
//         setUserData({
//           ...userRegistration,
//           healthAssessment: userHealthAssessment,
//           userBmi: userBmi,
//         });
//       } else {
//         setUserData(null);
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       setError('Error fetching data');
//     }
//   };

//   if (error) {
//     return <p className="text-red-500">{error}</p>;
//   }

//   if (!userData) {
//     return <p>No user data found for {id}.</p>;
//   }

//   return (
//     <section id="user-data" className="mb-8">
//       <h2 className="text-2xl mb-2 text-pink-500">User Data</h2>
//       <div className="mb-8">
//         <h3 className="text-lg mb-2">{userData.first_name} {userData.last_name}</h3>
//         <p>Email: {userData.email}</p>
//         <p>Phone: {userData.phone}</p>
//         <p>City: {userData.city}</p>

//         {/* Registrations Table */}
//         <h4 className="text-md mb-2 mt-4">Registrations</h4>
//         <table className="w-full border-collapse border border-gray-200 mb-4">
//           <thead>
//             <tr>
//               <th className="border border-gray-200 p-2">Name</th>
//               <th className="border border-gray-200 p-2">Email</th>
//               <th className="border border-gray-200 p-2">Phone</th>
//               <th className="border border-gray-200 p-2">City</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td className="border border-gray-200 p-2">{userData.firstname} {userData.lastname}</td>
//               <td className="border border-gray-200 p-2">{userData.email}</td>
//               <td className="border border-gray-200 p-2">{userData.phone}</td>
//               <td className="border border-gray-200 p-2">{userData.city}</td>
//             </tr>
//           </tbody>
//         </table>

//         {/* Users BMI Table */}
//         <h4 className="text-md mb-2">Users BMI</h4>
//         <table className="w-full border-collapse border border-gray-200 mb-4">
//           <thead>
//             <tr>
//               <th className="border border-gray-200 p-2">Age</th>
//               <th className="border border-gray-200 p-2">BMI</th>
//               <th className="border border-gray-200 p-2">Height</th>
//               <th className="border border-gray-200 p-2">Weight</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td className="border border-gray-200 p-2">{userData.userBmi.age || 'N/A'}</td>
//               <td className="border border-gray-200 p-2">{userData.userBmi.bmi || 'N/A'}</td>
//               <td className="border border-gray-200 p-2">{userData.userBmi.height || 'N/A'} cm</td>
//               <td className="border border-gray-200 p-2">{userData.userBmi.weight || 'N/A'} kg</td>
//             </tr>
//           </tbody>
//         </table>

//         {/* Health Assessments Table */}
//         <h4 className="text-md mb-2">Health Assessments</h4>
//         <table className="w-full border-collapse border border-gray-200">
//           <thead>
//             <tr>
//               <th className="border border-gray-200 p-2">Health Issues</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td className="border border-gray-200 p-2">
//                 <ul>
//                   {userData.healthAssessment.arthritis && <li>Arthritis</li>}
//                   {userData.healthAssessment.asthma && <li>Asthma</li>}
//                   {userData.healthAssessment.cancer && <li>Cancer</li>}
//                   {userData.healthAssessment.diabetes && <li>Diabetes</li>}
//                   {userData.healthAssessment.kidneyDisease && <li>Kidney Disease</li>}
//                   {userData.healthAssessment.obesity && <li>Obesity</li>}
//                   {userData.healthAssessment.tuberculosis && <li>Tuberculosis</li>}
//                   {/* Add more conditions as needed */}
//                 </ul>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </section>
//   );
// };

// export default UserHealthAssessments;

// import React, { useEffect, useState } from 'react';
// import { getAssessments, getUsers, getUsersBMI } from '../../../shared/firestore';

// interface UserHealthAssessmentsProps {
//   id: string;
// }

// const UserHealthAssessments: React.FC<UserHealthAssessmentsProps> = ({ id }) => {
//   const [userData, setUserData] = useState<any | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const registrations = await getUsers();
//         const healthAssessments = await getAssessments();
//         const usersBmi = await getUsersBMI();

//         const userRegistration = registrations.find(user => user.id === id);
//         const userHealthAssessment = healthAssessments.find(assessment => assessment.id === id) || {};
//         const userBmi = usersBmi.find(bmi => bmi.id === id) || {};

//         if (userRegistration) {
//           setUserData({
//             ...userRegistration,
//             healthAssessment: userHealthAssessment,
//             userBmi: userBmi,
//           });
//         } else {
//           setUserData(null);
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setError('Error fetching data');
//       }
//     };

//     fetchData();
//   }, [id]);

//   if (error) {
//     return <p className="text-red-500">{error}</p>;
//   }

//   if (!userData) {
//     return <p>No user data found for {id}.</p>;
//   }

//   return (
//     <section id="user-data" className="mb-8">
//       <h2 className="text-2xl mb-2 text-pink-500">User Data</h2>
//       <div className="mb-8">
//         <h3 className="text-lg mb-2">{userData.firstname} {userData.lastname}</h3>
//         <p>Email: {userData.email}</p>
//         <p>Phone: {userData.phone}</p>
//         <p>City: {userData.city}</p>

//         {/* Registrations Table */}
//         <h4 className="text-md mb-2 mt-4">Registrations</h4>
//         <table className="w-full border-collapse border border-gray-200 mb-4">
//           <thead>
//             <tr>
//               <th className="border border-gray-200 p-2">Name</th>
//               <th className="border border-gray-200 p-2">Email</th>
//               <th className="border border-gray-200 p-2">Phone</th>
//               <th className="border border-gray-200 p-2">City</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td className="border border-gray-200 p-2">{userData.firstname} {userData.lastname}</td>
//               <td className="border border-gray-200 p-2">{userData.email}</td>
//               <td className="border border-gray-200 p-2">{userData.phone}</td>
//               <td className="border border-gray-200 p-2">{userData.city}</td>
//             </tr>
//           </tbody>
//         </table>

//         {/* Users BMI Table */}
//         <h4 className="text-md mb-2">Users BMI</h4>
//         <table className="w-full border-collapse border border-gray-200 mb-4">
//           <thead>
//             <tr>
//               <th className="border border-gray-200 p-2">Age</th>
//               <th className="border border-gray-200 p-2">BMI</th>
//               <th className="border border-gray-200 p-2">Height</th>
//               <th className="border border-gray-200 p-2">Weight</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td className="border border-gray-200 p-2">{userData.userBmi.age || 'N/A'}</td>
//               <td className="border border-gray-200 p-2">{userData.userBmi.bmi || 'N/A'}</td>
//               <td className="border border-gray-200 p-2">{userData.userBmi.height || 'N/A'} cm</td>
//               <td className="border border-gray-200 p-2">{userData.userBmi.weight || 'N/A'} kg</td>
//             </tr>
//           </tbody>
//         </table>

//         {/* Health Assessments Table */}
//         <h4 className="text-md mb-2">Health Assessments</h4>
//         <table className="w-full border-collapse border border-gray-200">
//           <thead>
//             <tr>
//               <th className="border border-gray-200 p-2">Health Issues</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td className="border border-gray-200 p-2">
//                 <ul>
//                   {userData.healthAssessment.arthritis && <li>Arthritis</li>}
//                   {userData.healthAssessment.asthma && <li>Asthma</li>}
//                   {userData.healthAssessment.cancer && <li>Cancer</li>}
//                   {userData.healthAssessment.diabetes && <li>Diabetes</li>}
//                   {userData.healthAssessment.kidneyDisease && <li>Kidney Disease</li>}
//                   {userData.healthAssessment.obesity && <li>Obesity</li>}
//                   {userData.healthAssessment.tuberculosis && <li>Tuberculosis</li>}
//                 </ul>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </section>
//   );
// };

// export default UserHealthAssessments;

// import React, { useEffect, useState } from 'react';
// import { getAssessments, getUsers, getUsersBMI, updateUser, deleteUser } from '../../../shared/firestore';

// interface UserHealthAssessmentsProps {
//   id: string;
// }

// const UserHealthAssessments: React.FC<UserHealthAssessmentsProps> = ({ id }) => {
//   const [userData, setUserData] = useState<any | null>(null);
//   const [error, setError] = useState<string | null>(null);
//   const [editMode, setEditMode] = useState<boolean>(false);
//   const [formData, setFormData] = useState<any>({});
//   const [successMessage, setSuccessMessage] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const registrations = await getUsers();
//         const healthAssessments = await getAssessments();
//         const usersBmi = await getUsersBMI();

//         const userRegistration = registrations.find(user => user.id === id);
//         const userHealthAssessment = healthAssessments.find(assessment => assessment.id === id) || {};
//         const userBmi = usersBmi.find(bmi => bmi.id === id) || {};

//         if (userRegistration) {
//           setUserData({
//             ...userRegistration,
//             healthAssessment: userHealthAssessment,
//             userBmi: userBmi,
//           });
//           setFormData({
//             ...userRegistration,
//             ...userHealthAssessment,
//             ...userBmi,
//           });
//         } else {
//           setUserData(null);
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setError('Error fetching data');
//       }
//     };

//     fetchData();
//   }, [id]);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
//   };

//   const handleUpdate = async () => {
//     try {
//       await updateUser('registrations', id, {
//         firstname: formData.firstname,
//         lastname: formData.lastname,
//         email: formData.email,
//         phone: formData.phone,
//         city: formData.city,
//       });
//       await updateUser('users_bmi', id, {
//         age: formData.age,
//         bmi: formData.bmi,
//         height: formData.height,
//         weight: formData.weight,
//       });
//       await updateUser('health_assessments', id, {
//         arthritis: formData.arthritis,
//         asthma: formData.asthma,
//         cancer: formData.cancer,
//         diabetes: formData.diabetes,
//         kidneyDisease: formData.kidneyDisease,
//         obesity: formData.obesity,
//         tuberculosis: formData.tuberculosis,
//       });
//       setEditMode(false);
//       setUserData(formData);
//       setSuccessMessage('User data updated successfully!');
//     } catch (error) {
//       console.error('Error updating user:', error);
//       setError('Error updating user');
//     }
//   };

//   const handleDelete = async () => {
//     try {
//       await deleteUser('registrations', id);
//       await deleteUser('users_bmi', id);
//       await deleteUser('health_assessments', id);
//       setUserData(null);
//       setSuccessMessage('User data deleted successfully!');
//     } catch (error) {
//       console.error('Error deleting user:', error);
//       setError('Error deleting user');
//     }
//   };

//   if (error) {
//     return <p className="text-red-500">{error}</p>;
//   }

//   if (!userData) {
//     return <p>No user data found for {id}.</p>;
//   }

//   return (
//     <section id="user-data" className="mb-8 p-4 border border-gray-200 rounded-lg shadow-md">
//       <h2 className="text-2xl mb-4 text-pink-500">User Data</h2>
//       {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
//       <div className="mb-8">
//         {editMode ? (
//           <form className="space-y-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">First Name</label>
//                 <input
//                   type="text"
//                   name="firstname"
//                   value={formData.firstname}
//                   onChange={handleInputChange}
//                   className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//                   placeholder="First Name"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Last Name</label>
//                 <input
//                   type="text"
//                   name="lastname"
//                   value={formData.lastname}
//                   onChange={handleInputChange}
//                   className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//                   placeholder="Last Name"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//                   placeholder="Email"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Phone</label>
//                 <input
//                   type="text"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleInputChange}
//                   className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//                   placeholder="Phone"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">City</label>
//                 <input
//                   type="text"
//                   name="city"
//                   value={formData.city}
//                   onChange={handleInputChange}
//                   className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//                   placeholder="City"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Age</label>
//                 <input
//                   type="number"
//                   name="age"
//                   value={formData.age}
//                   onChange={handleInputChange}
//                   className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//                   placeholder="Age"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">BMI</label>
//                 <input
//                   type="number"
//                   name="bmi"
//                   value={formData.bmi}
//                   onChange={handleInputChange}
//                   className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//                   placeholder="BMI"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Height (cm)</label>
//                 <input
//                   type="number"
//                   name="height"
//                   value={formData.height}
//                   onChange={handleInputChange}
//                   className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//                   placeholder="Height (cm)"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Weight (kg)</label>
//                 <input
//                   type="number"
//                   name="weight"
//                   value={formData.weight}
//                   onChange={handleInputChange}
//                   className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//                   placeholder="Weight (kg)"
//                 />
//               </div>
//             </div>
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   name="arthritis"
//                   checked={formData.arthritis}
//                   onChange={handleInputChange}
//                   className="form-checkbox"
//                 />
//                 <span className="ml-2">Arthritis</span>
//               </label>
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   name="asthma"
//                   checked={formData.asthma}
//                   onChange={handleInputChange}
//                   className="form-checkbox"
//                 />
//                 <span className="ml-2">Asthma</span>
//               </label>
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   name="cancer"
//                   checked={formData.cancer}
//                   onChange={handleInputChange}
//                   className="form-checkbox"
//                 />
//                 <span className="ml-2">Cancer</span>
//               </label>
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   name="diabetes"
//                   checked={formData.diabetes}
//                   onChange={handleInputChange}
//                   className="form-checkbox"
//                 />
//                 <span className="ml-2">Diabetes</span>
//               </label>
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   name="kidneyDisease"
//                   checked={formData.kidneyDisease}
//                   onChange={handleInputChange}
//                   className="form-checkbox"
//                 />
//                 <span className="ml-2">Kidney Disease</span>
//               </label>
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   name="obesity"
//                   checked={formData.obesity}
//                   onChange={handleInputChange}
//                   className="form-checkbox"
//                 />
//                 <span className="ml-2">Obesity</span>
//               </label>
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   name="tuberculosis"
//                   checked={formData.tuberculosis}
//                   onChange={handleInputChange}
//                   className="form-checkbox"
//                 />
//                 <span className="ml-2">Tuberculosis</span>
//               </label>
//             </div>
//             <div className="flex justify-end space-x-4 mt-4">
//               <button
//                 type="button"
//                 onClick={handleUpdate}
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//               >
//                 Save
//               </button>
//               <button
//                 type="button"
//                 onClick={() => setEditMode(false)}
//                 className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
//               >
//                 Cancel
//               </button>
//             </div>
//           </form>
//         ) : (
//           <div>
//             <table className="min-w-full bg-white border border-gray-200">
//               <thead>
//                 <tr>
//                   <th className="py-2 px-4 border-b">Field</th>
//                   <th className="py-2 px-4 border-b">Value</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td className="py-2 px-4 border-b">First Name</td>
//                   <td className="py-2 px-4 border-b">{userData.firstname}</td>
//                 </tr>
//                 <tr>
//                   <td className="py-2 px-4 border-b">Last Name</td>
//                   <td className="py-2 px-4 border-b">{userData.lastname}</td>
//                 </tr>
//                 <tr>
//                   <td className="py-2 px-4 border-b">Email</td>
//                   <td className="py-2 px-4 border-b">{userData.email}</td>
//                 </tr>
//                 <tr>
//                   <td className="py-2 px-4 border-b">Phone</td>
//                   <td className="py-2 px-4 border-b">{userData.phone}</td>
//                 </tr>
//                 <tr>
//                   <td className="py-2 px-4 border-b">City</td>
//                   <td className="py-2 px-4 border-b">{userData.city}</td>
//                 </tr>
//                 <tr>
//                   <td className="py-2 px-4 border-b">Age</td>
//                   <td className="py-2 px-4 border-b">{userData.userBmi.age}</td>
//                 </tr>
//                 <tr>
//                   <td className="py-2 px-4 border-b">BMI</td>
//                   <td className="py-2 px-4 border-b">{userData.userBmi.bmi}</td>
//                 </tr>
//                 <tr>
//                   <td className="py-2 px-4 border-b">Height (cm)</td>
//                   <td className="py-2 px-4 border-b">{userData.userBmi.height}</td>
//                 </tr>
//                 <tr>
//                   <td className="py-2 px-4 border-b">Weight (kg)</td>
//                   <td className="py-2 px-4 border-b">{userData.userBmi.weight}</td>
//                 </tr>
//                 <tr>
//                   <td className="py-2 px-4 border-b">Health Issues</td>
//                   <td className="py-2 px-4 border-b">
//                     <ul className="list-disc pl-5">
//                       {userData.healthAssessment.arthritis && <li>Arthritis</li>}
//                       {userData.healthAssessment.asthma && <li>Asthma</li>}
//                       {userData.healthAssessment.cancer && <li>Cancer</li>}
//                       {userData.healthAssessment.diabetes && <li>Diabetes</li>}
//                       {userData.healthAssessment.kidneyDisease && <li>Kidney Disease</li>}
//                       {userData.healthAssessment.obesity && <li>Obesity</li>}
//                       {userData.healthAssessment.tuberculosis && <li>Tuberculosis</li>}
//                     </ul>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//             <div className="flex justify-end space-x-4 mt-4">
//               <button
//                 onClick={() => setEditMode(true)}
//                 className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={handleDelete}
//                 className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default UserHealthAssessments;

// import React, { useEffect, useState } from 'react';
// import { getAssessments, getUsers, getUsersBMI, updateUser, deleteUser } from '../../../shared/firestore';

// interface UserHealthAssessmentsProps {
//   id: string;
// }

// const UserHealthAssessments: React.FC<UserHealthAssessmentsProps> = ({ id }) => {
//   const [userData, setUserData] = useState<any | null>(null);
//   const [error, setError] = useState<string | null>(null);
//   const [editMode, setEditMode] = useState<boolean>(false);
//   const [formData, setFormData] = useState<any>({});
//   const [successMessage, setSuccessMessage] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [registrations, healthAssessments, usersBmi] = await Promise.all([
//           getUsers(),
//           getAssessments(),
//           getUsersBMI()
//         ]);

//         const userRegistration = registrations.find(user => user.id === id);
//         const userHealthAssessment = healthAssessments.find(assessment => assessment.id === id) || {};
//         const userBmi = usersBmi.find(bmi => bmi.id === id) || {};

//         if (userRegistration) {
//           setUserData({
//             ...userRegistration,
//             healthAssessment: userHealthAssessment,
//             userBmi: userBmi,
//           });
//           setFormData({
//             ...userRegistration,
//             ...userHealthAssessment,
//             ...userBmi,
//           });
//         } else {
//           setUserData(null);
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setError('Error fetching data');
//       }
//     };

//     fetchData();
//   }, [id]);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
//   };

//   const handleUpdate = async () => {
//     try {
//       await updateUser('registrations', id, {
//         firstname: formData.firstname,
//         lastname: formData.lastname,
//         email: formData.email,
//         phone: formData.phone,
//         city: formData.city,
//       });
//       await updateUser('users_bmi', id, {
//         age: formData.age,
//         bmi: formData.bmi,
//         height: formData.height,
//         weight: formData.weight,
//       });
//       await updateUser('health_assessments', id, {
//         arthritis: formData.arthritis,
//         asthma: formData.asthma,
//         cancer: formData.cancer,
//         diabetes: formData.diabetes,
//         kidneyDisease: formData.kidneyDisease,
//         obesity: formData.obesity,
//         tuberculosis: formData.tuberculosis,
//       });
//       setEditMode(false);
//       setUserData(formData);
//       setSuccessMessage('User data updated successfully!');
//     } catch (error) {
//       console.error('Error updating user:', error);
//       setError('Error updating user');
//     }
//   };

//   const handleDelete = async () => {
//     try {
//       await deleteUser('registrations', id);
//       await deleteUser('users_bmi', id);
//       await deleteUser('health_assessments', id);
//       setUserData(null);
//       setSuccessMessage('User data deleted successfully!');
//     } catch (error) {
//       console.error('Error deleting user:', error);
//       setError('Error deleting user');
//     }
//   };

//   if (error) {
//     return <p className="text-red-500">{error}</p>;
//   }

//   if (!userData) {
//     return <p>No user data found for {id}.</p>;
//   }

//   return (
//     <section id="user-data" className="mb-8 p-4 border border-gray-200 rounded-lg shadow-md">
//       <h2 className="text-2xl mb-4 text-pink-500">User Data</h2>
//       {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
//       <div className="mb-8">
//         {editMode ? (
//           <form className="space-y-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">First Name</label>
//                 <input
//                   type="text"
//                   name="firstname"
//                   value={formData.firstname}
//                   onChange={handleInputChange}
//                   className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//                   placeholder="First Name"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Last Name</label>
//                 <input
//                   type="text"
//                   name="lastname"
//                   value={formData.lastname}
//                   onChange={handleInputChange}
//                   className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//                   placeholder="Last Name"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//                   placeholder="Email"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Phone</label>
//                 <input
//                   type="text"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleInputChange}
//                   className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//                   placeholder="Phone"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">City</label>
//                 <input
//                   type="text"
//                   name="city"
//                   value={formData.city}
//                   onChange={handleInputChange}
//                   className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//                   placeholder="City"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Age</label>
//                 <input
//                   type="number"
//                   name="age"
//                   value={formData.age}
//                   onChange={handleInputChange}
//                   className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//                   placeholder="Age"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">BMI</label>
//                 <input
//                   type="number"
//                   name="bmi"
//                   value={formData.bmi}
//                   onChange={handleInputChange}
//                   className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//                   placeholder="BMI"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Height (cm)</label>
//                 <input
//                   type="number"
//                   name="height"
//                   value={formData.height}
//                   onChange={handleInputChange}
//                   className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//                   placeholder="Height (cm)"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Weight (kg)</label>
//                 <input
//                   type="number"
//                   name="weight"
//                   value={formData.weight}
//                   onChange={handleInputChange}
//                   className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//                   placeholder="Weight (kg)"
//                 />
//               </div>
//             </div>
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   name="arthritis"
//                   checked={formData.arthritis}
//                   onChange={handleInputChange}
//                   className="form-checkbox"
//                 />
//                 <span className="ml-2">Arthritis</span>
//               </label>
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   name="asthma"
//                   checked={formData.asthma}
//                   onChange={handleInputChange}
//                   className="form-checkbox"
//                 />
//                 <span className="ml-2">Asthma</span>
//               </label>
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   name="cancer"
//                   checked={formData.cancer}
//                   onChange={handleInputChange}
//                   className="form-checkbox"
//                 />
//                 <span className="ml-2">Cancer</span>
//               </label>
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   name="diabetes"
//                   checked={formData.diabetes}
//                   onChange={handleInputChange}
//                   className="form-checkbox"
//                 />
//                 <span className="ml-2">Diabetes</span>
//               </label>
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   name="kidneyDisease"
//                   checked={formData.kidneyDisease}
//                   onChange={handleInputChange}
//                   className="form-checkbox"
//                 />
//                 <span className="ml-2">Kidney Disease</span>
//               </label>
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   name="obesity"
//                   checked={formData.obesity}
//                   onChange={handleInputChange}
//                   className="form-checkbox"
//                 />
//                 <span className="ml-2">Obesity</span>
//               </label>
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   name="tuberculosis"
//                   checked={formData.tuberculosis}
//                   onChange={handleInputChange}
//                   className="form-checkbox"
//                 />
//                 <span className="ml-2">Tuberculosis</span>
//               </label>
//             </div>
//             <div className="flex justify-end space-x-4 mt-4">
//               <button
//                 type="button"
//                 onClick={handleUpdate}
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//               >
//                 Save
//               </button>
//               <button
//                 type="button"
//                 onClick={() => setEditMode(false)}
//                 className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
//               >
//                 Cancel
//               </button>
//             </div>
//           </form>
//         ) : (
//           <div>
//             <table className="min-w-full bg-white border border-gray-200">
//               <thead>
//                 <tr>
//                   <th className="py-2 px-4 border-b">Field</th>
//                   <th className="py-2 px-4 border-b">Value</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td className="py-2 px-4 border-b">First Name</td>
//                   <td className="py-2 px-4 border-b">{userData.firstname}</td>
//                 </tr>
//                 <tr>
//                   <td className="py-2 px-4 border-b">Last Name</td>
//                   <td className="py-2 px-4 border-b">{userData.lastname}</td>
//                 </tr>
//                 <tr>
//                   <td className="py-2 px-4 border-b">Email</td>
//                   <td className="py-2 px-4 border-b">{userData.email}</td>
//                 </tr>
//                 <tr>
//                   <td className="py-2 px-4 border-b">Phone</td>
//                   <td className="py-2 px-4 border-b">{userData.phone}</td>
//                 </tr>
//                 <tr>
//                   <td className="py-2 px-4 border-b">City</td>
//                   <td className="py-2 px-4 border-b">{userData.city}</td>
//                 </tr>
//                 <tr>
//                   <td className="py-2 px-4 border-b">Age</td>
//                   <td className="py-2 px-4 border-b">{userData.userBmi.age}</td>
//                 </tr>
//                 <tr>
//                   <td className="py-2 px-4 border-b">BMI</td>
//                   <td className="py-2 px-4 border-b">{userData.userBmi.bmi}</td>
//                 </tr>
//                 <tr>
//                   <td className="py-2 px-4 border-b">Height (cm)</td>
//                   <td className="py-2 px-4 border-b">{userData.userBmi.height}</td>
//                 </tr>
//                 <tr>
//                   <td className="py-2 px-4 border-b">Weight (kg)</td>
//                   <td className="py-2 px-4 border-b">{userData.userBmi.weight}</td>
//                 </tr>
//                 <tr>
//                   <td className="py-2 px-4 border-b">Health Issues</td>
//                   <td className="py-2 px-4 border-b">
//                     <ul className="list-disc pl-5">
//                       {userData.healthAssessment.arthritis && <li>Arthritis</li>}
//                       {userData.healthAssessment.asthma && <li>Asthma</li>}
//                       {userData.healthAssessment.cancer && <li>Cancer</li>}
//                       {userData.healthAssessment.diabetes && <li>Diabetes</li>}
//                       {userData.healthAssessment.kidneyDisease && <li>Kidney Disease</li>}
//                       {userData.healthAssessment.obesity && <li>Obesity</li>}
//                       {userData.healthAssessment.tuberculosis && <li>Tuberculosis</li>}
//                     </ul>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//             <div className="flex justify-end space-x-4 mt-4">
//               <button
//                 onClick={() => setEditMode(true)}
//                 className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={handleDelete}
//                 className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default UserHealthAssessments;

// import React, { useEffect, useState } from 'react';
// import { getAssessments, getUsers, getUsersBMI, updateUser, deleteUser, createUser } from '../../../shared/firestore';

// interface UserHealthAssessmentsProps {
//   id: string;
// }

// const UserHealthAssessments: React.FC<UserHealthAssessmentsProps> = ({ id }) => {
//   const [userData, setUserData] = useState<any | null>(null);
//   const [error, setError] = useState<string | null>(null);
//   const [editMode, setEditMode] = useState<boolean>(false);
//   const [formData, setFormData] = useState<any>({
//     firstname: '',
//     lastname: '',
//     email: '',
//     phone: '',
//     city: '',
//     age: 0,
//     bmi: 0,
//     height: 0,
//     weight: 0,
//     arthritis: false,
//     asthma: false,
//     breastfeeding: false,
//     cancer: false,
//     chronicDisease: false,
//     decreasedAppetite: false,
//     diabetes: false,
//     difficultyBowel: false,
//     drinkingAlcohol: false,
//     familyHistory: {
//       father: { age: '', alive: false, healthProblems: '', inGoodHealth: false },
//       mother: { age: '', alive: false, healthProblems: '', inGoodHealth: false },
//       siblings: [{ age: '', alive: false, healthProblems: '', inGoodHealth: false }],
//     },
//     fattyLiver: false,
//     highBloodPressure: false,
//     kidneyDisease: false,
//     lightlyActive: false,
//     moderatelyActive: false,
//     obesity: false,
//     otherMedicalConditions: null,
//     pregnant: false,
//     sedentary: false,
//     smoking: false,
//     takingMedications: false,
//     tuberculosis: false,
//     veryActive: false,
//     weightLoss: false,
//   });
//   const [successMessage, setSuccessMessage] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [registrations, healthAssessments, usersBmi] = await Promise.all([
//           getUsers(),
//           getAssessments(),
//           getUsersBMI(),
//         ]);

//         const userRegistration = registrations.find(user => user.id === id);
//         const userHealthAssessment = healthAssessments.find(assessment => assessment.id === id) || {};
//         const userBmi = usersBmi.find(bmi => bmi.userId === id) || {};

//         if (userRegistration) {
//           setUserData({
//             ...userRegistration,
//             healthAssessment: userHealthAssessment,
//             userBmi: userBmi,
//           });
//           setFormData({
//             ...userRegistration,
//             ...userHealthAssessment,
//             ...userBmi,
//           });
//         } else {
//           setUserData(null);
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setError('Error fetching data');
//       }
//     };

//     fetchData();
//   }, [id]);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
//   };

//   const handleUpdate = async () => {
//   try {
//     // Ensure BMI data exists and update it
//     if (userData?.userBmi) {
//       console.log('Updating existing BMI document');
//       await updateUser('users_bmi', id, {
//         age: formData.age,
//         bmi: formData.bmi,
//         height: formData.height,
//         weight: formData.weight,
//       });
//     } else {
//       console.warn('BMI data does not exist for this user');
//     }

//     // Ensure registration data exists and update it
//     if (userData) {
//       console.log('Updating registration data');
//       await updateUser('registrations', id, {
//         firstname: formData.firstname,
//         lastname: formData.lastname,
//         email: formData.email,
//         phone: formData.phone,
//         city: formData.city,
//       });
//     } else {
//       console.warn('Registration data does not exist for this user');
//     }

//     // Ensure health assessment data exists and update it
//     if (userData?.healthAssessment) {
//       console.log('Updating existing health assessment document');
//       await updateUser('health_assessments', id, {
//         arthritis: formData.arthritis,
//         asthma: formData.asthma,
//         breastfeeding: formData.breastfeeding,
//         cancer: formData.cancer,
//         chronicDisease: formData.chronicDisease,
//         decreasedAppetite: formData.decreasedAppetite,
//         diabetes: formData.diabetes,
//         difficultyBowel: formData.difficultyBowel,
//         drinkingAlcohol: formData.drinkingAlcohol,
//         familyHistory: formData.familyHistory,
//         fattyLiver: formData.fattyLiver,
//         highBloodPressure: formData.highBloodPressure,
//         kidneyDisease: formData.kidneyDisease,
//         lightlyActive: formData.lightlyActive,
//         moderatelyActive: formData.moderatelyActive,
//         obesity: formData.obesity,
//         otherMedicalConditions: formData.otherMedicalConditions,
//         pregnant: formData.pregnant,
//         sedentary: formData.sedentary,
//         smoking: formData.smoking,
//         takingMedications: formData.takingMedications,
//         tuberculosis: formData.tuberculosis,
//         veryActive: formData.veryActive,
//         weightLoss: formData.weightLoss,
//       });
//     } else {
//       console.warn('Health assessment data does not exist for this user');
//     }

//     setEditMode(false);
//     setUserData(formData);
//     setSuccessMessage('User data updated successfully!');
//   } catch (error) {
//     console.error('Error updating user:', error);
//     setError('Error updating user');
//   }
// };

// const handleDelete = async () => {
//   try {
//     console.log('Deleting user data');
//     await deleteUser('registrations', id);
//     await deleteUser('users_bmi', id);
//     await deleteUser('health_assessments', id);
//     setUserData(null);
//     setSuccessMessage('User data deleted successfully!');
//   } catch (error) {
//     console.error('Error deleting user:', error);
//     setError('Error deleting user');
//   }
// };

//   if (error) {
//     return <p className="text-red-500">{error}</p>;
//   }

//   if (!userData) {
//     return <p>No user data found for {id}.</p>;
//   }

//   return (
//     <section id="user-data" className="mb-8 p-4 border border-gray-200 rounded-lg shadow-md">
//       <h2 className="text-2xl mb-4 text-pink-500">User Data</h2>
//       {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
//       <div className="mb-8">
//         {editMode ? (
//           <form className="space-y-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {['firstname', 'lastname', 'email', 'phone', 'city'].map(field => (
//                 <div key={field}>
//                   <label className="block text-sm font-medium text-gray-700">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
//                   <input
//                     type="text"
//                     name={field}
//                     value={formData[field]}
//                     onChange={handleInputChange}
//                     className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//                     placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
//                   />
//                 </div>
//               ))}
//               {['age', 'bmi', 'height', 'weight'].map(field => (
//                 <div key={field}>
//                   <label className="block text-sm font-medium text-gray-700">{field.charAt(0).toUpperCase() + field.slice(1)} {field === 'height' ? '(cm)' : field === 'weight' ? '(kg)' : ''}</label>
//                   <input
//                     type="number"
//                     name={field}
//                     value={formData[field]}
//                     onChange={handleInputChange}
//                     className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
//                     placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
//                   />
//                 </div>
//               ))}
//             </div>
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//               {['arthritis', 'asthma', 'breastfeeding', 'cancer', 'chronicDisease', 'decreasedAppetite', 'diabetes', 'difficultyBowel', 'drinkingAlcohol', 'fattyLiver', 'highBloodPressure', 'kidneyDisease', 'lightlyActive', 'moderatelyActive', 'obesity', 'pregnant', 'sedentary', 'smoking', 'takingMedications', 'tuberculosis', 'veryActive', 'weightLoss'].map(field => (
//                 <label key={field} className="flex items-center">
//                   <input
//                     type="checkbox"
//                     name={field}
//                     checked={formData[field]}
//                     onChange={handleInputChange}
//                     className="form-checkbox"
//                   />
//                   <span className="ml-2">{field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' \$1')}</span>
//                 </label>
//               ))}
//             </div>
//             <div className="flex justify-end space-x-4 mt-4">
//               <button
//                 type="button"
//                 onClick={handleUpdate}
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//               >
//                 Save
//               </button>
//               <button
//                 type="button"
//                 onClick={() => setEditMode(false)}
//                 className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
//               >
//                 Cancel
//               </button>
//             </div>
//           </form>
//         ) : (
//           <div>
//             <table className="min-w-full bg-white border border-gray-200">
//               <thead>
//                 <tr>
//                   <th className="py-2 px-4 border-b">Field</th>
//                   <th className="py-2 px-4 border-b">Value</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {['firstname', 'lastname', 'email', 'phone', 'city'].map(field => (
//                   <tr key={field}>
//                     <td className="py-2 px-4 border-b">{field.charAt(0).toUpperCase() + field.slice(1)}</td>
//                     <td className="py-2 px-4 border-b">{userData[field]}</td>
//                   </tr>
//                 ))}
//                 {['age', 'bmi', 'height', 'weight'].map(field => (
//                   <tr key={field}>
//                     <td className="py-2 px-4 border-b">{field.charAt(0).toUpperCase() + field.slice(1)}</td>
//                     <td className="py-2 px-4 border-b">{userData.userBmi[field]}</td>
//                   </tr>
//                 ))}
//                 <tr>
//                   <td className="py-2 px-4 border-b">Health Issues</td>
//                   <td className="py-2 px-4 border-b">
//                     <ul className="list-disc pl-5">
//                       {Object.keys(userData.healthAssessment).map(key => (
//                         userData.healthAssessment[key] && <li key={key}>{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' \$1')}</li>
//                       ))}
//                     </ul>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//             <div className="flex justify-end space-x-4 mt-4">
//               <button
//                 onClick={() => setEditMode(true)}
//                 className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={handleDelete}
//                 className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default UserHealthAssessments;

import React, { useEffect, useState } from 'react';
import { getAssessments, getUsers, getUsersBMI, updateUser, deleteUser } from '../../../shared/firestore';

interface UserHealthAssessmentsProps {
  id: string;
}

const UserHealthAssessments: React.FC<UserHealthAssessmentsProps> = ({ id }) => {
  const [registrationData, setRegistrationData] = useState<any | null>(null);
  const [bmiData, setBmiData] = useState<any | null>(null);
  const [healthAssessmentData, setHealthAssessmentData] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [formData, setFormData] = useState<any>({});
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [registrations, healthAssessments, usersBmi] = await Promise.all([
          getUsers(),
          getAssessments(),
          getUsersBMI(),
        ]);

        const userRegistration = registrations.find(user => user.id === id) || {};
        const userHealthAssessment = healthAssessments.find(assessment => assessment.id === id) || {};
        const userBmi = usersBmi.find(bmi => bmi.id === id) || {};

        console.log('User Registration:', userRegistration);
        console.log('User Health Assessment:', userHealthAssessment);
        console.log('User BMI:', userBmi);

        setRegistrationData(userRegistration);
        setHealthAssessmentData(userHealthAssessment);
        setBmiData(userBmi);
        setFormData({ ...userRegistration, ...userBmi, healthAssessment: userHealthAssessment });
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data');
      }
    };

    fetchData();
  }, [id]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleUpdate = async () => {
    try {
      if (registrationData) {
        await updateUser('registrations', id, {
          firstname: formData.firstname,
          lastname: formData.lastname,
          email: formData.email,
          phone: formData.phone,
          city: formData.city,
        });
      }

      if (bmiData) {
        await updateUser('users_bmi', id, {
          age: formData.age,
          bmi: formData.bmi,
          height: formData.height,
          weight: formData.weight,
        });
      }

      if (healthAssessmentData) {
        await updateUser('health_assessments', id, formData.healthAssessment);
      }

      setEditMode(false);
      setSuccessMessage('User data updated successfully!');
    } catch (error) {
      console.error('Error updating user:', error);
      setError('Error updating user');
    }
  };

  const handleDelete = async () => {
    try {
      if (registrationData) await deleteUser('registrations', id);
      if (bmiData) await deleteUser('users_bmi', id);
      if (healthAssessmentData) await deleteUser('health_assessments', id);

      setRegistrationData(null);
      setBmiData(null);
      setHealthAssessmentData(null);
      setSuccessMessage('User data deleted successfully!');
    } catch (error) {
      console.error('Error deleting user:', error);
      setError('Error deleting user');
    }
  };

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!registrationData && !bmiData && !healthAssessmentData) {
    return <p>No user data found for {id}.</p>;
  }

  return (
    <section id="user-data" className="mb-8 p-4 border border-gray-200 rounded-lg shadow-md">
      <h2 className="text-2xl mb-4 text-pink-500">User Data</h2>
      {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
      <div className="mb-8">
        {editMode ? (
          <form className="space-y-4">
            <h3 className="text-xl mb-2">Edit Registration Data</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['firstname', 'lastname', 'email', 'phone', 'city'].map(field => (
                <div key={field}>
                  <label className="block text-sm font-medium text-gray-700">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                  <input
                    type="text"
                    name={field}
                    value={formData[field] || ''}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  />
                </div>
              ))}
            </div>

            <h3 className="text-xl mb-2">Edit BMI Data</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['age', 'bmi', 'height', 'weight'].map(field => (
                <div key={field}>
                  <label className="block text-sm font-medium text-gray-700">{field.charAt(0).toUpperCase() + field.slice(1)} {field === 'height' ? '(cm)' : field === 'weight' ? '(kg)' : ''}</label>
                  <input
                    type="number"
                    name={field}
                    value={formData[field] || 0}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  />
                </div>
              ))}
            </div>

            <h3 className="text-xl mb-2">Edit Health Assessment Data</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.keys(formData.healthAssessment || {}).map(field => (
                <label key={field} className="flex items-center">
                  <input
                    type="checkbox"
                    name={field}
                    checked={formData.healthAssessment[field] || false}
                    onChange={handleInputChange}
                    className="form-checkbox"
                  />
                  <span className="ml-2">{field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' \\\$1')}</span>
                </label>
              ))}
            </div>

            <div className="flex justify-end space-x-4 mt-4">
              <button
                type="button"
                onClick={handleUpdate}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Save
              </button>
              <button
                type="button"
                onClick={() => setEditMode(false)}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <div>
            <h3 className="text-xl mb-2">Registration Data</h3>
            <table className="min-w-full bg-white border border-gray-200 mb-4">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Field</th>
                  <th className="py-2 px-4 border-b">Value</th>
                </tr>
              </thead>
              <tbody>
                {registrationData && Object.keys(registrationData).map(field => (
                  <tr key={field}>
                    <td className="py-2 px-4 border-b">{field.charAt(0).toUpperCase() + field.slice(1)}</td>
                    <td className="py-2 px-4 border-b">{registrationData[field] || 'N/A'}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 className="text-xl mb-2">BMI Data</h3>
            <table className="min-w-full bg-white border border-gray-200 mb-4">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Field</th>
                  <th className="py-2 px-4 border-b">Value</th>
                </tr>
              </thead>
              <tbody>
                {bmiData && Object.keys(bmiData).map(field => (
                  <tr key={field}>
                    <td className="py-2 px-4 border-b">{field.charAt(0).toUpperCase() + field.slice(1)}</td>
                    <td className="py-2 px-4 border-b">{bmiData[field] || 'N/A'}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 className="text-xl mb-2">Health Assessment Data</h3>
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Field</th>
                  <th className="py-2 px-4 border-b">Value</th>
                </tr>
              </thead>
              <tbody>
                {healthAssessmentData && Object.keys(healthAssessmentData).map(field => (
                  <tr key={field}>
                    <td className="py-2 px-4 border-b">{field.charAt(0).toUpperCase() + field.slice(1)}</td>
                    <td className="py-2 px-4 border-b">{healthAssessmentData[field] || 'N/A'}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex justify-end space-x-4 mt-4">
              <button
                onClick={() => setEditMode(true)}
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
              >
                Edit
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default UserHealthAssessments;