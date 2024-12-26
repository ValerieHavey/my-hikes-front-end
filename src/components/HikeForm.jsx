import { useState } from "react";

const HikeForm = (props) => {
  const initialState = {
    name: "",
    location: "",
    length: "",
    time: "",
    notes: ""
  }
  const [formData, setFormData] = useState(props.selected ? props.selected : initialState)

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmitForm = (evt) => {
    evt.preventDefault();
    if (props.selected) {
      props.handleUpdateHike(formData, props.selected._id);
    } else {
      props.handleAddHike(formData);
    }
  };
 

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <label htmlFor="name"> Name </label>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="location"> Location </label>
        <input
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <label htmlFor="length"> Length in Miles </label>
        <input
          id="length"
          name="length"
          value={formData.length}
          onChange={handleChange}
          required
        />
        <label htmlFor="time"> Time to Complete </label>
        <input
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
        <label htmlFor="notes"> Notes </label>
        <input
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
        />
        <button type="sumbit"> {props.selected ? 'Update Hike' : 'Add New Hike'} </button>
      </form>
    </div>
  );
};

export default HikeForm;
