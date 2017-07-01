import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types' 

import { fetchEntry, entryItemChange, saveUpdateEntry, newEntryItem } from '../../actions/EntryListActions';
import Day from '../../components/Day/Day';
import NewBulletEntry from '../../components/NewBulletEntry/NewBulletEntry';


class EventList extends Component {
  static PropTypes = {
    entryList: PropTypes.object.isRequired,
    entryItemChange: PropTypes.func.isRequired,
    newEntryItem: PropTypes.func.isRequired,
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
        entryItemChange={this.props.entryItemChange}
        newEntryItem={this.props.newEntryItem}
        saveUpdateEntry={this.props.saveUpdateEntry}
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
    entryItemChange: input => dispatch(entryItemChange(input)),
    newEntryItem: input => dispatch(newEntryItem(input)),
    saveUpdateEntry: input => dispatch(saveUpdateEntry(input)),
  };
}

export default connect(MapStateToProps, MapDispatchToProps)(EventList);
