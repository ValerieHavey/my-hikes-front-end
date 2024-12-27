import PropTypes from "prop-types";

const HikeDetail = (props) => {
  if (!props.selected)
    return (
      <div>
        <h3>Select a hike to show details</h3>
      </div>
    );
  return (
    <div>
      <h2>{props.selected.name}</h2>
      <h3>Trailhead location: {props.selected.location}</h3>
      <h3>
        Length: {props.selected.length} mile
        {props.selected.length > 1 ? "s" : ""}
      </h3>
      <h3>
        Time to complete: {props.selected.time} hour(s)
      </h3>

      <div className="button-container">
      <button onClick={() => props.handleFormView(props.selected)}>Edit</button>
      <button onClick={() => props.handleRemoveHike(props.selected._id)}>
        Delete
      </button>
    </div>
    </div>
  );
};

export default HikeDetail;

HikeDetail.propTypes = {
    selected:PropTypes.shape({
        
    })
}