import React, { useState } from "react";
import { Form, Input, Button, message, Card, Typography } from "antd";
const { Title, Text } = Typography;

/**
 *
 *  README!! changing this component will automatically reflect
 *  /login view desing. So you can just work around with this component to desing your things.
 *
 */


const Login: React.FC = () => {

    const [activeTabKey2, setActiveTabKey2] = useState<string>('login');
    const onTab2Change = (key: string) => {
        setActiveTabKey2(key);
    };

    const [loading, setLoading] = useState(false);
    const onFinish = (values: any) => {
        // Here you can handle the login API call

        console.log("logging", values.username);
        console.log("logging", values.password);
        setLoading(true);
        const _body = { username: values.username, password: values.password };
        fetch("http://127.0.0.1:8000/login", {
            mode: "no-cors",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(_body),
        })
            .then((res) => {
                console.log("Logged in Successfully!!!");
                setTimeout(() => {
                    message.success("Logged in successfully!");
                    setLoading(false);
                }, 2000); // Simulating API call
            })
            .catch((err) => {
                console.log("Login failed");
            });
    };

    const onRegister = (values: any) => {
        // Here you can handle the registration API call

        console.log("logging", values.username);
        console.log("logging", values.password);
        setLoading(true);
        const _body = { username: values.username, password: values.password };
        fetch("http://127.0.0.1:8000/register", {
            mode: "no-cors",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(_body),
        })
            .then((res) => {
                console.log("Regisration Successful!!!");
                setTimeout(() => {
                    message.success("Regisration Successful!");
                    setLoading(false);
                }, 2000); // Simulating API call
            })
            .catch((err) => {
                console.log("Regisration failed");
            });
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };

    const onRegisterFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };


    const tabListNoTitle = [
        {
            key: 'login',
            label: 'LOGIN',
            itemColor:"white",
        },
        {
            key: 'register',
            label: 'REGISTER',
            itemColor:"white",
        },
    ];

    const contentListNoTitle: Record<string, React.ReactNode> = {
        login:
            <div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        height: "13vh",
                    }}
                >
                    <img
                        src={"https://i.ibb.co/cQtV1T6/logo.png"}
                        alt="W2BSG"
                        style={{
                            width: "20vw",
                            height: "9vh",
                        }}
                    />
                </div>
                <div style={{ height: "4vh" }}>
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
                        label="Username"
                        name="username"
                        rules={[
                            { required: true, message: "Please input your username!" },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            { required: true, message: "Please input your password!" },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" loading={loading}>
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
            </div>,

        register: <div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    height: "13vh",
                }}
            >
                <img
                    src={"https://i.ibb.co/cQtV1T6/logo.png"}
                    alt="W2BSG"
                    style={{
                        width: "20vw",
                        height: "9vh",
                    }}
                />
            </div>
            <div style={{ height: "4vh" }}>
                <Text strong>Sign up </Text>
                <Text> to get full access to the site</Text>
            </div>

            <Form
                name="login-form"
                initialValues={{ remember: true }}
                onFinish={onRegister}
                onFinishFailed={onRegisterFailed}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        { required: true, message: "Please input your username!" },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        { required: true, message: "Please input your password!" },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" loading={loading}>
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        </div>,
    };
    return (
        <div
            style={{
                backgroundImage:
                    "linear-gradient(to right, transparent 20%, #001196 75%), url(https://www.ateneo.edu/sites/default/files/2021-12/AteneoEagleSlhouette.png)",
                backgroundRepeat: "no-repeat",
                height: "80vh",
                backgroundSize: "100% 100%",
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "70vh",
                }}
            >
                <Card
                    style={{
                        height: "41vh",
                        background:
                            "linear-gradient(to bottom, transparent 0%, #ffffff 100%)",
                        border: "0px",
                    }}
                    tabList={tabListNoTitle}
                    activeTabKey={activeTabKey2}
                    onTabChange={onTab2Change}
                    tabProps={{
                        size: 'middle',
                    }}
                >
                    {contentListNoTitle[activeTabKey2]}
                </Card>
            </div>
        </div>
    );
};

export default Login;
