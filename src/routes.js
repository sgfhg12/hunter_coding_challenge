import React, { Component } from 'react'; 
import { Route, Switch } from 'react-router-dom';
import {
    Home,
    Pizza
} from './components';

/*
routes file with dynamic routing per pizza
*/

class Routes extends Component {
    render(){
        return(
            <Switch>
                <Route exact path="/" component={Home} />,
                <Route exact path="/pizza/:pizza" component={Pizza} />
            </Switch>
        )
    }
}

export default Routes;  