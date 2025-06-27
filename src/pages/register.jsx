import React from 'react';
import { Button, Checkbox, Form, Input, notification } from 'antd';
import { createUserApi } from '../util/api';

const RegisterPage = () => {
    const onFinish = async (values) => {
        const {name, email, password} = values;

        const res = await createUserApi(name, email, password);

        if (res) {
            notification.success({
                message: "create user",
                description: "Success"
            })
        } else {
            notification.error({
                message: "create user",
                description: "error"
            })
        }

        console.log('Success:', res);
        };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        };

    return (
        <div style={{margin:50}}>
            <Form
                name="basic"
                labelCol={{
                span: 8,
                }}
                wrapperCol={{
                span: 16,
                }}
                style={{
                maxWidth: 600,
                }}
                initialValues={{
                remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                layout='vertical'
            >
            <Form.Item
                label="Name"
                name="name"
                rules={[
                    {
                    required: true,
                    message: 'Please input your Name!',
                    },
                ]}
                >
                <Input />
            </Form.Item>

            <Form.Item
                label="Email"
                name="email"
                rules={[
                    {
                    required: true,
                    message: 'Please input your email!',
                    },
                    ]}
                >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                    required: true,
                    message: 'Please input your password!',
                    },
                ]}
                >
                <Input.Password />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
            </Form>   
        </div>
    )
}

export default RegisterPage;