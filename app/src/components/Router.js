import React from "react";
import {Link, BrowserRouter, Route, Switch} from "react-router-dom";
import Normal from "./Regular";
import Trending from "./Trending";
import Random from "./Random";
import NotFound from "./NotFound";

const Router = () => (
    <BrowserRouter>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Normal">Normal</Link></li>
          <li><Link to="/Random">Random</Link></li>
        </ul>
        <Switch>
            <Route exact path="/" component={Trending}/>
            <Route exact path="/Normal" component={Normal}/>
            <Route exact path="/Random" component={Random}/>
            <Route exact component={NotFound}/>
        </Switch>
    </BrowserRouter>
)
export default Router;
