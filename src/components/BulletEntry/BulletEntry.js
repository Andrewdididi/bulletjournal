import React from 'react';

require('./bulletEntry.scss');

const BulletEntry = ({ type, text }) => (
  <div className="entry">
    <span className={`entry-type icon ${type}`}></span>
    <p className="entry-text">{text}</p>
  </div>
);

export default BulletEntry;

