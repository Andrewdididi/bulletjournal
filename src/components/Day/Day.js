import React from 'react';

import DateHeader from '../DateHeader/DateHeader';
import BulletEntry from '../BulletEntry/BulletEntry';
import NewBulletEntry from '../NewBulletEntry/NewBulletEntry';

require('./day.scss');

const Day = ({ date }) => (
  <div className="day-container">
    <DateHeader date={date} />
    <BulletEntry type="task" text="buy milk" />
    <BulletEntry type="task" text="take out the trash by tonight" />
    <BulletEntry type="migrate" text="reschedule dinner with friends" />
    <BulletEntry type="event" text="buy bread" />
    <NewBulletEntry />
  </div>
);

export default Day;
