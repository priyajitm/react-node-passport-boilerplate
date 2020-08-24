import React, { useContext } from 'react';
import { AppContext } from '../context/AppState';
import { Redirect } from 'react-router';

const Dashboard = () => {
  const { user, isAuthenticated } = useContext(AppContext);
  return (
    <div>
      {isAuthenticated ? (
        <div>
          <div>
            <h3>Logo</h3>
            <h3>Welcome, {user.username}</h3>
            <button>Logout</button>
          </div>
        </div>
      ) : (
        <Redirect to="/login" />
      )}
    </div>
  );
};

export default Dashboard;
