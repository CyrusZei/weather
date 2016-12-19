import React, { Component } from 'react';



var WeatherForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();

    var location = this.refs.location.value;

    if (location.length > 0) {
      this.refs.location.value ='';
      this.props.onSearch(location);
    }

  },
  render: function(){
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div>
            <input type="text" ref='location'/>
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
