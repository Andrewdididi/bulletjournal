import React from 'react';
import ProTypes from 'prop-types';

import DateHeader from '../DateHeader/DateHeader';
import Entry from '../Entry/Entry';
import DailyQuotes from '../DailyQuotes/DailyQuotes';
import DailySection from '../DailySection/DailySection';

import dateConverter from '../../lib/dateConverter';

require('./day.scss');

const Day = ({ entry, newEntry, fetchEntry, entryPlan }) => (
  <div className="day-container">
    <DateHeader date={dateConverter(entry.date)} />
    <DailyQuotes quote="Anything is possible" />
    <DailySection
      header="Morning Gatitude"
      entryType="num1"
      placeholder="What are you grateful for?"
      data={entry.gratitude}
      entryPlan={entryPlan}
    />
    <DailySection
      header="Game Plan"
      placeholder="Today is a win if I..."
      data={entry.plan}
      entryPlan={entryPlan}
    />
    <DailySection
      header="Lessons Learned (Opportunities for improvement)"
      entryType="note"
      placeholder="What did I learn today?"
      data={entry.lessons}
      entryPlan={entryPlan}
    />
    <DailySection
      header="Daily Wins"
      entryType="note"
      placeholder="What are my wins today?"
      data={entry.wins}
      entryPlan={entryPlan}
    />
  </div>
);

export default Day;
