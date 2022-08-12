import React, { Component } from 'react';
import { Route, Routes, Outlet, Link, NavLink } from 'react-router-dom';
import Navigation from './Navigation';

const Layout = () => {
  return (
    <div
      style={{
        boxShadow:
          'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
        // width: '600px',
      }}
    >
      <h2>Welcome to Layout!!!</h2>
      <hr />
      <Navigation />
      <hr />

      <Outlet />
    </div>
  );
};

export default Layout;
