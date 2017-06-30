import React, { Component } from 'react';
import PropTypes from 'Prop-types';

import ListHeader from '../ListHeader/ListHeader';
import Entry from '../Entry/Entry';
import NewBulletEntry from '../NewBulletEntry/NewBulletEntry';

require('./dailySection.scss');

const DailySection = ({ header, entryID, sectionName, entryType, placeholder, data, entryItemChange }) => {
  const renderList = () => (
    data.map((entry, index) => (
      <Entry
        key={index}
        entryID={entryID}
        itemID={entry._id}
        entryItemChange={entryItemChange}
        type={entry.entryType || entryType}
        text={entry.text}
        placeholder={placeholder}
        sectionName={sectionName}
      />
    ))
  );

  return (
    <div className="daily-plans">
      <ListHeader name={header} />
      { renderList() }
      <NewBulletEntry
        entryID={entryID}
        entryItemChange={entryItemChange}
        type={entryType}
        placeholder={placeholder}
        sectionName={sectionName}
        edit
      />
    </div>
  );
};

DailySection.propTypes = {
  entryID: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  entryType: PropTypes.string,
  data: PropTypes.array,
  entryItemChange: PropTypes.func.isRequired,
};

DailySection.defaultProps = {
  placeholder: '',
  entryType: 'task',
  data: [],
};

export default DailySection;
