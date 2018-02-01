import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';

import * as actions from './redux/actions';
import Loader from './Loader';
import { Link } from 'react-router-dom';
import FilterRow from './FilterRow';

export class Flatbonds extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  constructor() {
    super();
    this.setFilter = this.setFilter.bind(this);
    this.state = {
      filter: 'address',
      filterText: ''
    };
  }
  setFilter({ filter }) {
    this.setState({ filter });
  }

  filterBy() {
    const { flatBonds } = this.props.home;

    switch (this.state.filter) {
      case 'status' :
        return [...flatBonds.filter(flatBond => flatBond.status.toLowerCase().indexOf(this.state.filterText) > -1)];
      case 'address' :
        return [...flatBonds.filter(flatBond => flatBond.address.toLowerCase().indexOf(this.state.filterText) > -1)];
      default :
        return [...flatBonds];
    }
  }

  renderFlatbond({ flatBond, index }) {
    const { address, status, expiryDate } = flatBond;
    return (<tr key={index}>
      <td>{address}</td>
      <td>{status}</td>
      <td>{moment(expiryDate).format('DD-MM-YY')}</td>
      <td><Link to="/">View</Link></td>
    </tr>);
  }

  render() {
    const { flatBonds, getFlatbondsPending, addNewFlatbondPending } = this.props.home;
    const { addNewFlatbond } = this.props.actions;
    const { filter } = this.state;
    console.log(filter);

    return (<Fragment>
      <h1>Your Flatbonds</h1>
      <button className="action-button" onClick={() => !addNewFlatbondPending && addNewFlatbond()}>
        {addNewFlatbondPending ? 'Please wait' : 'Create new Flatbond'}
      </button>
      <FilterRow setFilterText={({ filterText }) => this.setState({ filterText })} filterFunction={this.setFilter} filterState={filter} />

      {!flatBonds ? (!getFlatbondsPending ? <h1>No Flatbonds found</h1> : <Loader />) : <table className="home-flatbonds">
        <thead>
          <tr>
            <th>Address</th>
            <th>Status</th>
            <th>Expiry Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.filterBy().map((flatBond, index) => this.renderFlatbond({ flatBond, index }))}
        </tbody>
      </table>}
    </Fragment>);
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    home: state.home,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Flatbonds);
