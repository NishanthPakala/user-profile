import React from 'react';
import UserProfiles from './containers/UserProfiles/UserProfile';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-center text-uppercase">User Profile</h1>
        <hr />
      </header>
      <div className="container text-center">
        <UserProfiles />
      </div>
    </div>
  );
}

export default App;
