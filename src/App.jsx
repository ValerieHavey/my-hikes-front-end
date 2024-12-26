import { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import * as hikeService from "./services/hikeService";
import HikeList from "./components/HikeList";
import HikeDetail from "./components/HikeDetail";
import HikeForm from "./components/HikeForm";

const App = () => {
  const [hikeList, setHikeList] = useState([]);
  const [selected, setSelected] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [user, setUser] = useState(null);

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

  const updateSelected = (hike) => {
    setSelected(hike);
  };

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

      setHikeList([newHike, ...hikeList]);
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

      const updatedHikeList = hikeList.map((hike) =>
        hike._id !== updateHike._id ? hike : updateHike
      );
      setHikeList(updatedHikeList);
      setSelected(updateHike);
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

      setHikeList(hikeList.filter((hike) => hike._id !== deletedHike._id));
      setSelected(null);
      setIsFormOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <NavBar user={user} />
    <Routes>
      {user ? (
        <Route path='/' element={<Dashboard user={user} />} />
      ) : (
        <Route path='/' element={<Landing />} />
      )}
    </Routes>
      <HikeList
        hikeList={hikeList}
        updateSelected={updateSelected}
        handleFormView={handleFormView}
        isFormOpen={isFormOpen}
      />
      {isFormOpen ? (
        <HikeForm handleAddHike={handleAddHike} selected={selected} handleUpdateHike={handleUpdateHike} />
      ) : (
        <HikeDetail selected={selected} handleFormView={handleFormView} handleRemoveHike={handleRemoveHike} />
      )}
    </>
  );
};

export default App;
