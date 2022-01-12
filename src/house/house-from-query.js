import { useParams } from "react-router";
import House from ".";
import HouseContext from "../context/houseContext";
import { useContext } from "react";

const HouseFromQuery = () => {
  const { id } = useParams();
  const allHouses = useContext(HouseContext);
  const house = allHouses.find((h) => h.id === parseInt(id));

  if (!house) return <div>House not found</div>;

  return <House house={house} />;
};

export default HouseFromQuery;
