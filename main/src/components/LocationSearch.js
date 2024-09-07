import React, { Component } from 'react';

class LocationSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map: null, // Store the map instance in state
      autocomplete: null, // Store the autocomplete instance in state
    };
  }
  // This lifecycle method runs once when the component is mounted to the DOM.
  // It initiates the loading of the Google Maps script.
  componentDidMount() {
    this.loadGoogleMapsScript();
  }
  // This function loads the Google Maps API script dynamically if it hasn't already been loaded.
  // It checks if a script with the ID 'googleMaps' exists. If not, it creates and appends the script to the document.
  // Once the script is loaded, it calls the initAutocomplete function to initialize the location search feature.
  loadGoogleMapsScript = () => {
    const existingScript = document.getElementById('googleMaps');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCIV9YVytAARkQZ1mLhzaauyJZqRC3anhc&libraries=places`;
      script.id = 'googleMaps';
      script.async = true;  // The script is loaded asynchronously.
      script.defer = true;  // The script execution is deferred until after the document has been parsed.
      document.body.appendChild(script);

      script.onload = () => {
        this.initAutocomplete(); // Call the init function after the script is loaded.
      };
    } else {
      this.initAutocomplete(); // If the script is already added, just call the init function.
    }
  };
  // This function initializes the Google Places Autocomplete feature on the input field.
  // It creates an Autocomplete object for the input element and listens for the 'place_changed' event,
  // which triggers the searchNearbyNasiLemak function to search for nearby Nasi Lemak restaurants.
  initAutocomplete = () => {
    const input = document.getElementById('location-input');
    const autocomplete = new window.google.maps.places.Autocomplete(input);
    autocomplete.setFields(['geometry', 'name']);  // Restrict the data returned to only geometry and name.
    this.setState({ autocomplete }); // Save the autocomplete instance to state

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      
      // Check if the place has geometry
      if (place && place.geometry) {
        this.searchNearbyNasiLemak(place.geometry.location); // Search nearby restaurants when a location is selected.
      } else {
        console.log('No valid place selected');
      }
    });
  };
  // This function searches for nearby Nasi Lemak restaurants based on the selected location.
  // It creates a map centered on the selected location, and uses the PlacesService to perform a nearby search
  // for restaurants within a 1.5 km radius that have 'Nasi Lemak' in their menu.
  searchNearbyNasiLemak = (location) => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: location,
      zoom: 15,
    });

    this.setState({ map }); // Save the map instance to state

    const service = new window.google.maps.places.PlacesService(map);
    const request = {
      location: location,
      radius: '1500',
      type: ['restaurant'],
      keyword: 'nasi lemak',
    };

    service.nearbySearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        this.displayResults(results, map);
      }
    });
  };
  // This function takes the search results and displays them on the map as markers.
  // It also creates an info window that shows the restaurant name and vicinity when a marker is clicked.
  displayResults = (results, map) => {
    const infowindow = new window.google.maps.InfoWindow();

    results.forEach((result) => {
      const marker = new window.google.maps.Marker({
        position: result.geometry.location,
        map: map,
        title: result.name,
      });

      marker.addListener('click', () => {
        infowindow.setContent(`<div><strong>${result.name}</strong><br>${result.vicinity}</div>`);
        infowindow.open(map, marker);
      });
    });
  };

  // Reset the map and input field
  resetLocationSearch = () => {
    const { map, autocomplete } = this.state;

    // Clear the input field
    const input = document.getElementById('location-input');
    input.value = '';

    // Reset the map view to a default location (e.g., center of a city or default zoom)
    if (map) {
      map.setCenter({ lat: 3.139, lng: 101.6869 }); // Set to Kuala Lumpur center as an example
      map.setZoom(12); // Reset to default zoom level
    }

    // Clear the current place in the autocomplete object, if available
    if (autocomplete) {
      autocomplete.set('place', null);
    }
  };
  // This function renders the input field for location search and the map container.
  // The input field allows users to enter a location, and the map displays the nearby restaurants.
  render() {
    return (
      <div>
        <input
          id="location-input"
          type="text"
          placeholder="Enter a location"
          style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            padding: '10px',
            zIndex: 1000,
            width: '300px',
            borderRadius: '5px',
            border: '1px solid #16423C',
          }}
        />
        <button
          onClick={this.resetLocationSearch}
          style={{
            position: 'absolute',
            top: '20px',
            left: '340px',
            padding: '10px',
            zIndex: 1000,
            borderRadius: '5px',
            border: '1px solid #ccc',
            color: '#E9EFEC',   
            backgroundColor: '#16423C', // Set the background color
          }}
        >
          Back / Enter New Place
        </button>
        <div id="map" style={{ width: '100%', height: '100vh', minHeight: '500px' }}></div>
      </div>
    );
  }
}


export default LocationSearch;
