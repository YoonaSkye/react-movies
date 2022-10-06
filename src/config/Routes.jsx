import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Detail from "../pages/Detail";

const Routes = () => {
  return (
    <Switch>
      <Route path="/:category/search/:keyword">
        <Catalog />
      </Route>
      <Route path="/:category/:id">
        <Detail />
      </Route>
      <Route path="/:category">
        <Catalog />
      </Route>
      <Route path="/" exact>
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
