// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Table from '@mui/material/Table';
// import TableHead from '@mui/material/TableHead';
// import TableBody from '@mui/material/TableBody';
// import TableRow from '@mui/material/TableRow';
// import TableCell from '@mui/material/TableCell';
// import DeleteIcon from '@mui/icons-material/Delete';
// import TextField from '@mui/material/TextField';
// import EditIcon from '@mui/icons-material/Edit';

// export default function ShowProject() {
//     const [data, setData] = useState([]);
//     const [filter, setFilter] = useState([])

//     useEffect(() => {
//         const fetchData = async () => {
//             const result = await axios(
//                 'http://localhost:3000/account'
//             );
//             setData(result.data);
//             setFilter(result.data);
//         }
//         fetchData()
        
//     }, []);

//     const requestSearch = (searchedVal) => {
//         const filteredRows = data.filter((row) => {
//             return row.customer.toString().toLowerCase().includes(searchedVal.toString().toLowerCase());
//         });
//         if (searchedVal.length < 1) {
//             setFilter(data)
//         }
//         else {
//             setFilter(filteredRows)
//         }
//       };
    
//     return (
//         <div>
//             <div>
//                 <TextField onChange={(e) => requestSearch(e.target.value)} />
//                 <Table>
//                     <TableHead>
//                         <TableRow>
//                             <TableCell>Id</TableCell>
//                             <TableCell>email</TableCell>
//                             <TableCell>password</TableCell>
//                             <TableCell>Actions</TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {filter.map(item => (
//                             <TableRow key={item.db_id}>
//                                 <TableCell>{item._id}</TableCell>
//                                 <TableCell>{item.email}</TableCell>
//                                 <TableCell>{item.password}</TableCell>
//                                 <div>
//                                <TableCell><EditIcon /></TableCell>
//                                 <TableCell><DeleteIcon /></TableCell>
//                                 </div>
//                             </TableRow>
//                         ))}
//                     </TableBody>
//                 </Table>
//             </div>
//         </div>
//     )
// }