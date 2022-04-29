import React from "react";
import "./Login.css";
import { Form, Input, message } from "antd";
import { users } from "./data";
import { usePermify } from "@permify/react-role";

function Login() {
  const { setUser } = usePermify();

  const [form] = Form.useForm();

  const onFinish = (values) => {
    let loggedUser = users.find((user) => user.email === values.email);

    if (loggedUser !== undefined) {
      localStorage.setItem("user", JSON.stringify(loggedUser));
      localStorage.setItem("name", loggedUser.name);

      console.log(loggedUser);

      setUser({
        id: loggedUser.id,
        roles: [loggedUser.role],
        permissions: loggedUser.permission,
      });

      window.location.reload();
    } else {
      message.error("Wrong email, please check your email!");
    }
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
