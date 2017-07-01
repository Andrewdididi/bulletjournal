import React from 'react';
import PropTypes from 'prop-types';

import DateHeader from '../DateHeader/DateHeader';
import Entry from '../Entry/Entry';
import DailyQuotes from '../DailyQuotes/DailyQuotes';
import DailySection from '../DailySection/DailySection';

import dateConverter from '../../lib/dateConverter';

require('./day.scss');

const Day = ({ entry, entryItemChange, newEntryItem, saveUpdateEntry }) => (
  <div className="day-container">
    <DateHeader date={dateConverter(entry.date)} />
    <DailyQuotes quote="Anything is possible" />
    <DailySection
      entryID={entry._id}
      header="Morning Gratitude"
      sectionName="gratitude"
      entryType="num1"
      placeholder="What are you grateful for?"
      data={entry.gratitude}
      entryItemChange={entryItemChange}
      newEntryItem={newEntryItem}
      saveUpdateEntry={saveUpdateEntry}
    />
    <DailySection
      entryID={entry._id}
      header="Game Plan"
      sectionName="plan"
      placeholder="Today is a win if I..."
      data={entry.plan}
      entryItemChange={entryItemChange}
      newEntryItem={newEntryItem} 
      saveUpdateEntry={saveUpdateEntry}  
    />
    <DailySection
      entryID={entry._id}
      header="Lessons Learned (Opportunities for improvement)"
      sectionName="lessons"
      entryType="note"
      placeholder="What did I learn today?"
      data={entry.lessons}
      entryItemChange={entryItemChange}
      newEntryItem={newEntryItem}
      saveUpdateEntry={saveUpdateEntry}      
    />
    <DailySection
      entryID={entry._id}
      header="Daily Wins"
      sectionName="wins"
      entryType="note"
      placeholder="What are my wins today?"
      data={entry.wins}
      entryItemChange={entryItemChange}
      newEntryItem={newEntryItem}
      saveUpdateEntry={saveUpdateEntry}
    />
  </div>
);

Day.proTypes = {
  entry: PropTypes.obj,
  entryItemChange: PropTypes.func.isRequired,
  newEntryItem: PropTypes.func.isRequired,
};

export default Day;
