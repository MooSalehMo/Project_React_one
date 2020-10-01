import React from 'react';
import './Slider.sass';

const Slider = () => {
    return (
      <div className="slider" >
        <div className="overlay"></div>
        <div className="container">
          <div className="caption">
            <h2>name mohamed</h2>
            <h4>title pragraph</h4>
            <p className="lead">
              Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
            </p>
            <button className="btn">button</button>
          </div>
        </div>
      </div>
    );
}

export default Slider;
