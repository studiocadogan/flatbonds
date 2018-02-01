import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Menu extends Component {
  static propTypes = {

  };

  render() {
    return (
      <div className="common-menu">

        <Link to={'/'}>Flatbonds</Link>
        <Link to={'/performance'}>Performance</Link>
        <Link to={'/profile'}>Settings</Link>
      </div>
    );
  }
}
