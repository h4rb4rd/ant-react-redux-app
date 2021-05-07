import React from 'react';
import { Card, Button } from 'antd';

const Post = ({ title, body, deletePost }) => {
  return (
    <Card>
      <h1>{title}</h1>
      <p>{body}</p>
      <Button onClick={deletePost} type="primary">
        Delete
      </Button>
    </Card>
  );
};

export default Post;
