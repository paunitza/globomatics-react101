import "./main-page.css";
import Header from "./header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FeaturedHouse from "./featured-house";
import SearchResults from "../search-results";
import HouseFilter from "./house-filter";
import HouseFromQuery from "../house/house-from-query";
import useHouses from "../hooks/useHouses";
import useFeaturedHouse from "../hooks/useFeaturedHouse";
import HouseContext from "../context/houseContext";

function App() {
  const allHouses = useHouses();
  const featuredHouse = useFeaturedHouse(allHouses);

  // the render function will be called each time the state/props change
  return (
    <Router>
      <HouseContext.Provider value={allHouses}>
      <div className="container">
        <Header subtitle="Providing props all over the globe" />
        <HouseFilter/>

        <Switch>
          <Route path="/searchresults/:country">
            <SearchResults/>
          </Route>
          <Route path="/house/:id">
            <HouseFromQuery/>
          </Route>
          <Route path="/">
            <FeaturedHouse house={featuredHouse} />
          </Route>
        </Switch>
      </div>
      </HouseContext.Provider>
    </Router>
  );
}

export default App;
