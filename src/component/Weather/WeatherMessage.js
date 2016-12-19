import React, { Component } from 'react';




var WeatherMessage = ({temp,location}) => {
  return(
    <div>
      <h3>its is {temp} in {location}</h3>
    </div>
  );
}

export default WeatherMessage;
