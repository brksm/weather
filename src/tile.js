import React, { PropTypes } from 'react';

export default ({forecast}) =>
    <div className="tile">
       <p className="time">{forecast.formattedTime}</p>
       <p className="temp">{forecast.temp}</p>
     </div>;
