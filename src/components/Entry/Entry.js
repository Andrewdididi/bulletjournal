import React, { Component } from 'react';
import PropTypes from 'prop-types';

import EntryInput from '../EntryInput/EntryInput';

require('./entry.scss');

export default class Entry extends Component {
  static propTypes = {
    key: PropTypes.number.isRequired,
    itemID: PropTypes.string.isRequired,
    edit: PropTypes.boolean,
    newItem: PropTypes.boolean,
    entryID: PropTypes.string.isRequired,
    text: PropTypes.string,
    type: PropTypes.string,
    sectionName: PropTypes.string,
    entryItemChange: PropTypes.func,
    newItemTextChange: PropTypes.func,
    newEntryItem: PropTypes.func,
    handleNewSubmit: PropTypes.func,
  }
  static defaultProps = {
    edit: false,
    newItem: false,
    text: '',
    type: 'task',
    placeholder: '',
    sectionName: '',
    newItemTextChange: null,
  }
  constructor(props) {
    super(props);
    this.state = {
      edit: this.props.edit,
      text: this.props.text,
    };
    this.toggleExpand = this.toggleExpand.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.textChange = this.textChange.bind(this);
    this.onEntryChange = this.onEntryChange.bind(this);
    this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this);
  }
  toggleEdit() {
    console.log('toggleEdit');
    if (this.props.text.length < 1) {
      this.setState({ edit: true });
      return;
    }
    this.setState({
      edit: !this.state.edit,
      text: this.props.text,
    });
  }
  toggleExpand() {
    console.log('toggleExpand');
  }
  onEntryChange(inputText){
    const data = {
      text: inputText,
      entryID: this.props.entryID,
      itemID: this.props.itemID,
      sectionName: this.props.sectionName,
      entryType: this.props.type,
    }
    this.props.entryItemChange(data)
  }
  textChange(inputText) {
    this.setState({ text: inputText },
      this.onEntryChange(inputText)
    );
  }
  handleUpdateSubmit(inputText){
    const data = {
      text: inputText,
      entryID: this.props.entryID,
      itemID: this.props.itemID,
      sectionName: this.props.sectionName,
      entryType: this.props.type,
    }
    this.props.saveUpdateEntry(data);
    this.setState({ edit: false });
  }
  render() {
    const { text, type, placeholder, newItemTextChange, sectionName, handleNewSubmit } = this.props;
    const textEntry = <p className="entry-text" onClick={this.toggleEdit}>{this.props.text}</p>;
    const inputEntry = 
      <EntryInput 
        sectionName={sectionName} 
        text={text}
        type={type} 
        placeholder={placeholder} 
        newItemTextChange={newItemTextChange}
        handleNewSubmit={handleNewSubmit}
        handleUpdateSubmit={this.handleUpdateSubmit}
        toggleEdit={this.toggleEdit}
        textChange={this.textChange}
        onEntryChange={this.onEntryChange}
        newItem={this.props.newItem}
      />;
    
    return (
      <div className="entry" >
        <span className={`entry-type icon ${type}`} onClick={this.toggleComplete} ></span>
        { this.state.edit ? inputEntry : textEntry }
      </div>
    );
  }
}

