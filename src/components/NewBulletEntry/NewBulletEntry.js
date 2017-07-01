import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Entry from '../Entry/Entry';

require('./newBulletEntry.scss');

export default class NewBulletEntry extends Component {
  static propTypes = {
    entryID: PropTypes.string.isRequired,
    entryType: PropTypes.string,
    placeholder: PropTypes.string,
    sectionName: PropTypes.string.isRequired,
    entryItemChange: PropTypes.func.isRequired,
    newEntryItem: PropTypes.func.isRequired,
    edit: PropTypes.boolean,
  }
  static defaultProps = {
    entryType: 'task',
    placeholder: '',
    newItemTextChange: null,
    edit: false,
  }
  constructor(props) {
    super(props);
    this.state = { text: this.props.text };

    this.changeEventType = this.changeEventType.bind(this);
    this.newItemTextChange = this.newItemTextChange.bind(this);
    this.handleNewSubmit = this.handleNewSubmit.bind(this);
  }
  changeEventType() {
    console.log('changeEntryType');
  }
  newItemTextChange(inputText) {
    this.setState({ text: inputText });
  }
  handleNewSubmit(inputText) {
    const data = {
      text: inputText,
      entryID: this.props.entryID,
      sectionName: this.props.sectionName,
      entryType: this.props.type,
    }
    this.props.newEntryItem(data);
    this.newItemTextChange('');
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
          handleNewSubmit={this.handleNewSubmit}
          edit
        />
      </div>
    );
  }
}
