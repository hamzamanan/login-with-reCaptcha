import React, { useState, useEffect } from "react";
import { Button, Form, Input } from "antd";
import ReCAPTCHA from "react-google-recaptcha";

function Login_1() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [status, setLoginStatus] = useState("your login status is False");
  const [loginStatus, setLogin] = useState(false);
  const setDataUname = (e) => {
    setUserName(e.target.value);
  };

  const setDataPass = (e) => {
    setPassword(e.target.value);
  };
  const LoginApiCall = () => {
    let login = { username, password };

    fetch(`http://localhost:4000/signup/signin`, {
      "Açcess-Control-Allow-Origin": "*",
      mode: "no-cors",
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
        console.log(res.success);
        if (res.success) {
          setLogin(true);
        } else {
          console.log("falied");
        }
      });
  };

  function onChange(value) {
    console.log("Captcha value:", value);
    let params = {
      secret: "6LfVYoogAAAAAIblI9cuSmIR3o3spb-CtMjdRwLS",
      response: value,
      remoteip: "",
    };
    fetch(`https://www.google.com/recaptcha/api/siteverify`, {
      method: "POST",
      mode: "no-cors",
      headers: {
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json",
      },
      body: params,
    })
      .then((res) => {
        console.log("first Respo", res);
        return res.json();
      })
      .then((res) => {
        console.log("Captcha res", res);
        if (res.success == true && loginStatus) {
          setLoginStatus("YOU ARE LOGGEDIN");
        } else if (res.success == true && loginStatus == false) {
          setLoginStatus("OOPS SOMETHING WENT WRONG");
        }
      });
  }
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
      <h1 style={{ color: "#ff1e1e" }}>LOGIN</h1>
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
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          autoComplete="off"
        >
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
              Submit
            </Button>
          </Form.Item>
        </Form>
        <ReCAPTCHA
          sitekey="6LfVYoogAAAAAOa1vfuJmcHJU-_fn1l4sLv4kGL2"
          onChange={onChange}
        />
        <p>{status}</p>
      </div>
    </div>
  );
}

export default Login_1;
