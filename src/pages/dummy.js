// import React, { useState } from "react";
// import { Form, Button, Alert } from "react-bootstrap";
// import "../pages/login.css";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const Login = () => {
//   const navigate = useNavigate();
//   // const [email, setEmail] = useState("");
//   // const [password, setPassword] = useState("");
//   // const [validated, setValidated] = useState(false);
//   // const [error, setError] = useState("");
//   // const [validated, setValidated] = useState(false);
//   // const [formErrors, setFormErrors] = useState({});

//   const [data, setData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//   };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   const errors = validate(data);
//   //   if (Object.keys(errors).length === 0) {
//   //     // form is valid, submit the data
//   //     axios
//   //     .get("http://localhost:3000/account")
//   //     .then((response) => {
//   //       console.log(response);
//   //       response.data.map((item) => {
//   //         let email = item.email;
//   //         let password = item.password;

//   //         if (data.email === email && data.password === password >= 8) {
//   //           console.log("success");
//   //           navigate("/dashboard");
//   //         }
//   //       });
//   //     })
//   //     .catch(function (error) {
//   //       console.log(error);
//   //     });
//   //   console.log(data.email);
//   //   } else {
//   //     setFormErrors(errors);
//   //   }
//   // };


//   // const validate = (data) => {
//   //   const errors = {};
  
//   //   if (!data.name) {
//   //     errors.name = 'Name is required';
//   //   }
  
//   //   if (!data.email) {
//   //     errors.email = 'Email is required';
// //   } else if (!/\S+@\S+\.\S+/.test(data.email)) {1

//   //     errors.email = 'Email is invalid';
//   //   }
  
//   //   if (!data.password) {
//   //     errors.password = 'Password is required';
//   //   } else if (data.password.length < 8) {
//   //     errors.password = 'Password must be at least 8 characters';
//   //   }
//   //   return errors;
//   // };
  


//   function loginPage() {
//     navigate("/Signup");
//   }

//   const handleSubmit = (e) => {
//     console.log("web");
//     e.preventDefault();
//     axios
//       .get("http://localhost:3000/account")
//       .then((response) => {
//         console.log(response);
//         response.data.map((item) => {
//           let email = item.email;
//           let password = item.password;

//           if (data.email === email && data.password === password >= 8) {
//             console.log("success");
//             navigate("/dashboard");
//           }
//         });
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//     console.log(data.email);
//   };

//   return (
//     <div className="parent">
//       <div className="container login-page">
//         <h1 className="text-center">Login</h1>
//         {/* {error && <Alert variant="danger">{error}</Alert>} */}
//         <Form onSubmit={handleSubmit}>
//           <Form.Group controlId="email" className="mb-3">
//             <Form.Label>Email address</Form.Label>
//             <Form.Control
//              required
//               type="email"
//               placeholder="Enter email"
//               name="email"
//               onChange={handleChange}
//             />
//             {/* <Form.Control.Feedback type="invalid">
//               Please enter a valid email.
//             </Form.Control.Feedback> */}
//             {/* <Form.Control.Feedback type="invalid">{formErrors.name}</Form.Control.Feedback> */}
//             <div class="valid-feedback">Looks good!</div>
//           </Form.Group>
//           <Form.Group controlId="password" className="mb-3">
//             <Form.Label>Password</Form.Label>
//             <Form.Control
//              required
//               type="password"
//               placeholder="Password"
//               name="password"
//               onChange={handleChange}    
//             />
//             {/* <Form.Control.Feedback type="invalid">
//               Please enter a password.
//             </Form.Control.Feedback> */}
//             {/* <Form.Control.Feedback type="invalid">{formErrors.name}</Form.Control.Feedback> */}
//           </Form.Group>
//           <Button variant="primary" type="submit">
//             Login
//           </Button>
//           <p className="forgot-password text-right mt-2">
//             Forgot <a href="#">password?</a>
//           </p>
//           <p className="text-right mt-2">
//             <a href="#" onClick={loginPage}>
//               Create an Account?
//             </a>
//           </p>
//         </Form>
//       </div>
//       <div className="images">
//         <img src="https://t4.ftcdn.net/jpg/01/19/11/55/360_F_119115529_mEnw3lGpLdlDkfLgRcVSbFRuVl6sMDty.jpg" />
//       </div>
//     </div>
//   );
// };
// export default Login;



// import React, { useState } from "react";
// import { Form, Button, Alert } from "react-bootstrap";
// import "../pages/login.css";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const Login = () => {
//   const navigate = useNavigate();

//   const [data, setData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//   };


//   function loginPage() {
//     navigate("/Signup");
//   }

//   const handleSubmit = (e) => {
//     console.log("web");
//     e.preventDefault();
//     axios
//       .get("http://localhost:3000/account")
//       .then((response) => {
//         console.log(response);
//         response.data.map((item) => {
//           let email = item.email;
//           let password = item.password;

//           if (data.email === email && data.password === password >= 8) {
//             console.log("success");
//             navigate("/dashboard");
//           }
//         });
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//     console.log(data.email);
//   };

