import React from 'react';
import ReactDOM from 'react-dom/client';

// import App from './App.jsx';
import Data from './Data.jsx'; // assuming Data is a React component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Data /> {/* assuming Data is a React component */}
  </React.StrictMode>
);