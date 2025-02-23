import React from 'react';
import './homescreen.css';

import Homebanner from './HomeBanner/homeBanner';
import Homedetails from './HomeDetails/homeDetails';

const HomeScreen = () => {
  return (
    <div className="homeScreen">
        <Homebanner />
        <Homedetails />

    </div>

  );
}

export default HomeScreen;
