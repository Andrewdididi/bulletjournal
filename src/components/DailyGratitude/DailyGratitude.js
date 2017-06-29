import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ListHeader from '../ListHeader/ListHeader';
import Entry from '../Entry/Entry';
import NewBulletEntry from '../NewBulletEntry/NewBulletEntry';

const DailyGratitude = ({ data }) => {
  const renderGratitude = () => (
    data.map(gratitude => (
      <Entry
        type="num1"
        edit
        placeholder="Today I'm grateful for..."
        text={gratitude.text}
      />
    ))
  );

  return (
    <div className="daily-gratitude">
      <ListHeader name="Morning Gratitude" />
      { renderGratitude() }
      <NewBulletEntry
        type="num1"
        placeholder="Today I'm grateful for..."
        edit
      />
    </div>
  );
};

export default DailyGratitude;
