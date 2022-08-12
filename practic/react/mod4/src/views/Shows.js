import React, { Component, useState, useEffect } from 'react';
import { Route, Routes, Outlet, useParams, Link } from 'react-router-dom';
import tvApi from '../servises/tv-api';

const shows = [
  { id: 'id-1', name: 'Show 1' },
  { id: 'id-2', name: 'Show 2' },
  { id: 'id-3', name: 'Show 3' },
  { id: 'id-4', name: 'Show 4' },
];

// export default class Shows extends Component {
//   state = {
//     shows: [],
//   };

//   componentDidMount() {
//     tvApi.fetchShowWithQuery('Cat').then(shows => this.setState({ shows }));
//   }

//   render() {

//     const { shows } = this.state;
//     console.log('shows.lenght', shows.length);
//     return (
//       <div>
//         <h1>Show view</h1>
//         {shows.length > 0 && (
//           <ul>
//             {shows.map(show => (
//               <li key={show.id}>
//                 <Link
//                   to=":showId"
//                   // onClick={() => handlerClick(show.id)}
//                 >
//                   {show.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         )}

//         <Outlet />
//       </div>
//     );
//   }
// }

const Shows = () => {
  const [shows, setShows] = useState([]);
  console.log('params', useParams());
  console.log('state', shows);
  useEffect(() => {
    tvApi.fetchShowWithQuery('Cat').then(data => setShows(data));
  }, []);
  console.log('state2', shows);
  return (
    <div>
      <h1>Show view</h1>
      <ul>
        {shows &&
          shows.map(show => (
            <li key={show.id}>
              <Link to={`${show.id}`}>{show.name}</Link>
            </li>
          ))}
      </ul>
      <Outlet />
    </div>
  );
};

export default Shows;
