import React, {Component} from 'react';

import Slider from '../AllSections/Slider/Slider';
import Work from '../AllSections/Work/Work';
import Portfolio from '../AllSections/Portfolio/Portfolio';
import Profile from '../AllSections/Profile/Profile';
import About from '../AllSections/About/About';
import Socailmedia from '../AllSections/Socailmedia/Socailmedia';

// import Button from 'react-bootstrap/Button'

class HomePage extends Component {
  render() {
    return (
      <div className = "HomePage" >
        <Slider />
        <Work />
        <Portfolio />
        <Profile />
        <About />
        <Socailmedia />
      </div>
    );
  }
}

export default HomePage;
