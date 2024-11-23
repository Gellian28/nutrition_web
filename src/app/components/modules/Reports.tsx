// import React from 'react';

// const Reports: React.FC = () => {
//   return (
//     <section id="reports" className="mb-8">
//       <h2 className="text-2xl mb-2 text-pink-500">Reports</h2>
//       <p className="text-neutral-100">View reports here.</p>
//     </section>
//   );
// };

// export default Reports;

// import React, { useState, useEffect } from 'react';
// // import { Bar } from 'react-chartjs-2';
// // import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
// import { directus } from "../../../shared/directus";
// import { readItems } from '@directus/sdk';

// // Register the necessary Chart.js components
// // ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const Reports: React.FC = () => {
//   const [assessments, setAssessments] = useState({
//     labels: [],
//     datasets: [{
//       label: 'Assessment Scores',
//       data: [],
//       backgroundColor: [
//         '#FF6384',
//         '#36A2EB',
//         '#FFCE56',
//         '#4BC0C0',
//         '#F77825'
//       ],
//       borderColor: [
//         '#FF6384',
//         '#36A2EB',
//         '#FFCE56',
//         '#4BC0C0',
//         '#F77825'
//       ],
//       borderWidth: 1
//     }]
//   });

//   const [summary, setSummary] = useState({
//     totalAssessments: 0,
//     averageScore: 0,
//     highestScore: 0,
//     lowestScore: 0
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await directus.request(
//           readItems('assessments', {
//             fields: ['date', 'score']
//           })
//         );
//         const data = response;

//         if (!Array.isArray(data)) {
//           console.error('Error: Data is not an array');
//           return;
//         }

//         if (data.length === 0) {
//           console.error('Error: Data is empty');
//           return;
//         }

//         //const labels = data.map(item => item.date);
//         const scores = data.map(item => item.score);

//         // setAssessments({
//         //   labels: labels,
//         //   datasets: [{
//         //     ...assessments.datasets[0],
//         //     //data: scores
//         //   }]
//         // });

//         const totalAssessments = data.length;
//         const averageScore = scores.reduce((a, b) => a + b, 0) / totalAssessments;
//         const highestScore = Math.max(...scores);
//         const lowestScore = Math.min(...scores);

//         setSummary({
//           totalAssessments: totalAssessments,
//           averageScore: averageScore,
//           highestScore: highestScore,
//           lowestScore: lowestScore
//         });
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <section id="reports" className="mb-8">
//       <h2 className="text-2xl mb-2 text-pink-500">Reports</h2>
//       <div className="flex flex-col md:flex-row justify-between mb-4">
//         <div className="mb-4 md:mb-0">
//           <h3 className="text-lg mb-2">Summary</h3>
//           <ul>
//             <li>
//               <span className="text-neutral-100">Total Assessments:</span>
//               <span className="text-neutral-500">{summary.totalAssessments}</span>
//             </li>
//             <li>
//               <span className="text-neutral-100">Average Score:</span>
//               <span className="text-neutral-500">{summary.averageScore.toFixed(2)}</span>
//             </li>
//             <li>
//               <span className="text-neutral-100">Highest Score:</span>
//               <span className="text-neutral-500">{summary.highestScore}</span>
//             </li>
//             <li>
//               <span className="text-neutral-100">Lowest Score:</span>
//               <span className="text-neutral-500">{summary.lowestScore}</span>
//             </li>
//           </ul>
//         </div>
//         <div>
//           <h3 className="text-lg mb-2">Assessment Scores</h3>
//           {/* <Bar data={assessments} /> */}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Reports;

// import React, { useState, useEffect } from 'react';
// import { getAssessments } from "../../../shared/firestore.ts";

// const Reports: React.FC = () => {
//   const [assessments, setAssessments] = useState({
//     labels: [],
//     datasets: [{
//       label: 'Assessment Scores',
//       data: [],
//       backgroundColor: [
//         '#FF6384',
//         '#36A2EB',
//         '#FFCE56',
//         '#4BC0C0',
//         '#F77825'
//       ],
//       borderColor: [
//         '#FF6384',
//         '#36A2EB',
//         '#FFCE56',
//         '#4BC0C0',
//         '#F77825'
//       ],
//       borderWidth: 1
//     }]
//   });

//   const [summary, setSummary] = useState({
//     totalAssessments: 0,
//     averageScore: 0,
//     highestScore: 0,
//     lowestScore: 0
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await getAssessments();
//         const scores = data.map(item => item.score);

//         const totalAssessments = data.length;
//         const averageScore = scores.reduce((a, b) => a + b, 0) / totalAssessments;
//         const highestScore = Math.max(...scores);
//         const lowestScore = Math.min(...scores);

//         setSummary({
//           totalAssessments: totalAssessments,
//           averageScore: averageScore,
//           highestScore: highestScore,
//           lowestScore: lowestScore
//         });
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <section id="reports" className="mb-8">
//       <h2 className="text-2xl mb-2 text-pink-500">Reports</h2>
//       <div className="flex flex-col md:flex-row justify-between mb-4">
//         <div className="mb-4 md:mb-0">
//           <h3 className="text-lg mb-2">Summary</h3>
//           <ul>
//             <li>
//               <span className="text-neutral-100">Total Assessments:</span>
//               <span className="text-neutral-500">{summary.totalAssessments}</span>
//             </li>
//             <li>
//               <span className="text-neutral-100">Average Score:</span>
//               <span className="text-neutral-500">{summary.averageScore.toFixed(2)}</span>
//             </li>
//             <li>
//               <span className="text-neutral-100">Highest Score:</span>
//               <span className="text-neutral-500">{summary.highestScore}</span>
//             </li>
//             <li>
//               <span className="text-neutral-100">Lowest Score:</span>
//               <span className="text-neutral-500">{summary.lowestScore}</span>
//             </li>
//           </ul>
//         </div>
//         <div>
//           <h3 className="text-lg mb-2">Assessment Scores</h3>
//           {/* <Bar data={assessments} /> */}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Reports;

import React, { useState, useEffect } from 'react';
import { getAssessments, getUsersBMI, getUsers } from "../../../shared/firestore";

const Reports: React.FC = () => {
  const [bmiSummary, setBmiSummary] = useState<{ [key: string]: number }>({
    underweight: 0,
    normal: 0,
    overweight: 0,
    obese: 0,
  });
  const [healthIssuesSummary, setHealthIssuesSummary] = useState<{ [key: string]: number }>({
    arthritis: 0,
    diabetes: 0,
    hypertension: 0,
    heartDisease: 0,
    cancer: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bmiData = await getUsersBMI();
        const healthData = await getAssessments();
        const profileData = await getUsers();

        // Calculate BMI summary
        const bmiCategories = { underweight: 0, normal: 0, overweight: 0, obese: 0 };
        bmiData.forEach(user => {
          if (user.bmi < 18.5) {
            bmiCategories.underweight++;
          } else if (user.bmi < 24.9) {
            bmiCategories.normal++;
          } else if (user.bmi < 29.9) {
            bmiCategories.overweight++;
          } else {
            bmiCategories.obese++;
          }
        });

        const totalBmiRecords = bmiData.length || 1; // Avoid division by zero
        setBmiSummary({
          underweight: (bmiCategories.underweight / totalBmiRecords) * 100,
          normal: (bmiCategories.normal / totalBmiRecords) * 100,
          overweight: (bmiCategories.overweight / totalBmiRecords) * 100,
          obese: (bmiCategories.obese / totalBmiRecords) * 100,
        });

        // Calculate health issues summary
        const healthIssuesCount = { arthritis: 0, diabetes: 0, hypertension: 0, heartDisease: 0, cancer: 0 };
        healthData.forEach(assessment => {
          if (assessment.arthritis) healthIssuesCount.arthritis++;
          if (assessment.diabetes) healthIssuesCount.diabetes++;
          if (assessment.hypertension) healthIssuesCount.hypertension++;
          if (assessment.heart_disease) healthIssuesCount.heartDisease++;
          if (assessment.cancer) healthIssuesCount.cancer++;
        });

        const totalHealthRecords = healthData.length || 1; // Avoid division by zero
        setHealthIssuesSummary({
          arthritis: (healthIssuesCount.arthritis / totalHealthRecords) * 100,
          diabetes: (healthIssuesCount.diabetes / totalHealthRecords) * 100,
          hypertension: (healthIssuesCount.hypertension / totalHealthRecords) * 100,
          heartDisease: (healthIssuesCount.heartDisease / totalHealthRecords) * 100,
          cancer: (healthIssuesCount.cancer / totalHealthRecords) * 100,
        });

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section id="reports" className="mb-8">
      <h2 className="text-2xl mb-2 text-pink-500">Reports</h2>
      <div className="flex flex-col md:flex-row justify-between mb-4">
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg mb-2">BMI Summary</h3>
          <ul>
            <li>Underweight: {bmiSummary.underweight.toFixed(2)}%</li>
            <li>Normal: {bmiSummary.normal.toFixed(2)}%</li>
            <li>Overweight: {bmiSummary.overweight.toFixed(2)}%</li>
            <li>Obese: {bmiSummary.obese.toFixed(2)}%</li>
          </ul>
        </div>
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg mb-2">Health Issues Summary</h3>
          <ul>
            <li>Arthritis: {healthIssuesSummary.arthritis.toFixed(2)}%</li>
            <li>Diabetes: {healthIssuesSummary.diabetes.toFixed(2)}%</li>
            <li>Hypertension: {healthIssuesSummary.hypertension.toFixed(2)}%</li>
            <li>Heart Disease: {healthIssuesSummary.heartDisease.toFixed(2)}%</li>
            <li>Cancer: {healthIssuesSummary.cancer.toFixed(2)}%</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Reports;