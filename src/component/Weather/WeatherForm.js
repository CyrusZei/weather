import React, { Component } from 'react';



var WeatherForm = React.createClass({
  render: function(){
    return(
      <div>
        <form>
          <div>
            <input type="text" ref='cityName'/>
          </div>
          <div>
              <button type="submit">get Weather</button>
          </div>

        </form>
      </div>
    );
  }


});


export default WeatherForm;
