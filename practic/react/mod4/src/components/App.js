import React, { Component } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Layout from './Layout';
import Home from '../views/Home';
import NotFound from '../views/NotFound';
import ShowDetails from '../views/ShowDetails';
import Shows from '../views/Shows';
import Tasks from '../views/Tasks';
import Message from '../views/Message';
import routes from '../routes';

const App = () => {
  // console.log(Route.Provider);
  return (
    <div>
      <h2>App</h2>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="about" element={<Shows />}>
            <Route path=":showId" element={<ShowDetails />} />
          </Route>
          {/* <Route path="tasks" element={<Tasks />} />
          <Route path="message" element={<Message />} /> */}
          <Route path="*" element={<NotFound />} />
          {/* <Link to="about" element={<Shows />} /> */}
        </Route>
      </Routes>
    </div>
  );
};

export default App;

// export default class App extends Component {
//   state = {};
//   render() {
//     return;
//   }
// }
