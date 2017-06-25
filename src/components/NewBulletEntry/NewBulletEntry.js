import React, { Component } from 'react';

require('./newBulletEntry.scss');

export default class NewBulletEntry extends Component {
  constructor(props) {
    super(props);
 
    this.state = { text: this.props.text || '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    const text = e.target.value.trim();
    if (e.which === 13) {
      console.log('enter', text);
      this.setState({ text: '' });
    }
  }

  render() {
    return(
      <div className="new-entry-container">
        <input
          type="text"
          className="new-entry"
          placeholder="+ New Entry"
          value={this.state.text}
          onChange={this.handleChange}
          onKeyDown={this.handleSubmit}
        />
      </div>
    );
  }
}
