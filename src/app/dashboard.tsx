// import Profile from "../app/user/profile";

// function Dashboard() {
//   return (
//     <Profile />
//   )  
// }

// export default Dashboard

import React, { useState } from 'react';
import Profile from "../app/user/profile";
import Users from './components/modules/Users';
import Dashboard from './components/modules/Dashboard';
import Reports from './components/modules/Reports';
import { Button } from '../components/ui/button';
import MealPlanForm from './components/modules/MealPlans';
//import MealPlanTable from './MealPlanTable';

const AdminDashboard: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState('dashboard'); //useState<string>('');//useState('users');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const renderSelectedPage = () => {
    switch (selectedPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'users':
        return <Users />;
      case 'reports':
        return <Reports />;
      case 'meal-plan':
        return <MealPlanForm />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-pink-300 to-pink-200">
      <header className="bg-pink-500 text-slate-50 p-4 flex justify-between items-center">
        <h1 className="text-xl">Admin Dashboard</h1>
        <div className="flex items-center">
          <Button
            className="text-2xl md:hidden mr-4 text-slate-50"
            onClick={toggleMenu}
          >
            ☰
          </Button>
          <Profile />
        </div>
      </header>
      <div className="flex flex-1">
        <nav
          className={`bg-slate-100 p-4 w-64 transform ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0 transition-transform duration-300 ease-in-out fixed md:relative h-full md:h-auto`}
        >
          <ul className="space-y-4">
             <li>
              <Button
                className="block text-pink-500"
                onClick={() => setSelectedPage('dashboard')}
              >
                Dashboard
              </Button>
            </li>
            <li>
              <Button
                className="block text-pink-500"
                onClick={() => setSelectedPage('users')}
              >
                Patient Profile
              </Button>
            </li>
            <li>
              <Button
                className="block text-pink-500"
                onClick={() => setSelectedPage('reports')}
              >
                Reports
              </Button>
            </li>
            <li>
              <Button
                className="block text-pink-500"
                onClick={() => setSelectedPage('meal-plan')}
              >
                Meal Plans
              </Button>
            </li>
          </ul>
        </nav>
        <main className="flex-1 p-4 bg-slate-50">{renderSelectedPage()}</main>
      </div>
    </div>
  );
};

export default AdminDashboard;