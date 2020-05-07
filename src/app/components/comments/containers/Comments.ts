import { connect } from 'react-redux';
import { getComments, getError, getLoading } from '../selectors';
import { getPostTitle } from '../../posts/selectors';
import Comments from '../components/Comments';
import { fetchComments, setError } from '../actions';

const mapStateToProps = (state: Object) => ({
  comments: getComments(state),
  error: getError(state),
  loading: getLoading(state),
  postTitle: getPostTitle(state),
});

const mapDispatchToProps = {
  fetchComments,
  setError,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Comments);
