import React, { Component } from 'react';

var WeatherMessage = React.createClass({

  render: function(){
    var {temp, location} = this.props;
    return(
      <div>
        <h3>its is {temp} in {location}</h3>
      </div>
    );
  }
});


export default WeatherMessage;
