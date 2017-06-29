import React from 'react';
import ProTypes from 'prop-types';

import DateHeader from '../DateHeader/DateHeader';
import Entry from '../Entry/Entry';
import DailyGratitude from '../DailyGratitude/DailyGratitude';
import DailyQuotes from '../DailyQuotes/DailyQuotes';
import DailyPlan from '../DailyPlan/DailyPlan';
import DailyLessonsLearned from '../DailyLessonsLearned/DailyLessonsLearned';
import DailyWins from '../DailyWins/DailyWins';

import dateConverter from '../../lib/dateConverter';

require('./day.scss');

const Day = ({ entry, newEntry, fetchEntry }) => (
  <div className="day-container">
    <DateHeader date={dateConverter(entry.date)} />
    <DailyQuotes quote="Anything is possible" />
    <DailyGratitude data={entry.gratitude} />
    <DailyPlan data={entry.plan} />
    <DailyLessonsLearned data={entry.lessons} />
    <DailyWins data={entry.wins} />
  </div>
);

export default Day;
