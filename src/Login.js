import React from "react";
import "./Login.css";
import { Form, Input } from "antd";

function Login() {
  const [form] = Form.useForm();

  const onFinish = () => {
    //we will check our mock data with entered email
  };

  return (
    <div className="login-container">
      <img className="logo" src="react-role.png" alt="logo" />
      <h1 className="title">Login Your Account</h1>
      <Form
        size="large"
        name="login"
        form={form}
        layout="vertical"
        onFinish={onFinish}
      >
        <Form.Item
          label="Email address"
          name="email"
          rules={[
            {
              type: "email",
              required: true,
              message: "Your email is not valid!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <div className="btn-container">
          <button className="btn-login" type="submit">
            Login
          </button>
        </div>
      </Form>
    </div>
  );
}

export default Login;
