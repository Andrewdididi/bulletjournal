import React from 'react';
import ProTypes from 'prop-types';

import DateHeader from '../DateHeader/DateHeader';
import Entry from '../Entry/Entry';
import DailyQuotes from '../DailyQuotes/DailyQuotes';
import DailySection from '../DailySection/DailySection';

import dateConverter from '../../lib/dateConverter';

require('./day.scss');

const Day = ({ entry, newEntry, fetchEntry, entryItemChange }) => (
  <div className="day-container">
    <DateHeader date={dateConverter(entry.date)} />
    <DailyQuotes quote="Anything is possible" />
    <DailySection
      header="Morning Gratitude"
      entryType="num1"
      placeholder="What are you grateful for?"
      data={entry.gratitude}
      entryItemChange={entryItemChange}
    />
    <DailySection
      header="Game Plan"
      placeholder="Today is a win if I..."
      data={entry.plan}
      entryItemChange={entryItemChange}
    />
    <DailySection
      header="Lessons Learned (Opportunities for improvement)"
      entryType="note"
      placeholder="What did I learn today?"
      data={entry.lessons}
      entryItemChange={entryItemChange}
    />
    <DailySection
      header="Daily Wins"
      entryType="note"
      placeholder="What are my wins today?"
      data={entry.wins}
      entryItemChange={entryItemChange}
    />
  </div>
);

export default Day;
