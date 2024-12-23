// import { Link } from 'react-router-dom';

const HikeList = (props) => {
  const hikes = props.hikeList.map((hike) => (
    <a key={hike._id} onClick={() => props.updateSelected(hike)}>
    <li>{hike.name}</li>
    </a>
  ));

  return (
    <div>
        <h1>Hike List</h1>
        {!props.hikeList.length ? <h2>No Hikes Yet!</h2> : <ul>{hikes}</ul>}
        <button onClick={props.handleFormView}>
    {props.isFormOpen ? 'Close Form' : 'New Hike'}
  </button>
    </div>
  );
};

export default HikeList;
