import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import HomePage from './pages/home/Home';
import UserPostsPage from './pages/users/UserPosts';
import UsersCommentsPage from './pages/comments/usersComments';
import Navbar from './components/navbar/components/Navbar';

const App = ({ history }: any) => (
  <div>
    <Navbar>Welcome To Our PostConference Blog Posts</Navbar>
    <div onClick={() => history.goback()}></div>
    <Router>
      <Switch>
        <Route path="/user/comments/:id">
          <UsersCommentsPage />
        </Route>
        <Route path="/user/:id">
          <UserPostsPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="*">
          <Redirect to="/"></Redirect>
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;
