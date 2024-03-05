import logo from './logo.png';
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
            backgroundImage: 'linear-gradient(to right, transparent 20%, #001196 75%), url(https://www.ateneo.edu/sites/default/files/2021-12/AteneoEagleSlhouette.png)',
            backgroundRepeat:"no-repeat",
            height: '80vh',
            backgroundSize: '100% 100%'
          }}>
        <div
            style={{display: "flex",
        justifyContent: "center",
        alignItems: "center",
            height:"70vh"}}>
        <Card style={{height: "41vh",
        background:'linear-gradient(to bottom, transparent 0%, #ffffff 100%)',
            border: '0px'}}>
          <div style={{ display: "flex", justifyContent: "center", height: "13vh" }}>
              <img src={logo} alt="W2BSG" style={{
                  width:'20vw',
                  height:'9vh'
              }} />
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
      </div>
  );
};

export default Login;
