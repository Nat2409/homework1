import React from 'react';
import { Route, Routes, Outlet, Link, NavLink } from 'react-router-dom';

const navStyle = {
  boxShadow:
    'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
  width: '150px',
};
let activeStyle = {
  textDecoration: 'underline',
  color: 'teal',
  textDecoration: 'none',
};

let activeClassName = 'teal';

const Navigation = () => {
  return (
    <ul style={navStyle}>
      {/* <li>
        <NavLink
          to="message"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Message
        </NavLink>
      </li>
      <li>
        <NavLink
          to="tasks"
          className={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Tasks
        </NavLink>
      </li> */}
      {/* <li>
        <NavLink to="tasks">
          {({ isActive }) => (
            <span className={isActive ? activeClassName : undefined}>
              Tasks
            </span>
          )}
        </NavLink>
      </li> */}
      {/* <li>
        <Link to="details">ShowDetails</Link>
      </li> */}
      <li>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="about"
        >
          Shows
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to=""
        >
          Home
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
