/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useEffect } from 'react';
import {
  CardDeck, Card, Row, Col,
} from 'react-bootstrap';
import {
  Link,
} from 'react-router-dom';
import LoadingSpinner from '../../loadingSpinner/components/loadingSpinner';
import { containerWidthStyle, rowSpecificStyle } from '../../../styles';

type userProps = {
  id?: number,
  name?: string,
  email?: string,
  phone?: string,
  website?: string,
  company: {
    catchPhrase: string
  }
}

const Users = ({ fetchUsers, setUserName, users }: any) => {
  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CardDeck css={containerWidthStyle()} className="m-auto">
      <Row css={rowSpecificStyle()} className="m-auto d-flex">
        {users
          ? users.map((user: userProps) => (
            <Col key={user.id} xs={12} md={6} lg={4} className="my-3">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>{user.name}</Card.Title>
                  <hr />
                  <Card.Text>
                    <span>
                      Email:
                      {' '}
                      {user.email}
                    </span>
                    <br />
                    <span>
                      Phone:
                      {' '}
                      {user.phone}
                    </span>
                    <br />
                    <span>
                      Web:
                      {' '}
                      {user.website}
                    </span>
                  </Card.Text>
                  <hr />
                  <Card.Text>
                    <span> Topics:</span>
                    <br />
                    <span>{user.company.catchPhrase}</span>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Link onClick={() => setUserName(user.name)} to={`/user/${user.id}`}>
                    Go to
                    {' '}
                    {user.name}
                    {' '}
                    posts
                  </Link>
                </Card.Footer>
              </Card>
            </Col>
          ))

          : <div><LoadingSpinner /></div>}
      </Row>
    </CardDeck>
  );
};


export default Users;
