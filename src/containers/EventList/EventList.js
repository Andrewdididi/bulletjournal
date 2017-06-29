import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types' 

import { fetchEntry, newEntry } from '../../actions/index';
import Day from '../../components/Day/Day';
import NewBulletEntry from '../../components/NewBulletEntry/NewBulletEntry';

class EventList extends Component {
  static propTypes = {
    entries: PropTypes.array,
    newEntry: PropTypes.func.isRequired
  }

  constructor(props) {
     super(props); 
     this.state = {};
     this.renderDay = this.renderDay.bind(this);
   }

  componentWillMount() {
    this.props.fetchEntry();
  }

  renderDay() {
    if (this.props.entries.length < 1) {
      return <NewBulletEntry newEntry={this.props.newEntry} fetchEntry={this.props.fetchEntry} />;
    }
    console.log('this.props.entries====', this.props.entries);
    return this.props.entries.map(entry => <Day entry={entry} newEntry={this.props.newEntry} fetchEntry={this.props.fetchEntry}/> );
  }

  render() {
    return (
      <div className="event-list-container">
        <h1>Event List Container</h1>
        {this.renderDay()}
      </div>
    );
  }
}
function MapStateToProps(state) {
  return {
    entries: state.entry,
  };
}

function MapDispatchToProps(dispatch) {
  return {
    fetchEntry: () => dispatch(fetchEntry()),
    newEntry: input => dispatch(newEntry(input)),
  };
}

export default connect(MapStateToProps, MapDispatchToProps)(EventList);
