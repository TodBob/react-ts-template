import { connect } from 'react-redux';
import {
  getPosts, getError, getLoading,
} from '../selectors';
import {
  getUserName,
} from '../../users/selectors';
import Posts from '../components/Posts';
import { fetchPosts, setPostTitle, setError } from '../actions';

const mapStateToProps = (state: Object) => ({
  posts: getPosts(state),
  error: getError(state),
  loading: getLoading(state),
  userName: getUserName(state),
});

const mapDispatchToProps = {
  fetchPosts,
  setPostTitle,
  setError,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Posts);
