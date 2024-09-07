import React, { Component } from "react";
import Section from "./layouts/Section";
import { Link } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase'; // Adjust the import based on your firebase.js exports

class Blog extends Component {
  state = {
    restaurants: [], // State to hold fetched restaurant data
  };

  componentDidMount() {
    this.fetchRestaurants();
  }

  fetchRestaurants = async () => {
    try {
      const restaurantCollection = collection(db, 'restaurants');
      const restaurantSnapshot = await getDocs(restaurantCollection);
      const restaurantList = restaurantSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));

      this.setState({ restaurants: restaurantList });
    } catch (error) {
      console.error("Error fetching restaurants: ", error);
    }
  };

  render() {
    const { restaurants } = this.state;

    return (
      <Section allNotification={false} searchPopup={true} title={'Blog'}>
        <div className="blog-area pd-top-36 pb-2 mg-top-40">
          <div className="container">
            <div className="section-title">
              <h3 className="title">Recent Posts</h3>
              <Link to={'/blog'}>View All</Link>
            </div>
            <div className="row">
              {restaurants.map((restaurant) => (
                <div className="col-6" key={restaurant.id}>
                  <div className="single-blog">
                    <div className="thumb">
                      <Carousel
                        showArrows={true}
                        autoPlay={true}
                        infiniteLoop={true}
                        showThumbs={false}
                        showStatus={false}
                      >
                        {(restaurant.imageUrls && Array.isArray(restaurant.imageUrls))
                          ? restaurant.imageUrls.map((url, index) => (
                              <div key={index}>
                                <img src={url} alt={`Slide ${index}`} />
                              </div>
                            ))
                          : <div>No images available</div>}
                      </Carousel>
                    </div>
                    <div className="details">
                      <Link to={'/blog-details'}>{restaurant.name}</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="btn-wrap mg-top-40 mg-bottom-40">
          <div className="container">
            <Link className="btn-large btn-blue w-100" to={'/blog'}>Load More</Link>
          </div>
        </div>
      </Section>
    );
  }
}

export default Blog;
