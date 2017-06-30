import React, { Component } from 'react';
import PropTypes from 'prop-types';

import EntryInput from '../EntryInput/EntryInput';

require('./entry.scss');

export default class Entry extends Component {
  static propTypes = {
    edit: PropTypes.boolean,
    text: PropTypes.string,
    type: PropTypes.string,
    sectionName: PropTypes.string,
    entryItemChange: PropTypes.func,
  }
  static defaultProps = {
    edit: 'false',
    text: '',
    placeholder: '',
  }
  constructor(props) {
    super(props);
    this.state = {
      edit: this.props.edit || false,
    };
    this.toggleExpand = this.toggleExpand.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
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
  render() {
    const { type, entryItemChange } = this.props;
    const textEntry = <p className="entry-text" onClick={this.toggleEdit}>{this.props.text}</p>;
    const inputEntry = <EntryInput text={this.props.text} placeholder={this.props.placeholder} toggleEdit={this.toggleEdit} entryItemChange={entryItemChange} />;
    
    return (
      <div className="entry" >
        <span className={`entry-type icon ${type}`} onClick={this.toggleComplete} ></span>
        { this.state.edit ? inputEntry : textEntry }
      </div>
    );
  }
}

