import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import PopupModal from '../common/Modal';

import Menu from '../common/Menu';

export class App extends Component {
  static propTypes = {
    children: PropTypes.node,
    actions: PropTypes.object.isRequired
  };

  static defaultProps = {
    children: 'No content.',
  };

  componentDidMount() {
    const { getFlatbonds } = this.props.actions;
    getFlatbonds();
  }

  render() {
    return (
      <div className="home-app">
        <PopupModal />
        <Menu />
        <div className="page-container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

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
)(App);

