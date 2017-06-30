import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Entry from '../Entry/Entry';

require('./newBulletEntry.scss');

export default class NewBulletEntry extends Component {
  static propTypes = {
    text: PropTypes.string,
    entryType: PropTypes.string,
    placeholder: PropTypes.string,
    sectionName: PropTypes.string,
    entryItemChange: PropTypes.func.isRequired,
    edit: PropTypes.boolean,
  }
  static defaultProps = {
    text: '',
    entryType: 'task',
    placeholder: '',
    newItemTextChange: null,
  }
  constructor(props) {
    super(props);
    this.state = { text: this.props.text };

    this.changeEventType = this.changeEventType.bind(this);
    this.newItemTextChange = this.newItemTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeEventType() {
    console.log('changeEntryType');
  }

  newItemTextChange(inputText) {
    this.setState({ text: inputText });
  }

  handleSubmit(e) {
    const text = e.target.value.trim();
    if (e.which === 13) {
      this.setState({ text: '' });
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
          text={this.state.text}
          type={this.props.entryType}
          placeholder={this.props.placeholder}
          sectionName={this.props.sectionName}
          entryItemChange={this.props.entryItemChange}
          newItemTextChange={this.newItemTextChange}
          edit
        />
      </div>
    );
  }
}
