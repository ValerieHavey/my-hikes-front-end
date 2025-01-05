const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/hikes`;

const index = async () => {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch(BASE_URL, {
        headers:{
            Authorization: `Bearer ${token}`,
        }
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

const create = async (formData) => {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

const updateHike = async (formData, hikeId) => {
  try {
    console.log(hikeId);
    const res = await fetch(`${BASE_URL}/${hikeId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

const deleteHike = async (hikeId) => {
  try {
    const deleteHike = await fetch(`${BASE_URL}/${hikeId}`, {
      method: "DELETE",
    });
    return deleteHike.json();
  } catch (err) {
    console.log(err);
  }
};

const addGear = async(gearData, hikeId) => {
  try {
    const addedGear = await fetch(`${BASE_URL}/${hikeId}/gears`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(gearData),
    });
    return addedGear.json();
  } catch (err) {
    console.log(err);
  }
};

export { index, create, updateHike, deleteHike, addGear };
