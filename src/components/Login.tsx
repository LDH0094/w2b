import React, { useState } from 'react';
import { Form, Input, Button, message, Card, Typography } from 'antd';
const { Title, Text } = Typography;


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
      <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "60vh",
          }}>
        <Card style={{ width: 400, height: 450 }}>
          <div style={{ display: "flex", justifyContent: "center", height: "13vh" }}>
            <Title level={1}>Company Logo </Title>
          </div>
          <div style={{height: "4vh"}}>
            <Text strong>Sign in </Text>
            <Text> to continue</Text>
          </div>

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
        </Card>
      </div>
  );
};

export default Login;
