import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableFooter from "@mui/material/TableFooter";
import axios from "axios";
import { faSort, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EditIcon from "@mui/icons-material/Edit";
import "../UserTable/style.css";
import ConfirmModal from "../Delete";
// import { Navigate } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

function Index() {
  const [userList, setUserList] = useState([]);
  const [userList1, setUserList1] = useState([]);
  const [errorcase, setErrorCase] = useState("");
  const [order, setOrder] = useState("asc");
  const [original, setOriginal] = useState([]);
  // const [data, setData] = useState("");
  const navigate = useNavigate();

  const [deleteId, setDeleteId] = useState("");
  const [verify, setVerify] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3005/accounts")
      .then((response) => {
        let users = [];

        if (response.data && response.data.length) {
          users = response.data;
          setOriginal(users);
          setUserList(users);
        }
      })
      .catch((errors) => {
        setErrorCase(errors);
      });
  },[userList1] );

  // sorting of table
  const sorting = (col) => {
    if (order === "asc") {
      const sorted = [...userList].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setUserList(sorted);
      setOrder("dsc");
    }
    if (order === "dsc") {
      const sorted = [...userList].sort((a, b) =>
        //   const sorted= {...userList,["result"]: userList.results.sort((a,b)=>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setUserList(sorted);
      setOrder("asc");
    }
  };

  // delete functionality
  function deleteUser(id) {
    setVerify(true);
    setDeleteId(id);

    if (verify) {
      axios
        .delete("http://localhost:3005/accounts/" + deleteId)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
  }

  function onVerify(result) {
    if (!result) {
      setVerify(false);
      return;
    }
    axios.delete("http://localhost:3005/accounts/" + deleteId)
      .then((res) => {
        console.log(res);
        // window.location.reload();
        setUserList1([])
        setVerify(false)
      });
  }

  function editUser() {
    navigate("usertable/edit/:id")
  }

  // search functionality

  function onSearch(event) {
    let text = event.target.value;

    if (!text) {
      setUserList(original);
    } else {
      let filterd = userList.filter((user) => {
        return user.email.toLowerCase().includes(text.toLowerCase());
      });
      setUserList(filterd);
    }
  }

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - userList.length) : 0;
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <div className="wrapper">
        <label>Search by Email:</label>
        <input placeholder="Enter Email" fontSize="small" onChange={onSearch} />
      </div>

      <div className="table-responsive">
        <Table
          className="text-center"
          sx={{ minWidth: 500, marginTop: "10px" }}
          aria-label="custom pagination table"
        >
          <TableHead className="bg-warning">
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell onClick={() => sorting("name")}>
                UserName
                <FontAwesomeIcon icon={faSort} className="ms-2" />
              </TableCell>
              <TableCell align="left" onClick={() => sorting("email")}>
                email
                <FontAwesomeIcon icon={faSort} className="ms-2" />
              </TableCell>
              <TableCell align="left">password</TableCell>
              <TableCell align="left">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? userList.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
              : userList
            ).map((user) => (
              <TableRow key={user._id}>
                <TableCell component="th" scope="row">
                  {user._id}
                </TableCell>
                <TableCell align="left">{user.name}</TableCell>
                <TableCell align="left">{user.email}</TableCell>

                <TableCell align="left">***********</TableCell>
                <TableCell align="left">
                  <FontAwesomeIcon
                    icon={faTrash}
                    fontSize="small"
                    className="me-3"
                    onClick={() => deleteUser(user._id)}
                  />
                  <Link to={{ pathname: `edit/${user._id}`}}>
                  <EditIcon
                    fontSize="small"
                    className="ms-3"
                    // onClick={() => editUser(user._id)}
                  />
                  </Link>{" "}
                </TableCell>
              </TableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                count={userList.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    "aria-label": "rows per page",
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </div>
      {verify ? <ConfirmModal onClose={onVerify} /> : ""}
    </>
  );
}

export default Index;
