import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from './firebaseConfig';

// Fetch review data from Firestore
export const fetchReviewData = async () => {
  const reviewsRef = collection(db, 'reviews');

  // Query to get the review data sorted by 'restaurantName'
  const q = query(reviewsRef, orderBy('restaurantName'));

  const querySnapshot = await getDocs(q);

  // Transform the data into a format that's easier to use
  const reviews = querySnapshot.docs.map(doc => ({
    restaurantName: doc.data().restaurantName,
    ambiance: doc.data().ambiance,
    cleanliness: doc.data().cleanliness,
    feedback: doc.data().feedback,
    foodQuality: doc.data().foodQuality,
    location: doc.data().location,
    services: doc.data().services,
    createdAt: doc.data().createdAt.toDate(),  // Convert Firestore timestamp to JS Date
    restaurantId: doc.data().restaurantId,
  }));

  return reviews;
};