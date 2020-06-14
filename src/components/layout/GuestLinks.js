import React from 'react'
import { NavLink } from 'react-router-dom'

const GuestLinks = () => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/'>View Dashboard</NavLink></li>
        <li><NavLink to='/add-student'>Create Student</NavLink></li>
      </ul>
    </div>
  );
}

export default GuestLinks