import { useState, useEffect } from "react";
import * as hikeService from "./services/hikeService";
import HikeList from "./components/HikeList";
import HikeDetail from "./components/HikeDetail";
import HikeForm from "./components/HikeForm";

const App = () => {
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

  const updateSelected = (hike) => {
    setSelected(hike);
  };

  const handleFormView = () => {
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

  return (
    <>
      <HikeList
        hikeList={hikeList}
        updateSelected={updateSelected}
        handleFormView={handleFormView}
        isFormOpen={isFormOpen}
      />
      {isFormOpen ? (
        <HikeForm handleAddHike={handleAddHike} /> 
      ) : ( 
      <HikeDetail selected={selected} />
      )}
    </>
  );
};

export default App;
