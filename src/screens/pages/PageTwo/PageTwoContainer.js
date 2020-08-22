import React from 'react';
import PageTwo from './PageTwo';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

const PageTwoContainer = (props) => {
  return <PageTwo {...props} />;
};

const mapStateToProps = (state) => ({
  user: state.user.user,
});

export default compose(
  connect(mapStateToProps, {}),
  withRouter
)(PageTwoContainer);
