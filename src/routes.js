import React from "react";
import { Route } from "react-router-dom";
import Hoc from "./hoc/hoc";

import Login from "./containers/Login";
import Signup from "./containers/Signup";
import HomepageLayout from "./containers/Home";
import BlockLayout from "./containers/Block";
import MarcaLayout from "./containers/Marca";
import ProveedorLayout from "./containers/Proveedor";
import TiempoLayout from "./containers/Tiempo";

const BaseRouter = () => (
  <Hoc>
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route exact path="/" component={HomepageLayout} />
    <Route exact path="/block" component={BlockLayout} />
    <Route exact path="/marca" component={MarcaLayout} />
    <Route exact path="/proveedor" component={ProveedorLayout} />
    <Route exact path="/tiempo" component={TiempoLayout} />
  </Hoc>
);

export default BaseRouter;
