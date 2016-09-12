import React, { PropTypes } from 'react';
import Tile from './tile';

export default ({day}) =>
    <div className="doubling six column row">
      <div className="sixteen wide column">
        <h2>{day.day}</h2>
      </div>
      {day.points.map(makeTile)}
    </div>;

function makeTile(f) {
  return <div className="column">
    <Tile forecast={f}></Tile>
  </div>;
}
