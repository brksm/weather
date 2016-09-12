import React, { PropTypes } from 'react';

const Tile = React.createClass({
  render: function () {
    return <div className="tile">
      <p className="time">{this.props.forecast.formattedTime}</p>
      <p className="temp">{this.props.forecast.temp}</p>
    </div>;
  }
});

export default Tile;
