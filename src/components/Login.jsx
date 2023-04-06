import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../components/login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [data,setData] =useState({email:"",password:""});

  const forChange = (e) =>{
    setData({...data,[e.target.name]:e.target.value})
  }

  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  // });

  // const [errors, setErrors] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      console.log(data);
      const res = await axios.post('http://localhost:3005/accounts/login', data);
      console.log(res);
      localStorage.setItem("user",res.data.token);
      window.location.reload();
    }
    catch(err){
      console.log(err)
    }
  };

  function loginPage() {
    navigate("/Signup");
  }

  

  // const validate = (formData) => {
  //   const errors = {};
  //   // const password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  //   // const email = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  //   if (!formData.email) {
  //     errors.email = "Email is required";
  //     setErrors(true)
  //   } else if (formData.email.length < 6) {
  //     errors.email = "Email is must be more than 6 charcters";
  //     setErrors(true)
  //   }

  //   if (!formData.password) {
  //     errors.password = "Password is required";
  //   } else if (formData.password.length < 8) {
  //     errors.password = "Password must be at least 8 characters";
  //   }
  //   return errors;
  // };

  return (
    <>
      <div className="container">
        <div className="card">
          <div className="form">
            <div className="left-side">
              <img src="https://imgur.com/XaTWxJX.jpg" alt="this is an img" />
            </div>

            <div className="right-side">
              <h1 className="text-center">Login</h1>
              {/* <p id="errorEmail" className="text-danger"></p> */}

              {/* <p id="EmailSuccess" className="text-success"></p> */}

              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail" className="mb-3">
                  <Form.Label>Email address*</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    // value={formData.email}
                    // value={email}
                    onChange={forChange}
                    // isInvalid={errors.email}
                  />

                  {/* <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback> */}
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="mb-3 ">
                  <Form.Label className="form-label">Password*</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    // value={formData.password}
                    // value={password}
                    // onChange={(e) =>setFormData({ ...formData, password: e.target.value })
                    onChange={forChange}
                    // isInvalid={errors.password}
                  />

                  {/* <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback> */}
                </Form.Group>

                <Button variant="primary" type="submit">
                  Login
                </Button>
                <p className="forgot-password text-right mt-2">
                  Forgot <a href="#">password?</a>
                </p>
                <p className="text-right mt-2">
                  Not Registered yet?
                  <a href="#" onClick={loginPage}>
                    Create an Account
                  </a>
                </p>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

