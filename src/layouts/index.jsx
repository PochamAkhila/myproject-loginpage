import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const index = () => {
  return (
    <>
      <NavLink to="/"></NavLink>
      <NavLink to="/user"></NavLink>
      <NavLink to="/sample"></NavLink>
      <NavLink to="/usertable"></NavLink>
      <Outlet />
    </>

  )
}

export default index