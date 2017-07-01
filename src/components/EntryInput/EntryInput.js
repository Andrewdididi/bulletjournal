import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class EntryInput extends Component {
  static propTypes = {
    text: PropTypes.string,
    placeholder: PropTypes.string,
    toggleEdit: PropTypes.func.isRequired,
    textChange: PropTypes.func.isRequired,
    newItemTextChange: PropTypes.func,
    handleNewSubmit: PropTypes.func,
    handleUpdateSubmit: PropTypes.func,
  }

  static defaultProps = {
    text: '',
    newItemTextChange: null,
    placeholder: '',
  }
  constructor(props) {
    super(props);
    this.state = {text: this.props.text};
    this.onChange = this.onChange.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
  }
  onChange(e) {
    this.props.textChange(e.target.value);
    this.props.newItemTextChange && this.props.newItemTextChange(e.target.value);
  }
  onKeyUp(e) {
    const text = e.target.value.trim();
    if (e.which === 13 ) {
      console.log('need to save this text');
      this.props.handleNewSubmit ? this.props.handleNewSubmit(text) : this.props.handleUpdateSubmit(text);
    }
  }
  render() {
    return(
      <input 
        type="text" 
        className="entry-input"
        placeholder={this.props.placeholder}
        value={this.props.text}
        onChange={this.onChange}
        onKeyUp={this.onKeyUp}
        onBlur={this.props.toggleEdit}
        autoFocus
      />
    )
  }
}

EntryInput.propTypes = {
  entryItemChange: PropTypes.func.isRequired,
}

EntryInput.defaultProps = {
  entryItemChange(){ console.log('hello')},
}