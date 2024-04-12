import React, { useState } from "react";
import { Form, Input, Button, message, Card, Typography } from "antd";
import { Avatar, Space } from "antd";
import { UserOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;


/**
 *
 *  README!! changing this component will automatically reflect
 *  /login view desing. So you can just work around with this component to desing your things.
 *
 */


const UserProfile: React.FC = () => {


    return (
        <div
            style={{
                backgroundImage:
                    "linear-gradient(transparent 20%, grey 100%), url(https://cdn.pixabay.com/photo/2020/05/02/07/32/gaming-5120169_1280.jpg)",
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
                        height: "20vh",
                        width: "20vw",
                        background:
                            "linear-gradient(to top, transparent 0%, #d3d3d3 0%)",
                        border: "0px",
                        display: "flex",
                        justifyContent: "left",
                    }}
                ><Space direction = "horizontal" style ={{height: "13vh",}}>
                    <Avatar size= "large" src="https://api.dicebear.com/7.x/miniavs/svg?seed=3"  />
                    <p>Username</p>
                    <p>Arbitrary Value<p>(NUMBER)</p></p>
                </Space>
                </Card>
            </div>
        </div>
    );
};

export default UserProfile;
