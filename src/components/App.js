import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';

import {
  getPosts as getPostsAction,
  deletePost as deletePostAction,
} from '../redux/modules/posts';

import Post from './Post';
import Form from './Form';

const styles = {
  display: 'grid',
  gridGap: '16px',
  gridTemplateColumns: 'repeat(4, 1fr)',
  padding: '20px',
};

const App = ({ posts, getPosts, deletePost }) => {
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div style={styles}>
      <Form />
      {posts.map(({ title, body, id }) => {
        return (
          <Post
            deletePost={() => deletePost(id)}
            key={id}
            title={title}
            body={body}
          />
        );
      })}
    </div>
  );
};

export default connect(({ posts }) => ({ posts: posts.posts }), {
  getPosts: getPostsAction,
  deletePost: deletePostAction,
})(App);
