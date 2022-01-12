import { useState, useEffect } from "react";

const useHouses = () => {
  const [allHouses, setAllHouses] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      const rsp = await fetch("./houses.json");
      const houses = await rsp.json();
      setAllHouses(houses);
    };
    fetchHouses();
  }, []);

  // spcifies what functions is called when the values in the array (2nd param) change
  // since we are passing an empty array, it will be loaded only once

  return allHouses;
};

export default useHouses;
