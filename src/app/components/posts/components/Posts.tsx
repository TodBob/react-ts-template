/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useEffect } from 'react';
import {
  CardDeck, Card, Row, Col,
} from 'react-bootstrap';
import {
  Link,
  withRouter,
  Redirect,
} from 'react-router-dom';
import LoadingSpinner from '../../loadingSpinner/components/loadingSpinner';
import {
  containerWidthStyle, centerStyle, rowSpecificStyle, backButtonStyle,
} from '../../../styles';

type postsProps = {
  id?: number,
  title?: string,
  body?: string,
}

const Posts = ({
  fetchPosts,
  posts,
  id,
  setPostTitle,
  userName,
  history,
  error,
  setError,
}: any) => {
  useEffect(() => {
    fetchPosts(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {error ? (
        <Redirect to="/">
          {setError(false)}
        </Redirect>
      ) : null}
      <hr />
      <h3 css={centerStyle()}>{`${userName}'s posts`}</h3>
      <div css={[backButtonStyle(), centerStyle()]} onClick={() => history.goBack()}>
        {' <= '}
        Go back
      </div>
      <CardDeck css={containerWidthStyle()} className="m-auto">
        <Row css={rowSpecificStyle()}>
          {posts
            ? posts.map((post: postsProps) => (
              <Col key={post.id} xs={12} md={6} className="my-3">
                <Card className="h-100">
                  <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <hr />
                    <hr />
                    <Card.Text>
                      <span> Topics:</span>
                      <br />
                      <span>{post.body}</span>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Link onClick={() => setPostTitle(post.title)} to={`/user/comments/${post.id}`}>
                      Show me comments
                    </Link>
                  </Card.Footer>
                </Card>
              </Col>
            ))
            : <LoadingSpinner />}
        </Row>
      </CardDeck>
    </div>
  );
};


export default withRouter(Posts);
