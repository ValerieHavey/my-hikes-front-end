import PropTypes from "prop-types";
import { useState } from "react";
import GearList from "./GearList";


const HikeDetail = (props) => {
  const [gearListOpen, setGearListOpen] = useState(false);
  const handleToggleGearList = () => {
    setGearListOpen ((prev) => {
      return !prev
    })
  } 
  
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
      <button onClick={() => handleToggleGearList()}>View Gear</button>
    </div>
    {gearListOpen && <GearList onAddGear={props.onAddGear} gearList={props.selected.gears} onUpdateGear={props.onUpdateGear} onRemoveGear={props.onRemoveGear} />}
    </div>
  );
};

export default HikeDetail;

HikeDetail.propTypes = {
    selected:PropTypes.shape({
        
    })
}