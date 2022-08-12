import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './components/App';
// import Home from './views/Home';

ReactDOM.render(
  <BrowserRouter>
    <App />
    {/* <Routes>
      <Route path="/" element={<App />}>
        <Route path="home" element={<Home />} />
      </Route>
    </Routes> */}
  </BrowserRouter>,
  document.querySelector('#root')
);
