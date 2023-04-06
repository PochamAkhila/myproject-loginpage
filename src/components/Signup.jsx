import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../components/sign.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // const handleChange = (e) => {
  //   setData({ ...data, [e.target.name]: e.target.value });
  // };
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    // console.log("web");
    e.preventDefault();
    const validate = (data) => {
      const errors = {};

      if (!data.name) {
        errors.name = "Name is required";
      }

      if (!data.email) {
        errors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = "Email is invalid";
      }

      if (!data.password) {
        errors.password = "Password is required";
      } else if (data.password.length < 8) {
        errors.password = "Password must be at least 8 characters";
      }

      // if (!data.confirmPassword) {
      //   errors.confirmPassword = 'Confirm Password is required';
      // } else if (data.password !== data.confirmPassword) {
      //   errors.confirmPassword = 'Passwords do not match';
      // }
      return errors;
    };
    setErrors(validate(data));

    fetch("http://localhost:3005/accounts")
      .then((res) => res.json())
      .then((res) => {
        UserChecking(res);
      });

    function UserChecking(users) {
      let userFound = users.findIndex((user) => {
        if (user.email === data.email) {
          document.getElementById("err").innerHTML =
            "already exists this user enter new email id";
          return true;
        } else {
          return false;
        }
      });

      if (userFound === -1) {
        if (
          Object.keys(errors).length === 0 &&
          data.name !== "" &&
          data.email !== "" &&
          data.password !== ""
        ) {
          // Signup
          console.log(data)
          axios
            .post("http://localhost:3005/accounts/signup", data)
            .then(function (response) {
              console.log(response.data);
            })
            .catch(function (error) {
              console.log(error);
            });
          console.log(data);
        }
      }
    }

    // const validateForm = () => {
    //   return email.length > 0 && password.length > 0 && password === confirmPassword;
    // };
  };

  function signupPage() {
    navigate("/");
  }

  return (
    <>
      <div className="container">
        <div className="card">
          <div className="form">
            <div className="left-side">
              <img
                src="https://png.pngtree.com/thumb_back/fw800/background/20210913/pngtree-ui-ux-illustration-for-account-login-background-image_877029.jpg"
                alt="my-logo"
              />
            </div>

            <div className="right-side">
              <h1>Signup</h1>
              <Form onSubmit={handleSubmit}>
              <p id="err" className="text-danger"></p>
                <Form.Group className="mb-3" controlId="username">
                  <Form.Label>UserName</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                    isInvalid={errors.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="email" className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={data.email}
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
                    isInvalid={errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="password" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={data.password}
                    onChange={(e) =>
                      setData({ ...data, password: e.target.value })
                    }
                    isInvalid={errors.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>

                <Button variant="primary" onClick={signupPage} className="mx-5">
                  Login
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Signup;
