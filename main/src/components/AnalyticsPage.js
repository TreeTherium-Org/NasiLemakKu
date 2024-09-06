import React, { useEffect, useState } from 'react';
import { fetchReviewData } from '../firebase/firebaseUtils';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';

const COLORS = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#FFC300']; // Updated colors for clarity

const AnalyticsPage = () => {
  const [reviewData, setReviewData] = useState([]);
  const [top3TasteRestaurants, setTop3TasteRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState('');
  const [reviewCounts, setReviewCounts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchReviewData();

      // Sort restaurants by the highest "Taste" score
      const sortedByTaste = [...data].sort((a, b) => b.Taste - a.Taste);
      const top3Taste = sortedByTaste.slice(0, 3); // Get the top 3 restaurants

      setTop3TasteRestaurants(top3Taste);
      setReviewData(data); // Set the full data
    };

    getData();
  }, []);

  useEffect(() => {
    if (selectedRestaurant) {
      const fetchRestaurantReviews = async () => {
        const data = await fetchReviewData();
        const restaurant = data.find((r) => r.restaurantName === selectedRestaurant);

        if (restaurant) {
          // Count the number of reviews for each star rating
          const counts = {
            'Customer Service': Array(5).fill(0),
            'Food Quality': Array(5).fill(0),
            Taste: Array(5).fill(0),
            Ambiance: Array(5).fill(0),
          };

          data.forEach((r) => {
            if (r.restaurantName === selectedRestaurant) {
              counts['Customer Service'][Math.round(r['Customer Service']) - 1]++;
              counts['Food Quality'][Math.round(r['Food Quality']) - 1]++;
              counts['Taste'][Math.round(r['Taste']) - 1]++;
              counts['Ambiance'][Math.round(r['Ambiance']) - 1]++;
            }
          });

          // Transform data to fit the bar chart format
          const formattedData = [
            { category: 'Customer Service', '1': counts['Customer Service'][0], '2': counts['Customer Service'][1], '3': counts['Customer Service'][2], '4': counts['Customer Service'][3], '5': counts['Customer Service'][4] },
            { category: 'Food Quality', '1': counts['Food Quality'][0], '2': counts['Food Quality'][1], '3': counts['Food Quality'][2], '4': counts['Food Quality'][3], '5': counts['Food Quality'][4] },
            { category: 'Taste', '1': counts['Taste'][0], '2': counts['Taste'][1], '3': counts['Taste'][2], '4': counts['Taste'][3], '5': counts['Taste'][4] },
            { category: 'Ambiance', '1': counts['Ambiance'][0], '2': counts['Ambiance'][1], '3': counts['Ambiance'][2], '4': counts['Ambiance'][3], '5': counts['Ambiance'][4] },
          ];

          setReviewCounts(formattedData);
        }
      };

      fetchRestaurantReviews();
    }
  }, [selectedRestaurant]);

  return (
    <div style={{ padding: '10px', fontSize: '14px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '15px' }}>Analytics</h2>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <label htmlFor="restaurant-select">Select a Restaurant: </label>
        <select
          id="restaurant-select"
          value={selectedRestaurant}
          onChange={(e) => setSelectedRestaurant(e.target.value)}
        >
          <option value="">--Select a Restaurant--</option>
          {top3TasteRestaurants.map((restaurant) => (
            <option key={restaurant.restaurantName} value={restaurant.restaurantName}>
              {restaurant.restaurantName}
            </option>
          ))}
        </select>
      </div>

      {/* Bar Chart */}
      <h3 style={{ textAlign: 'center', marginTop: '20px' }}>Review Breakdown by Category</h3>
      <ResponsiveContainer width="100%" height={350}> {/* Adjusted height */}
        <BarChart data={reviewCounts} margin={{ top: 10, right: 30, left: 10, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category">
            <Label value="Categories" offset={-5} position="insideBottom" />
          </XAxis>
          <YAxis domain={[0, Math.max(...reviewCounts.flatMap(d => Object.values(d).slice(1)))]}>
            <Label value="Number of Users" angle={-90} position="insideLeft" />
          </YAxis>
          <Tooltip />
          <Legend />
          <Bar dataKey="1" fill={COLORS[0]} name="1 Star" />
          <Bar dataKey="2" fill={COLORS[1]} name="2 Stars" />
          <Bar dataKey="3" fill={COLORS[2]} name="3 Stars" />
          <Bar dataKey="4" fill={COLORS[3]} name="4 Stars" />
          <Bar dataKey="5" fill={COLORS[4]} name="5 Stars" />
        </BarChart>
      </ResponsiveContainer>

      {/* Pie Chart for Top 3 Restaurants Based on Taste */}
      <h2 style={{ textAlign: 'center', marginTop: '20px' }}>Top 3 Restaurants by Taste Reviews</h2>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={top3TasteRestaurants.map((restaurant) => ({
              name: restaurant.restaurantName,
              value: restaurant.Taste,
            }))}
            cx="50%"
            cy="50%"
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
          >
            {top3TasteRestaurants.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AnalyticsPage;
