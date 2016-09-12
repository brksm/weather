import React from 'react';
import apiClient from './api-client';
import adapter from './adapter';
import Day from './day';

const url = 'http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=4c898d5f71f874802e5ec972c496db89';

export default React.createClass({
  getInitialState: function () {
    return {
      forecasts: []
    };
  },
  componentDidMount: function () {
    this.getData();
  },
  componentWillUnmount: function () {
    this.serverRequest.abort();
  },
  getData: function () {
    const self = this;
    this.serverRequest = apiClient('GET', url)
      .then(function (data) {
        const adapted = adapter(data);
        self.setState({
          forecasts: adapted
        });
      });
  },
  render: function () {
    function makeDay(day) {
      return <Day day={day}></Day>;
    }
    return <div className="ui padded grid container">
    <div className="row">
      <h1>Welcome to Moscow... here is your weather!</h1>
      </div>
      {this.state.forecasts.map(makeDay)}
    </div>;
  }
});
