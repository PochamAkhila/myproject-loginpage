import { Routes, Route, Navigate } from "react-router-dom"

import DefaultLayout from "./layouts"
import Login from "./components/Login"
import Signup from "./components/Signup"
import User from "./components/user"
import UserDashboard from "./components/user/Dashboard"
import Sample from "./components/user/Sample"
import UserTable from "./components/user/UserTable"
import Edit  from "./components/user/Edit/index"

function App() {

  const tokenData = localStorage.getItem("user");

  return (
    <>
      <Routes>
        <Route path='/' element={ <DefaultLayout /> }>
          <Route index element={!tokenData ?<Login />: <Navigate to="/user/dashboard" />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='user' element={tokenData ? <User /> : <Navigate to="/" />}>
            <Route path='dashboard' element={<UserDashboard />} />
            <Route path='sample' element={<Sample />} />
            <Route path="usertable" element={<UserTable />} />
            <Route path="usertable/edit/:id" element={<Edit />} />
          </Route>  
        </Route>
      </Routes>
    </>
  )
}

export default App
