// import React, { useState } from "react";
// import { Form, Button } from "react-bootstrap";
// import "../pages/login.css";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const Login = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   // const handleChange = (e) => {
//   //   setFormData({ ...formData, [e.target.name]: e.target.value });
//   // };

//   const [errors, setErrors] = useState({});

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // const errors = validate(formData);
//     // if (Object.keys(errors).length === 0 && (formData.email !== "" && formData.password !== "")) {
//       // form is valid, submit the data
//       axios
//         .get("http://localhost:3000/account")
//         .then((response) => {
//           console.log(response);
//           response.data.map((item) => {
//             let email = item.email;
//             let password = item.password;

//             if (formData.email === email && formData.password === password) {
//               console.log("success");
//               // alert("Login successful!");
//               navigate("/dashboard");
//             }
//             else{
//               console.log("user not found");
//               const validate = (formData) => {
//               const errors = {};
          
//               if (formData.email === "") {
//                 errors.email = 'Email is required';
//               }
//               else if (formData.email.length < 5) {
//                 errors.email = 'Email is must be more than 5 charcters';
//               } 
//               if (formData.password === "") {
//                 errors.password = 'Password is required';
//               }
//               else if (formData.password.length <= 8) {
//                 errors.password = 'Password must be at least 8 characters';
//               }
//               return errors;
//             };
//             setErrors(validate(formData));
//           }
//           })
//         })
//       .catch((error)=>{
//         console.log(error)
//       })
//       console.log(formData.email)
//     }
      
//   function loginPage() {
//     navigate("/Signup");
//   }

//   return (
//     <>
//       <div className="container">
//         <div className="card">
//           <div className="form">
//             <div className="left-side">
//               <img src="https://imgur.com/XaTWxJX.jpg" />
//             </div>

//             <div className="right-side">
//               <h1 className="text-center">Login</h1>
//               {/* {error && <Alert variant="danger">{error}</Alert>} */}

//               <Form onSubmit={handleSubmit}>

//                 <Form.Group controlId="formBasicEmail" className="mb-3" >
//                   <Form.Label>Email address*</Form.Label>
//                   <Form.Control type="email" placeholder="Enter email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} isInvalid={errors.email}/>
//                   <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
//                 </Form.Group>

//                 <Form.Group controlId="formBasicPassword" className="mb-3">
//                   <Form.Label >Password*</Form.Label>
//                   <Form.Control 
//                   type="password" placeholder="Password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} isInvalid={errors.password}/>
//                   <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
//                 </Form.Group>

//                 <Button variant="primary" type="submit">
//                   Login
//                 </Button>
//                 <p className="forgot-password text-right mt-2">
//                   Forgot <a href="#">password?</a>
//                 </p>
//                 <p className="text-right mt-2">Not Registered yet?
//                   <a href="#" onClick={loginPage}>
//                     Create an Account
//                   </a>
//                 </p>
//               </Form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Login;


// import React, { useState } from "react";
// import { Form, Button } from "react-bootstrap";
// import "../pages/login.css";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const Login = () => {
//   const navigate=useNavigate()
//   const [data, setData] = useState({
//     email: "",
//     password: ""
//   });
//   const [errors,setErrors] = useState({});

//   const forChange = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//   }
//   const handleSubmit = (e) => {
//     e.preventDefault();  

//     axios.get("http://localhost:3000/account")
//     .then((response) => {
//       // console.log(response.data);
//       response.data.map((x=>{
//         // console.log(x.email)

//         let Email=x.email;
//         let Password=x.password;

//         if(data.email === Email && data.password === Password){
//           console.log('Success')
//           navigate('/dashboard')
//         }
//         else if(data.email != Email ){
//             console.log("email not found");
//             document.getElementById("errorEmail").innerHTML="Email does not match";
//         }
//        else{
//         console.log('user not found');
//         //alert("user not found");
//         const validate =(values)=>{
//           const errors = {};
//           const email_patteren = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//           const password_patteren = /^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$/
          
//           if(values.email === ""){
//               errors.email = " Email is required!";
//           }
//           if(!email_patteren.test(values.email)){
//               errors.email = "enter your correct Email "
//           }
//           if(values.password === ""){
//               errors.password = " password is required!";
//           }
//           if(!password_patteren.test(values.password)) {
//               errors.password = "incorect password * "
//           }
//           return errors;
//         };
//         setErrors(validate(data));
//        }
//       }))
//     })
//     .catch((error) => {
//       console.log(error)
//     })

//     console.log(data.email);
//   }
      
//   function loginPage() {
//     navigate("/Signup");
//   }

//   return (
//     <>
//       <div className="container">
//         <div className="card">
//           <div className="form">
//             <div className="left-side">
//               <img src="https://imgur.com/XaTWxJX.jpg" />
//             </div>

//             <div className="right-side">
//               <h1 className="text-center">Login</h1>

//               <Form onSubmit={handleSubmit} autoComplete="off">
//               <p id="errorEmail" className="text-danger"></p>

//                 <Form.Group controlId="formBasicEmail" className="mb-3" >
//                   <Form.Label>Email address*</Form.Label>
//                   <Form.Control type="email" placeholder="Enter email" name="email" onChange={forChange} />
//                   <Form.Control.Feedback type="invalid"> {errors.email}</Form.Control.Feedback>
//                   <p style={{color:"red"}}>{errors.email}</p>
//                 </Form.Group>

//                 <Form.Group controlId="formBasicPassword" className="mb-3">
//                   <Form.Label >Password*</Form.Label>
//                   <Form.Control 
//                   type="password" placeholder="Password" name="password" onChange={forChange}/>
//                   <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
//                 </Form.Group>

//                 <Button variant="primary" type="submit">
//                   Login
//                 </Button>
//                 <p className="forgot-password text-right mt-2">
//                   Forgot <a href="#">password?</a>
//                 </p>
//                 <p className="text-right mt-2">Not Registered yet?
//                   <a href="#" onClick={loginPage}>
//                     Create an Account
//                   </a>
//                 </p>
//               </Form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Login;
