import { useMemo } from "react";

const useFeaturedHouse = (allHouses) => {
   // we need to pick one featured house and make sure that the same one is shown each time
   const featuredHouse = useMemo(() => {
    if (allHouses.length) {
      const randomIndex = Math.floor(Math.random(allHouses.length));
      return allHouses[randomIndex];
    }
  }, [allHouses]);

  return featuredHouse;
};

export default useFeaturedHouse;
