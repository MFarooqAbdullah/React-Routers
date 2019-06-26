import React from "react"
import { Route, Switch } from "react-router-dom"
import { Homepage, Dog, Cat } from "./components"
import { Link } from 'react-router-dom';
import { NotFound } from "./notFound";
const Routes = () => {
    return <div>
        <Link to="/">Homepage</Link> {/*...etc*/}
        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/dog" component={Dog} />
            <Route path="/cat" component={Cat} />
            <Route component={NotFound} />
        </Switch>
    </div>
}

export default Routes