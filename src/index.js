import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // ReactDOM.render(
    <GoogleOAuthProvider clientId='814050419608-b2bje75cb81g0jt6teh80ed462g5t96k.apps.googleusercontent.com'>

  <React.StrictMode>
    <App />
  </React.StrictMode>
    </GoogleOAuthProvider>
    //  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
