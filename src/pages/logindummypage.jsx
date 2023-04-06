


// import React, { useState } from "react";
// import { Form, Button } from "react-bootstrap";
// import "../components/login.css";
// import { useNavigate } from "react-router-dom";
// // import axios from "axios";

// const Login = () => {
//   const navigate = useNavigate();

//   const [condition, setCondition] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(false);

//   const handleSubmit = (k) => {
//     k.preventDefault();
//     console.log()
//     if (email.length == 0 || password.length == 0) {
//       setError(true);
//       return false;
//     }
//     const userData = { email: email, password: password };
//     const opt = {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(userData),
//     };
//     // console.log(userData)
// console.log(opt)
//     fetch("http://localhost:3000/account", opt)
//       .then(res => res)
//       .then(res => {
//         console.log(res)
//         if (res.length > 0) {
//           localStorage.setItem("key", JSON.stringify(email));
//           checkIsUser(res);
//               // navigate("/user/dashboard");
//         } else {
//           alert("in valid user");
//         }
//   });
//     function checkIsUser(res) {
//       navigate("/user/dashboard");
//     }
//   };
//   function loginPage() {
//     navigate("/Signup");
//   }

//   if (!condition) {
//     return (
//       <>
//         <div className="container">
//           <div className="card">
//             <div className="form">
//               <div className="left-side">
//                 <img src="https://imgur.com/XaTWxJX.jpg" alt="this is an img" />
//               </div>

//               <div className="right-side">
//                 <h1 className="text-center">Login</h1>
//                 <p id="errorEmail" className="text-danger"></p>

//                 <p id="EmailSuccess" className="text-success"></p>

//                 <Form onSubmit={handleSubmit}>
//                   <Form.Group controlId="formBasicEmail" className="mb-3">
//                     <Form.Label>Email address*</Form.Label>
//                     <Form.Control
//                       type="email"
//                       placeholder="Enter email"

//                       onChange={(e) => setEmail(e.target.value)}
//                     />
//                     {error && email.length <= 0 ? (
//                       <Form.Label className="input text-danger">
//                         *Please fill the valid email address{" "}
//                       </Form.Label>
//                     ) : (
//                       ""
//                     )}

//                   </Form.Group>

//                   <Form.Group controlId="formBasicPassword" className="mb-3 ">
//                     <Form.Label className="form-label">Password*</Form.Label>
//                     <Form.Control
//                       type="password"
//                       placeholder="Password"

//                       onChange={(e) => setPassword(e.target.value)}
//                     />
//                     {error && password.length <= 0 ? (
//                       <Form.Label className="input text-danger">
//                         *Password is mandatory{" "}
//                       </Form.Label>
//                     ) : (
//                       ""
//                     )}
//                   </Form.Group>

//                   <Form.Group className="mb-3" controlId="formBasicCheckbox">
//                     <Form.Check type="checkbox" label="Check me out" />
//                   </Form.Group>

//                   <Button variant="primary" type="submit">
//                     Login
//                   </Button>

//                 </Form>
//                 <p className="text-right mt-2">
//                   Not Registered yet?
//                   <a href="#" onClick={loginPage}>
//                     Create an Account
//                   </a>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   }
  
// };
// export default Login;
