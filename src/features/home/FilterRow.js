import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FilterRow extends Component {
  static propTypes = {
    filterFunction: PropTypes.func.isRequired,
    filterState: PropTypes.string.isRequired,
    setFilterText: PropTypes.func.isRequired
  };

  render() {
    const filterTypes = [
      'address',
      'brand',
      'status',
      'user'
    ];
    const { filterFunction, filterState, setFilterText } = this.props;

    return (
      <div className="home-filter-row">
        <input onChange={e => setFilterText({ filterText: e.target.value })} />
        {filterTypes.map(filter => [
          <button className={`action-button ${filterState === filter ? 'selected' : ''}`} onClick={() => filterFunction({ filter: filterState !== filter ? `${filter}` : 'address' })}>{filter}</button>,
        ])}
      </div>
    );
  }
}
