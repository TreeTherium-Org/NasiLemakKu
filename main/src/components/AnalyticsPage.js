import React, { useEffect, useState } from 'react';
import { fetchReviewData } from '../firebase/firebaseUtils';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';

const COLORS = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#FFC300'];

const AnalyticsPage = () => {
  const [reviewData, setReviewData] = useState([]);
  const [top3Restaurants, setTop3Restaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState('');
  const [reviewCounts, setReviewCounts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchReviewData();

      // Sort restaurants by the highest "foodQuality" score
      const sortedByFoodQuality = [...data].sort((a, b) => b.foodQuality - a.foodQuality);
      const top3 = sortedByFoodQuality.slice(0, 3); // Get the top 3 restaurants

      setTop3Restaurants(top3);
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
            services: Array(5).fill(0),
            foodQuality: Array(5).fill(0),
            ambiance: Array(5).fill(0),
            cleanliness: Array(5).fill(0),
          };

          data.forEach((r) => {
            if (r.restaurantName === selectedRestaurant) {
              counts.services[Math.round(r.services) - 1]++;
              counts.foodQuality[Math.round(r.foodQuality) - 1]++;
              counts.ambiance[Math.round(r.ambiance) - 1]++;
              counts.cleanliness[Math.round(r.cleanliness) - 1]++;
            }
          });

          // Transform data to fit the bar chart format
          const formattedData = [
            { category: 'Services', '1': counts.services[0], '2': counts.services[1], '3': counts.services[2], '4': counts.services[3], '5': counts.services[4] },
            { category: 'Food Quality', '1': counts.foodQuality[0], '2': counts.foodQuality[1], '3': counts.foodQuality[2], '4': counts.foodQuality[3], '5': counts.foodQuality[4] },
            { category: 'Ambiance', '1': counts.ambiance[0], '2': counts.ambiance[1], '3': counts.ambiance[2], '4': counts.ambiance[3], '5': counts.ambiance[4] },
            { category: 'Cleanliness', '1': counts.cleanliness[0], '2': counts.cleanliness[1], '3': counts.cleanliness[2], '4': counts.cleanliness[3], '5': counts.cleanliness[4] },
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
          {top3Restaurants.map((restaurant) => (
            <option key={restaurant.restaurantName} value={restaurant.restaurantName}>
              {restaurant.restaurantName}
            </option>
          ))}
        </select>
      </div>

      {/* Bar Chart */}
      <h3 style={{ textAlign: 'center', marginTop: '20px' }}>Review Breakdown by Category</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart 
          data={reviewCounts} 
          margin={{ top: 10, right: 15, left: 15, bottom: 10 }}
          barCategoryGap="20%"
        >
          <CartesianGrid strokeDasharray="2 2" stroke="#e0e0e0" />
          <XAxis 
            dataKey="category" 
            tick={{ fontSize: 12 }} 
            interval={0}
          >
            <Label value="Categories" offset={-5} position="insideBottom" style={{ fontSize: '12px' }} />
          </XAxis>
          <YAxis 
            tick={{ fontSize: 12 }} 
            domain={[0, 'dataMax + 1']}
          >
            <Label value="Users" angle={-90} position="insideLeft" style={{ fontSize: '12px' }} />
          </YAxis>
          <Tooltip contentStyle={{ fontSize: '12px' }} />
          <Legend wrapperStyle={{ fontSize: '12px' }} />
          
          <Bar dataKey="1" fill={COLORS[0]} radius={[5, 5, 0, 0]} barSize={30} />
          <Bar dataKey="2" fill={COLORS[1]} radius={[5, 5, 0, 0]} barSize={30} />
          <Bar dataKey="3" fill={COLORS[2]} radius={[5, 5, 0, 0]} barSize={30} />
          <Bar dataKey="4" fill={COLORS[3]} radius={[5, 5, 0, 0]} barSize={30} />
          <Bar dataKey="5" fill={COLORS[4]} radius={[5, 5, 0, 0]} barSize={30} />
        </BarChart>
      </ResponsiveContainer>

      {/* Pie Chart for Top 3 Restaurants Based on Food Quality */}
      <h2 style={{ textAlign: 'center', marginTop: '20px' }}>Top 3 Restaurants by Food Quality</h2>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={top3Restaurants.map((restaurant) => ({
              name: restaurant.restaurantName,
              value: restaurant.foodQuality,
            }))}
            cx="50%"
            cy="50%"
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
          >
            {top3Restaurants.map((entry, index) => (
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
