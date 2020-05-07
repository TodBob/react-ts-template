import { connect } from 'react-redux';
import { getUsers, getError, getLoading } from '../selectors';
import Users from '../components/Users';
import { fetchUsers, setUserName } from '../actions';

const mapStateToProps = (state: Object) => ({
  users: getUsers(state),
  error: getError(state),
  loading: getLoading(state),

});

const mapDispatchToProps = {
  fetchUsers,
  setUserName,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Users);
