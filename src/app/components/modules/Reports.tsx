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
  <div className="overflow-x-auto">
    <table className="min-w-full bg-white border border-gray-300">
      <thead>
        <tr>
          <th className="px-6 py-3 border-b-2 bg-gray-100 text-left">BMI Category</th>
          <th className="px-6 py-3 border-b-2 bg-gray-100 text-left">Percentage</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-6 py-2 border-b">Underweight</td>
          <td className="px-6 py-2 border-b">{bmiSummary.underweight.toFixed(2)}%</td>
        </tr>
        <tr>
          <td className="px-6 py-2 border-b">Normal</td>
          <td className="px-6 py-2 border-b">{bmiSummary.normal.toFixed(2)}%</td>
        </tr>
        <tr>
          <td className="px-6 py-2 border-b">Overweight</td>
          <td className="px-6 py-2 border-b">{bmiSummary.overweight.toFixed(2)}%</td>
        </tr>
        <tr>
          <td className="px-6 py-2 border-b">Obese</td>
          <td className="px-6 py-2 border-b">{bmiSummary.obese.toFixed(2)}%</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div></div>
  <div className="overflow-x-auto">
    <table className="min-w-full bg-white border border-gray-300">
      <thead>
        <tr>
          <th className="px-6 py-3 border-b-2 bg-gray-100 text-left">Health Issue</th>
          <th className="px-6 py-3 border-b-2 bg-gray-100 text-left">Percentage</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-6 py-2 border-b">Arthritis</td>
          <td className="px-6 py-2 border-b">{healthIssuesSummary.arthritis.toFixed(2)}%</td>
        </tr>
        <tr>
          <td className="px-6 py-2 border-b">Diabetes</td>
          <td className="px-6 py-2 border-b">{healthIssuesSummary.diabetes.toFixed(2)}%</td>
        </tr>
        <tr>
          <td className="px-6 py-2 border-b">Hypertension</td>
          <td className="px-6 py-2 border-b">{healthIssuesSummary.hypertension.toFixed(2)}%</td>
        </tr>
        <tr>
          <td className="px-6 py-2 border-b">Heart Disease</td>
          <td className="px-6 py-2 border-b">{healthIssuesSummary.heartDisease.toFixed(2)}%</td>
        </tr>
        <tr>
          <td className="px-6 py-2 border-b">Cancer</td>
          <td className="px-6 py-2 border-b">{healthIssuesSummary.cancer.toFixed(2)}%</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>
  );
};

export default Reports;