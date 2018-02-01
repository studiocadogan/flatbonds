import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Transition } from 'react-transition-group';
import * as actions from './redux/actions';

export class Modal extends Component {
  static propTypes = {
    common: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    const { modal } = this.props.common;
    const { closeModal } = this.props.actions;

    const backgroundTransitionStyle = {
      entering: { background: 'rgba(0,0,0,0)' },
      entered: { background: 'rgba(0,0,0,.5)',
        exiting: { background: 'rgba(0,0,0,0)' },
        exited: { background: 'rgba(0,0,0,0)' } }
    };

    const innerTransitionStyle = {
      entering: { transform: 'scale(0)' },
      entered: { transform: 'scale(1)' },
      exiting: { transform: 'scale(0)' },
      exited: { transform: 'scale(0)' }
    };
    return (<Transition in={modal.open} timeout={{ enter: 0, exit: 300 }} mountOnEnter unmountOnExit>
      {state =>
        (<div style={{ ...backgroundTransitionStyle[state] }} className="common-modal">
          <div className="inner" style={{ ...innerTransitionStyle[state] }}>
            <h1>{modal.title}</h1>
            <p>{modal.body}</p>
            <button onClick={() => closeModal()} className="action-button">Dismiss</button>
          </div>
        </div>)
      }
    </Transition>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    common: state.common,
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
)(Modal);
