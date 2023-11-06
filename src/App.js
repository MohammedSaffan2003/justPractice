// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


// Google login button
// import React, { useState, useEffect } from 'react';
// import { googleLogout, useGoogleLogin } from '@react-oauth/google';
// import axios from 'axios';

// function App() {
//     const [ user, setUser ] = useState([]);
//     const [ profile, setProfile ] = useState([]);

//     const login = useGoogleLogin({
//         onSuccess: (codeResponse) => setUser(codeResponse),
//         onError: (error) => console.log('Login Failed:', error)
//     });

//     useEffect(
//         () => {
//             if (user) {
//                 axios
//                     .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
//                         headers: {
//                             Authorization: `Bearer ${user.access_token}`,
//                             Accept: 'application/json'
//                         }
//                     })
//                     .then((res) => {
//                         setProfile(res.data);
//                     })
//                     .catch((err) => console.log(err));
//             }
//         },
//         [ user ]
//     );

//     // log out function to log the user out of google and set the profile array to null
//     const logOut = () => {
//         googleLogout();
//         setProfile(null);
//     };

//     return (
//         <div>
//             <h2>React Google Login</h2>
//             <br />
//             <br />
//             {profile ? (
//                 <div>
//                     <img src={profile.picture} alt="user image" />
//                     <h3>User Logged in</h3>
//                     <p>Name: {profile.name}</p>
//                     <p>Email Address: {profile.email}</p>
//                     <br />
//                     <br />
//                     <button onClick={logOut}>Log out</button>
//                 </div>
//             ) : (
//                 <button onClick={() => login()}>Sign in with Google 🚀 </button>
//             )}
//         </div>
//     );
// }
// export default App;

// IP Geolocation API
// Import necessary dependencies
// import React, { useState } from 'react';
// import GoogleMapReact from 'google-map-react';

// // Functional component for your app
// const App = () => {
//   // State to store user location
//   const [userLocation, setUserLocation] = useState(null);

//   // Function to fetch user location from IP using ipstack
//   const handleGetLocationFromIP = async () => {
//     try {
//       // Fetch location data from ipstack
//       const response = await fetch('http://api.ipstack.com/check?access_key=82ff3d7440dfcf6fd6eb2a9b8f174fb9');
//       const data = await response.json();

//       // Check if the response contains location information
//       if (data.latitude && data.longitude) {
//         // Extract latitude and longitude from the response
//         setUserLocation({
//           lat: parseFloat(data.latitude),
//           lng: parseFloat(data.longitude),
//         });
//       } else {
//         console.error('Location information not found in the API response');
//       }
//     } catch (error) {
//       console.error('Error fetching location:', error);
//     }
//   };

//   return (
//     <div>
//       {/* GoogleMapReact component with API key */}
//       <GoogleMapReact
//         center={userLocation}
//         zoom={15}
//         bootstrapURLKeys={{ key: 'AIzaSyC_N9a_hyj2VJOOPnlyhiRsBJ0QM8pyuqI' }}
//       >
//         {/* Marker shown when user location is available */}
//         {userLocation && <Marker position={userLocation} />}
//       </GoogleMapReact>

//       {/* Button to trigger fetching location from IP */}
//       <button onClick={handleGetLocationFromIP}>Get Location from IP</button>
//     </div>
//   );
// };

// // Placeholder for Marker component
// const Marker = () => <div className="marker">You are here!</div>;

// export default App;








// Location -- working fine -- shows city and country of user

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const CommentSection = () => {
//   const [userLocation, setUserLocation] = useState('');

//   useEffect(() => {
//     // Simulate API call to retrieve user's location based on IP address
//     axios.get('https://ipapi.co/json/')
//       .then(response => {
//         setUserLocation(response.data.city + ', ' + response.data.country_name);
//       })
//       .catch(error => {
//         console.error('Error fetching location:', error);
//       });
//   }, []);

//   return (
//     <div>
//       <h2>Comment Section</h2>
//       <p>User's Location: {userLocation}</p>
//       {/* Add your existing comment section code here */}
//     </div>
//   );
// };

// function App() {
//   return (
//     <div className="App">
//       <h1>YouTube Clone</h1>
//       {/* Other components and features */}
//       <CommentSection />
//     </div>
//   );
// }

// export default App;

//Shows the location only when the user clicks on the button
// import React, { useState } from 'react';
// import axios from 'axios';

// const CommentSection = () => {
//   const [userLocation, setUserLocation] = useState('');
//   const [showLocation, setShowLocation] = useState(false);

//   const handleClick = () => {
//     // Simulate API call to retrieve user's location based on IP address
//     axios.get('https://ipapi.co/json/')
//       .then(response => {
//         setUserLocation(response.data.city + ', ' + response.data.country_name);
//         setShowLocation(true);
//       })
//       .catch(error => {
//         console.error('Error fetching location:', error);
//       });
//   };

//   return (
//     <div>
//       <h2>Comment Section</h2>
//       <button onClick={handleClick}>Show User's Location</button>
//       {showLocation && <p>User's Location: {userLocation}</p>}
//       {/* Add your existing comment section code here */}
//     </div>
//   );
// };

// function App() {
//   return (
//     <div className="App">
//       <h1>YouTube Clone</h1>
//       {/* Other components and features */}
//       <CommentSection />
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import axios from 'axios';

const Feature1 = () => {
  const [userLocation, setUserLocation] = useState('');
  const [showLocation, setShowLocation] = useState(false);

  const handleClick = () => {
    // Simulate API call to retrieve user's location based on IP address
    axios.get('https://ipapi.co/json/')
      .then(response => {
        setUserLocation(response.data.city + ', ' + response.data.country_name);
        setShowLocation(true);
      })
      .catch(error => {
        console.error('Error fetching location:', error);
      });
  };

  return (
    <div>
      {/* <h2>Comment Section</h2>      i */}
      <button onClick={handleClick}>Show User's Location</button>
      {showLocation && <p>User's Location: {userLocation}</p>}
      {/* Add your existing comment section code here */}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      {/* <h1>YouTube Clone</h1>        i  */}
      {/* Other components and features */}
      <Feature1 />
    </div>
  );
}

export default App;
