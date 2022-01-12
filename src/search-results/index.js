import SearchResultRow from "./search-results-row";
import "./search-results.css";
import { useParams } from "react-router";
import HouseContext from "../context/houseContext";

import { useContext } from "react";

const SearchResults = ( ) => {
  const { country } = useParams();
  const allHouses = useContext(HouseContext);
  
  const filteredHouses = allHouses.filter((h) => h.country === country);

  return (
    <div>
      <div className="mt-2">Results for {country}: </div>
      <table className="table table-hover">
        <tbody>
          {filteredHouses.map((h) => (
            <SearchResultRow key={h.id} house={h} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
