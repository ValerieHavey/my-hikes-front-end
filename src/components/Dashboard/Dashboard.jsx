import HikeList from "../HikeList";
import HikeDetail from "../HikeDetail";
import HikeForm from "../HikeForm";
import { useState, useEffect, useMemo } from "react";
import * as hikeService from "../../services/hikeService";
import * as gearService from "../../services/gearService";


const Dashboard = ({ user }) => {
  const [hikeList, setHikeList] = useState([]);
  const [selected, setSelected] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    const fetchHikes = async () => {
      try {
        const hikes = await hikeService.index();
        if (hikes.error) {
          throw new Error(hikes.error);
        }
        setHikeList(hikes);
      } catch (error) {
        console.log(error);
      }
    };
    fetchHikes();
  }, []);
  
  const handleAddGear = async (gearData) => {
    const addedGear = await hikeService.addGear(gearData, selected)
    setHikeList((prev) => {
      return prev.map((hike) => {
        if (hike._id !== selected) {
          return hike
        }
        return {
          ...hike,
          gears:[...hike.gears, addedGear]
        }
      })
    })
  }

  const handleUpdateGear = async (gearData, gearId) => {
    const updatedGear = await gearService.updateGear(gearData, gearId)
    setHikeList((prev) => {
      return prev.map((hike) => {
        if (hike._id !== updatedGear.hike) {
          console.log('Not ', hike._id);
          return hike
        } 
        console.log('yes', hike._id);
        console.log(hike.gears, gearId)
        return {
          ...hike,
          gears:hike.gears.map((gear) => {
            return gear._id === gearId ? updatedGear : gear
          })
        }
      })
    })
  }

  const handleRemoveGear = async (gearId) => {
    try {
      const deletedGear = await gearService.deleteGear(gearId);
      if (deletedGear.error) {
        throw new Error(deletedGear.error);
      }
      setHikeList((prev) => {
        return prev.map((hike) => {
          if (hike._id !== deletedGear.hike) {
            return hike
          } 
          return {
            ...hike,
            gears:hike.gears.filter((gear) => {
              return gear._id !== deletedGear._id
            })
          }
        })
      })
    } catch (error) {
      console.log(error);
    }
  };

  const updateSelected = (hike) => {
    setSelected(hike._id);
  };
  const selectedHike = useMemo(() => {
    return hikeList.find((hike) => {
      return hike._id === selected
    })
  }, [hikeList, selected])
  const handleFormView = (hike) => {
    if (!hike.name) setSelected(null);
    setIsFormOpen(!isFormOpen);
  };

  const handleAddHike = async (formData) => {
    try {
      const newHike = await hikeService.create(formData);

      if (newHike.error) {
        throw new Error(newHike.error);
      }

      setHikeList([{...newHike, gears:[]}, ...hikeList]);
      setIsFormOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateHike = async (formData, hikeId) => {
    try {
      const updateHike = await hikeService.updateHike(formData, hikeId);
      if (updateHike.error) {
        throw new Error(updateHike.error);
      }

      setHikeList((prev) => { 
        return prev.map((hike) =>
          hike._id !== updateHike._id ? hike : {
            ...updateHike,
            gears:hike.gears,
          } 
        );
      });
      setIsFormOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoveHike = async (hikeId) => {
    try {
      const deletedHike = await hikeService.deleteHike(hikeId);

      if (deletedHike.error) {
        throw new Error(deletedHike.error);
      }

      setHikeList((prev)=> prev.filter((hike) => hike._id !== deletedHike._id));
      setSelected(null);
      setIsFormOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <h1>Welcome, {user.username}</h1>
      <HikeList
        hikeList={hikeList}
        updateSelected={updateSelected}
        handleFormView={handleFormView}
        isFormOpen={isFormOpen}
      />
      {isFormOpen ? (
        <HikeForm
          handleAddHike={handleAddHike}
          selected={selectedHike}
          handleUpdateHike={handleUpdateHike}
        />
      ) : (
        <HikeDetail
          selected={selectedHike}
          handleFormView={handleFormView}
          handleRemoveHike={handleRemoveHike}
          onAddGear={handleAddGear}
          onUpdateGear={handleUpdateGear}
          onRemoveGear={handleRemoveGear}
        />
      )}
    </main>
  );
};

export default Dashboard;
