import React, { PropTypes } from 'react';
import Tile from './tile';

const Day = React.createClass({
  render: function () {
    function makeTile(f) {
      return <div className="column">
        <Tile forecast={f}></Tile>
      </div>;
    }
    return <div className="doubling six column row">
      <div className="sixteen wide column">
        <h2>{this.props.day.day}</h2>
      </div>
      {this.props.day.points.map(makeTile)}
      <hr/>
    </div>;
  }
});

export default Day;
