import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";

import HomeBody from "./HomeBody";
import ClientBody from "./ClientBody";

class Body extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path="/" component={HomeBody}/>
                    <Route path="/clients" component={ClientBody}/>
                </Switch>
            </main>
        );
    }
}

export default Body;