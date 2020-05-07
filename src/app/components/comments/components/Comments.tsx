/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useEffect } from 'react';
import {
  CardDeck, Card, Row, Col,
} from 'react-bootstrap';
import {
  withRouter,
  Redirect,
} from 'react-router-dom';
import {
  centerStyle, containerWidthStyle, rowSpecificStyle, backButtonStyle,
} from '../../../styles';
import LoadingSpinner from '../../loadingSpinner/components/loadingSpinner';

type singleCommentProps = {
  id?: number,
  name?: string,
  body?: string,
  email?: string
}

const Comments = ({
  fetchComments,
  comments,
  id,
  postTitle,
  history,
  error,
  setError,
}: any) => {
  useEffect(() => {
    fetchComments(id);
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
      <h3 css={centerStyle()}>{`Comments for: ${postTitle}`}</h3>
      <div css={[backButtonStyle(), centerStyle()]} onClick={() => history.goBack()}>
        {' <= '}
        Go back
      </div>
      <CardDeck css={containerWidthStyle()} className="m-auto">
        <Row css={rowSpecificStyle()}>
          {comments
            ? comments.map((comment: singleCommentProps) => (
              <Col key={comment.id} xs={12} md={6} className="my-3">
                <Card className="h-100">
                  <Card.Body>
                    <Card.Title>{comment.name}</Card.Title>
                    <hr />
                    <Card.Text>
                      <span>{comment.email}</span>
                    </Card.Text>
                    <hr />
                    <Card.Text>
                      <span>{comment.body}</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))
            : <LoadingSpinner />}
        </Row>
      </CardDeck>
    </div>
  );
};


export default withRouter(Comments);
