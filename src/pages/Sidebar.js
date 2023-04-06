// import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';

// const Sidebar = () => {
//   return (
//     <div className='container-fluid'>
//         <div className='row'>
//             <div className='col-auto min-vh-100 bg-dark'>
//                 <ul>
//                     <li>
//                         <a className='nav-link px-2'>
//                             <i className='bi-house'/><span className='ms-1 d-none d-sm-inline'>Home</span>
//                         </a>
//                     </li>
//                     <li>
//                         <a className='nav-link px-2'>
//                             <i className='bi-table '/><span className='ms-1 d-none d-sm-inline'>Home</span>
//                         </a>
//                     </li>
//                     <li>
//                         <a className='nav-link px-2'>
//                             <i className='bi-house'/><span className='ms-1 d-none d-sm-inline'>Home</span>
//                         </a>
//                     </li>
//                     <li>
//                         <a className='nav-link px-2'>
//                             <i className='bi-house'/><span className='ms-1 d-none d-sm-inline'>Home</span>
//                         </a>
//                     </li>
//                     <li>
//                         <a className='nav-link px-2'>
//                             <i className='bi-house'/><span className='ms-1 d-none d-sm-inline'>Home</span>
//                         </a>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Sidebar


// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import "../pages/dashboard.css";

// const Dashboard = () => {
//     const [show, setShow] = useState(false);
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
  
//   return (
//     <div>

// <Button variant="primary" onClick={handleShow} className="click-btn">
//         click
//       </Button>

//       <Offcanvas show={show} onHide={handleClose}>
//         <Offcanvas.Header closeButton>
//           <Offcanvas.Title>My Page</Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body>
       
//       <div className="container-fluid">
//         <div className="row flex-nowrap">
//           <div className="col bg-info">
//             <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
//               <a
//                 href="/"
//                 className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
//               >
//                 <span className="fs-5 d-none d-sm-inline">Menu</span>
//               </a>
//               <ul
//                 className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
//                 id="menu"
//               >
//                 <li className="nav-item text-dark">
//                   <a href="#" className="nav-link align-middle px-0">
//                     <i className="fs-4 bi-house"></i>{" "}
//                     <span className=" d-none d-sm-inline text-dark">Home</span>
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#submenu1"
//                     data-bs-toggle="collapse"
//                     className="nav-link px-0 align-middle"
//                   >
//                     <i className="fs-4 bi-speedometer2"></i>{" "}
//                     <span className="d-none d-sm-inline text-dark">Dashboard</span>{" "}
//                   </a>
//                   <ul
//                     className="collapse show nav flex-column"
//                     id="submenu1"
//                     data-bs-parent="#menu"
//                   >
//                     <li className="w-100">
//                       <a href="#" className="nav-link px-0">
//                         {" "}
//                         <span className="d-none d-sm-inline text-dark">Login</span> 1{" "}
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#" className="nav-link px-0">
//                         {" "}
//                         <span className="d-none d-sm-inline text-dark">Signup</span> 2{" "}
//                       </a>
//                     </li>
//                   </ul>
//                 </li>
//                 <li>
//                   <a href="#" className="nav-link px-0 align-middle">
//                     <i className="fs-4 bi-table"></i>{" "}
//                     <span className="d-none d-sm-inline text-dark">Orders</span>
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#submenu2"
//                     data-bs-toggle="collapse"
//                     className="nav-link px-0 align-middle "
//                   >
//                     <i className="fs-4 bi-bootstrap"></i>{" "}
//                     <span className="d-none d-sm-inline text-dark">Bootstrap</span>
//                   </a>
//                   <ul
//                     className="collapse nav flex-column ms-1"
//                     id="submenu2"
//                     data-bs-parent="#menu"
//                   >
//                     <li className="w-100">
//                       <a href="#" className="nav-link px-0">
//                         {" "}
//                         <span className="d-none d-sm-inline text-dark">Item</span> 1
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#" className="nav-link px-0">
//                         {" "}
//                         <span className="d-none d-sm-inline text-dark">Item</span> 2
//                       </a>
//                     </li>
//                   </ul>
//                 </li>
//                 <li>
//                   <a
//                     href="#submenu3"
//                     data-bs-toggle="collapse"
//                     className="nav-link px-0 align-middle"
//                   >
//                     <i className="fs-4 bi-grid"></i>{" "}
//                     <span className="d-none d-sm-inline text-dark">Products</span>{" "}
//                   </a>
//                   <ul
//                     className="collapse nav flex-column"
//                     id="submenu3"
//                     data-bs-parent="#menu"
//                   >
//                     <li className="w-100">
//                       <a href="#" className="nav-link px-0">
//                         {" "}
//                         <span className="d-none d-sm-inline">Product</span> 1
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#" className="nav-link px-0">
//                         {" "}
//                         <span className="d-none d-sm-inline">Product</span> 2
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#" className="nav-link px-0">
//                         {" "}
//                         <span className="d-none d-sm-inline">Product</span> 3
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#" className="nav-link px-0">
//                         {" "}
//                         <span className="d-none d-sm-inline">Product</span> 4
//                       </a>
//                     </li>
//                   </ul>
//                 </li>
//                 <li>
//                   <a href="#" className="nav-link px-0 align-middle">
//                     <i className="fs-4 bi-people"></i>{" "}
//                     <span className="d-none d-sm-inline text-dark">Customers</span>{" "}
//                   </a>
//                 </li>
//               </ul>
//               <hr />
//               <div className="dropdown pb-4">
//                 <a
//                   href="#"
//                   className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
//                   id="dropdownUser1"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   <span className="d-none d-sm-inline mx-1 text-dark">loser</span>
//                 </a>
//                 <ul
//                   className="dropdown-menu dropdown-menu-dark text-small shadow text-dark"
//                   aria-labelledby="dropdownUser1"
//                 >
//                   <li>
//                     <a className="dropdown-item" href="#">
//                       New project...
//                     </a>
//                   </li>
//                   <li>
//                     <a className="dropdown-item" href="#">
//                       Settings
//                     </a>
//                   </li>
//                   <li>
//                     <a className="dropdown-item" href="#">
//                       Profile
//                     </a>
//                   </li>
//                   <li>
//                     <hr className="dropdown-divider" />
//                   </li>
//                   <li>
//                     <a className="dropdown-item" href="#">
//                       Sign out
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//         </Offcanvas.Body>
//       </Offcanvas>


//     </div>
//   );
// };

// export default Dashboard;
