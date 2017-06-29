import React, { Component } from 'react';
import PropTypes from 'prop-types';

import EntryInput from '../EntryInput/EntryInput';

require('./entry.scss');

export default class Entry extends Component {
  static propTypes = {
    edit: PropTypes.boolean,
    text: PropTypes.string,
    type: PropTypes.string,
  }
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text || '',
      edit: this.props.edit || false,
      placeholder: this.props.placeholder || '',
    };
    this.toggleExpand = this.toggleExpand.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }
  toggleEdit() {
    console.log('toggleEdit');
    if ( this.state.text.length < 1 ) {
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
    const { type, text } = this.props;

    const textEntry = <p className="entry-text" onClick={this.toggleEdit}>{text}</p>;
    const inputEntry = <EntryInput text={text} placeholder={this.state.placeholder} toggleEdit={this.toggleEdit}/>;
    return (
      <div className="entry" >
        <span className={`entry-type icon ${type}`} onClick={this.toggleComplete} ></span>
        { this.state.edit ? inputEntry : textEntry }
      </div>
    );
  }
}