//   return (
//     <div className="parent">
//       <div className="container login-page">
//         <h1 className="text-center">Login</h1>
//         {/* {error && <Alert variant="danger">{error}</Alert>} */}
//         <Form onSubmit={handleSubmit}>
//           <Form.Group controlId="email" className="mb-3">
//             <Form.Label>Email address</Form.Label>
//             <Form.Control
//              required
//               type="email"
//               placeholder="Enter email"
//               name="email"
//               onChange={handleChange}
//             />
//             <Form.Control.Feedback>
//               Please enter a valid email.
//             </Form.Control.Feedback>
//             {/* <Form.Control.Feedback type="invalid">{formErrors.name}</Form.Control.Feedback> */}
//             {/* <div class="valid-feedback">Looks good!</div> */}
//           </Form.Group>
//           <Form.Group controlId="password" className="mb-3">
//             <Form.Label>Password</Form.Label>
//             <Form.Control
//              required
//               type="password"
//               placeholder="Password"
//               name="password"
//               onChange={handleChange}    
//             />
//             <Form.Control.Feedback>
//               Please enter a password.
//             </Form.Control.Feedback>
//             {/* <Form.Control.Feedback type="invalid">{formErrors.name}</Form.Control.Feedback> */}
//           </Form.Group>
//           <Button variant="primary" type="submit">
//             Login
//           </Button>
//           <p className="forgot-password text-right mt-2">
//             Forgot <a href="#">password?</a>
//           </p>
//           <p className="text-right mt-2">
//             <a href="#" onClick={loginPage}>
//               Create an Account?
//             </a>
//           </p>
//         </Form>
//       </div>
//       <div className="images">
//         <img src="https://t4.ftcdn.net/jpg/01/19/11/55/360_F_119115529_mEnw3lGpLdlDkfLgRcVSbFRuVl6sMDty.jpg" />
//       </div>
//     </div>
//   );
// };
// export default Login;



// <div className="parent">
// <Container>
//   <div className="card">
//     <div className="row form-outline form-white shadow">
//       <div className="col-lg-6">
//         <div className="container login-page  p-4 ">
//           <h1 className="text-center">Login</h1>
//           {/* {error && <Alert variant="danger">{error}</Alert>} */}

//           <Form onSubmit={handleSubmit} isValidated>
//             <Form.Group
//               controlId="email"
//               className="mb-3"
//               feedback="Please provide a valid email."
//               invalid
//             >
//               <Form.Label>Email address</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter email"
//                 name="email"
//                 onChange={handleChange}
//                 required
//               />
//               <Form.Control.Feedback type="invalid">
//                 Please enter a valid email.
//               </Form.Control.Feedback>
//               <div class="valid-feedback">Looks good!</div>
//             </Form.Group>
//             <Form.Group
//               controlId="password"
//               className="mb-3"
//               feedback="Please provide a valid password."
//               invalid
//             >
//               <Form.Label>Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="Password"
//                 name="password"
//                 onChange={handleChange}
//                 required
//               />
//               <Form.Control.Feedback type="invalid">
//                 Please enter a password.
//               </Form.Control.Feedback>
//             </Form.Group>
//             <Button variant="primary" type="submit">
//               Login
//             </Button>
//             <p className="forgot-password text-right mt-2">
//               Forgot <a href="#">password?</a>
//             </p>
//             <p className="text-right mt-2">
//               <a href="#" onClick={loginPage}>
//                 Create an Account?
//               </a>
//             </p>
//           </Form>
//         </div>
//         <div className="col-lg-6">
//           <div className="images">
//             <img src="https://t4.ftcdn.net/jpg/01/19/11/55/360_F_119115529_mEnw3lGpLdlDkfLgRcVSbFRuVl6sMDty.jpg" />
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </Container>
// </div>


// <Container className="parent-sign">
    //   <div className="row  form-outline form-white shadow ">
    //     <div className="col-lg-6">
    //       <div className="wrap mb-3 p-5">
    //         <h1>Signup</h1>
    //         <Form onSubmit={handleSubmit}>
    //           <Form.Group className="mb-3" controlId="username">
    //             <Form.Label>UserName</Form.Label>
    //             <Form.Control
    //               type="text"
    //               name="name"
    //               placeholder="Enter username"
    //               onChange={handleChange}
    //             />
    //           </Form.Group>

    //           <Form.Group controlId="email" className="mb-3">
    //             <Form.Label>Email address</Form.Label>
    //             <Form.Control
    //               type="email"
    //               name="email"
    //               placeholder="Enter email"
    //               onChange={handleChange}
    //             />
    //           </Form.Group>
    //           <Form.Group controlId="password" className="mb-3">
    //             <Form.Label>Password</Form.Label>
    //             <Form.Control
    //               type="password"
    //               name="password"
    //               placeholder="Password"
    //               onChange={handleChange}
    //             />
    //           </Form.Group>
    //           {/* <Form.Group controlId="confirmPassword" className='mb-3'>
    //       <Form.Label>Confirm Password</Form.Label>
    //       <Form.Control
    //         type="password"
    //         placeholder="Confirm Password"
    //         value={confirmPassword}
    //         onChange={(e) => setConfirmPassword(e.target.value)}
    //       />
    //     </Form.Group> */}
    //           <Button variant="primary" type="submit">
    //             Submit
    //           </Button>
    //         </Form>
    //       </div>
    //     </div>

    //     <div className="col-lg-6">
    //       <div className="imge">
    //         <img
    //           src="https://png.pngtree.com/thumb_back/fw800/background/20210913/pngtree-ui-ux-illustration-for-account-login-background-image_877029.jpg"
    //           alt="side"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </Container>


      {/* <Form.Group
                  controlId="email"
                  className="mb-3"
                  // feedback="Please provide a valid email."
                  invalid
                >
                  <Form.Label>Email address*</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    // onChange={handleChange}
                    value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} isInvalid={formErrors.email} 
                    required
                  />
                   <Form.Control.Feedback type="invalid">{formErrors.email}</Form.Control.Feedback>
                </Form.Group> */}
                {/* <Form.Group controlId="password" className="mb-3"
                  // feedback="Please provide a valid password."
                  invalid
                >
                  <Form.Label>Password*</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    // onChange={handleChange}
                    value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} isInvalid={formErrors.password} 
                    required
                  />
                <Form.Control.Feedback type="invalid">{formErrors.password}</Form.Control.Feedback>
                </Form.Group> */}
