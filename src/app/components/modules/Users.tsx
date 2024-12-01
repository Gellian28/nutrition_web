import React, { useEffect, useState } from 'react';
import { getUsers } from '../../../shared/firestore';
import UserHealthAssessments from '../modules/UserHealthAssessments';
import MealPlanForm from './MealPlans';

const Users: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [selectedUser, setSelectedUser] = useState<any | null>(null);
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [showMealPlanModal, setShowMealPlanModal] = useState(false); // state to show/hide modal
  const [isLoading, setIsLoading] = useState<boolean>(false); // state to handle loading

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true); // Start loading
      try {
        const result = await getUsers();
        setUsers(result);
      } catch (error) {
        console.error('Error fetching users:', error);
        setError('Error fetching users');
      } finally {
        setIsLoading(false); // End loading
      }
    };
    fetchUsers();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner-border text-pink-500" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500 text-center">{error}</p>;
  }

  return (
    <section id="users" className="mb-8 p-4 w-auto">
      <h2 className="text-2xl mb-4 text-pink-500 text-center">Patient Profile</h2>

      {showUserDetails ? (
        <div className="p-6 border border-gray-200 rounded-lg shadow-md mx-auto bg-white">
          <button
            className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded mb-4 block w-full"
            onClick={() => setShowUserDetails(false)}
          >
            Back to Users
          </button>
          <h3 className="text-lg font-bold mb-2">{selectedUser.firstname} {selectedUser.lastname}</h3>
          <p className="text-sm mb-1">Email: {selectedUser.email}</p>

          {/* Meal Plan Button */}
          <button
            className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded mb-4 block w-full"
            onClick={() => setShowMealPlanModal(true)} // Show modal on click
          >
            Show Meal Plan
          </button>

          {/* Show Meal Plan Modal */}
         {showMealPlanModal && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50 w-auto">
            <div className="bg-white p-4 rounded-lg shadow-lg sm:w-10/12 max-w-full h-45 min-h-[30vh] sm:min-h-[40vh] md:min-h-[50vh] lg:min-h-[60vh] relative">
              
              {/* Close Button */}
              <button
                className="absolute top-2 right-2 text-gray-500"
                onClick={() => setShowMealPlanModal(false)} // Close modal
              >
                &times;
              </button>

              {/* Modal Content Layout: Vertical on phone, Horizontal on larger screens */}
              <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                {/* Meal Plan Form Section */}
                <MealPlanForm />
              </div>
            </div>
          </div>
        )}
          <UserHealthAssessments id={selectedUser.id} />
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-6">
          {users.map((user: any) => (
            <div
              key={user.id}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 border border-gray-200 hover:bg-pink-500 rounded-lg shadow-md cursor-pointer transform hover:scale-105 transition duration-300"
              onClick={() => {
                setSelectedUser(user);
                setShowUserDetails(true);
              }}
            >
              <h3 className="text-lg font-bold mb-2">{user.firstname} {user.lastname}</h3>
              <p className="text-sm">Email: {user.email}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Users;
