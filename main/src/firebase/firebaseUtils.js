// src/firebase/firebaseUtils.js

import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from './firebaseConfig';

// Fetch review data from Firestore
export const fetchReviewData = async () => {
  const reviewsRef = collection(db, 'reviews');

  // Query to get the review data sorted by 'Restaurant Name'
  const q = query(reviewsRef, orderBy('Restaurant Name'));  // Ensure field names match Firestore fields

  const querySnapshot = await getDocs(q);

  // Transform the data into a format that's easier to use
  const reviews = querySnapshot.docs.map(doc => ({
    restaurantName: doc.data()['Restaurant Name'],  // Use bracket notation for field names with spaces
    'Customer Service': doc.data()['Customer Service'], // Same here for spaces in field names
    'Food Quality': doc.data()['Food Quality'], 
    Taste: doc.data().Taste,
    Ambiance: doc.data().Ambiance,
  }));

  return reviews;
};
