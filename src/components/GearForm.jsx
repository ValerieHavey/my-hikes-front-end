import { useState } from "react";

const GearForm = (props) => {
  const initialState = {
    name: "",
    category: "",
    brand: "",
    notes: "",
  };
  const [formData, setFormData] = useState(
    props.selected ? props.selected : initialState
  );

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmitForm = (evt) => {
    evt.preventDefault();
    if (props.selected) {
      props.onUpdateGear(formData, props.selected._id);
    } else {
      props.onAddGear(formData);
    }
  };

  return (
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
      <select
        id="category"
        name="category"
        value={formData.category}
        onChange={handleChange}
        required
      >
        <option value=""> Select a category </option>
        <option>Clothing</option>
        <option>Shoes</option>
        <option>Backpack</option>
        <option>Trekking Poles</option>
        <option>GPS</option>
      </select>
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
      <button type="submit">
        {props.selected ? "Update Gear" : "Add New Gear"}
      </button>
    </form>
  );
};

export default GearForm;
