import { useState, useMemo } from "react";
import GearForm from "./GearForm";

const GearList = (props) => {
  const [selected, setSelected] = useState(null);
  const selectedGear = useMemo(() => {
    return props.gearList.find((gear) => {
      return gear._id === selected;
    });
  }, [props.gearList, selected]);
  const handleUpdateGear= (...args) => {
    props.onUpdateGear(...args)
    setSelected(null);
  }
  const handleRemoveGear = () => {
    props.onRemoveGear(selected)
    setSelected(null);
  }

  return (
    <div>
      <ul>
        {props.gearList.map((gear) => {
          return (
            <li onClick={() => setSelected(gear._id)} key={gear._id}>
              {gear.name} - {gear.category} - {gear.brand} -{" "}
              {gear.notes || "No notes"}
            </li>
          );
        })}
      </ul>
      {selectedGear ? (
        <>
        <GearForm
          key={"update-gear-" + selected}
          onUpdateGear={handleUpdateGear}
          selected={selectedGear}
        />
        <button onClick={handleRemoveGear}>Delete Gear</button>
        </>
      ) : (
        <GearForm key="add-gear" onAddGear={props.onAddGear} />
      )}
    </div>
  );
};

export default GearList;
