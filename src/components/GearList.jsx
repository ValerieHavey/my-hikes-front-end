import { useState } from "react";

const GearList = (props) => {
  const initialState = {
    name: "",
    category: "",
    brand: "",
    notes: ""
  }
  const [formData, setFormData] = useState(props.selected ? props.selected : initialState)

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmitForm = (evt) => {
    evt.preventDefault();
    if (props.selected) {
      props.handleUpdateGearList(formData, props.selected._id);
    } else {
      props.handleAddGear(formData);
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
        <label htmlFor="category"> Category </label>
        <input
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        />
        <label htmlFor="brand"> Brand </label>
        <input
          id="brand"
          name="brand"
          value={formData.brand}
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
        <button type="sumbit"> {props.selected ? 'Update Gear' : 'Add New Gear'} </button>
      </form>
    </div>
  );
};

export default GearList;
