import React from 'react';
import './App.css';
import ProfilPhoto from './Components/Profile/ProfilPhoto.js/ProfilPhoto';
import FullName from './Components/Profile/FullName.js/FullName';
import Address from './Components/Profile/Address.js/Address';

function App() {
  return (
    <div>
      <ProfilPhoto />
      <FullName />
      <Address />
    </div>
  );
}

export default App;
