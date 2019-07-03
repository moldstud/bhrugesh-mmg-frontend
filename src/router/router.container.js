import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Router from './router';

// routes
import home from '../pages/home/home.routes';

export const mapStateToProps = () => ({
  routes: [...home]
});

const mapDispatchToProps = {};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Router)
);
