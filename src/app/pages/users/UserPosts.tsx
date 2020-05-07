import React from 'react';
import {
  useParams,
} from 'react-router-dom';
import Posts from '../../components/posts/containers/Posts';


const UserPosts = () => {
  const { id } = useParams();
  return (
    <div>
      <Posts id={id.toString()} />
    </div>
  );
};

export default UserPosts;
