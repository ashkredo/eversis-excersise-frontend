import React from 'react';
import PageOne from './PageOne';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { updateUserData } from 'redux/reducers/userReducer';

const PageOneContainer = (props) => {
  return <PageOne {...props} />;
};

const mapStateToProps = (state) => ({
  user: state.user.user,
});

export default compose(
  connect(mapStateToProps, { updateUserData }),
  withRouter
)(PageOneContainer);
