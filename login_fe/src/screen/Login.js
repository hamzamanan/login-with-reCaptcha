import React, { useState, useEffect } from "react";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const setDataUname = (e) => {
    setUserName(e.target.value);
  };
  const setDataPass = (e) => {
    setPassword(e.target.value);
  };
  const LoginApiCall = () => {
    let login = { username, password };
    console.log(username);
    fetch(`http://localhost:4000/signup/createuser`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(login),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res.data);
        navigate("/login");
      });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1 style={{ color: "#ff1e1e" }}>REGISTER USER</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto",
          padding: "50px",
          border: "1px solid grey",
          borderRadius: "10px",
        }}
      >
        <Form>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              onChange={setDataUname}
              placeholder={"Username"}
              style={{
                border: "none",
                borderBottom: "1px solid black",
                // outline: "none",
                background: "transparent",
                display: "flex",
              }}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              onChange={setDataPass}
              placeholder={"Password"}
              style={{
                border: "none",
                // borderBottom: "1px solid black",
                outline: "none",
                background: "transparent",
                display: "flex",
                marginTop: "15px",
                marginBottom: "15px",
              }}
            />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" onClick={LoginApiCall}>
              Register Yourself
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Login;
