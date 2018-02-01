import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import * as commonActions from '../common/redux/actions';


export class EditProfile extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      userData: this.props.home.userData
    };
  }

  updateProfile(e) {
    const { updateProfile, openModal } = this.props.actions;
    const { userData } = this.state;

    const modal = {
      title: 'Success',
        body: 'You have successfully saved your new details',
        open: true
    }

    const errorModal = {
      title: 'Failure',
        body: 'Your password is incorrect, please try again',
        open: true
    }

      e.preventDefault();
    if(this.state.oldPassword === this.props.home.userData.password) {
        updateProfile(userData);
        openModal(modal);
    }
    else{
      openModal(errorModal)
    }



  }

  render() {
    const { userData } = this.state;

    return (
      <div className="home-edit-profile">
        <div className="bond-container settings">
          <h3>Update your profile</h3>

          <form>
            <label>Enter your old password to change your details</label>
            <input onChange={e => this.setState({ oldPassword: e.target.value })} type="password" />
            <label>First Name</label>
            <input value={userData.firstName} onChange={e => this.setState({ userData: { ...userData, firstName: e.target.value } })} />
            <label>Last Name</label>
            <input value={userData.lastName} onChange={e => this.setState({ userData: { ...userData, lastName: e.target.value } })} />
            <label>Password</label>
            <input type="password" onChange={e => this.setState({ userData: { ...userData, password: e.target.value } })} />
            <label>Telephone Number</label>
            <input value={userData.phoneNumber} onChange={e => this.setState({ userData: { ...userData, phoneNumber: e.target.value } })} />
            <label>Email Address</label>
            <input value={userData.email} onChange={e => this.setState({ userData: { ...userData, email: e.target.value } })} />
            <button className="action-button" onClick={::this.updateProfile}>Save</button>
          </form>
        </div>
      </div>
    );
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
    actions: bindActionCreators({ ...actions, ...commonActions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile);
