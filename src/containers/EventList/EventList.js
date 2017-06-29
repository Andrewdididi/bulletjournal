import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types' 

import { fetchEntry, entryPlan, newEntry } from '../../actions/EntryListActions';
import Day from '../../components/Day/Day';
import NewBulletEntry from '../../components/NewBulletEntry/NewBulletEntry';


class EventList extends Component {
  static propTypes = {
    entryList: PropTypes.object.isRequired,
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
    console.log('this.props.entryList====', this.props.entryList);
    if (this.props.entryList.entries.length < 1) {
      return (
        <NewBulletEntry 
          newEntry={this.props.entryList.entries} 
          fetchEntry={this.props.fetchEntry} 
        />
      )
    }
    return this.props.entryList.entries.map(entry => (
      <Day 
        entry={entry} 
        newEntry={this.props.newEntry} 
        fetchEntry={this.props.fetchEntry}
        entryPlan={this.props.entryPlan}
      /> 
    ))
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
    entryList: state.entryList,
  };
}

function MapDispatchToProps(dispatch) {
  return {
    fetchEntry: () => dispatch(fetchEntry()),
    entryPlan: input => dispatch(entryPlan(input)),
    newEntry: input => dispatch(newEntry(input)),
  };
}

export default connect(MapStateToProps, MapDispatchToProps)(EventList);
