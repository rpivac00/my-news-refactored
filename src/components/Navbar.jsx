import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavbarLine from "./shared/NavbarLine";
import Home from "../pages/Home";
import General from "../pages/General";
import Business from "../pages/Business";
import Health from "../pages/Health";
import Science from "../pages/Science";
import Sports from "../pages/Sports";
import Technology from "../pages/Technology";
import Favourites from "../pages/Favourites";
import Searched from "../pages/Searched";

function Navbar() {
  return (
    <BrowserRouter>
      <NavbarLine />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/general" component={General} />
        <Route path="/business" component={Business} />
        <Route path="/health" component={Health} />
        <Route path="/science" component={Science} />
        <Route path="/sports" component={Sports} />
        <Route path="/technology" component={Technology} />
        <Route path="/favourites" component={Favourites} />
        <Route path="/search" component={Searched} />
      </Switch>
    </BrowserRouter>
  );
}

export default Navbar;
