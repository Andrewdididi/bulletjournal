import React, { Component } from 'react';
import PropTypes from 'Prop-types';

import ListHeader from '../ListHeader/ListHeader';
import Entry from '../Entry/Entry';
import NewBulletEntry from '../NewBulletEntry/NewBulletEntry';

require('./dailyPlan.scss');

const DailyPlan = ({ data }) => {
  const renderPlan = () => (
    data.map(plan => (
      <Entry
        type={plan.entryType}
        text={plan.text}
        placeholder="Today my goal is..."
      />
    ))
  );

  return(
    <div className="daily-plans">
      <ListHeader name="Game Plan" />
      { renderPlan() }
      <NewBulletEntry
        placeholder="Today my goal is..."
        edit
      />
    </div>
  );
};

export default DailyPlan;
