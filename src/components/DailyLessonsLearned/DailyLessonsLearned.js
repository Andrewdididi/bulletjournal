import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ListHeader from '../ListHeader/ListHeader';
import Entry from '../Entry/Entry';
import NewBulletEntry from '../NewBulletEntry/NewBulletEntry';

const DailyLessonsLearned = ({ data }) => {
  const renderLesson = () => (
    data.map(lesson => (
      <Entry
        type="note"
        text={lesson.text}
        placeholder="What lesson did I learn today?"
      />
    ))
  );

  return (
    <div className="lessons-learned">
      <ListHeader name="Lessons Learned: (Opportunities for improvement)" />
      { renderLesson() }
      <NewBulletEntry
        type="note"
        placeholder="What lesson did I learn today?"
        edit
      />
    </div>
  );
};

export default DailyLessonsLearned;
