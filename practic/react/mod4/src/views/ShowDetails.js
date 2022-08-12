import React, { Component, useState, useEffect } from 'react';
import { Route, Routes, Outlet, useParams } from 'react-router-dom';
import tvApi from '../servises/tv-api';

// let { showId } = useParams();
// export default class ShowDetails extends Component {
//   state = {
//     show: null,
//   };

//   componentDidMount() {
//     console.log('this show details', this);
//     tvApi.fetchShowDetails('23024').then(show => this.setState({ show }));
//   }

//   render() {
//     const { show } = this.state;
//     console.log('show', show);
//     return (
//       show && (
//         <>
//           <h1>Show Details! </h1>

//           <Outlet />
//         </>
//       )
//     );
//   }
// }
const ShowDetails = () => {
  const { showId } = useParams();
  console.log('showId', showId);
  const [show, setShow] = useState(null);
  console.log('show', show);
  useEffect(() => {
    tvApi.fetchShowDetails(showId).then(show => setShow(show));
  }, [showId]);
  return (
    show && (
      <div>
        <h1>Show Details! {showId}</h1>
        <img src={show.image.medium} />
        <p>{show.name}</p>
        <p>{show.genres}</p>
        {/* <Outlet /> */}
      </div>
    )
  );
};

export default ShowDetails;
