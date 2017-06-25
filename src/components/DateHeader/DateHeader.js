import React from 'react';

require('./dateHeader.scss');

const DateHeader = ({ date }) => (
  <div className="date-header">
    <h2 className="date">{date}</h2>
  </div>
);

export default DateHeader;
