import React from 'react';
import { Link } from 'react-router-dom';
import './Institutional.css'; // Optionally, if you have custom styling

const Institutional = () => {
    return (
      <div className="institutional-page">
        <h1>Welcome to Banco Universitario</h1>
        <p>
          We are committed to providing you with the best services...
        </p>
        {/* Use Link for navigation */}
        <Link to="/login">
          <button>Go to Login</button>
        </Link>
      </div>
    );
  };

export default Institutional;
