import React from 'react';
import { Form, Input, Button } from 'antd';
import { connect } from 'react-redux';

import { createPost as createPostAction } from '../redux/modules/posts';

const FormComponent = ({ createPost }) => {
  const onSubmit = (values) => {
    createPost(values);
  };
  return (
    <Form name="basic" onFinish={onSubmit}>
      <Form.Item label="Title" name="title">
        <Input />
      </Form.Item>

      <Form.Item label="Body" name="body">
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default connect(null, {
  createPost: createPostAction,
})(FormComponent);
