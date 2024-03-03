import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';


/**
 * 
 *  README!! changing this component will automatically reflect
 *  /login view desing. So you can just work around with this component to desing your things.
 * 
 */

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = (values: any) => {
    setLoading(true);
    // Here you can handle the login API call
    setTimeout(() => {
      setLoading(false);
      message.success('Logged in successfully!');
    }, 2000); // Simulating API call
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
