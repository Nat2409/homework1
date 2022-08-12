import React, { Component } from 'react';
import { Route, Routes, Outlet, Link, NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>404</h1>

      <img
        src="https://seranking.com/blog/wp-content/uploads/2021/01/404_01-min.jpg"
        alt=""
      />
      <p>I think you are lost</p>
      <p>
        <Link to="">Main page</Link>
      </p>
    </div>
  );
};

export default NotFound;
