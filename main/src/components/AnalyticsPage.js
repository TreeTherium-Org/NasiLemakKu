import React, { useEffect, useState } from 'react';
import { fetchReviewData } from '../firebase/firebaseUtils';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Custom label component for XAxis
const CustomizedAxisTick = (props) => {
  const { x, y, payload } = props;
  return (
    <text x={x} y={y + 10} dy={0} textAnchor="middle" fill="#666">
      {payload.value}
    </text>
  );
};

const AnalyticsPage = () => {
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchReviewData();

      // Calculate total scores for each restaurant
      const dataWithTotalScores = data.map((item) => ({
        ...item,
        totalScore:
          (item['Customer Service'] || 0) +
          (item['Quality'] || 0) +
          (item['Taste'] || 0) +
          (item['Ambiance'] || 0),
      }));

      // Sort data by totalScore in descending order and get the top 3
      const sortedData = [...dataWithTotalScores].sort((a, b) => b.totalScore - a.totalScore);
      const top3 = sortedData.slice(0, 3);

      setReviewData(top3);
    };
    getData();
  }, []);

  return (
    <div style={{ padding: '20px', marginTop: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Analytics</h2>
      <h3 style={{ textAlign: 'center', marginBottom: '30px' }}>Top 3 Restaurants</h3>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={reviewData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="Restaurant Name"
            tick={<CustomizedAxisTick />} 
            tickLine={false}
            axisLine={false}
          />
          <YAxis domain={[0, 5]} tickCount={6} />
          <Tooltip />
          <Legend />
          
          <Bar dataKey="Customer Service" fill="#8884d8" name="Customer Service" />
          <Bar dataKey="Food Quality" fill="#82ca9d" name="Quality" />
          <Bar dataKey="Taste" fill="#ffc658" name="Taste" />
          <Bar dataKey="Ambiance" fill="#d84d4d" name="Ambiance" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AnalyticsPage;
