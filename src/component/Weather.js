import React, { Component } from 'react';
import WeatherForm from './Weather/WeatherForm';
import WeatherMessage from './Weather/WeatherMessage';

var Weather = React.createClass({
  render: function(){
    return(

      <div>
        <h1>Get Weather</h1>
        <WeatherForm />
        <WeatherMessage />
      </div>
    );
  }
});


export default Weather;
