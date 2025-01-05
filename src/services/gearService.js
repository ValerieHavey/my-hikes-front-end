const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/gears`;

const updateGear = async (gearData, gearId) => {
  try {
    const res = await fetch(`${BASE_URL}/${gearId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(gearData),
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};


const deleteGear = async (gearId) => {
  try {
    const deleteGear = await fetch(`${BASE_URL}/${gearId}`, {
      method: "DELETE",
    });
    return deleteGear.json();
  } catch (err) {
    console.log(err);
  }
};
export {updateGear, deleteGear };