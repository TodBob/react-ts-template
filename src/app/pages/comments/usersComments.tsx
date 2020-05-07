import React from 'react';
import {
  useParams,
} from 'react-router-dom';
import Comments from '../../components/comments/containers/Comments';


const UserPosts = () => {
  const { id } = useParams();
  return (
    <div>
      <Comments id={id.toString()} />
    </div>
  );
};

export default UserPosts;
