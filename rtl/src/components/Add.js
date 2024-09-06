import React, { useState, useEffect } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { storage, db } from "../firebase/firebase"; 
import { v4 as uuidv4 } from 'uuid';

const Add = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [twitter, setTwitter] = useState("");
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);
  const [autocomplete, setAutocomplete] = useState(null);

  useEffect(() => {
    loadGoogleMapsScript();
  }, []);

  const loadGoogleMapsScript = () => {
    const existingScript = document.getElementById('googleMaps');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCIV9YVytAARkQZ1mLhzaauyJZqRC3anhc&libraries=places`;
      script.id = 'googleMaps';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);

      script.onload = () => {
        initAutocomplete();
      };
    } else {
      initAutocomplete();
    }
  };

  const initAutocomplete = () => {
    const input = document.getElementById('location-input');
    const autocompleteInstance = new window.google.maps.places.Autocomplete(input);
    autocompleteInstance.setFields(['geometry', 'name', 'formatted_address']);
    setAutocomplete(autocompleteInstance);

    autocompleteInstance.addListener('place_changed', () => {
      const place = autocompleteInstance.getPlace();
      if (place.geometry) {
        setAddress(place.formatted_address); // Update the address field with the formatted address
        setLatitude(place.geometry.location.lat());
        setLongitude(place.geometry.location.lng());
      } else {
        setError('No valid place selected');
        console.log('No valid place selected');
      }
    });
  };

  const handleNameChange = (e) => setName(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleAddressChange = (e) => setAddress(e.target.value);
  const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);
  const handleTwitterChange = (e) => setTwitter(e.target.value);
  const handleFacebookChange = (e) => setFacebook(e.target.value);
  const handleInstagramChange = (e) => setInstagram(e.target.value);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const newPreviews = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...files]);
    setImagePreviews((prevPreviews) => [...prevPreviews, ...newPreviews]);
  };

  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    setImagePreviews((prevPreviews) => prevPreviews.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const uploadPromises = images.map((image) => {
      if (image) {
        const storageRef = ref(storage, `images/${image.name}`);
        return uploadBytes(storageRef, image).then((snapshot) =>
          getDownloadURL(snapshot.ref)
        );
      }
      return Promise.resolve(null);
    });

    const urls = await Promise.all(uploadPromises);
    const validUrls = urls.filter((url) => url !== null);

    const restaurantUUID = uuidv4();

    const data = {
      uuid: restaurantUUID, 
      name,
      description,
      address,
      phoneNumber,
      twitter,
      facebook,
      instagram,
      imageUrls: validUrls,
      createdAt: new Date(),
      location: {
        latitude,
        longitude,
      },
    };

    try {
      const docRef = await addDoc(collection(db, "restaurants"), data);
      console.log("Document written with ID: ", docRef.id);
      alert("Data saved successfully!");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to save data.");
    }
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Restaurant Name</label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            className="form-control"
            placeholder="Enter restaurant name"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input
            type="text"
            value={description}
            onChange={handleDescriptionChange}
            className="form-control"
            placeholder="Enter the restaurant description"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Address</label>
          <input
            id="location-input"
            type="text"
            value={address}
            onChange={handleAddressChange}
            className="form-control"
            placeholder="Enter address"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            className="form-control"
            placeholder="Enter phone number"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">X/Twitter</label>
          <input
            type="text"
            value={twitter}
            onChange={handleTwitterChange}
            className="form-control"
            placeholder="Enter X/Twitter link"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Facebook</label>
          <input
            type="text"
            value={facebook}
            onChange={handleFacebookChange}
            className="form-control"
            placeholder="Enter Facebook link"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Instagram</label>
          <input
            type="text"
            value={instagram}
            onChange={handleInstagramChange}
            className="form-control"
            placeholder="Enter Instagram link"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Images</label>
          <input
            type="file"
            multiple
            onChange={handleImageChange}
            className="form-control"
          />
          <div className="mt-2">
            {imagePreviews.map((preview, index) => (
              <div
                key={index}
                className="position-relative d-inline-block"
                style={{ marginRight: "10px", marginBottom: "10px" }}
              >
                <img
                  src={preview}
                  alt="Preview"
                  className="img-thumbnail"
                  style={{ maxWidth: "200px" }}
                />
                <button
                  type="button"
                  className="btn btn-danger position-absolute"
                  style={{
                    top: "-10px",
                    right: "-10px",
                    width: "24px",
                    height: "24px",
                    fontSize: "14px",
                    borderRadius: "50%",
                    padding: "0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 1
                  }}
                  onClick={() => handleRemoveImage(index)}
                >
                  X
                </button>
              </div>
            ))}
          </div>
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <button type="submit" className="btn btn-success w-100">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Add;
