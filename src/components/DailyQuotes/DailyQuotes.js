import React from 'react';
import PropTypes from 'prop-types';

require('./dailyQuotes.scss');

const DailyQuotes = ({ quote }) => (
  <div className="daily-quotes">
    <p className="quote">{ quote }</p>
  </div>
);

export default DailyQuotes;
