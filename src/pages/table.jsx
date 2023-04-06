  // useEffect(() => {
  //   getUserDetails();
  // }, []);

  // const getUserDetails = () => {
  //   const url = "http://localhost:3000/account";
  //   axios
  //     .get(url)
  //     .then((response) => {
  //       let users = [];

  //       if (response.data && response.data.length) {
  //         users = response.data;
  //         setOriginal(users);
  //         setUserList(users);
  //       }
  //     })
  //     .catch((errors) => {
  //       setErrorCase(errors);
  //     });
  // };



  // import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Table from '@mui/material/Table';
// import TableHead from '@mui/material/TableHead';
// import TableBody from '@mui/material/TableBody';
// import TableRow from '@mui/material/TableRow';
// import TableCell from '@mui/material/TableCell';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';

// export default function ShowProject() {
//   const [data, setData] = useState([]);
//   const [filter, setFilter] = useState([])

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await axios(
//         'http://localhost:3000/account'
//       );
//       setData(result.data);
//       setFilter(result.data);
//     }
//     fetchData()

//   }, []);

//   const requestSearch = (searchedVal) => {
//     const filteredRows = data.filter((row) => {
//       return row.customer.toString().toLowerCase().includes(searchedVal.toString().toLowerCase());
//     });
//     if (searchedVal.length < 1) {
//       setFilter(data)
//     }
//     else {
//       setFilter(filteredRows)
//     }
//   };

  // delete functonality
  // function deleteUser(id) {
  //   let verify = window.confirm(`click on OK to delete user with id: ${id} `);
  //   console.log(verify);

  //   if (verify) {
  //     axios
  //       .delete("http://localhost:3000/account" + id)
  //       .then((res) => {
  //         console.log(res);
  //         window.location.reload();
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // }

//   // const [search, setSearch] = React.useState('');

//   // const handleSearch = (event) => {
//   //   setSearch(event.target.value);
//   // };

//   // const filteredRows = {
//   //   nodes: data.filter((item) =>
//   //     item.name.toLowerCase().includes(search.toLowerCase())
//   //   ),
//   // };

//   const tableRowRemove = (index) => {
//     const dataRow = [...rows];
//     dataRow.splice(index, 1);
//     initRow(dataRow);
//   };

//   return (
//     <div>
//       <div>
//         <label htmlFor="search">
//           Search Here:
//           <input id="search" type="text"
//             onChange={(e) => requestSearch(e.target.value)} />
//         </label>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Id</TableCell>
//               <TableCell>email</TableCell>
//               <TableCell>password</TableCell>
//               <TableCell>Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {filter.map(item => (
//               <TableRow key={item.db_id}>
//                 <TableCell>{item._id}</TableCell>
//                 <TableCell>{item.email}</TableCell>
//                 <TableCell>{item.password}</TableCell>
//                 <div>
//                   <TableCell  rows={rows} tableRowRemove={tableRowRemove}><EditIcon /></TableCell>
//                   <TableCell><DeleteIcon /></TableCell>
//                 </div>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </div>
//     </div>
//   )
// }