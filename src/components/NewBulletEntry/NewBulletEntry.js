import React, { Component } from 'react';

import Entry from '../Entry/Entry';

require('./newBulletEntry.scss');

export default class NewBulletEntry extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      text: this.props.text || '' ,
      entryType: this.props.type || 'task',
      placeholder: this.props.placeholder || '',
    };

    this.changeEventType = this.changeEventType.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeEventType() {
    console.log('changeEntryType');
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    const text = e.target.value.trim();
    if (e.which === 13) {
      this.props.newEntry({ date: 'June 19, 2017', plan: { entryType: 'task', text: this.state.text } });
      this.setState({ text: '' });
      this.props.fetchEntry();
    }
  }

  render() {
    const placeholder = {
     task: 'Add Task: Buy Milk',
     event: 'Add Event: 10AM Meeting with Bob',
     note: 'Add Note: Mark does not like pickles!',
    };

    return(
      <div className="new-entry-container" >
        <Entry
          type={this.state.entryType}
          placeholder={this.state.placeholder}
          sectionName={this.props.sectionName}
          edit
        />
      </div>
    );
  }
}
