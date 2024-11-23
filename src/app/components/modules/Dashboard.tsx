// import React from 'react';

// const Dashboard: React.FC = () => {
//   return (
//     <section id="dashboard" className="mb-8">
//       <h2 className="text-2xl mb-2 text-pink-500">Dashboard</h2>
//       <p className="text-neutral-100">Adjust your dashboard here.</p>
//     </section>
//   );
// };

// export default Dashboard;
import React from 'react';

const Dashboard: React.FC = () => {
  // Mock data for announcements and health tips
  const announcements = [
    { id: 1, title: "COVID-19 Vaccination Update", content: "New vaccine doses available from September 20th at local health centers." },
    { id: 2, title: "Flu Season Alert", content: "Flu season is approaching. Get your flu shots early this year." }
  ];

  const healthTips = [
    { id: 1, title: "Stay Hydrated", content: "Drink at least 8 glasses of water a day to stay hydrated and maintain health." },
    { id: 2, title: "Regular Exercise", content: "Regular exercise can help prevent heart disease, stroke, diabetes, and other diseases." }
  ];

  return (
    <section id="dashboard" className="mb-8 bg-white shadow-md rounded-lg p-4">
      <h2 className="text-2xl mb-4 text-pink-500">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Announcements Section */}
        <div className="bg-blue-100 p-3 rounded-lg">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">Announcements</h3>
          {announcements.map((announcement) => (
            <div key={announcement.id} className="mb-2 p-2 bg-white rounded shadow">
              <h4 className="font-bold">{announcement.title}</h4>
              <p>{announcement.content}</p>
            </div>
          ))}
        </div>
        
        {/* Health Tips Section */}
        <div className="bg-green-100 p-3 rounded-lg">
          <h3 className="text-xl font-semibold text-green-800 mb-2">Health Tips</h3>
          {healthTips.map((tip) => (
            <div key={tip.id} className="mb-2 p-2 bg-white rounded shadow">
              <h4 className="font-bold">{tip.title}</h4>
              <p>{tip.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;