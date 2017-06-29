import React, { Component } from 'react';
import PropTypes from 'Prop-types';

import ListHeader from '../ListHeader/ListHeader';
import Entry from '../Entry/Entry';
import NewBulletEntry from '../NewBulletEntry/NewBulletEntry';

require('./dailySection.scss');

const DailySection = ({ header, entryType, placeholder, data, entryPlan }) => {
  const renderList = () => (
    data.map(entry => (
      <Entry
        entryFunc={entryPlan}
        type={entry.entryType || entryType}
        text={entry.text}
        placeholder={placeholder}
      />
    ))
  );

  return (
    <div className="daily-plans">
      <ListHeader name={header} />
      { renderList() }
      <NewBulletEntry
        entryFunc={entryPlan}
        type={entryType}
        placeholder={placeholder}
        edit
      />
    </div>
  );
};

DailySection.propTypes = {
  header: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  entryType: PropTypes.string,
  data: PropTypes.array,
  entryPlan: PropTypes.func.isRequired,
};

DailySection.defaultProps = {
  placeholder: '',
  entryType: 'task',
  data: [],
};

export default DailySection;
