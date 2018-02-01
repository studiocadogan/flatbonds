import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Loader extends Component {
  static propTypes = {
    mini: PropTypes.bool
  };

  static defaultProps = {
    mini: false
  }

  render() {
    return (
      <div className={`loader-container ${this.props.mini ? 'mini' : ''}`}>
        <div className="loader" />
      </div>
    );
  }
}
