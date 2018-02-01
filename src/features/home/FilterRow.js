import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FilterRow extends Component {
  static propTypes = {
    filterFunction: PropTypes.func.isRequired,
    filterState: PropTypes.string.isRequired
  };

  render() {
    const filterTypes = [
      'address',
      'brand',
      'status',
      'user'
    ];
    const { filterFunction, filterState } = this.props;

    return (
      <div className="home-filter-row">
        <h3>Filter By:</h3>
        {filterTypes.map(filter => [
          <button className={`action-button ${filterState === filter ? 'selected' : ''}`} onClick={() => filterFunction({ filter: filterState !== filter ? `${filter}` : 'null' })}>{filter}</button>,
        ])}
      </div>
    );
  }
}
