import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ListHeader from '../ListHeader/ListHeader';
import Entry from '../Entry/Entry';
import NewBulletEntry from '../NewBulletEntry/NewBulletEntry';

const DailyWins = ({ data }) => {
  const renderWins = () => (
    data.map(win => (
      <Entry
        type="note"
        text={win.text}
        placeholder="What are your wins for today?"
      />
    ))
  );

  return (
    <div className="daily-wins">
      <ListHeader name="Daily Wins" />
      { renderWins() }
      <NewBulletEntry
        type="note"
        placeholder="What are your wins for today?"
        edit
      />
    </div>
  );
};

export default DailyWins;
