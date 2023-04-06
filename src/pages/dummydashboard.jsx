// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import "../pages/dashboard.css";
// import { useNavigate } from "react-router-dom";

// function Dashboard() {
//   const [showNav, setShowNav] = useState(true);

//   const Navigate = useNavigate();

//   let userName = localStorage.getItem("key");
//   let Info = userName.slice(1, userName.length-1);
//   console.log(Info);

//   const Logout =()=>{
//     localStorage.clear();
//     Navigate('/')
//   }


//   return (
//     <div className={`body-area${showNav ? " body-pd" : ""}`}>
//       <header className={`header${showNav ? " body-pd" : ""}`}>
//         <div className="header_toggle">
//           <i
//             className={`bi ${showNav ? "bi-x" : "bi-list"}`}
//             onClick={() => setShowNav(!showNav)}
//           />
//         </div>
//         <div className="">
//           {Info}
//         </div>
//         <div className="header_img">
//           <img src="https://reqres.in/img/faces/5-image.jpg" alt="home-img" />
//         </div>
        
//       </header>
//       <div className={`l-navbar${showNav ? " show" : ""}`}>
//         <nav className="nav">
//           <div>
//             <a
//               href="https://cluemediator.com"
//               target="_blank"
//               className="nav_logo"
//               rel="noopener"
//             >
//               <i className="bi bi-alexa nav_logo-icon" />{" "}
//               <span className="nav_logo-name">Home</span>
//             </a>
//             <div className="nav_list">
//               <a
//                 href="https://cluemediator.com"
//                 target="_blank"
//                 className="nav_link"
//                 rel="noopener"
//               >
//                 <i className="bi bi-people nav_icon" />
//                 <span className="nav_name">Login Form</span>
//               </a>
//               <a
//                 href="https://cluemediator.com"
//                 target="_blank"
//                 className="nav_link"
//                 rel="noopener"
//               >
//                 <i className="bi bi-person-check nav_icon" />
//                 <span className="nav_name">SignUp Form</span>
//               </a>
//             </div>
//           </div>
//           <a
//             href="#"
//             className="nav_link"
//             rel="noopener"
//           >
//             <button onClick={Logout}>
//             <i className="bi bi-box-arrow-left nav_icon" />
//             <span className="nav_name">SignOut</span>
//             </button>
//           </a>
//         </nav>
//       </div>
//       <div className="pt-4 pb-4">
//         <h4>Main Component</h4>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;
